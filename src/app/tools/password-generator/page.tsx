"use client";
import { useState, useCallback } from "react";
import Link from "next/link";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [count, setCount] = useState(1);
  const [passwords, setPasswords] = useState<string[]>([]);

  const generate = useCallback(() => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let chars = "";
    if (useUpper) chars += upper;
    if (useLower) chars += lower;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;
    if (!chars) chars = lower;

    const generated: string[] = [];
    for (let p = 0; p < count; p++) {
      let pwd = "";
      for (let i = 0; i < length; i++) {
        pwd += chars[Math.floor(Math.random() * chars.length)];
      }
      generated.push(pwd);
    }
    setPasswords(generated);
    setPassword(generated[0]);
    setCopied(false);
  }, [length, useUpper, useLower, useNumbers, useSymbols, count]);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const strength = () => {
    let score = 0;
    if (useUpper) score++;
    if (useLower) score++;
    if (useNumbers) score++;
    if (useSymbols) score++;
    if (length >= 12) score++;
    if (length >= 20) score++;
    if (score <= 2) return { label: "Weak", color: "#ef4444", pct: 25 };
    if (score <= 3) return { label: "Fair", color: "#f59e0b", pct: 50 };
    if (score <= 4) return { label: "Strong", color: "#10b981", pct: 75 };
    return { label: "Very Strong", color: "#06b6d4", pct: 100 };
  };

  const str = strength();

  return (
    <div style={{ minHeight: "100vh", padding: "5rem 1.5rem 4rem", background: "linear-gradient(160deg,#0f172a 0%,#1e1b4b 55%,#0f172a 100%)" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          ← Back to Tools
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#a78bfa", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "1rem" }}>Generator</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, color: "#ede9ff", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>🔑 Password Generator</h1>
          <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "1rem", lineHeight: 1.6 }}>Generate secure, random passwords with custom length and character sets.</p>
        </div>

        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "1.2rem", padding: "2rem", marginBottom: "1.5rem" }}>
          {/* Length */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.85)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              <span>Password Length</span>
              <span style={{ color: "#a78bfa", fontWeight: 800 }}>{length}</span>
            </label>
            <input type="range" min={4} max={128} value={length} onChange={e => setLength(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#a78bfa", cursor: "pointer" }} />
          </div>

          {/* Checkboxes */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[["Uppercase (A-Z)", useUpper, setUseUpper], ["Lowercase (a-z)", useLower, setUseLower], ["Numbers (0-9)", useNumbers, setUseNumbers], ["Symbols (!@#$)", useSymbols, setUseSymbols]].map(([label, val, setter]) => (
              <label key={label as string} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer", padding: "0.75rem 1rem", background: (val as boolean) ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${(val as boolean) ? "rgba(139,92,246,0.45)" : "rgba(255,255,255,0.08)"}`, borderRadius: "0.65rem", transition: "all 0.2s" }}>
                <input type="checkbox" checked={val as boolean} onChange={() => (setter as (v: boolean) => void)(!val)} style={{ accentColor: "#a78bfa", width: "16px", height: "16px" }} />
                <span style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.85)", fontWeight: 500 }}>{label as string}</span>
              </label>
            ))}
          </div>

          {/* Count */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.85)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              <span>Generate Count</span>
              <span style={{ color: "#a78bfa", fontWeight: 800 }}>{count}</span>
            </label>
            <input type="range" min={1} max={20} value={count} onChange={e => setCount(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#a78bfa", cursor: "pointer" }} />
          </div>

          <button onClick={generate} style={{ width: "100%", padding: "1rem", background: "linear-gradient(135deg,#a78bfa,#e879f9)", border: "none", borderRadius: "0.85rem", color: "#fff", fontWeight: 800, fontSize: "1rem", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 8px 30px rgba(139,92,246,0.4)" }}>
            🔑 Generate Password{count > 1 ? "s" : ""}
          </button>
        </div>

        {password && (
          <div>
            {/* Strength */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem", fontSize: "0.85rem", fontWeight: 600 }}>
                <span style={{ color: "rgba(220,210,255,0.7)" }}>Password Strength</span>
                <span style={{ color: str.color }}>{str.label}</span>
              </div>
              <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "9999px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${str.pct}%`, background: str.color, borderRadius: "9999px", transition: "width 0.4s ease" }} />
              </div>
            </div>

            {/* Passwords */}
            {passwords.map((pwd, i) => (
              <div key={i} style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "1rem", padding: "1.25rem 1.5rem", marginBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                <code style={{ fontSize: "0.95rem", color: "#c4b5fd", fontFamily: "monospace", wordBreak: "break-all" as const, flex: 1 }}>{pwd}</code>
                <button onClick={() => copy(pwd)} style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.4)", borderRadius: "0.5rem", padding: "0.4rem 0.8rem", color: "#c4b5fd", cursor: "pointer", fontSize: "0.8rem", fontWeight: 600, whiteSpace: "nowrap" as const, transition: "all 0.2s" }}>
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
              </div>
            ))}

            {passwords.length > 1 && (
              <button onClick={() => copy(passwords.join("\n"))} style={{ width: "100%", padding: "0.85rem", background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.35)", borderRadius: "0.85rem", color: "#c4b5fd", cursor: "pointer", fontSize: "0.9rem", fontWeight: 600 }}>
                Copy All Passwords
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
