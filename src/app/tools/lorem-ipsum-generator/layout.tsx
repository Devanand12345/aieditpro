import type { Metadata } from "next";
import LoremIpsumClient from "./page";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator - Generate Placeholder Text Online Free",
  description: "Free Lorem Ipsum generator. Generate placeholder text, dummy text, or filler text for designs, mockups, and prototypes. Customize words, sentences, or paragraphs.",
  keywords: [
    "lorem ipsum generator",
    "lorem ipsum",
    "placeholder text generator",
    "dummy text generator",
    "fake text generator",
    "lorem ipsum text",
    "lorem ipsum generator online",
    "free lorem ipsum",
    "lorem ipsum creator",
    "generate lorem ipsum",
    "lorem ipsum maker",
    "filler text generator",
    "sample text generator",
    "lorem ipsum free",
    "online lorem ipsum generator",
    "lorem ipsum tool",
    "lorem ipsum sentences",
    "lorem ipsum paragraphs",
    "lorem ipsum words",
    "lorem ipsum designer",
    "lorem ipsum web design",
    "lorem ipsum mockup",
    "lorem ipsum prototype",
    "lorem ipsum template",
    "pangram lorem ipsum",
    "hipsum",
    "cat ipsum",
    "cupcake ipsum",
    "zombie ipsum",
    "pirate lorem ipsum",
    "Lorem Ipsum alternatives",
    "placeholder content",
    "dummy content generator",
    "design placeholder",
    "lorem ipsum generator for designers",
    "lorem ipsum generator for developers",
    "lorem ipsum API",
    "copy lorem ipsum",
    "lorem ipsum copy paste",
  ].join(", "),
};

export default function LoremIpsumGenerator() {
  return <LoremIpsumClient />;
}
