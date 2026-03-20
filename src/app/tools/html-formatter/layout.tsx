import type { Metadata } from "next";
import HtmlFormatterPage from "./page";

export const metadata: Metadata = {
  title: "HTML Formatter - Beautify HTML Code Online Free",
  description: "Free online HTML formatter and beautifier. Format, indent, and clean HTML code. Make your HTML readable with proper indentation.",
  keywords: ["html formatter", "html beautifier", "format html", "html cleaner", "html prettifier", "indent html", "html code formatter", "free html formatter", "online html formatter", "html tool"].join(", "),
};

export default function HtmlFormatter() {
  return <HtmlFormatterPage />;
}
