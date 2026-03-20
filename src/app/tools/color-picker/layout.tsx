import type { Metadata } from "next";
import ColorPickerPage from "./page";

export const metadata: Metadata = {
  title: "Color Picker - Pick Colors Online Free",
  description: "Free online color picker tool. Pick colors, get hex codes, RGB values, and HSL values. Perfect for designers and developers.",
  keywords: ["color picker", "hex color", "RGB color", "HSL color", "color converter", "color codes", "pick color online", "free color picker", "color palette", "web colors"].join(", "),
};

export default function ColorPicker() {
  return <ColorPickerPage />;
}
