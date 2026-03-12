"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function HtmlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"beautify" | "minify">("beautify");

  const formatHtml = (html: string, pretty: boolean): string => {
    if (!html.trim()) return "";
    
    if (!pretty) {
      return html.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
    }

    let formatted = "";
    let indent = 0;
    let inTag = false;
    let tag = "";

    for (let i = 0; i < html.length; i++) {
      const char = html[i];
      
      if (char === "<") {
        inTag = true;
        tag = "<";
      } else if (char === ">") {
        tag += char;
        inTag = false;

        if (tag.startsWith("</")) {
          indent = Math.max(0, indent - 1);
        }

        formatted += "  ".repeat(indent) + tag + "\n";
        tag = "";

        if (!tag.startsWith("</") && !tag.endsWith("/>") && tag !== "<!DOCTYPE html>") {
          if (!["br", "hr", "img", "input", "meta", "link"].some(t => tag.includes(`<${t}`))) {
            indent++;
          }
        }
      } else if (inTag) {
        tag += char;
      } else if (char.trim()) {
        formatted += "  ".repeat(indent) + char.trim() + "\n";
      }
    }

    return formatted.trim();
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    setError("");

    if (!value.trim()) {
      setOutput("");
      return;
    }

    try {
      const result = formatHtml(value, mode === "beautify");
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error processing HTML");
    }
  };

  const handleModeChange = (newMode: "beautify" | "minify") => {
    setMode(newMode);
    setError("");

    if (!input.trim()) {
      setOutput("");
      return;
    }

    try {
      const result = formatHtml(input, newMode === "beautify");
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error processing HTML");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>HTML Formatter</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Format and minify HTML code instantly</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>Input HTML</label>
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Paste your HTML here..."
              style={{
                width: "100%",
                height: "400px",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(168,124,246,0.3)",
                background: "rgba(30,27,75,0.6)",
                color: "#ede9ff",
                fontFamily: "monospace",
                fontSize: "0.95rem",
                resize: "none",
              }}
            />

            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
              <button
                onClick={() => handleModeChange("beautify")}
                style={{
                  padding: "0.9rem 1.8rem",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  background: mode === "beautify" ? "linear-gradient(120deg, #a78bfa, #c084fc)" : "rgba(255,255,255,0.05)",
                  borderColor: mode === "beautify" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                  color: mode === "beautify" ? "#fff" : "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                ✨ Beautify
              </button>
              <button
                onClick={() => handleModeChange("minify")}
                style={{
                  padding: "0.9rem 1.8rem",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  background: mode === "minify" ? "linear-gradient(120deg, #a78bfa, #c084fc)" : "rgba(255,255,255,0.05)",
                  borderColor: mode === "minify" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                  color: mode === "minify" ? "#fff" : "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                📦 Minify
              </button>
            </div>

            {error && (
              <div style={{ marginTop: "1rem", padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem" }}>
                ❌ {error}
              </div>
            )}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>Output</label>
            <textarea
              value={output}
              readOnly
              style={{
                width: "100%",
                height: "400px",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(168,124,246,0.3)",
                background: "rgba(30,27,75,0.6)",
                color: "#ede9ff",
                fontFamily: "monospace",
                fontSize: "0.95rem",
                resize: "none",
              }}
            />
            {output && (
              <button
                onClick={copyToClipboard}
                style={{
                  marginTop: "1rem",
                  padding: "0.9rem 1.8rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                📋 Copy to Clipboard
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
