import type { Metadata } from "next";
import QrCodeGeneratorClient from "./page";
import ToolSchema from "@/components/ToolSchema";

export const metadata: Metadata = {
  title: "QR Code Generator - Create QR Codes Online Free",
  description: "Free QR Code Generator online. Create QR codes for URLs, WiFi, contacts, text, and more. No registration required. Download QR codes as PNG images instantly.",
  keywords: [
    "QR code generator",
    "QR code creator",
    "generate QR code",
    "create QR code",
    "QR code online",
    "free QR code generator",
    "QR code maker",
    "QR code PNG",
    "QR code download",
    "QR code for URL",
    "QR code for WiFi",
    "QR code for text",
    "QR code for email",
    "QR code for phone",
    "QR code generator free",
    "online QR code generator",
    "best QR code generator",
    "QR code creator online",
    "QR code maker free",
    "custom QR code generator",
    "QR code with logo",
    "colorful QR code",
    "QR code generator no watermark",
    "QR code generator download",
    "how to create QR code",
    "QR code generator for business",
    "QR code generator for restaurant",
    "QR code generator for menu",
    "dynamic QR code",
    "static QR code",
    "vCard QR code",
    "meCard QR code",
    "SMS QR code",
    "WhatsApp QR code",
    "QR code scanner",
    "QR code reader",
    "WiFi QR code generator",
    "QR code for WiFi password",
    "contact QR code",
    "event QR code",
    "payment QR code",
    "Bitcoin QR code",
    "PayPal QR code",
    "QR code API",
    "QR code tool",
    "barcode generator",
  ].join(", "),
  alternates: {
    canonical: "https://aieditpro.net/tools/qr-code-generator",
  },
};

export default function QrCodeGenerator() {
  return (
    <>
      <ToolSchema
        name="QR Code Generator"
        description="Free QR Code Generator online. Create QR codes for URLs, WiFi, contacts, text, and more."
        url="https://aieditpro.net/tools/qr-code-generator"
      />
      <QrCodeGeneratorClient />
    </>
  );
}
