import type { Metadata } from "next";
import UuidPage from "./page";

export const metadata: Metadata = {
  title: "UUID Generator - Generate UUIDs Online Free",
  description: "Free online UUID generator. Generate UUID v1, v4, and v7 identifiers. Copy UUIDs to clipboard instantly. No registration required.",
  keywords: ["uuid generator", "guid generator", "generate uuid", "uuid v4", "uuid v1", "unique id generator", "random uuid", "uuid maker", "free uuid generator", "online uuid"].join(", "),
};

export default function Uuid() {
  return <UuidPage />;
}
