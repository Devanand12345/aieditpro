import type { Metadata } from "next";
import TextToSlugClient from "./page";

export const metadata: Metadata = {
  title: "Text to Slug Converter - Create SEO-Friendly URL Slugs Online",
  description: "Free online text to slug converter. Transform any text into SEO-friendly URL slugs. Perfect for blog posts, product pages, and WordPress. Generate clean, hyphenated slugs instantly.",
  keywords: ["text to slug", "slug generator", "url slug", "seo slug", "create slug", "wordpress slug", "permalink generator", "slug maker", "friendly url", "clean url", "slug converter", "title to slug", "blog slug generator", "seo friendly url", "hyphenated url"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/text-to-slug" },
};

export default function TextToSlug() {
  return <TextToSlugClient />;
}
