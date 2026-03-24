import type { Metadata } from "next";
import BinaryConverterClient from "./page";

export const metadata: Metadata = {
  title: "Binary to Text Converter - Encode Decode Binary Online Free",
  description: "Free binary to text converter. Encode text to binary and decode binary to text instantly. Supports ASCII, UTF-8, and Unicode. Perfect for programmers and students.",
  keywords: ["binary to text", "text to binary", "binary converter", "binary decoder", "binary encoder", "binary translator", "binary code", "ASCII binary", "binary to ASCII", "binary to string", "binary converter online", "decode binary", "encode binary", "binary translation", "computer binary"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/binary-converter" },
};

export default function BinaryConverter() {
  return <BinaryConverterClient />;
}
