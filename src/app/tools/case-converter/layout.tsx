import type { Metadata } from "next";
import CaseConverterClient from "./page";

export const metadata: Metadata = {
  title: "Case Converter - Change Text Case Online Free (UPPERCASE, lowercase, Title Case)",
  description: "Free case converter tool. Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and more. All text case conversions in one place.",
  keywords: ["case converter", "text case", "uppercase", "lowercase", "title case", "sentence case", "camelCase", "PascalCase", "snake_case", "kebab-case", "convert case", "change case", "text transform", "string case", "case transformation", "capitalize text", "text formatting"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/case-converter" },
};

export default function CaseConverter() {
  return <CaseConverterClient />;
}
