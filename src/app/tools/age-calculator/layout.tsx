import type { Metadata } from "next";
import AgeCalculatorClient from "./page";

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Your Age in Years, Months, Days Online",
  description: "Free age calculator. Calculate your exact age in years, months, days, hours, and seconds. Find out how old you are, next birthday countdown, and more.",
  keywords: ["age calculator", "calculate age", "how old am I", "age finder", "date of birth calculator", "age in years", "birthday calculator", "age calculator online", "free age calculator"].join(", "),
};

export default function AgeCalculator() {
  return <AgeCalculatorClient />;
}
