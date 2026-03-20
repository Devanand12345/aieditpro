import type { Metadata } from "next";
import UuidV7Client from "./page";

export const metadata: Metadata = {
  title: "UUID v7 Generator - Create Time-Ordered UUIDs Online Free",
  description: "Free online UUID v7 generator. Create time-ordered UUIDs that sort chronologically. UUID v7 is the new standard for database primary keys.",
  keywords: ["uuid v7 generator", "uuid v7", "time-ordered uuid", "uuid generator", "guid generator", "uuid7", "create uuid", "random uuid", "uuid maker", "uuid creator", "online uuid generator", "uuid tool", "uuid v4 vs v7"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/uuid-v7-generator" },
};

export default function UuidV7() {
  return <UuidV7Client />;
}
