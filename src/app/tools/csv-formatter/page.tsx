"use client";

import { useState } from "react";
import BackToToolsButton from "@/components/BackToToolsButton";

export default function CsvFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"beautify" | "minify">("beautify");

  const parseCSV = (csv: string): string[][] => {
    const rows = [];
    let currentRow = [];
    let currentField = "";
    let insideQuotes = false;

    for (let i = 0; i < csv.length; i++) {
      const char = csv[i];
      const nextChar = csv[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          currentField += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === "," && !insideQuotes) {
        currentRow.push(currentField.trim());
        currentField = "";
      } else if ((char === "\n" || char === "\r") && !insideQuotes) {
        if (currentField || currentRow.length > 0) {
          currentRow.push(currentField.trim());
          if (currentRow.some((f) => f)) {
            rows.push(currentRow);
          }
          currentRow = [];
          currentField = "";
        }
        if (char === "\r" && nextChar === "\n") i++;
      } else {
        currentField += char;
      }
    }

    if (currentField || currentRow.length > 0) {
      currentRow.push(currentField.trim());
      if (currentRow.some((f) => f)) {
        rows.push(currentRow);
      }
    }

    return rows;
  };

  const formatCSV = (rows: string[][], pretty: boolean): string => {
    if (pretty) {
      // Beautified format with proper spacing
      if (rows.length === 0) return "";

      const colWidths = Array(rows[0].length).fill(0);
      rows.forEach((row) => {
        row.forEach((field, idx) => {
          colWidths[idx] = Math.max(colWidths[idx], field.length);
        });
      });

      return rows
        .map((row) => row.map((field, idx) => field.padEnd(colWidths[idx])).join(" | "))
        .join("\n");
    } else {
      // Minified CSV
      return rows.map((row) => row.map((f) => (f.includes(",") ? `"${f}"` : f)).join(",")).join("\n");
    }
  };

  const handleProcess = () => {
    setError("");
    try {
      if (!input.trim()) {
        setError("Please enter CSV data");
        return;
      }
      const rows = parseCSV(input);
      const result = formatCSV(rows, mode === "beautify");
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error processing CSV");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>CSV Formatter</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Format and convert CSV data</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Input CSV</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your CSV data here..."
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

            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <button
                onClick={() => setMode("beautify")}
                style={{
                  padding: "0.9rem 1.5rem",
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
                  padding: "0.9rem 1.5rem",
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
                  padding: "0.9rem 1.5rem",
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
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Output</label>
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
