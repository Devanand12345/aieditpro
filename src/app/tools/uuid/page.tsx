"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

export default function UuidGeneratorPage() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [count, setCount] = useState(1);
  const [version, setVersion] = useState<"v4" | "v1">("v4");

  const generateUUIDv4 = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const generateUUIDv1 = (): string => {
    const timestamp = Date.now();
    const randomBytes = Array.from({ length: 6 }, () => Math.floor(Math.random() * 256));

    const timeLow = (timestamp & 0xffffffff).toString(16).padStart(8, "0");
    const timeMid = ((timestamp >> 32) & 0xffff).toString(16).padStart(4, "0");
    const timeHighVersion = (((timestamp >> 48) & 0xfff) | 0x1000).toString(16).padStart(4, "0");
    const clockSeq = (Math.floor(Math.random() * 0x4000) | 0x8000).toString(16).padStart(4, "0");
    const node = randomBytes.map((b) => b.toString(16).padStart(2, "0")).join("");

    return `${timeLow}-${timeMid}-${timeHighVersion}-${clockSeq}-${node}`;
  };

  const generateUUIDs = (cnt: number, ver: "v4" | "v1") => {
    const newUuids = Array.from({ length: cnt }, () =>
      ver === "v4" ? generateUUIDv4() : generateUUIDv1()
    );
    setUuids(newUuids);
  };

  const handleCountChange = (newCount: number) => {
    setCount(newCount);
    generateUUIDs(newCount, version);
  };

  const handleVersionChange = (ver: "v4" | "v1") => {
    setVersion(ver);
    generateUUIDs(count, ver);
  };

  const copyAllToClipboard = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
  };

  const copyToClipboard = (uuid: string) => {
    navigator.clipboard.writeText(uuid);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>UUID Generator</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Generate UUIDs instantly (v1 and v4)</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>UUID Version</label>
            <div style={{ display: "flex", gap: "1rem" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#c4b5fd", cursor: "pointer", fontSize: "0.95rem" }}>
                <input type="radio" name="version" checked={version === "v4"} onChange={() => handleVersionChange("v4")} />
                🎲 v4 (Random)
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#c4b5fd", cursor: "pointer", fontSize: "0.95rem" }}>
                <input type="radio" name="version" checked={version === "v1"} onChange={() => handleVersionChange("v1")} />
                ⏰ v1 (Time-based)
              </label>
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Number of UUIDs</label>
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => handleCountChange(Math.max(1, parseInt(e.target.value) || 1))}
              style={{
                width: "100%",
                padding: "1.25rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(168,124,246,0.3)",
                background: "rgba(30,27,75,0.6)",
                color: "#ede9ff",
                fontSize: "0.95rem",
              }}
            />
          </div>
        </div>

        {uuids.length > 0 && (
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
              <div style={{ fontSize: "1rem", fontWeight: 600, color: "#c4b5fd" }}>Generated UUIDs ({uuids.length})</div>
              <button
                onClick={copyAllToClipboard}
                style={{
                  padding: "0.7rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                }}
              >
                📋 Copy All
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxHeight: "400px", overflow: "auto" }}>
              {uuids.map((uuid, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "0.5rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <code style={{ color: "#86efac", fontFamily: "monospace", fontSize: "0.95rem", wordBreak: "break-all", flex: 1 }}>
                    {uuid}
                  </code>
                  <button
                    onClick={() => copyToClipboard(uuid)}
                    style={{
                      padding: "0.5rem 0.75rem",
                      borderRadius: "0.25rem",
                      border: "none",
                      background: "rgba(168,124,246,0.3)",
                      color: "#c4b5fd",
                      cursor: "pointer",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      flexShrink: 0,
                      marginLeft: "0.5rem",
                    }}
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
