import type { Metadata } from "next";
import HashPage from "./page";

export const metadata: Metadata = {
  title: "Hash Generator - MD5, SHA1, SHA256, SHA512 Free Online",
  description: "Free online hash generator. Generate MD5, SHA1, SHA256, SHA512, and other hash values from text or files. Secure and fast.",
  keywords: ["hash generator", "md5 hash", "sha1 hash", "sha256 hash", "sha512 hash", "hash checksum", "password hash", "hash generator online", "free hash generator", "hash tool"].join(", "),
};

export default function Hash() {
  return <HashPage />;
}
