"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function HashGeneratorPage() {
  const [input, setInput] = useState("");
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const generateHashes = async () => {
    if (!input.trim()) return;

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/hash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || "Error generating hashes");
        return;
      }

      const data = await response.json();
      setHashes({
        MD5: data.md5,
        "SHA-1": data.sha1,
        "SHA-256": data.sha256,
        "SHA-512": data.sha512,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error generating hashes");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Hash Generator</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Generate MD5, SHA-1, SHA-256, and SHA-512 hashes</p>

        <div style={{ marginBottom: "2rem" }}>
          <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Text Input</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to hash..."
            style={{
              width: "100%",
              height: "150px",
              padding: "1.25rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--input-border)",
              background: "var(--input-bg)",
              color: "var(--text-primary)",
              fontFamily: "monospace",
              fontSize: "0.95rem",
              resize: "none",
            }}
          />
        </div>

        <button
          onClick={generateHashes}
          disabled={loading}
          style={{
            width: "100%",
            padding: "0.9rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            background: loading ? "rgba(168,124,246,0.5)" : "linear-gradient(120deg, #a78bfa, #c084fc)",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
            fontWeight: 600,
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}
        >
          {loading ? "Generating..." : "Generate Hashes"}
        </button>

        {error && (
          <div style={{ padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem", marginBottom: "2rem" }}>
            {error}
          </div>
        )}

        {Object.keys(hashes).length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {Object.entries(hashes).map(([type, hash]) => (
              <div key={type} style={{ padding: "1.25rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "var(--input-bg)" }}>
                <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>{type}</div>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                  <code
                    style={{
                      color: "#86efac",
                      fontFamily: "monospace",
                      fontSize: "0.95rem",
                      wordBreak: "break-all",
                      flex: 1,
                    }}
                  >
                    {hash}
                  </code>
                  <button
                    onClick={() => copyToClipboard(hash)}
                    style={{
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.25rem",
                      border: "none",
                      background: "rgba(168,124,246,0.3)",
                      color: "var(--primary-light)",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      flexShrink: 0,
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

