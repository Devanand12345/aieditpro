import type { Metadata } from "next";
import HtmlEncoderClient from "./page";

export const metadata: Metadata = {
  title: "HTML Encoder/Decoder - Encode HTML Entities Online Free",
  description: "Free online HTML encoder and decoder. Encode special characters to HTML entities or decode HTML entities back to text. Essential for web development.",
  keywords: ["html encoder", "html decoder", "html entity encoder", "html entity decoder", "encode html", "decode html", "escape html", "unescape html", "html special characters", "html entities", "free html encoder", "online html encoder"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/html-encoder" },
};

export default function HtmlEncoder() {
  return <HtmlEncoderClient />;
}
