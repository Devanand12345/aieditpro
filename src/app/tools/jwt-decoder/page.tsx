"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

interface JWTPayload {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
}

export default function JwtDecoderPage() {
  const [input, setInput] = useState("");
  const [decoded, setDecoded] = useState<JWTPayload | null>(null);
  const [error, setError] = useState("");

  const decodeJWT = (token: string): JWTPayload | null => {
    try {
      const parts = token.split(".");
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format. Expected 3 parts separated by dots.");
      }

      const decode = (str: string) => {
        const json = atob(str.replace(/-/g, "+").replace(/_/g, "/"));
        return JSON.parse(json);
      };

      return {
        header: decode(parts[0]),
        payload: decode(parts[1]),
        signature: parts[2],
      };
    } catch (err) {
      throw new Error(err instanceof Error ? err.message : "Invalid JWT token");
    }
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    setError("");
    setDecoded(null);

    if (!value.trim()) {
      return;
    }

    try {
      const result = decodeJWT(value.trim());
      setDecoded(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error decoding JWT");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>JWT Decoder</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Decode and analyze JWT tokens instantly</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.75rem" }}>JWT Token</label>
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Paste your JWT token here..."
              style={{
                width: "100%",
                height: "300px",
                padding: "1.25rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--input-border)",
                background: "var(--input-bg)",
                color: "var(--text-primary)",
                fontFamily: "monospace",
                fontSize: "0.95rem",
                resize: "none",
              }}
            />

            {error && (
              <div style={{ marginTop: "1rem", padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem" }}>
                ❌ {error}
              </div>
            )}
          </div>

          <div>
            {decoded && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)" }}>
                  <h3 style={{ color: "var(--primary-light)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "1rem" }}>Header</h3>
                  <pre style={{ color: "var(--text-primary)", fontSize: "0.85rem", overflow: "auto", maxHeight: "120px", margin: 0 }}>
                    {JSON.stringify(decoded.header, null, 2)}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(decoded.header))}
                    style={{ marginTop: "0.75rem", padding: "0.7rem 1.2rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "rgba(168,124,246,0.2)", color: "var(--primary-light)", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}
                  >
                    📋 Copy
                  </button>
                </div>

                <div style={{ padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)" }}>
                  <h3 style={{ color: "var(--primary-light)", fontWeight: 600, marginBottom: "0.75rem", fontSize: "1rem" }}>Payload</h3>
                  <pre style={{ color: "var(--text-primary)", fontSize: "0.85rem", overflow: "auto", maxHeight: "150px", margin: 0 }}>
                    {JSON.stringify(decoded.payload, null, 2)}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(decoded.payload))}
                    style={{ marginTop: "0.75rem", padding: "0.7rem 1.2rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "rgba(168,124,246,0.2)", color: "var(--primary-light)", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}
                  >
                    📋 Copy
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
