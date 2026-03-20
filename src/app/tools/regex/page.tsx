"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

interface RegexMatch {
  match: string;
  index: number;
  groups: string[];
}

export default function RegexTesterPage() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [flags, setFlags] = useState("g");
  const [matches, setMatches] = useState<RegexMatch[]>([]);
  const [error, setError] = useState("");

  const testRegex = (pat: string, txt: string, flgs: string) => {
    setError("");
    setMatches([]);

    if (!pat.trim() || !txt.trim()) {
      return;
    }

    try {
      const regex = new RegExp(pat, flgs);
      const foundMatches: RegexMatch[] = [];

      if (flgs.includes("g")) {
        let match;
        while ((match = regex.exec(txt)) !== null) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      } else {
        const match = regex.exec(txt);
        if (match) {
          foundMatches.push({
            match: match[0],
            index: match.index,
            groups: match.slice(1),
          });
        }
      }

      setMatches(foundMatches);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid regex pattern");
    }
  };

  const handlePatternChange = (value: string) => {
    setPattern(value);
    testRegex(value, text, flags);
  };

  const handleTextChange = (value: string) => {
    setText(value);
    testRegex(pattern, value, flags);
  };

  const handleFlagsChange = (flag: string) => {
    const newFlags = flags.includes(flag) ? flags.replace(flag, "") : flags + flag;
    setFlags(newFlags);
    testRegex(pattern, text, newFlags);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <BackToToolsButton />

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Regex Tester</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>Test and validate regular expressions instantly</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Regex Pattern</label>
            <input
              type="text"
              value={pattern}
              onChange={(e) => handlePatternChange(e.target.value)}
              placeholder="e.g., hello|world"
              style={{
                width: "100%",
                padding: "1.25rem",
                borderRadius: "0.5rem",
                border: "1px solid var(--input-border)",
                background: "var(--input-bg)",
                color: "var(--text-primary)",
                fontFamily: "monospace",
                fontSize: "0.95rem",
              }}
            />
            <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "rgba(220,210,255,0.6)" }}>
              Pattern (without slashes and flags)
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Flags</label>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {["g", "i", "m", "s"].map((flag) => (
                <label key={flag} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-light)", cursor: "pointer", fontSize: "0.95rem" }}>
                  <input
                    type="checkbox"
                    checked={flags.includes(flag)}
                    onChange={() => handleFlagsChange(flag)}
                  />
                  {flag === "g" && "Global"}
                  {flag === "i" && "Ignore Case"}
                  {flag === "m" && "Multiline"}
                  {flag === "s" && "Dotall"}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <label style={{ display: "block", fontSize: "1rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Text to Test</label>
          <textarea
            value={text}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder="Enter text to test the regex against..."
            style={{
              width: "100%",
              height: "250px",
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

        {error && (
          <div style={{ padding: "1.25rem", borderRadius: "0.5rem", background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.5)", color: "#fca5a5", fontSize: "0.95rem", marginBottom: "2rem" }}>
            ❌ {error}
          </div>
        )}

        {matches.length > 0 && (
          <div>
            <div style={{ padding: "1rem", borderRadius: "0.5rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", marginBottom: "1rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#86efac" }}>{matches.length}</div>
              <div style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.72)" }}>Matches found</div>
            </div>

            <div style={{ padding: "1rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", maxHeight: "400px", overflow: "auto" }}>
              {matches.map((m, idx) => (
                <div key={idx} style={{ marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(168,124,246,0.2)" }}>
                  <div style={{ color: "#86efac", fontFamily: "monospace", fontWeight: 600, marginBottom: "0.5rem", wordBreak: "break-all" }}>
                    Match {idx + 1}: {m.match}
                  </div>
                  <div style={{ color: "rgba(220,210,255,0.72)", fontSize: "0.75rem" }}>
                    Index: {m.index}
                  </div>
                  {m.groups.length > 0 && (
                    <div style={{ marginTop: "0.5rem" }}>
                      {m.groups.map((group, gidx) => (
                        <div key={gidx} style={{ color: "var(--primary-light)", fontSize: "0.75rem", fontFamily: "monospace" }}>
                          Group {gidx + 1}: {group || "(empty)"}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
