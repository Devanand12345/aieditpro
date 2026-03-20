import type { Metadata } from "next";
import ColorConverterClient from "./page";

export const metadata: Metadata = {
  title: "Color Converter - HEX RGB HSL CMYK Color Picker Online",
  description: "Free online color converter. Convert between HEX, RGB, HSL, and CMYK color formats. Pick colors and get all format values instantly.",
  keywords: ["color converter", "hex to rgb", "rgb to hex", "hsl to rgb", "cmyk to rgb", "color picker", "color format converter", "color code converter", "web color picker", "color palette", "color values", "free color converter", "online color converter"].join(", "),
  alternates: { canonical: "https://aieditpro.net/tools/color-converter" },
};

export default function ColorConverter() {
  return <ColorConverterClient />;
}
