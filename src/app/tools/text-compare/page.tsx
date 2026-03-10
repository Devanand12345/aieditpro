"use client";

import { useState } from "react";
import Link from "next/link";

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

  const handleCompare = () => {
    const diffResult = computeDiff();
    setDiff(diffResult);
  };

  const stats = {
    added: diff.filter((d) => d.type === "add").length,
    removed: diff.filter((d) => d.type === "remove").length,
    same: diff.filter((d) => d.type === "same").length,
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.75)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          Back to Tools
        </Link>

        <h1 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>Text Compare</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Compare two texts and see the differences</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Text 1</label>
            <textarea
              value={text1}
              onChange={(e) => setText1(e.target.value)}
              placeholder="Enter first text..."
              style={{
                width: "100%",
                height: "300px",
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

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>Text 2</label>
            <textarea
              value={text2}
              onChange={(e) => setText2(e.target.value)}
              placeholder="Enter second text..."
              style={{
                width: "100%",
                height: "300px",
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
        </div>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <button
            onClick={handleCompare}
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
            Compare
          </button>
          <button
            onClick={() => setViewMode("split")}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid",
              background: viewMode === "split" ? "rgba(168,124,246,0.3)" : "rgba(255,255,255,0.05)",
              borderColor: viewMode === "split" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
              color: "#c4b5fd",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Split View
          </button>
          <button
            onClick={() => setViewMode("unified")}
            style={{
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              border: "1px solid",
              background: viewMode === "unified" ? "rgba(168,124,246,0.3)" : "rgba(255,255,255,0.05)",
              borderColor: viewMode === "unified" ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
              color: "#c4b5fd",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Unified View
          </button>
        </div>

        {diff.length > 0 && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#86efac" }}>{stats.same}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>Unchanged</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fca5a5" }}>{stats.removed}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>Removed</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#86efac" }}>{stats.added}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>Added</div>
              </div>
            </div>

            <div style={{ padding: "1rem", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(30,27,75,0.6)", maxHeight: "400px", overflow: "auto" }}>
              {diff.map((line, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: "0.5rem",
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
                    fontSize: "0.875rem",
                  }}
                >
                  <span style={{ marginRight: "0.5rem" }}>
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
