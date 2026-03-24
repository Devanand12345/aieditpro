"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

const LANGUAGES = [
  { value: "", label: "Auto-detect" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "csharp", label: "C#" },
  { value: "cpp", label: "C++" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "sql", label: "SQL" },
  { value: "bash", label: "Bash" },
  { value: "json", label: "JSON" },
  { value: "yaml", label: "YAML" },
];

const ACTIONS = [
  { value: "review", label: "🔍 Code Review", desc: "Find bugs, security issues & improvements" },
  { value: "explain", label: "📖 Explain Code", desc: "Understand what the code does" },
  { value: "fix", label: "🔧 Fix Bugs", desc: "Get bugs fixed with explanations" },
  { value: "optimize", label: "⚡ Optimize", desc: "Improve performance & efficiency" },
];

export default function AICodeReviewPage() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [action, setAction] = useState("review");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyze = async () => {
    if (!code.trim()) {
      setError("Please enter some code to analyze");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/claude", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language, action }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResponse(data.response);
      }
    } catch (err) {
      setError("Failed to analyze code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(response);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
          AI Code Review
        </h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
          Get instant AI-powered code analysis, bug fixes, and optimization suggestions
        </p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
              Programming Language
            </label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--input-border)",
                background: "var(--input-bg)",
                color: "var(--text-primary)",
                fontSize: "0.95rem",
              }}
            >
              {LANGUAGES.map(lang => (
                <option key={lang.value} value={lang.value}>{lang.label}</option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.75rem" }}>
              What do you want to do?
            </label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
              {ACTIONS.map(a => (
                <button
                  key={a.value}
                  onClick={() => setAction(a.value)}
                  style={{
                    padding: "0.75rem 1rem",
                    borderRadius: "0.5rem",
                    border: "2px solid",
                    borderColor: action === a.value ? "var(--primary)" : "var(--input-border)",
                    background: action === a.value ? "var(--primary)" : "var(--card-bg)",
                    color: action === a.value ? "#fff" : "var(--text-primary)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{a.label}</div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>{a.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
              Your Code
            </label>
            <textarea
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="Paste your code here..."
              style={{
                width: "100%",
                height: "200px",
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--input-border)",
                background: "var(--input-bg)",
                color: "var(--text-primary)",
                fontFamily: "monospace",
                fontSize: "0.9rem",
                resize: "vertical",
              }}
            />
          </div>

          {error && (
            <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", color: "#fca5a5", marginBottom: "1rem", fontSize: "0.9rem" }}>
              ⚠️ {error}
            </div>
          )}

          <button
            onClick={analyze}
            disabled={loading}
            className="btn-glow"
            style={{ width: "100%", fontSize: "1rem", padding: "1rem", opacity: loading ? 0.7 : 1 }}
          >
            {loading ? "🤖 Analyzing..." : "🚀 Analyze with AI"}
          </button>
        </div>

        {response && (
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)" }}>AI Response</h2>
              <button
                onClick={copyResponse}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--input-border)",
                  background: "var(--card-bg)",
                  color: "var(--primary-light)",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                📋 Copy
              </button>
            </div>
            <div style={{
              padding: "1rem",
              borderRadius: "0.75rem",
              background: "var(--input-bg)",
              border: "1px solid var(--input-border)",
              color: "var(--text-primary)",
              fontFamily: "monospace",
              fontSize: "0.9rem",
              whiteSpace: "pre-wrap",
              maxHeight: "500px",
              overflowY: "auto",
              lineHeight: 1.6,
            }}>
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
