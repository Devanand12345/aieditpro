import type { Metadata } from "next";
import RandomStringClient from "./page";

export const metadata: Metadata = {
  title: "Random String Generator - Generate Random Text Online Free",
  description: "Free online random string generator. Create random text, passwords, codes, and identifiers. Customize length, characters, and format.",
  keywords: ["random string generator", "random text generator", "random password generator", "random code generator", "random id generator", "generate random string", "random alphanumeric", "random characters", "free random generator", "online random string"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/random-string-generator" },
};

export default function RandomString() {
  return <RandomStringClient />;
}
