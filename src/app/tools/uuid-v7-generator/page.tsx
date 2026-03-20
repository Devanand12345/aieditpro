"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

function generateUUIDv7(): string {
  const now = Date.now();
  const timestampHex = now.toString(16).padStart(12, "0");
  const randomHex = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, "0")).join("").slice(0, 12);
  return `${timestampHex.slice(0, 8)}-${timestampHex.slice(8, 12)}-${"7" + randomHex.slice(0, 3)}-${randomHex.slice(3, 7)}-${randomHex.slice(7)}`;
}

function generateUUIDv4(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0;
    return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export default function UuidV7Page() {
  const [uuidv7, setUuidv7] = useState(generateUUIDv7());
  const [uuidv4, setUuidv4] = useState(generateUUIDv4());
  const [count, setCount] = useState(1);

  const generateBulk = (type: "v7" | "v4", num: number) => {
    const uuids = Array.from({ length: num }, () => type === "v7" ? generateUUIDv7() : generateUUIDv4());
    return uuids.join("\n");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>UUID v7 Generator</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Generate time-ordered UUIDs that sort chronologically</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "1.5rem" }}>
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--primary-light)" }}>UUID v7 (Time-Ordered)</h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>Best for database primary keys - sorts by creation time</p>
            <div style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              background: "var(--input-bg)",
              border: "1px solid var(--input-border)",
              fontFamily: "monospace",
              fontSize: "0.95rem",
              color: "var(--text-primary)",
              wordBreak: "break-all",
              marginBottom: "1rem",
            }}>
              {uuidv7}
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={() => setUuidv7(generateUUIDv7())} className="btn-glow" style={{ flex: 1, fontSize: "0.9rem", padding: "0.6rem" }}>
                🔄 Generate
              </button>
              <button onClick={() => navigator.clipboard.writeText(uuidv7)} style={{
                padding: "0.6rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--input-border)",
                background: "var(--card-bg)",
                color: "var(--primary-light)",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}>
                📋 Copy
              </button>
            </div>
          </div>

          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--primary-light)" }}>UUID v4 (Random)</h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1rem" }}>Traditional random UUIDs - no time ordering</p>
            <div style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              background: "var(--input-bg)",
              border: "1px solid var(--input-border)",
              fontFamily: "monospace",
              fontSize: "0.95rem",
              color: "var(--text-primary)",
              wordBreak: "break-all",
              marginBottom: "1rem",
            }}>
              {uuidv4}
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={() => setUuidv4(generateUUIDv4())} className="btn-glow" style={{ flex: 1, fontSize: "0.9rem", padding: "0.6rem" }}>
                🔄 Generate
              </button>
              <button onClick={() => navigator.clipboard.writeText(uuidv4)} style={{
                padding: "0.6rem 1rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--input-border)",
                background: "var(--card-bg)",
                color: "var(--primary-light)",
                cursor: "pointer",
                fontSize: "0.9rem",
              }}>
                📋 Copy
              </button>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Bulk Generate</h2>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={e => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
              style={{
                width: "100px",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--input-border)",
                background: "var(--input-bg)",
                color: "var(--text-primary)",
                fontSize: "1rem",
              }}
            />
            <button onClick={() => {
              const bulk = generateBulk("v7", count);
              navigator.clipboard.writeText(bulk);
            }} className="btn-glow" style={{ fontSize: "0.9rem", padding: "0.75rem 1.5rem" }}>
              Generate {count} UUIDv7
            </button>
            <button onClick={() => {
              const bulk = generateBulk("v4", count);
              navigator.clipboard.writeText(bulk);
            }} style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid var(--input-border)",
              background: "var(--card-bg)",
              color: "var(--primary-light)",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}>
              Generate {count} UUIDv4
            </button>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "1.5rem", marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>UUID v7 vs v4</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", fontSize: "0.9rem" }}>
            <div>
              <h3 style={{ color: "var(--primary-light)", marginBottom: "0.5rem" }}>UUID v7 Advantages</h3>
              <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
                <li>Time-ordered (sortable by creation time)</li>
                <li>Better database performance (B-tree indexes)</li>
                <li>No random I/O on insertion</li>
                <li>Monotonically increasing</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "var(--primary-light)", marginBottom: "0.5rem" }}>UUID v4 Use Cases</h3>
              <ul style={{ color: "var(--text-muted)", paddingLeft: "1.2rem", lineHeight: 1.8 }}>
                <li>Security (unpredictable IDs)</li>
                <li>Distributed systems</li>
                <li>Public identifiers</li>
                <li>When order doesn&apos;t matter</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
