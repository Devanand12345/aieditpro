import type { Metadata } from "next";
import RegexPage from "./page";

export const metadata: Metadata = {
  title: "Regex Tester - Test Regular Expressions Online Free",
  description: "Free online regex tester and debugger. Test regular expressions against text, view matches, and learn regex syntax. Supports JavaScript regex.",
  keywords: ["regex tester", "regular expression tester", "regex tool", "regex debugger", "test regex", "regex online", "regex pattern", "regex matcher", "free regex tester", "javascript regex"].join(", "),
};

export default function Regex() {
  return <RegexPage />;
}
