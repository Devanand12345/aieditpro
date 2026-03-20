import type { Metadata } from "next";
import MarkdownPreviewPage from "./page";

export const metadata: Metadata = {
  title: "Markdown Preview - Live Markdown Editor Online Free",
  description: "Free online Markdown preview and editor. Write Markdown and see live preview. Convert Markdown to HTML. Supports GitHub Flavored Markdown.",
  keywords: ["markdown preview", "markdown editor", "markdown to html", "gfm", "github markdown", "markdown converter", "live markdown", "markdown parser", "free markdown preview", "online markdown editor"].join(", "),
};

export default function MarkdownPreview() {
  return <MarkdownPreviewPage />;
}
