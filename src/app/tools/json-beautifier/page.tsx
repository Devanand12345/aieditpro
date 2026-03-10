"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function JsonBeautifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"beautify" | "minify">("beautify");

  const handleProcess = () => {
    setError("");
    try {
      const parsed = JSON.parse(input);
      if (mode === "beautify") {
        setOutput(JSON.stringify(parsed, null, 2));
      } else {
        setOutput(JSON.stringify(parsed));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>JSON Beautifier</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Format, minify, and validate JSON</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>Input JSON</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JSON here..."
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
            </div>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <button
                onClick={() => setMode("beautify")}
                style={{
                  padding: "0.9rem 1.8rem",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  background: mode === "beautify" ? "rgba(168,124,246,0.3)" : "rgba(255,255,255,0.05)",
                  borderColor: mode === "beautify" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Beautify
              </button>
              <button
                onClick={() => setMode("minify")}
                style={{
                  padding: "0.9rem 1.8rem",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  background: mode === "minify" ? "rgba(168,124,246,0.3)" : "rgba(255,255,255,0.05)",
                  borderColor: mode === "minify" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Minify
              </button>
              <button
                onClick={handleProcess}
                style={{
                  padding: "0.9rem 2rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  background: "linear-gradient(120deg, #a78bfa, #c084fc)",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                Process
              </button>
            </div>

            {error && (
              <div style={{ padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem" }}>
                {error}
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

