import type { Metadata } from "next";
import JsonBeautifierPage from "./page";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "JSON Beautifier - Format JSON Online Free",
  description: "Free online JSON beautifier and formatter. Format, validate, and prettify JSON data. Make your JSON readable with syntax highlighting.",
  keywords: ["json beautifier", "json formatter", "json prettifier", "format json", "json validator", "json cleaner", "json online", "pretty print json", "free json formatter", "json tool"].join(", "),
  alternates: {
    canonical: "https://aieditpro.net/tools/json-beautifier",
  },
};

export default function JsonBeautifier() {
  return (
    <>
      <ToolSchema
        name="JSON Beautifier"
        description="Free online JSON beautifier and formatter. Format, validate, and prettify JSON data."
        url="https://aieditpro.net/tools/json-beautifier"
      />
      <JsonBeautifierPage />
    </>
  );
}
