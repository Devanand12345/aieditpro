"use client";

import { useState } from "react";
import Link from "next/link";

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
        // Minify
        return xmlDoc.documentElement.outerHTML.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();
      }

      // Beautify
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

  const handleProcess = () => {
    setError("");
    try {
      if (!input.trim()) {
        setError("Please enter XML");
        return;
      }
      const result = formatXml(input, mode === "beautify");
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
        <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.75)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          Back to Tools
        </Link>

        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>XML Formatter</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Format and minify XML code</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Input XML</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your XML here..."
                style={{
                  width: "100%",
                  height: "400px",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(30,27,75,0.6)",
                  color: "#ede9ff",
                  fontFamily: "monospace",
                  fontSize: "0.875rem",
                  resize: "none",
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
              <button
                onClick={() => setMode("beautify")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  background: mode === "beautify" ? "rgba(168,124,246,0.3)" : "rgba(255,255,255,0.05)",
                  borderColor: mode === "beautify" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Beautify
              </button>
              <button
                onClick={() => setMode("minify")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  background: mode === "minify" ? "rgba(168,124,246,0.3)" : "rgba(255,255,255,0.05)",
                  borderColor: mode === "minify" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Minify
              </button>
              <button
                onClick={handleProcess}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  background: "linear-gradient(120deg, #a78bfa, #c084fc)",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Process
              </button>
            </div>

            {error && (
              <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.875rem" }}>
                {error}
              </div>
            )}
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Output</label>
            <textarea
              value={output}
              readOnly
              style={{
                width: "100%",
                height: "400px",
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(168,124,246,0.3)",
                background: "rgba(30,27,75,0.6)",
                color: "#ede9ff",
                fontFamily: "monospace",
                fontSize: "0.875rem",
                resize: "none",
              }}
            />
            {output && (
              <button
                onClick={copyToClipboard}
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
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
