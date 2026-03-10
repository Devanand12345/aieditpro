"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

interface Difference {
  path: string;
  type: "added" | "removed" | "changed";
  oldValue?: unknown;
  newValue?: unknown;
}

export default function JsonComparePage() {
  const [json1, setJson1] = useState("");
  const [json2, setJson2] = useState("");
  const [differences, setDifferences] = useState<Difference[]>([]);
  const [error, setError] = useState("");

  const compareObjects = (obj1: unknown, obj2: unknown, path: string = ""): Difference[] => {
    const diffs: Difference[] = [];
    const type1 = typeof obj1;
    const type2 = typeof obj2;

    if (obj1 === obj2) return [];

    if (type1 !== type2 || (type1 !== "object" && obj1 !== obj2)) {
      diffs.push({
        path: path || "root",
        type: "changed",
        oldValue: obj1,
        newValue: obj2,
      });
      return diffs;
    }

    if (obj1 === null || obj2 === null) {
      diffs.push({
        path: path || "root",
        type: "changed",
        oldValue: obj1,
        newValue: obj2,
      });
      return diffs;
    }

    const keys1 = new Set(Object.keys(obj1 as Record<string, unknown>));
    const keys2 = new Set(Object.keys(obj2 as Record<string, unknown>));

    keys1.forEach((key) => {
      const newPath = path ? `${path}.${key}` : key;
      if (!keys2.has(key)) {
        diffs.push({
          path: newPath,
          type: "removed",
          oldValue: (obj1 as Record<string, unknown>)[key],
        });
      } else {
        diffs.push(
          ...compareObjects(
            (obj1 as Record<string, unknown>)[key],
            (obj2 as Record<string, unknown>)[key],
            newPath
          )
        );
      }
    });

    keys2.forEach((key) => {
      if (!keys1.has(key)) {
        const newPath = path ? `${path}.${key}` : key;
        diffs.push({
          path: newPath,
          type: "added",
          newValue: (obj2 as Record<string, unknown>)[key],
        });
      }
    });

    return diffs;
  };

  const handleCompare = () => {
    setError("");
    setDifferences([]);
    try {
      if (!json1.trim() || !json2.trim()) {
        setError("Please enter both JSON objects");
        return;
      }
      const obj1 = JSON.parse(json1);
      const obj2 = JSON.parse(json2);
      const diffs = compareObjects(obj1, obj2);
      setDifferences(diffs);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#ede9ff" }}>JSON Compare</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Compare two JSON objects and see the differences</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>JSON 1</label>
            <textarea
              value={json1}
              onChange={(e) => setJson1(e.target.value)}
              placeholder="Paste first JSON..."
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

          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>JSON 2</label>
            <textarea
              value={json2}
              onChange={(e) => setJson2(e.target.value)}
              placeholder="Paste second JSON..."
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
        </div>

        <button
          onClick={handleCompare}
          style={{
            padding: "0.9rem 1.5rem",
            borderRadius: "0.5rem",
            border: "none",
            background: "linear-gradient(120deg, #a78bfa, #c084fc)",
            color: "#fff",
            cursor: "pointer",
            fontWeight: 600,
            marginBottom: "2rem",
            fontSize: "0.95rem",
          }}
        >
          Compare
        </button>

        {error && (
          <div style={{ padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem", marginBottom: "2rem" }}>
            {error}
          </div>
        )}

        {differences.length > 0 && (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#86efac" }}>{differences.filter((d) => d.type === "added").length}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>Added</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fca5a5" }}>{differences.filter((d) => d.type === "removed").length}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>Removed</div>
              </div>
              <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.3)" }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fbbf24" }}>{differences.filter((d) => d.type === "changed").length}</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>Changed</div>
              </div>
            </div>

            <div style={{ padding: "1rem", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(30,27,75,0.6)", maxHeight: "500px", overflow: "auto" }}>
              {differences.map((diff, idx) => (
                <div key={idx} style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(168,124,246,0.2)" }}>
                  <div style={{ color: diff.type === "added" ? "#86efac" : diff.type === "removed" ? "#fca5a5" : "#fbbf24", fontWeight: 600, marginBottom: "0.5rem", fontSize: "0.875rem" }}>
                    [{diff.type.toUpperCase()}] {diff.path}
                  </div>
                  {diff.oldValue !== undefined && (
                    <div style={{ color: "#fca5a5", fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.25rem" }}>
                      Old: {JSON.stringify(diff.oldValue)}
                    </div>
                  )}
                  {diff.newValue !== undefined && (
                    <div style={{ color: "#86efac", fontSize: "0.75rem", fontFamily: "monospace" }}>
                      New: {JSON.stringify(diff.newValue)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

