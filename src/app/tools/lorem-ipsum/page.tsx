"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export default function LoremIpsumPage() {
  const [count, setCount] = useState(3);
  const [unit, setUnit] = useState<"paragraphs" | "sentences" | "words">("paragraphs");
  const [output, setOutput] = useState("");

  const generate = () => {
    let result = "";
    const sentences = loremText.split(". ").length;
    
    for (let i = 0; i < count; i++) {
      if (unit === "paragraphs") {
        result += loremText + "\n\n";
      } else if (unit === "sentences") {
        const start = (i * 5) % sentences;
        result += loremText.split(". ").slice(start, start + 5).join(". ") + ". ";
      } else {
        const words = loremText.split(" ");
        const start = (i * 30) % words.length;
        result += words.slice(start, start + 30).join(" ") + " ";
      }
    }
    setOutput(result.trim());
  };

  const copyOutput = () => {
    if (output) navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Lorem Ipsum Generator</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Generate placeholder text for your designs and mockups</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 120px" }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Count</label>
              <input
                type="number"
                min={1}
                max={100}
                value={count}
                onChange={e => setCount(Math.max(1, Math.min(100, parseInt(e.target.value) || 1)))}
                style={{ ...inputStyle, width: "100%" }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Type</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {(["paragraphs", "sentences", "words"] as const).map(u => (
                  <button
                    key={u}
                    onClick={() => setUnit(u)}
                    style={{
                      flex: 1,
                      padding: "0.6rem",
                      borderRadius: "0.5rem",
                      border: "1px solid",
                      borderColor: unit === u ? "var(--primary)" : "var(--input-border)",
                      background: unit === u ? "var(--primary)" : "var(--card-bg)",
                      color: unit === u ? "#fff" : "var(--text-primary)",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                    }}
                  >
                    {u.charAt(0).toUpperCase() + u.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button onClick={generate} className="btn-glow" style={{ width: "100%", marginBottom: "1rem" }}>
            Generate Lorem Ipsum
          </button>

          {output && (
            <>
              <textarea
                value={output}
                readOnly
                style={{ ...textareaStyle, minHeight: "200px" }}
              />
              <button onClick={copyOutput} style={{ marginTop: "1rem", ...btnStyle }}>
                📋 Copy to Clipboard
              </button>
            </>
          )}
        </div>

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Why Use Lorem Ipsum?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { title: "Web Design", desc: "Fill layouts with realistic text" },
              { title: "Print Design", desc: "Preview typography and spacing" },
              { title: "Wireframing", desc: "Focus on structure, not content" },
              { title: "Presentations", desc: "Create mockups quickly" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "1rem", background: "var(--card-bg)", borderRadius: "0.5rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem", color: "var(--primary-light)" }}>{item.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--input-border)",
  background: "var(--input-bg)",
  color: "var(--text-primary)",
  fontSize: "1rem",
};

const textareaStyle = {
  width: "100%",
  padding: "1rem",
  borderRadius: "0.75rem",
  border: "1px solid var(--input-border)",
  background: "var(--input-bg)",
  color: "var(--text-primary)",
  fontFamily: "Georgia, serif",
  fontSize: "1rem",
  resize: "vertical" as const,
};

const btnStyle = {
  padding: "0.75rem 1.5rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--input-border)",
  background: "var(--card-bg)",
  color: "var(--primary-light)",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "0.95rem",
};
