import type { Metadata } from "next";
import Base64Page from "./page";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder - Free Online Tool",
  description: "Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 to text instantly. No registration required.",
  keywords: ["base64 encoder", "base64 decoder", "base64 converter", "encode base64", "decode base64", "base64 online", "free base64", "text to base64", "base64 to text", "online base64 encoder"].join(", "),
};

export default function Base64() {
  return <Base64Page />;
}
