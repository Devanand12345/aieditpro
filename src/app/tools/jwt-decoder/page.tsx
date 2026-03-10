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

  const handleDecode = () => {
    setError("");
    setDecoded(null);
    try {
      if (!input.trim()) {
        setError("Please paste a JWT token");
        return;
      }
      const result = decodeJWT(input.trim());
      setDecoded(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error decoding JWT");
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>JWT Decoder</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Decode and analyze JWT tokens</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>JWT Token</label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JWT token here..."
                style={{
                  width: "100%",
                  height: "300px",
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

            <button
              onClick={handleDecode}
              style={{
                width: "100%",
                padding: "1rem 1.8rem",
                borderRadius: "0.5rem",
                border: "none",
                background: "linear-gradient(120deg, #a78bfa, #c084fc)",
                color: "#fff",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.95rem",
              }}
            >
              Decode
            </button>

            {error && (
              <div style={{ marginTop: "1rem", padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem" }}>
                {error}
              </div>
            )}
          </div>

          <div>
            {decoded && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(30,27,75,0.6)" }}>
                  <h3 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "0.75rem", fontSize: "1rem" }}>Header</h3>
                  <pre style={{ color: "#ede9ff", fontSize: "0.85rem", overflow: "auto", maxHeight: "150px", margin: 0 }}>
                    {JSON.stringify(decoded.header, null, 2)}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(decoded.header))}
                    style={{ marginTop: "0.75rem", padding: "0.7rem 1.2rem", borderRadius: "0.5rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(168,124,246,0.2)", color: "#c4b5fd", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}
                  >
                    📋 Copy
                  </button>
                </div>

                <div style={{ padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(30,27,75,0.6)" }}>
                  <h3 style={{ color: "#c4b5fd", fontWeight: 600, marginBottom: "0.75rem", fontSize: "1rem" }}>Payload</h3>
                  <pre style={{ color: "#ede9ff", fontSize: "0.85rem", overflow: "auto", maxHeight: "200px", margin: 0 }}>
                    {JSON.stringify(decoded.payload, null, 2)}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(JSON.stringify(decoded.payload))}
                    style={{ marginTop: "0.75rem", padding: "0.7rem 1.2rem", borderRadius: "0.5rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(168,124,246,0.2)", color: "#c4b5fd", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}
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
