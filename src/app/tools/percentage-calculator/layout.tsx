import type { Metadata } from "next";
import PercentageClient from "./page";

export const metadata: Metadata = {
  title: "Percentage Calculator - Calculate Percentages Online Free",
  description: "Free online percentage calculator. Calculate percentage of a number, percentage change, percentage increase/decrease, and more.",
  keywords: ["percentage calculator", "percent calculator", "calculate percentage", "percentage of a number", "percentage change", "percentage increase", "percentage decrease", "percentage difference", "free percentage calculator", "online percentage calculator"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/percentage-calculator" },
};

export default function Percentage() {
  return <PercentageClient />;
}
