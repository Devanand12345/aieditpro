import type { Metadata } from "next";
import CsvFormatterPage from "./page";

export const metadata: Metadata = {
  title: "CSV Formatter - Format CSV Data Online Free",
  description: "Free online CSV formatter. Format, validate, and clean CSV data. Sort columns, remove duplicates, and convert CSV to other formats.",
  keywords: ["csv formatter", "csv editor", "format csv", "csv cleaner", "csv tool", "csv validator", "csv to json", "csv to excel", "csv online", "free csv formatter"].join(", "),
};

export default function CsvFormatter() {
  return <CsvFormatterPage />;
}
