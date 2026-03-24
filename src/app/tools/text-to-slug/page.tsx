"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function TextToSlugPage() {
  const [text, setText] = useState("");
  const [slug, setSlug] = useState("");

  const createSlug = (input: string) => {
    return input
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleInput = (value: string) => {
    setText(value);
    setSlug(createSlug(value));
  };

  const copySlug = () => {
    if (slug) navigator.clipboard.writeText(slug);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Text to Slug Converter</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Convert any text into SEO-friendly URL slugs</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Enter Text</label>
            <textarea
              value={text}
              onChange={e => handleInput(e.target.value)}
              placeholder="Type or paste your text here... (e.g., My Blog Post Title)"
              style={textareaStyle}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Generated Slug</label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <div style={{ ...textareaStyle, background: "var(--card-bg)", display: "flex", alignItems: "center", minHeight: "60px", wordBreak: "break-all" }}>
                {slug || "Your slug will appear here..."}
              </div>
              <button onClick={copySlug} disabled={!slug} className="btn-glow" style={{ padding: "0.75rem 1rem", opacity: slug ? 1 : 0.5 }}>
                📋
              </button>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Examples</h2>
          <div style={{ display: "grid", gap: "0.75rem", fontSize: "0.9rem" }}>
            {[
              { input: "How to Create a Website in 2024", output: "how-to-create-a-website-in-2024" },
              { input: "Best Free SEO Tools for Bloggers", output: "best-free-seo-tools-for-bloggers" },
              { input: "JavaScript Tutorial: Beginners Guide", output: "javascript-tutorial-beginners-guide" },
              { input: "Top 10 Programming Languages", output: "top-10-programming-languages" },
            ].map((ex, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1rem", alignItems: "center", padding: "0.75rem", background: "var(--card-bg)", borderRadius: "0.5rem" }}>
                <span style={{ color: "var(--text-muted)" }}>{ex.input}</span>
                <span style={{ color: "var(--primary-light)" }}>→</span>
                <span style={{ color: "var(--text-primary)", fontFamily: "monospace" }}>{ex.output}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const textareaStyle = {
  width: "100%",
  padding: "1rem",
  borderRadius: "0.75rem",
  border: "1px solid var(--input-border)",
  background: "var(--input-bg)",
  color: "var(--text-primary)",
  fontFamily: "monospace",
  fontSize: "1rem",
  resize: "vertical" as const,
  minHeight: "120px",
};
