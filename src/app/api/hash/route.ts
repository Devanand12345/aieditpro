import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return new NextResponse(JSON.stringify({ error: "Missing or invalid text" }), { status: 400, headers: { "Content-Type": "application/json" } });
    }

    const hashes = {
      md5: crypto.createHash("md5").update(text).digest("hex"),
      sha1: crypto.createHash("sha1").update(text).digest("hex"),
      sha256: crypto.createHash("sha256").update(text).digest("hex"),
      sha512: crypto.createHash("sha512").update(text).digest("hex"),
    };

    return new NextResponse(JSON.stringify(hashes), { headers: { "Content-Type": "application/json" } });
  } catch (err) {
    return new NextResponse(JSON.stringify({ error: err instanceof Error ? err.message : "Error generating hashes" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
