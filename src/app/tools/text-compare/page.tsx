"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

interface DiffLine {
  type: "add" | "remove" | "same";
  content: string;
}

export default function TextComparePage() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState<DiffLine[]>([]);
  const [viewMode, setViewMode] = useState<"split" | "unified">("split");

  const computeDiff = (): DiffLine[] => {
    if (!text1.trim() && !text2.trim()) return [];
    
    const lines1 = text1.split("\n");
    const lines2 = text2.split("\n");
    const result: DiffLine[] = [];

    const maxLen = Math.max(lines1.length, lines2.length);
    for (let i = 0; i < maxLen; i++) {
      const line1 = lines1[i] || "";
      const line2 = lines2[i] || "";

      if (line1 === line2) {
        result.push({ type: "same", content: line1 });
      } else {
        if (line1) result.push({ type: "remove", content: line1 });
        if (line2) result.push({ type: "add", content: line2 });
      }
    }

    return result;
  };

  const handleText1Change = (value: string) => {
    setText1(value);
    const diffResult = computeDiff();
    setDiff(diffResult);
  };

  const handleText2Change = (value: string) => {
    setText2(value);
    const diffResult = computeDiff();
    setDiff(diffResult);
  };

  const stats = {
    added: diff.filter((d) => d.type === "add").length,
    removed: diff.filter((d) => d.type === "remove").length,
    same: diff.filter((d) => d.type === "same").length,
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Text Compare</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Compare two texts instantly and see the differences</p>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <button
            onClick={() => setViewMode("split")}
            style={{
              padding: "0.9rem 1.8rem",
              borderRadius: "0.5rem",
              border: "1px solid",
              background: viewMode === "split" ? "linear-gradient(120deg, #a78bfa, #c084fc)" : "rgba(255,255,255,0.05)",
              borderColor: viewMode === "split" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
              color: viewMode === "split" ? "#fff" : "#c4b5fd",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            📑 Split View
          </button>
          <button
            onClick={() => setViewMode("unified")}
            style={{
              padding: "0.9rem 1.8rem",
              borderRadius: "0.5rem",
              border: "1px solid",
              background: viewMode === "unified" ? "linear-gradient(120deg, #a78bfa, #c084fc)" : "rgba(255,255,255,0.05)",
              borderColor: viewMode === "unified" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
              color: viewMode === "unified" ? "#fff" : "#c4b5fd",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
          >
            📜 Unified View
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.75rem" }}>Text 1</label>
            <textarea
              value={text1}
              onChange={(e) => handleText1Change(e.target.value)}
              placeholder="Enter first text..."
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
          </div>

          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.75rem" }}>Text 2</label>
            <textarea
              value={text2}
              onChange={(e) => handleText2Change(e.target.value)}
              placeholder="Enter second text..."
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
          </div>
        </div>

        {diff.length > 0 && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ padding: "1.25rem", borderRadius: "0.75rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#86efac" }}>{stats.same}</div>
                <div style={{ fontSize: "0.95rem", color: "rgba(220,210,255,0.72)" }}>Unchanged</div>
              </div>
              <div style={{ padding: "1.25rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#fca5a5" }}>{stats.removed}</div>
                <div style={{ fontSize: "0.95rem", color: "rgba(220,210,255,0.72)" }}>Removed</div>
              </div>
              <div style={{ padding: "1.25rem", borderRadius: "0.75rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#86efac" }}>{stats.added}</div>
                <div style={{ fontSize: "0.95rem", color: "rgba(220,210,255,0.72)" }}>Added</div>
              </div>
            </div>

            <div style={{ padding: "1.25rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", maxHeight: "400px", overflow: "auto" }}>
              {diff.map((line, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.7rem",
                    background:
                      line.type === "add"
                        ? "rgba(34,197,94,0.15)"
                        : line.type === "remove"
                          ? "rgba(239,68,68,0.15)"
                          : "transparent",
                    borderLeft:
                      line.type === "add"
                        ? "3px solid #86efac"
                        : line.type === "remove"
                          ? "3px solid #fca5a5"
                          : "3px solid transparent",
                    color:
                      line.type === "add"
                        ? "#86efac"
                        : line.type === "remove"
                          ? "#fca5a5"
                          : "#ede9ff",
                    fontFamily: "monospace",
                    fontSize: "0.95rem",
                  }}
                >
                  <span style={{ marginRight: "0.75rem" }}>
                    {line.type === "add" ? "+" : line.type === "remove" ? "−" : " "}
                  </span>
                  {line.content || "∅"}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
