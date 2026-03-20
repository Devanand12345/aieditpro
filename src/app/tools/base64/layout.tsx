import type { Metadata } from "next";
import Base64Page from "./page";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Base64 Encoder/Decoder - Free Online Tool",
  description: "Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 to text instantly. No registration required.",
  keywords: ["base64 encoder", "base64 decoder", "base64 converter", "encode base64", "decode base64", "base64 online", "free base64", "text to base64", "base64 to text", "online base64 encoder"].join(", "),
  alternates: {
    canonical: "https://aieditpro.net/tools/base64",
  },
};

export default function Base64() {
  return (
    <>
      <ToolSchema
        name="Base64 Encoder/Decoder"
        description="Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 to text instantly."
        url="https://aieditpro.net/tools/base64"
      />
      <Base64Page />
    </>
  );
}
