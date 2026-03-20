import type { Metadata } from "next";
import JsonToYamlClient from "./page";

export const metadata: Metadata = {
  title: "JSON to YAML Converter - Convert JSON to YAML Online Free",
  description: "Free online JSON to YAML converter. Convert JSON data to YAML format instantly. Also supports YAML to JSON conversion.",
  keywords: ["json to yaml", "yaml to json", "json yaml converter", "convert json to yaml", "convert yaml to json", "yaml converter", "json yaml online", "free json to yaml", "online yaml converter"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/json-to-yaml" },
};

export default function JsonToYaml() {
  return <JsonToYamlClient />;
}
