import type { Metadata } from "next";
import UnitConverterClient from "./page";

export const metadata: Metadata = {
  title: "Unit Converter - Convert Length, Weight, Temperature Online Free",
  description: "Free online unit converter. Convert length, weight, temperature, and more. Miles to km, kg to lbs, celsius to fahrenheit. Fast, accurate, no registration.",
  keywords: [
    "unit converter", "convert units", "length converter", "weight converter", "temperature converter",
    "miles to km", "km to miles", "kg to lbs", "lbs to kg", "celsius to fahrenheit",
    "fahrenheit to celsius", "meters to feet", "feet to meters", "inches to cm", "cm to inches",
    "online unit converter", "free unit converter", "metric converter", "imperial converter",
    "convert length", "convert weight", "convert temperature", "conversion calculator",
    "unit conversion tool", "measurement converter", "distance converter", "height converter",
  ].join(", "),
};

export default function UnitConverter() {
  return <UnitConverterClient />;
}
