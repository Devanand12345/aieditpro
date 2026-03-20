import type { Metadata } from "next";
import XmlFormatterPage from "./page";

export const metadata: Metadata = {
  title: "XML Formatter - Beautify XML Code Online Free",
  description: "Free online XML formatter and beautifier. Format, validate, and prettify XML data. Make your XML readable with proper indentation.",
  keywords: ["xml formatter", "xml beautifier", "format xml", "xml prettifier", "xml cleaner", "xml validator", "indent xml", "xml code formatter", "free xml formatter", "online xml formatter"].join(", "),
};

export default function XmlFormatter() {
  return <XmlFormatterPage />;
}
