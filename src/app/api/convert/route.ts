import { NextResponse } from "next/server";

const GOTENBERG_URL = process.env.GOTENBERG_URL || "http://localhost:3002";

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

// Formats Gotenberg Chromium handles better (HTML/URL → PDF)
const CHROMIUM_HTML_SOURCES = ["html", "htm"];

function getGotenbergRoute(sourceExt: string, target: string): string {
  if (CHROMIUM_HTML_SOURCES.includes(sourceExt) && target === "pdf") {
    return `${GOTENBERG_URL}/forms/chromium/convert/html`;
  }
  return `${GOTENBERG_URL}/forms/libreoffice/convert`;
}

export async function POST(req: Request) {
  try {
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
    const route = getGotenbergRoute(sourceExt, target);

    const form = new FormData();
    const sourceExt_lower = sourceExt.toLowerCase();
    
    // Gotenberg's Chromium HTML endpoint expects "index.html" as field name
    if (CHROMIUM_HTML_SOURCES.includes(sourceExt_lower) && target === "pdf") {
      form.append("files", new Blob([buffer], { type: file.type || "text/html" }), "index.html");
    } else {
      // LibreOffice endpoint expects "files" field
      form.append("files", new Blob([buffer], { type: file.type || "application/octet-stream" }), file.name);
    }

    console.log(`Converting ${file.name} (${sourceExt}) to ${target}`);
    console.log(`Using route: ${route}`);

    let gotenbergRes: Response;
    try {
      gotenbergRes = await fetch(route, {
        method: "POST",
        headers: {
          "Gotenberg-Output-Filename": outputFilename,
        },
        body: form,
      });
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "Unknown error";
      console.error("Fetch error:", errMsg);
      return new NextResponse(
        JSON.stringify({ error: "Conversion service unavailable. Make sure Gotenberg is running." }),
        { status: 503, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!gotenbergRes.ok) {
      const errText = await gotenbergRes.text().catch(() => "Unknown error");
      console.error("Gotenberg error:", gotenbergRes.status, errText);
      return new NextResponse(
        JSON.stringify({ error: `Conversion failed: ${errText}` }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const converted = await gotenbergRes.arrayBuffer();

    return new NextResponse(converted, {
      headers: {
        "Content-Type": CONTENT_TYPES[target] || "application/octet-stream",
        "Content-Disposition": `attachment; filename="${outputFilename}"`,
      },
    });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : "Unknown error";
    console.error("Route error:", errMsg, err);
    return new NextResponse(
      JSON.stringify({ error: `Server error: ${errMsg}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
