import type { Metadata } from "next";
import JwtDecoderPage from "./page";

export const metadata: Metadata = {
  title: "JWT Decoder - Decode JWT Tokens Online Free",
  description: "Free online JWT decoder. Decode and inspect JSON Web Tokens. View header, payload, and signature. Validate JWT tokens.",
  keywords: ["jwt decoder", "jwt parser", "decode jwt", "jwt viewer", "jwt inspector", "jwt tool", "json web token decoder", "jwt decoder online", "free jwt decoder", "jwt payload viewer"].join(", "),
};

export default function JwtDecoder() {
  return <JwtDecoderPage />;
}
