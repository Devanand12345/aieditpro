import type { Metadata } from "next";
import ImageCompressorClient from "./page";

export const metadata: Metadata = {
  title: "Image Compressor - Reduce Image File Size Online Free",
  description: "Free online image compressor. Reduce image file size without losing quality. Compress JPG, PNG, WebP images. Fast, secure, and works in your browser.",
  keywords: [
    "image compressor",
    "compress image",
    "reduce image size",
    "image optimizer",
    "photo compressor",
    "PNG compressor",
    "JPG compressor",
    "WebP compressor",
    "free image compressor",
    "online image compressor",
    "compress pictures",
    "shrink image",
    "image size reducer",
    "compress photos online",
    "reduce photo size",
    "image compression tool",
    "compress JPEG",
    "compress PNG",
    "compress images free",
    "batch image compressor",
    "image optimizer online",
    "best image compressor",
    "lightroom compression",
    "compress image for web",
    "compress image for email",
    "compress image for social media",
    "image file size reducer",
    "picture compressor free",
    "resize image",
    "reduce file size",
    "optimize image",
    "image quality reducer",
    "compress 100 images",
    "bulk image compression",
    "lossy compression",
    "lossless compression",
    "image resize online",
    "make image smaller",
    "smaller image file",
  ].join(", "),
};

export default function ImageCompressor() {
  return <ImageCompressorClient />;
}
