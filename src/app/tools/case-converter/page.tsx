"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

type CaseType = "upper" | "lower" | "title" | "sentence" | "camel" | "pascal" | "snake" | "kebab" | "toggle";

const caseFunctions: Record<CaseType, (text: string) => string> = {
  upper: t => t.toUpperCase(),
  lower: t => t.toLowerCase(),
  title: t => t.replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
  sentence: t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase(),
  camel: t => t.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "").replace(/^(.)/, w => w.toLowerCase()),
  pascal: t => t.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : "").replace(/^(.)/, w => w.toUpperCase()),
  snake: t => t.replace(/([a-z])([A-Z])/g, "$1_$2").replace(/[\s-]+/g, "_").toLowerCase(),
  kebab: t => t.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(),
  toggle: t => t.split("").map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join(""),
};

const caseLabels: Record<CaseType, string> = {
  upper: "UPPERCASE", lower: "lowercase", title: "Title Case", sentence: "Sentence case",
  camel: "camelCase", pascal: "PascalCase", snake: "snake_case", kebab: "kebab-case", toggle: "tOGGLE cASE",
};

export default function CaseConverterPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<Record<CaseType, string>>({} as Record<CaseType, string>);

  const convert = () => {
    if (!input.trim()) { setResult({} as Record<CaseType, string>); return; }
    setResult(Object.fromEntries(Object.entries(caseFunctions).map(([k, fn]) => [k, fn(input)])) as Record<CaseType, string>);
  };

  const copy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Case Converter</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Convert text to any case format instantly</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Enter Text</label>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Enter or paste your text here..."
              style={textareaStyle}
            />
          </div>
          <button onClick={convert} className="btn-glow" style={{ width: "100%", marginBottom: "1rem" }}>Convert All Cases</button>
        </div>

        {Object.keys(result).length > 0 && (
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Converted Text</h2>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {(Object.keys(caseLabels) as CaseType[]).map(type => (
                <div key={type} style={{ display: "flex", gap: "0.75rem", alignItems: "stretch" }}>
                  <div style={{ width: "120px", display: "flex", alignItems: "center", fontSize: "0.75rem", fontWeight: 600, color: "var(--primary-light)", flexShrink: 0 }}>{caseLabels[type]}</div>
                  <div style={{ flex: 1, padding: "0.75rem 1rem", background: "var(--input-bg)", borderRadius: "0.5rem", fontFamily: "monospace", fontSize: "0.9rem", color: "var(--text-primary)", wordBreak: "break-all" }}>{result[type]}</div>
                  <button onClick={() => copy(result[type])} style={copyBtnStyle}>📋</button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const textareaStyle = { width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem", resize: "vertical" as const, minHeight: "120px" };
const copyBtnStyle = { padding: "0.5rem 0.75rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "var(--card-bg)", color: "var(--primary-light)", cursor: "pointer", flexShrink: 0 };
