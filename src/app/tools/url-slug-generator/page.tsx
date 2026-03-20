"use client";

import { useState } from "react";
import Link from "next/link";

export default function UrlSlugGenerator() {
  const [text, setText] = useState("");
  const [slug, setSlug] = useState("");

  const generateSlug = (input: string) => {
    setText(input);
    
    const slugified = input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
    
    setSlug(slugified);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(slug);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
          URL Slug Generator
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem" }}>
          Convert text into SEO-friendly URL slugs instantly
        </p>

        <div style={{
          padding: "2rem",
          borderRadius: "1rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
              Enter Title or Text
            </label>
            <textarea
              value={text}
              onChange={(e) => generateSlug(e.target.value)}
              placeholder="Enter your blog post title or any text..."
              style={{
                width: "100%",
                height: "100px",
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--input-border)",
                background: "var(--input-bg)",
                color: "var(--text-primary)",
                fontSize: "1rem",
                resize: "none",
                outline: "none",
              }}
            />
          </div>

          {slug && (
            <div style={{
              padding: "1.5rem",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "0.75rem",
              marginBottom: "1.5rem",
            }}>
              <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
                Generated Slug
              </div>
              <div style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}>
                <code style={{ 
                  color: "#6ee7b7", 
                  fontSize: "1.1rem", 
                  wordBreak: "break-all",
                  fontFamily: "monospace",
                }}>
                  /{slug}
                </code>
                <button
                  onClick={copyToClipboard}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--input-border)",
                    background: "rgba(168,124,246,0.2)",
                    color: "var(--primary-light)",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: "0.9rem",
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          )}

          {/* Quick examples */}
          <div>
            <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.85rem", marginBottom: "0.75rem" }}>
              Try these examples:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[
                "How to Build a Website",
                "Best JavaScript Frameworks 2024",
                "Top 10 SEO Tips",
                "React vs Vue vs Angular",
                "Free Online Tools",
              ].map((example) => (
                <button
                  key={example}
                  onClick={() => generateSlug(example)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--input-border)",
                    background: "var(--card-bg)",
                    color: "rgba(220,210,255,0.8)",
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid var(--input-border)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>Why URL Slugs Matter</h3>
          <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 2, paddingLeft: "1.5rem" }}>
            <li><strong>SEO</strong> - Search engines read slugs to understand your content</li>
            <li><strong>Readability</strong> - Users can read and remember URLs</li>
            <li><strong>Sharing</strong> - Clean URLs look better in messages and social media</li>
            <li><strong>Accessibility</strong> - Screen readers handle clean slugs better</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
