"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

function encodeHtml(str: string): string {
  return str.replace(/[&<>"']/g, tag => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[tag]!);
}

function decodeHtml(str: string): string {
  const entities: Record<string, string> = {
    "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'",
    "&nbsp;": " ", "&copy;": "©", "&reg;": "®", "&trade;": "™",
    "&lt;br&gt;": "<br>", "&lt;hr&gt;": "<hr>",
  };
  let result = str;
  for (const [entity, char] of Object.entries(entities)) {
    result = result.split(entity).join(char);
  }
  result = result.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)));
  result = result.replace(/&#x([a-fA-F0-9]+);/g, (_, code) => String.fromCharCode(parseInt(code, 16)));
  return result;
}

export default function HtmlEncoderPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");

  const process = (value: string) => {
    setInput(value);
    if (!value.trim()) {
      setOutput("");
      return;
    }
    setOutput(mode === "encode" ? encodeHtml(value) : decodeHtml(value));
  };

  const swap = () => {
    setInput(output);
    setOutput(mode === "encode" ? input : input);
    setMode(m => m === "encode" ? "decode" : "encode");
  };

  const copy = () => navigator.clipboard.writeText(output);

  const TextArea = ({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) => (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%",
        height: "180px",
        padding: "1rem",
        borderRadius: "0.75rem",
        border: "1px solid var(--input-border)",
        background: "var(--input-bg)",
        color: "var(--text-primary)",
        fontFamily: "monospace",
        fontSize: "0.95rem",
        resize: "vertical",
      }}
    />
  );

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>HTML Encoder/Decoder</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Encode special characters to HTML entities or decode them back</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <button
              onClick={() => { setMode("encode"); setOutput(""); }}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid",
                borderColor: mode === "encode" ? "var(--primary)" : "var(--input-border)",
                background: mode === "encode" ? "var(--primary)" : "var(--card-bg)",
                color: mode === "encode" ? "#fff" : "var(--text-primary)",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              🔒 Encode
            </button>
            <button
              onClick={() => { setMode("decode"); setOutput(""); }}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid",
                borderColor: mode === "decode" ? "var(--primary)" : "var(--input-border)",
                background: mode === "decode" ? "var(--primary)" : "var(--card-bg)",
                color: mode === "decode" ? "#fff" : "var(--text-primary)",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              🔓 Decode
            </button>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <TextArea
              value={input}
              onChange={process}
              placeholder={mode === "encode" ? "Enter text to encode (e.g., <div>Hello & 'World'</div>)..." : "Enter HTML entities to decode (e.g., &lt;div&gt;Hello &amp; &#39;World&#39;&lt;/div&gt;)..."}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
            <button onClick={swap} style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--input-border)",
              background: "var(--card-bg)",
              color: "var(--primary-light)",
              cursor: "pointer",
              fontSize: "0.9rem",
            }}>
              ⇅ Swap
            </button>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Result</label>
            <TextArea value={output} onChange={() => {}} placeholder="Output will appear here..." />
          </div>

          {output && (
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              <button onClick={copy} className="btn-glow" style={{ flex: 1 }}>📋 Copy Result</button>
            </div>
          )}
        </div>

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Quick Reference</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.5rem", fontSize: "0.85rem" }}>
            {[
              ["<", "&lt;"], [">", "&gt;"], ["&", "&amp;"], ['"', "&quot;"],
              ["'", "&#39;"], [" ", "&nbsp;"], ["©", "&copy;"], ["®", "&reg;"],
            ].map(([char, entity]) => (
              <div key={char} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem", background: "var(--card-bg)", borderRadius: "0.4rem", fontFamily: "monospace" }}>
                <span style={{ color: "var(--text-muted)" }}>{char}</span>
                <span style={{ color: "var(--primary-light)" }}>{entity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
