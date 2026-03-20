"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConverterPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "100px 1.5rem 3rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.75)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2.5rem", fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>

        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1rem", display: "inline-flex", alignItems: "center", gap: "0.6rem", padding: "0.7rem 1.2rem", background: "rgba(139,92,246,0.2)", border: "1px solid rgba(168,124,246,0.4)", borderRadius: "9999px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#a78bfa" }} />
            Free Online File Converter - Coming Soon
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "0.75rem", color: "#f0f0ff" }}>
            Convert <span style={{ background: "linear-gradient(135deg, #a78bfa, #e879f9)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Any File Format</span> Instantly
          </h1>
          <p style={{ color: "rgba(220,210,255,0.85)", fontSize: "1.05rem", lineHeight: 1.65 }}>
            Free online document converter supporting PDF, DOCX, XLSX, PPTX, HTML, TXT, EPUB, RTF.
          </p>
        </div>

        <div style={{
          padding: "4rem 2rem",
          borderRadius: "1.5rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🔧</div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>
            File Converter Coming Soon
          </h2>
          <p style={{ color: "rgba(220,210,255,0.85)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 2rem" }}>
            We are setting up our file conversion service. Soon you will be able to convert files between PDF, DOCX, XLSX, PPTX, HTML, TXT, EPUB, and RTF formats instantly.
          </p>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 2rem",
            background: "rgba(16,185,129,0.15)",
            border: "1px solid rgba(16,185,129,0.35)",
            borderRadius: "1rem",
            color: "#6ee7b7",
            fontSize: "1rem",
            fontWeight: 600,
          }}>
            ⚡ Expected to launch within 24 hours
          </div>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1.5rem" }}>
            In the meantime, try our free developer tools!
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/tools" style={{
              padding: "1rem 2rem",
              borderRadius: "1rem",
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(168,124,246,0.4)",
              color: "#c4b5fd",
              textDecoration: "none",
              fontWeight: 600,
              transition: "all 0.3s",
            }}>
              Explore Developer Tools →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
