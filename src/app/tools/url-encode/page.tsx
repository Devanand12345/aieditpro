"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function UrlEncodePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const handleInputChange = (value: string) => {
    setInput(value);
    setError("");

    if (!value.trim()) {
      setOutput("");
      return;
    }

    try {
      if (mode === "encode") {
        const encoded = encodeURIComponent(value);
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(value);
        setOutput(decoded);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid input");
    }
  };

  const handleModeChange = (newMode: "encode" | "decode") => {
    setMode(newMode);
    setError("");

    if (!input.trim()) {
      setOutput("");
      return;
    }

    try {
      if (newMode === "encode") {
        const encoded = encodeURIComponent(input);
        setOutput(encoded);
      } else {
        const decoded = decodeURIComponent(input);
        setOutput(decoded);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid input");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>URL Encoder/Decoder</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Encode and decode URLs instantly</p>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <button
            onClick={() => handleModeChange("encode")}
            style={{
              padding: "0.9rem 1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid",
              background: mode === "encode" ? "linear-gradient(120deg, #a78bfa, #c084fc)" : "rgba(255,255,255,0.05)",
              borderColor: mode === "encode" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
              color: mode === "encode" ? "#fff" : "#c4b5fd",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            🔒 Encode
          </button>
          <button
            onClick={() => handleModeChange("decode")}
            style={{
              padding: "0.9rem 1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid",
              background: mode === "decode" ? "linear-gradient(120deg, #a78bfa, #c084fc)" : "rgba(255,255,255,0.05)",
              borderColor: mode === "decode" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
              color: mode === "decode" ? "#fff" : "#c4b5fd",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            🔓 Decode
          </button>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
            {mode === "encode" ? "Text to Encode" : "URL to Decode"}
          </label>
          <textarea
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={mode === "encode" ? "Enter text to encode..." : "Enter URL to decode..."}
            style={{
              width: "100%",
              height: "200px",
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

        {error && (
          <div style={{ padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem", marginBottom: "1rem" }}>
            ❌ {error}
          </div>
        )}

        {output && (
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Result</label>
            <textarea
              value={output}
              readOnly
              style={{
                width: "100%",
                height: "200px",
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
            <button
              onClick={copyToClipboard}
              style={{
                marginTop: "1rem",
                padding: "0.9rem 1.5rem",
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
          </div>
        )}
      </div>
    </div>
  );
}
