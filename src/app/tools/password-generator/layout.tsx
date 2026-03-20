import type { Metadata } from "next";
import PasswordGeneratorPage from "./page";

export const metadata: Metadata = {
  title: "Password Generator - Generate Secure Passwords Free Online",
  description: "Free online password generator. Create strong, secure passwords with customizable length and character options. No registration required.",
  keywords: ["password generator", "password creator", "random password generator", "secure password", "strong password", "password maker", "free password generator", "online password generator", "password generator tool", "random password"].join(", "),
};

export default function PasswordGenerator() {
  return <PasswordGeneratorPage />;
}
