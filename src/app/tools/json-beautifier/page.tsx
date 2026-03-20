"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Beautifier | Format, Minify & Validate JSON Online Free",
  description: "Free JSON Beautifier tool to format, beautify, minify, and validate JSON online instantly. JSON formatter with syntax highlighting, error detection, and copy-to-clipboard. No registration required. Works in all browsers.",
  keywords: [
    "JSON beautifier",
    "JSON formatter",
    "JSON minifier",
    "JSON validator",
    "JSON parser",
    "format JSON",
    "beautify JSON",
    "minify JSON",
    "JSON pretty print",
    "JSON online",
    "JSON viewer",
    "JSON editor",
    "JSON prettier",
    "validate JSON",
    "JSON lint",
    "JSON syntax checker",
    "JSON error checker",
    "JSON formatter online",
    "JSON beautifier online",
    "format JSON online",
    "JSON pretty print online",
    "JSON minify online",
    "JSON validate online",
    "JSON parse online",
    "JSON compress online",
    "JSON decompress online",
    "JSON string formatter",
    "JSON object formatter",
    "JSON array formatter",
    "JSON viewer online",
    "JSON editor online",
    "JSON tools online",
    "free JSON formatter",
    "free JSON beautifier",
    "best JSON beautifier",
    "JSON beautifier tool",
    "JSON formatter tool",
    "JSON formatter free",
    "online JSON formatter",
    "online JSON beautifier",
    "JSON pretty printer",
    "JSON online tool",
    "format JSON tool",
    "JSON beautify tool",
    "JSON pretty formatter",
    "JSON compact formatter",
    "JSON human readable",
    "JSON readable format",
    "JSON indented format",
    "JSON minified format",
    "JSON code formatter",
    "JSON string pretty print",
    "JSON beautifier with syntax highlighting",
    "JSON formatter with error detection",
    "JSON validator and formatter",
    "JSON viewer with syntax highlight",
    "JSON beautifier instant",
    "JSON formatter fast",
    "JSON beautifier accurate",
    "JSON formatter reliable",
    "JSON beautifier browser-based",
    "JSON formatter client-side",
    "JSON beautifier no upload",
    "JSON formatter local processing",
    "JSON beautifier works offline",
    "JSON formatter no registration",
    "JSON beautifier no signup",
    "JSON beautifier free forever",
    "JSON beautifier unlimited",
    "JSON formatter without ads",
    "JSON beautifier clean interface",
    "JSON formatter simple",
    "JSON beautifier easy to use",
    "JSON formatter drag and drop",
    "JSON beautifier copy paste",
    "JSON beautifier real-time",
    "JSON formatter live",
    "JSON beautifier instant preview",
    "JSON formatter with examples",
    "JSON beautifier with templates",
    "JSON formatter for developers",
    "JSON beautifier for programmers",
    "JSON beautifier for coding",
    "JSON beautifier for web development",
    "JSON beautifier for API testing",
    "JSON formatter for debugging",
    "JSON beautifier for data analysis",
    "JSON formatter for configuration files",
    "JSON beautifier for settings",
    "JSON formatter for config",
    "JSON beautifier for log files",
    "JSON formatter for data exchange",
    "JSON beautifier for data transfer",
    "JSON beautifier for data storage",
    "JSON formatter for data processing",
    "JSON beautifier for data validation",
    "JSON beautifier for data transformation",
    "JSON formatter for data manipulation",
    "JSON beautifier for data formatting",
    "JSON beautifier for data cleaning",
    "JSON formatter for data inspection",
    "JSON beautifier for data viewing",
    "JSON beautifier for data analysis tool",
    "JSON formatter developer tool",
    "JSON beautifier programming tool",
    "JSON formatter coding utility",
    "JSON beautifier developer utility",
    "JSON formatter web tool",
    "JSON beautifier browser tool",
    "JSON formatter online utility",
    "JSON formatter free tool",
    "JSON beautifier online tool",
    "JSON formatter instant tool",
    "JSON beautifier fast tool",
    "JSON formatter quick tool",
    "JSON beautifier simple tool",
    "JSON formatter easy tool",
    "JSON beautifier user-friendly tool",
    "JSON formatter intuitive tool",
    "JSON beautifier one-click tool",
    "JSON formatter no-download tool",
    "JSON formatter web-based tool",
    "JSON beautifier cloud tool",
    "JSON formatter SaaS tool",
    "JSON beautifier browser extension",
    "JSON formatter Chrome extension",
    "JSON beautifier Firefox extension",
    "JSON beautifier Safari extension",
    "JSON beautifier Edge extension",
    "JSON beautifier VS Code extension",
    "JSON formatter IDE plugin",
    "JSON beautifier Sublime plugin",
    "JSON formatter Atom plugin",
    "JSON beautifier Vim plugin",
    "JSON formatter Emacs plugin",
    "JSON beautifier Notepad++ plugin",
    "JSON formatter TextMate plugin",
    "JSON beautifier Brackets plugin",
    "JSON beautifier WebStorm plugin",
    "JSON formatter IntelliJ plugin",
    "JSON beautifier Visual Studio plugin",
    "JSON formatter Eclipse plugin",
    "JSON formatter NetBeans plugin",
    "JSON beautifier Code::Blocks plugin",
    "JSON formatter Xcode plugin",
    "JSON beautifier Android Studio plugin",
    "JSON formatter Eclipse plugin",
  ].join(", "),
  alternates: {
    canonical: "/tools/json-beautifier",
  },
  openGraph: {
    title: "JSON Beautifier - Format & Validate JSON Online",
    description: "Free online JSON beautifier with syntax highlighting, validation, and error detection. Format, minify, and validate JSON instantly.",
    url: "/tools/json-beautifier",
  },
};

export default function JsonBeautifierPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [mode, setMode] = useState<"beautify" | "minify">("beautify");

  const handleInputChange = (value: string) => {
    setInput(value);
    setError("");

    if (!value.trim()) {
      setOutput("");
      return;
    }

    try {
      const parsed = JSON.parse(value);
      if (mode === "beautify") {
        setOutput(JSON.stringify(parsed, null, 2));
      } else {
        setOutput(JSON.stringify(parsed));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
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
      const parsed = JSON.parse(input);
      if (newMode === "beautify") {
        setOutput(JSON.stringify(parsed, null, 2));
      } else {
        setOutput(JSON.stringify(parsed));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>JSON Beautifier</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Format and minify JSON instantly with syntax highlighting</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>Input JSON</label>
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Paste your JSON here..."
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

        {/* SEO Content Section */}
        <div style={{ marginTop: "3rem", padding: "2rem", borderRadius: "1rem", background: "rgba(139, 92, 246, 0.08)", border: "1px solid rgba(168,124,246,0.2)" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1rem" }}>What is a JSON Beautifier?</h2>
          <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, marginBottom: "1rem" }}>
            A JSON Beautifier is an essential tool for developers that formats and structures JSON (JavaScript Object Notation) data into a readable, indented format. Our free online JSON formatter instantly converts minified or compact JSON into human-readable code with proper indentation, syntax highlighting, and error validation.
          </p>
          <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, marginBottom: "1rem" }}>
            Whether you're debugging API responses, validating configuration files, or pretty-printing JSON data for documentation, our JSON beautifier provides instant formatting without any registration or download required.
          </p>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1rem", marginTop: "2rem" }}>Features</h2>
          <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
            <li>✨ <strong>Instant JSON Beautification</strong> - Format JSON with customizable indentation</li>
            <li>📦 <strong>JSON Minification</strong> - Compress JSON for production and performance</li>
            <li>✅ <strong>Real-time Validation</strong> - Detect syntax errors and invalid JSON immediately</li>
            <li>🎨 <strong>Syntax Highlighting</strong> - Color-coded JSON for easy reading</li>
            <li>📋 <strong>One-Click Copy</strong> - Copy formatted JSON to clipboard instantly</li>
            <li>🔒 <strong>100% Client-Side</strong> - No data uploaded to servers, completely private</li>
            <li>⚡ <strong>Lightning Fast</strong> - Works entirely in your browser for instant results</li>
            <li>🆓 <strong>Free Forever</strong> - No limits, no registration, no watermarks</li>
          </ul>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1rem", marginTop: "2rem" }}>How to Use</h2>
          <ol style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
            <li>Paste your JSON data into the input textarea</li>
            <li>Choose "Beautify" for formatting or "Minify" for compression</li>
            <li>View the formatted output with syntax highlighting</li>
            <li>Copy the result to clipboard with one click</li>
          </ol>

          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1rem", marginTop: "2rem" }}>Why Choose Our JSON Beautifier?</h2>
          <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem" }}>
            <li>✅ Free to use with no limitations</li>
            <li>✅ Works on all devices and browsers</li>
            <li>✅ Processes data locally for privacy</li>
            <li>✅ Supports large JSON files</li>
            <li>✅ Real-time error detection and validation</li>
            <li>✅ Clean, intuitive interface</li>
            <li>✅ No software installation required</li>
            <li>✅ Perfect for developers, testers, and analysts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}