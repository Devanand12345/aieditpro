import type { Metadata } from "next";
import LoremIpsumClient from "./page";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - Generate Placeholder Text Online Free",
  description: "Free Lorem Ipsum generator. Create realistic placeholder text for designs, mockups, and prototypes. Generate paragraphs, sentences, or words. Perfect for web designers and developers.",
  keywords: ["lorem ipsum generator", "lorem ipsum", "placeholder text", "fake text", "sample text", "dummy text", "ipsum generator", "Lorem Ipsum", "placeholder content", "design mockup text", "web design placeholder", "typography placeholder", "lorem ipsum generator online", "free lorem ipsum"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/lorem-ipsum" },
};

export default function LoremIpsum() {
  return <LoremIpsumClient />;
}
