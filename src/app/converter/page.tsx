"use client";

import { useState } from "react";
import Link from "next/link";

export default function ConverterPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    if (email) {
      setSubmitted(true);
    }
  };

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
            Coming Soon - File Converter
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "0.75rem", color: "#f0f0ff" }}>
            Free <span style={{ background: "linear-gradient(135deg, #a78bfa, #e879f9)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>File Converter</span> Coming Soon
          </h1>
          <p style={{ color: "rgba(220,210,255,0.85)", fontSize: "1.05rem", lineHeight: 1.65 }}>
            We are building a free document converter. Get notified when it launches!
          </p>
        </div>

        <div style={{
          padding: "3rem 2rem",
          borderRadius: "1.5rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
          textAlign: "center",
        }}>
          <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>📄🔄📝</div>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>
            File Converter Coming Soon
          </h2>
          <p style={{ color: "rgba(220,210,255,0.85)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto 2rem" }}>
            Convert between PDF, DOCX, XLSX, PPTX, HTML, TXT, EPUB, and RTF formats instantly. 100% free, no registration required.
          </p>

          {!submitted ? (
            <div style={{ maxWidth: "400px", margin: "0 auto" }}>
              <p style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "1rem" }}>Get notified when we launch:</p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: "200px",
                    padding: "0.9rem 1.25rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    color: "#ede9ff",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
                <button
                  onClick={handleNotify}
                  style={{
                    padding: "0.9rem 1.5rem",
                    borderRadius: "0.75rem",
                    border: "none",
                    background: "linear-gradient(135deg, #a78bfa, #e879f9)",
                    color: "#fff",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                >
                  Notify Me
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              padding: "1rem 1.5rem",
              background: "rgba(16,185,129,0.15)",
              border: "1px solid rgba(16,185,129,0.35)",
              borderRadius: "0.75rem",
              color: "#6ee7b7",
              fontWeight: 600,
              display: "inline-block",
            }}>
              Thanks! We will notify you when we launch. 🚀
            </div>
          )}
        </div>

        <div style={{ marginTop: "3rem" }}>
          <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1.5rem", textAlign: "center" }}>
            In the meantime, try our free developer tools!
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { name: "Base64 Encoder", desc: "Encode/decode Base64", icon: "🔤" },
              { name: "URL Encoder", desc: "Encode/decode URLs", icon: "🔗" },
              { name: "Password Generator", desc: "Generate secure passwords", icon: "🔑" },
              { name: "Hash Generator", desc: "Generate MD5, SHA hashes", icon: "🔐" },
            ].map((tool) => (
              <Link key={tool.name} href="/tools" style={{
                padding: "1.25rem",
                borderRadius: "1rem",
                background: "rgba(139,92,246,0.1)",
                border: "1px solid rgba(168,124,246,0.25)",
                textDecoration: "none",
                transition: "all 0.3s",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{tool.icon}</div>
                <div style={{ fontWeight: 700, color: "#ede9ff", marginBottom: "0.25rem" }}>{tool.name}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.7)" }}>{tool.desc}</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <Link href="/tools" style={{
              padding: "0.9rem 2rem",
              borderRadius: "0.75rem",
              background: "rgba(139,92,246,0.15)",
              border: "1px solid rgba(168,124,246,0.4)",
              color: "#c4b5fd",
              textDecoration: "none",
              fontWeight: 600,
              display: "inline-block",
            }}>
              View All Tools →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
