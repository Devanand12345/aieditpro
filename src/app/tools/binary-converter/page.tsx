"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

function textToBinary(text: string): string {
  return text.split("").map(c => c.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
}

function binaryToText(binary: string): string {
  try {
    return binary.split(" ").map(b => String.fromCharCode(parseInt(b, 2))).join("");
  } catch {
    return "Invalid binary input";
  }
}

export default function BinaryConverterPage() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"text-to-binary" | "binary-to-text">("text-to-binary");
  const [output, setOutput] = useState("");

  const convert = () => {
    if (!input.trim()) return;
    setOutput(mode === "text-to-binary" ? textToBinary(input) : binaryToText(input));
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode(m => m === "text-to-binary" ? "binary-to-text" : "text-to-binary");
  };

  const copy = () => {
    if (output) navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Binary to Text Converter</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Convert between binary code and text instantly</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <button onClick={() => { setMode("text-to-binary"); setOutput(""); }} style={{ ...tabStyle, background: mode === "text-to-binary" ? "var(--primary)" : "var(--card-bg)", borderColor: mode === "text-to-binary" ? "var(--primary)" : "var(--input-border)", color: mode === "text-to-binary" ? "#fff" : "var(--text-primary)" }}>
              Text → Binary
            </button>
            <button onClick={() => { setMode("binary-to-text"); setOutput(""); }} style={{ ...tabStyle, background: mode === "binary-to-text" ? "var(--primary)" : "var(--card-bg)", borderColor: mode === "binary-to-text" ? "var(--primary)" : "var(--input-border)", color: mode === "binary-to-text" ? "#fff" : "var(--text-primary)" }}>
              Binary → Text
            </button>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
              {mode === "text-to-binary" ? "Enter Text" : "Enter Binary (space-separated)"}
            </label>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={mode === "text-to-binary" ? "Hello World" : "01001000 01100101 01101100 01101100 01101111"}
              style={textareaStyle}
            />
          </div>

          <button onClick={swap} style={{ ...swapBtnStyle, marginBottom: "1rem" }}>⇅ Swap</button>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Result</label>
            <textarea value={output} readOnly placeholder="Result will appear here..." style={textareaStyle} />
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
            <button onClick={convert} className="btn-glow" style={{ flex: 1 }}>Convert</button>
            <button onClick={copy} disabled={!output} style={{ ...btnStyle, opacity: output ? 1 : 0.5 }}>📋 Copy</button>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Quick Examples</h2>
          <div style={{ display: "grid", gap: "0.75rem", fontSize: "0.9rem" }}>
            {[
              { text: "A", binary: "01000001" },
              { text: "Hi", binary: "01001000 01101001" },
              { text: "abc", binary: "01100001 01100010 01100011" },
              { text: "123", binary: "00110001 00110010 00110011" },
            ].map((ex, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "var(--card-bg)", borderRadius: "0.5rem", fontFamily: "monospace" }}>
                <span style={{ color: "var(--text-primary)" }}>{ex.text}</span>
                <span style={{ color: "var(--primary-light)" }}>{ex.binary}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const tabStyle = { flex: 1, padding: "0.75rem", borderRadius: "0.5rem", border: "1px solid", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem", transition: "all 0.2s" };
const textareaStyle = { width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontFamily: "monospace", fontSize: "0.95rem", resize: "vertical" as const, minHeight: "100px" };
const btnStyle = { padding: "0.75rem 1.5rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "var(--card-bg)", color: "var(--primary-light)", cursor: "pointer", fontWeight: 600 };
const swapBtnStyle = { width: "100%", padding: "0.6rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "var(--card-bg)", color: "var(--text-muted)", cursor: "pointer", fontSize: "0.9rem" };
