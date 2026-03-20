import type { Metadata } from "next";
import CreditCardValidatorClient from "./page";

export const metadata: Metadata = {
  title: "Credit Card Validator - Validate Credit Card Numbers Online Free",
  description: "Free credit card validator. Check if a credit card number is valid using Luhn algorithm. Supports Visa, Mastercard, Amex, Discover and more.",
  keywords: ["credit card validator", "validate credit card", "check credit card", "credit card number validator", "luhn algorithm", "card number checker", "visa validator", "mastercard validator"].join(", "),
};

export default function CreditCardValidator() {
  return <CreditCardValidatorClient />;
}
