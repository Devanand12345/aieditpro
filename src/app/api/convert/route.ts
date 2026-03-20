import { NextResponse } from "next/server";

const CLOUDCONVERT_API_KEY = process.env.CLOUDCONVERT_API_KEY;
const CLOUDCONVERT_API_URL = "https://api.cloudconvert.com/v2";

const CONTENT_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  txt: "text/plain",
  html: "text/html",
  rtf: "application/rtf",
  epub: "application/epub+zip",
};

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
        JSON.stringify({ error: "Conversion service not configured." }),
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
      return new NextResponse(JSON.stringify({ error: "Unsupported source file format" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    // Create a job with CloudConvert v2 API
    const jobResponse = await fetch(`${CLOUDCONVERT_API_URL}/jobs`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${CLOUDCONVERT_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tasks: {
          import_file: {
            operation: "import/upload",
          },
          convert_file: {
            operation: "convert",
            input: ["import_file"],
            input_format: FORMAT_MAP[sourceExt],
            output_format: FORMAT_MAP[target],
          },
          export_file: {
            operation: "export/url",
            input: ["convert_file"],
            inline: false,
            archive: false,
          },
        },
      }),
    });

    if (!jobResponse.ok) {
      const errorData = await jobResponse.json().catch(() => ({}));
      console.error("CloudConvert job error:", jobResponse.status, errorData);
      return new NextResponse(
        JSON.stringify({ error: "Failed to create conversion job" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const jobData = await jobResponse.json();
    const job = jobData.data;

    if (!job || !job.id) {
      return new NextResponse(
        JSON.stringify({ error: "Invalid job response" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Get the upload URL from the import task
    const importTask = job.tasks.find((t: any) => t.name === "import_file");
    if (!importTask || !importTask.result || !importTask.result.form) {
      return new NextResponse(
        JSON.stringify({ error: "Failed to get upload URL" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const uploadForm = importTask.result.form;
    const uploadUrl = uploadForm.url;

    // Upload the file
    const uploadFormData = new FormData();
    for (const [key, value] of Object.entries(uploadForm.parameters || {})) {
      uploadFormData.append(key, value as string);
    }
    uploadFormData.append("file", new Blob([buffer], { type: file.type || "application/octet-stream" }), file.name);

    const uploadResponse = await fetch(uploadUrl, {
      method: "POST",
      body: uploadFormData,
    });

    if (!uploadResponse.ok) {
      console.error("CloudConvert upload error:", uploadResponse.status);
      return new NextResponse(
        JSON.stringify({ error: "Failed to upload file" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Wait for job to complete
    let attempts = 0;
    const maxAttempts = 60;

    while (attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 2000));

      const statusResponse = await fetch(`${CLOUDCONVERT_API_URL}/jobs/${job.id}`, {
        headers: {
          "Authorization": `Bearer ${CLOUDCONVERT_API_KEY}`,
        },
      });

      if (statusResponse.ok) {
        const statusData = await statusResponse.json();
        const currentJob = statusData.data;

        if (currentJob.status === "finished") {
          const exportTask = currentJob.tasks.find((t: any) => t.name === "export_file");
          if (exportTask && exportTask.result && exportTask.result.files && exportTask.result.files.length > 0) {
            const fileUrl = exportTask.result.files[0].url;

            // Download the converted file
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

        if (currentJob.status === "error") {
          console.error("CloudConvert job error:", currentJob.tasks);
          return new NextResponse(
            JSON.stringify({ error: "Conversion failed. Please try again." }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      }

      attempts++;
    }

    return new NextResponse(
      JSON.stringify({ error: "Conversion timeout. Please try again." }),
      { status: 504, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    const errMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("Route error:", errMsg);
    return new NextResponse(
      JSON.stringify({ error: `Server error: ${errMsg}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
