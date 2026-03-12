"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function XmlFormatterPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"beautify" | "minify">("beautify");

  const formatXml = (xml: string, pretty: boolean): string => {
    try {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xml, "application/xml");

      if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
        throw new Error("Invalid XML");
      }

      if (!pretty) {
        return xmlDoc.documentElement.outerHTML.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
      }

      const formatted = formatNode(xmlDoc.documentElement, 0);
      return formatted;
    } catch (err) {
      throw err;
    }
  };

  const formatNode = (node: Element | Document, indent: number): string => {
    let result = "";
    const indentStr = "  ".repeat(indent);
    const nextIndentStr = "  ".repeat(indent + 1);

    if (node.nodeType === Node.DOCUMENT_NODE) {
      for (let i = 0; i < node.childNodes.length; i++) {
        const child = node.childNodes[i];
        if (child.nodeType === Node.ELEMENT_NODE) {
          result += formatNode(child as Element, indent);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      result += indentStr + "<" + node.nodeName;

      for (let i = 0; i < node.attributes.length; i++) {
        const attr = node.attributes[i];
        result += ` ${attr.name}="${attr.value}"`;
      }

      if (node.childNodes.length === 0) {
        result += " />\n";
      } else {
        result += ">\n";

        for (let i = 0; i < node.childNodes.length; i++) {
          const child = node.childNodes[i];
          if (child.nodeType === Node.ELEMENT_NODE) {
            result += formatNode(child as Element, indent + 1);
          } else if (child.nodeType === Node.TEXT_NODE) {
            const text = child.textContent?.trim();
            if (text) {
              result += nextIndentStr + text + "\n";
            }
          }
        }

        result += indentStr + "</" + node.nodeName + ">\n";
      }
    }

    return result;
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    setError("");

    if (!value.trim()) {
      setOutput("");
      return;
    }

    try {
      const result = formatXml(value, mode === "beautify");
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error processing XML");
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
      const result = formatXml(input, newMode === "beautify");
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error processing XML");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>XML Formatter</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Format and minify XML code instantly</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>Input XML</label>
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Paste your XML here..."
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
