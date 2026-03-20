import type { Metadata } from "next";
import BmiCalculatorClient from "./page";

export const metadata: Metadata = {
  title: "BMI Calculator - Calculate Body Mass Index Online Free",
  description: "Free BMI calculator. Calculate your body mass index instantly. Check if you're underweight, normal, overweight, or obese. Fast and accurate.",
  keywords: ["BMI calculator", "body mass index", "calculate BMI", "BMI check", "BMI formula", "healthy BMI", "BMI ranges", "obesity calculator", "weight calculator"].join(", "),
};

export default function BmiCalculator() {
  return <BmiCalculatorClient />;
}
