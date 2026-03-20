import type { Metadata } from "next";
import JsonComparePage from "./page";

export const metadata: Metadata = {
  title: "JSON Compare - Compare JSON Files Online Free",
  description: "Free online JSON comparison tool. Compare two JSON files or objects and find differences. Visual diff with highlighted changes.",
  keywords: ["json compare", "json diff", "compare json", "json comparison", "json difference", "json comparer", "diff json", "json compare tool", "free json compare", "json difference finder"].join(", "),
};

export default function JsonCompare() {
  return <JsonComparePage />;
}
