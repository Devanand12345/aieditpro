import type { Metadata } from "next";
import TextComparePage from "./page";

export const metadata: Metadata = {
  title: "Text Compare - Compare Text Files Online Free",
  description: "Free online text comparison tool. Compare two text files and find differences. Side-by-side diff view with highlighted changes.",
  keywords: ["text compare", "text diff", "compare text", "text comparison", "diff tool", "text difference", "text comparer", "file compare", "text compare online", "free text compare"].join(", "),
};

export default function TextCompare() {
  return <TextComparePage />;
}
