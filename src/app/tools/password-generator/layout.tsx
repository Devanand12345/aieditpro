import type { Metadata } from "next";
import PasswordGeneratorPage from "./page";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "Password Generator - Generate Secure Passwords Free Online",
  description: "Free online password generator. Create strong, secure passwords with customizable length and character options. No registration required.",
  keywords: ["password generator", "password creator", "random password generator", "secure password", "strong password", "password maker", "free password generator", "online password generator", "password generator tool", "random password"].join(", "),
  alternates: {
    canonical: "https://aieditpro.net/tools/password-generator",
  },
};

export default function PasswordGenerator() {
  return (
    <>
      <ToolSchema
        name="Password Generator"
        description="Free online password generator. Create strong, secure passwords with customizable length."
        url="https://aieditpro.net/tools/password-generator"
      />
      <PasswordGeneratorPage />
    </>
  );
}
