import type { Metadata } from "next";
import WordCounterPage from "./page";

export const metadata: Metadata = {
  title: "Word Counter - Count Words, Characters, Lines Online Free",
  description: "Free online word counter. Count words, characters, sentences, paragraphs, and reading time. Analyze text statistics instantly.",
  keywords: ["word counter", "character counter", "count words", "text counter", "word count", "letter counter", "line counter", "text analyzer", "free word counter", "online word counter"].join(", "),
};

export default function WordCounter() {
  return <WordCounterPage />;
}
