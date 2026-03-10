"use client";

import { useState } from "react";
import Link from "next/link";

const TOOLS = [
  { id: "json-beautifier", name: "JSON Beautifier", icon: "🎨", desc: "Format and minify JSON" },
  { id: "html-formatter", name: "HTML Formatter", icon: "🌐", desc: "Format and minify HTML" },
  { id: "jwt-decoder", name: "JWT Decoder", icon: "🔐", desc: "Decode and analyze JWT tokens" },
  { id: "text-compare", name: "Text Diff", icon: "📋", desc: "Compare two texts side-by-side" },
  { id: "json-compare", name: "JSON Compare", icon: "⚖️", desc: "Compare two JSON objects" },
  { id: "csv-formatter", name: "CSV Formatter", icon: "📊", desc: "Format and convert CSV data" },
  { id: "base64", name: "Base64 Encoder/Decoder", icon: "🔤", desc: "Encode/decode Base64" },
  { id: "url-encode", name: "URL Encoder/Decoder", icon: "🔗", desc: "Encode/decode URLs" },
  { id: "regex", name: "Regex Tester", icon: "🔍", desc: "Test regular expressions" },
  { id: "uuid", name: "UUID Generator", icon: "🆔", desc: "Generate UUIDs" },
  { id: "hash", name: "Hash Generator", icon: "#️⃣", desc: "Generate MD5, SHA hashes" },
  { id: "xml-formatter", name: "XML Formatter", icon: "📦", desc: "Format and minify XML" },
];

export default function ToolsPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.75)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          Back to Home
        </Link>

        <div style={{ marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem", color: "#ede9ff" }}>
            Developer <span style={{ background: "linear-gradient(120deg, #a78bfa, #c084fc)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Tools</span>
          </h1>
          <p style={{ color: "rgba(220,210,255,0.82)", fontSize: "1rem", maxWidth: "600px" }}>
            A comprehensive suite of utilities for developers. Convert, compare, format, and analyze data with ease.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {TOOLS.map((tool) => (
            <Link key={tool.id} href={`/tools/${tool.id}`} style={{ textDecoration: "none" }}>
              <div style={{
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(168,124,246,0.2)",
                cursor: "pointer",
                transition: "all 0.3s",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(168,124,246,0.15)";
                e.currentTarget.style.borderColor = "rgba(168,124,246,0.5)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(168,124,246,0.2)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
                <div style={{ fontSize: "2.5rem" }}>{tool.icon}</div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ede9ff", marginBottom: "0.5rem" }}>{tool.name}</h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>{tool.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
