"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

function jsonToYaml(json: string, indent = 0): string {
  try {
    const obj = JSON.parse(json);
    return toYamlString(obj, indent);
  } catch {
    return "Invalid JSON";
  }
}

function toYamlString(obj: unknown, indent: number): string {
  const spaces = "  ".repeat(indent);
  if (obj === null) return "null";
  if (obj === undefined) return "";
  if (typeof obj === "boolean") return obj ? "true" : "false";
  if (typeof obj === "number") return obj.toString();
  if (typeof obj === "string") return obj.includes("\n") || obj.includes(":") || obj.includes("#")
    ? `"${obj.replace(/"/g, '\\"')}"`
    : obj;
  if (Array.isArray(obj)) {
    if (obj.length === 0) return "[]";
    return obj.map(item => `${spaces}- ${toYamlString(item, indent + 1)}`).join("\n");
  }
  if (typeof obj === "object") {
    const entries = Object.entries(obj as Record<string, unknown>);
    if (entries.length === 0) return "{}";
    return entries.map(([k, v]) => `${spaces}${k}: ${toYamlString(v, indent + 1)}`).join("\n");
  }
  return String(obj);
}

function yamlToJson(yaml: string): string {
  try {
    const lines = yaml.split("\n");
    const result: Record<string, unknown> = {};
    let current: Record<string, unknown> = result;
    const stack: Record<string, unknown>[] = [result];
    let currentIndent = 0;

    for (const line of lines) {
      if (!line.trim() || line.trim().startsWith("#")) continue;
      const match = line.match(/^(\s*)(.+?):\s*(.*)$/);
      if (!match) continue;
      const indent = match[1].length;
      const key = match[2];
      let value = match[3];

      while (indent < currentIndent && stack.length > 1) {
        stack.pop();
        currentIndent -= 2;
      }
      current = stack[stack.length - 1];

      if (value === "" || value === "~") {
        current[key] = {};
        stack.push(current[key] as Record<string, unknown>);
        currentIndent = indent + 2;
      } else if (value.startsWith('"') && value.endsWith('"')) {
        current[key] = value.slice(1, -1).replace(/\\"/g, '"');
      } else if (value === "true") {
        current[key] = true;
      } else if (value === "false") {
        current[key] = false;
      } else if (value === "null") {
        current[key] = null;
      } else if (!isNaN(Number(value)) && value.trim() !== "") {
        current[key] = Number(value);
      } else {
        current[key] = value;
      }
    }
    return JSON.stringify(result, null, 2);
  } catch {
    return "Invalid YAML";
  }
}

export default function JsonToYamlPage() {
  const [input, setInput] = useState('{\n  "name": "John",\n  "age": 30,\n  "skills": ["JavaScript", "Python"]\n}');
  const [mode, setMode] = useState<"json-to-yaml" | "yaml-to-json">("json-to-yaml");
  const [error, setError] = useState("");

  const output = mode === "json-to-yaml"
    ? jsonToYaml(input)
    : yamlToJson(input);

  const copy = () => navigator.clipboard.writeText(output);

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>JSON ↔ YAML Converter</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Convert between JSON and YAML formats</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            <button
              onClick={() => setMode("json-to-yaml")}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid",
                borderColor: mode === "json-to-yaml" ? "var(--primary)" : "var(--input-border)",
                background: mode === "json-to-yaml" ? "var(--primary)" : "var(--card-bg)",
                color: mode === "json-to-yaml" ? "#fff" : "var(--text-primary)",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              JSON → YAML
            </button>
            <button
              onClick={() => setMode("yaml-to-json")}
              style={{
                flex: 1,
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid",
                borderColor: mode === "yaml-to-json" ? "var(--primary)" : "var(--input-border)",
                background: mode === "yaml-to-json" ? "var(--primary)" : "var(--card-bg)",
                color: mode === "yaml-to-json" ? "#fff" : "var(--text-primary)",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              YAML → JSON
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
                {mode === "json-to-yaml" ? "JSON Input" : "YAML Input"}
              </label>
              <textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={mode === "json-to-yaml" ? '{\n  "key": "value"\n}' : 'key: value\nname: John'}
                style={textareaStyle}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
                {mode === "json-to-yaml" ? "YAML Output" : "JSON Output"}
              </label>
              <textarea
                value={output}
                readOnly
                style={{ ...textareaStyle, background: "var(--card-bg)" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
            <button onClick={copy} className="btn-glow" style={{ flex: 1 }}>📋 Copy Result</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const textareaStyle = {
  width: "100%",
  height: "250px",
  padding: "1rem",
  borderRadius: "0.75rem",
  border: "1px solid var(--input-border)",
  background: "var(--input-bg)",
  color: "var(--text-primary)",
  fontFamily: "monospace",
  fontSize: "0.9rem",
  resize: "vertical" as const,
};
