import type { Metadata } from "next";
import JsonBeautifierPage from "./page";

export const metadata: Metadata = {
  title: "JSON Beautifier - Format JSON Online Free",
  description: "Free online JSON beautifier and formatter. Format, validate, and prettify JSON data. Make your JSON readable with syntax highlighting.",
  keywords: ["json beautifier", "json formatter", "json prettifier", "format json", "json validator", "json cleaner", "json online", "pretty print json", "free json formatter", "json tool"].join(", "),
};

export default function JsonBeautifier() {
  return <JsonBeautifierPage />;
}
