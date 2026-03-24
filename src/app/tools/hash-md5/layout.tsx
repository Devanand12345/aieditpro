import type { Metadata } from "next";
import HashMD5Client from "./page";

export const metadata: Metadata = {
  title: "MD5 Hash Generator - Create MD5 Hash Online Free",
  description: "Free MD5 hash generator. Create MD5 checksums for text and files. Verify file integrity, generate passwords, and create checksums instantly.",
  keywords: ["md5 hash", "md5 generator", "md5 checksum", "md5 converter", "md5 hash generator", "generate md5", "md5 online", "md5 tool", "md5 hash tool", "create md5", "md5 checksum calculator", "md5 hash generator online", "free md5 generator", "text to md5", "file md5"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/hash-md5" },
};

export default function HashMD5() {
  return <HashMD5Client />;
}
