import { NextResponse } from "next/server";

const CLOUDCONVERT_API_KEY = process.env.CLOUDCONVERT_API_KEY;
const CLOUDCONVERT_API_URL = "https://api.cloudconvert.com/v2";

const CONTENT_TYPES: Record<string, string> = {
  pdf:  "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  txt:  "text/plain",
  html: "text/html",
  rtf:  "application/rtf",
  epub: "application/epub+zip",
};

// Map of file extensions to CloudConvert format names
const FORMAT_MAP: Record<string, string> = {
  pdf: "pdf",
  docx: "docx",
  xlsx: "xlsx",
  pptx: "pptx",
  txt: "txt",
  html: "html",
  rtf: "rtf",
  epub: "epub",
};

export async function POST(req: Request) {
  try {
    if (!CLOUDCONVERT_API_KEY) {
      return new NextResponse(
        JSON.stringify({ error: "Conversion service not configured. Please add CLOUDCONVERT_API_KEY to environment variables." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await req.formData();
    const file = data.get("file") as File;
    const target = data.get("target") as string;

    if (!file || !target) {
      return new NextResponse(JSON.stringify({ error: "Missing file or target" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    if (!CONTENT_TYPES[target]) {
      return new NextResponse(JSON.stringify({ error: "Unsupported target format" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const baseName = file.name.replace(/\.[^/.]+$/, "");
    const sourceExt = (file.name.split(".").pop() || "").toLowerCase();
    const outputFilename = `${baseName}.${target}`;

    if (!FORMAT_MAP[sourceExt] || !FORMAT_MAP[target]) {
      return new NextResponse(JSON.stringify({ error: "Unsupported file format" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    console.log(`Converting ${file.name} (${sourceExt}) to ${target}`);

    // Step 1: Create conversion task
    const createTaskResponse = await fetch(`${CLOUDCONVERT_API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CLOUDCONVERT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        operation: "convert",
        input: "import",
        input_format: FORMAT_MAP[sourceExt],
        output_format: FORMAT_MAP[target],
      }),
    });

    if (!createTaskResponse.ok) {
      const errText = await createTaskResponse.text();
      console.error("CloudConvert create task error:", errText);
      return new NextResponse(
        JSON.stringify({ error: "Failed to create conversion task" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const taskData = await createTaskResponse.json();
    const task = taskData.data;

    if (!task || !task.id) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid task response" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Step 2: Upload file to the task
    const fileFormData = new FormData();
    fileFormData.append("file", new Blob([buffer], { type: file.type || "application/octet-stream" }), file.name);

    const uploadUrl = `${CLOUDCONVERT_API_URL}/tasks/${task.id}/files`;
    const uploadResponse = await fetch(uploadUrl, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CLOUDCONVERT_API_KEY}`,
      },
      body: fileFormData,
    });

    if (!uploadResponse.ok) {
      const errText = await uploadResponse.text();
      console.error("CloudConvert upload error:", errText);
      return new NextResponse(
        JSON.stringify({ error: "Failed to upload file" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Step 3: Wait for conversion to complete
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds timeout
    let taskStatus = "waiting";

    while (attempts < maxAttempts && taskStatus !== "finished" && taskStatus !== "error") {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second

      const statusResponse = await fetch(`${CLOUDCONVERT_API_URL}/tasks/${task.id}`, {
        headers: {
          "Authorization": `Bearer ${CLOUDCONVERT_API_KEY}`,
        },
      });

      if (statusResponse.ok) {
        const statusData = await statusResponse.json();
        taskStatus = statusData.data.status;
        console.log(`Task status: ${taskStatus}`);

        if (taskStatus === "error") {
          console.error("CloudConvert task error:", statusData.data);
          return new NextResponse(
            JSON.stringify({ error: "Conversion failed" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }

        if (taskStatus === "finished" && statusData.data.result && statusData.data.result.files && statusData.data.result.files.length > 0) {
          const fileUrl = statusData.data.result.files[0];

          // Step 4: Download the converted file
          const downloadResponse = await fetch(fileUrl);
          if (!downloadResponse.ok) {
            return new NextResponse(
              JSON.stringify({ error: "Failed to download converted file" }),
              { status: 500, headers: { "Content-Type": "application/json" } }
            );
          }

          const convertedBuffer = await downloadResponse.arrayBuffer();

          return new NextResponse(convertedBuffer, {
            headers: {
              "Content-Type": CONTENT_TYPES[target] || "application/octet-stream",
              "Content-Disposition": `attachment; filename="${outputFilename}"`,
            },
          });
        }
      }

      attempts++;
    }

    // Timeout
    return new NextResponse(
      JSON.stringify({ error: "Conversion timeout. Please try again." }),
      { status: 504, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    const errMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("Route error:", errMsg, err);
    return new NextResponse(
      JSON.stringify({ error: `Server error: ${errMsg}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}