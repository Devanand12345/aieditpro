"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function RandomStringPage() {
  const [length, setLength] = useState(16);
  const [output, setOutput] = useState("");
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    excludeAmbiguous: false,
  });

  const charsets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
    ambiguous: "O0Il1",
  };

  const generate = () => {
    let charset = "";
    if (options.uppercase) charset += charsets.uppercase;
    if (options.lowercase) charset += charsets.lowercase;
    if (options.numbers) charset += charsets.numbers;
    if (options.symbols) charset += charsets.symbols;
    
    if (options.excludeAmbiguous) {
      charset = charset.split("").filter(c => !charsets.ambiguous.includes(c)).join("");
    }

    if (!charset) {
      setOutput("Select at least one option");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setOutput(result);
  };

  const Option = ({ name, label }: { name: keyof typeof options; label: string }) => (
    <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
      <input
        type="checkbox"
        checked={options[name]}
        onChange={e => setOptions(o => ({ ...o, [name]: e.target.checked }))}
        style={{ width: "18px", height: "18px", accentColor: "#8b5cf6" }}
      />
      <span style={{ fontSize: "0.95rem", color: "var(--text-primary)" }}>{label}</span>
    </label>
  );

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Random String Generator</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Generate random strings, passwords, and identifiers</p>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
              Length: {length}
            </label>
            <input
              type="range"
              min={4}
              max={128}
              value={length}
              onChange={e => setLength(parseInt(e.target.value))}
              style={{ width: "100%", accentColor: "#8b5cf6" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-muted)" }}>
              <span>4</span>
              <span>128</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
            <Option name="uppercase" label="Uppercase (A-Z)" />
            <Option name="lowercase" label="Lowercase (a-z)" />
            <Option name="numbers" label="Numbers (0-9)" />
            <Option name="symbols" label="Symbols (!@#$%)" />
            <Option name="excludeAmbiguous" label="Exclude ambiguous (O0Il1)" />
          </div>

          <button onClick={generate} className="btn-glow" style={{ width: "100%", fontSize: "1rem", padding: "1rem" }}>
            🎲 Generate Random String
          </button>
        </div>

        {output && (
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.75rem" }}>Generated String</label>
            <div style={{
              padding: "1rem",
              borderRadius: "0.75rem",
              background: "var(--input-bg)",
              border: "1px solid var(--input-border)",
              fontFamily: "monospace",
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              wordBreak: "break-all",
              marginBottom: "1rem",
            }}>
              {output}
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={() => { navigator.clipboard.writeText(output); generate(); }} style={btnStyle}>
                📋 Copy & Regenerate
              </button>
              <button onClick={() => navigator.clipboard.writeText(output)} style={{ ...btnStyle, background: "var(--card-bg)" }}>
                📋 Copy Only
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const btnStyle = {
  flex: 1,
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--input-border)",
  background: "var(--primary)",
  color: "#fff",
  cursor: "pointer",
  fontSize: "0.9rem",
  fontWeight: 600,
};
