import type { Metadata } from "next";
import UrlEncodePage from "./page";

export const metadata: Metadata = {
  title: "URL Encoder/Decoder - Encode URLs Online Free",
  description: "Free online URL encoder and decoder. Encode special characters for URLs or decode encoded URLs. URL safe encoding and decoding.",
  keywords: ["url encoder", "url decoder", "encode url", "decode url", "url encode", "url decode", "url encode online", "percent encoding", "uri encoder", "free url encoder"].join(", "),
};

export default function UrlEncode() {
  return <UrlEncodePage />;
}
