"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function TimestampConverter() {
  const [now, setNow] = useState(Math.floor(Date.now() / 1000));
  const [tsInput, setTsInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [tsResult, setTsResult] = useState<{ utc: string; local: string; relative: string; iso: string } | null>(null);
  const [dateResult, setDateResult] = useState<{ ts: number; tsMs: number } | null>(null);

  useEffect(() => {
    const t = setInterval(() => setNow(Math.floor(Date.now() / 1000)), 1000);
    return () => clearInterval(t);
  }, []);

  const convertTs = () => {
    const ts = parseInt(tsInput);
    if (isNaN(ts)) return;
    const ms = tsInput.length > 10 ? ts : ts * 1000;
    const d = new Date(ms);
    const diff = Math.abs(now - Math.floor(ms / 1000));
    const relative = diff < 60 ? `${diff}s ago` : diff < 3600 ? `${Math.floor(diff / 60)}m ago` : diff < 86400 ? `${Math.floor(diff / 3600)}h ago` : `${Math.floor(diff / 86400)}d ago`;
    setTsResult({ utc: d.toUTCString(), local: d.toLocaleString(), relative, iso: d.toISOString() });
  };

  const convertDate = () => {
    if (!dateInput) return;
    const d = new Date(dateInput);
    if (isNaN(d.getTime())) return;
    setDateResult({ ts: Math.floor(d.getTime() / 1000), tsMs: d.getTime() });
  };

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(String(text));
  };

  return (
    <div style={{ minHeight: "100vh", padding: "5rem 1.5rem 4rem", background: "linear-gradient(160deg,#0f172a 0%,#1e1b4b 55%,#0f172a 100%)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          ← Back to Tools
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#f59e0b", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "1rem" }}>Utility</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, color: "#ede9ff", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>⏱️ Unix Timestamp Converter</h1>
          <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "1rem", lineHeight: 1.6 }}>Convert Unix timestamps to human-readable dates and vice versa.</p>
        </div>

        {/* Live clock */}
        <div style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.15),rgba(236,72,153,0.1))", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "1rem", padding: "1.5rem 2rem", marginBottom: "1.5rem", textAlign: "center" as const }}>
          <div style={{ fontSize: "0.8rem", color: "rgba(220,210,255,0.6)", fontWeight: 600, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Current Unix Timestamp</div>
          <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#a78bfa", fontFamily: "monospace", letterSpacing: "0.05em" }}>{now}</div>
          <div style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.55)", marginTop: "0.35rem" }}>{new Date().toUTCString()}</div>
        </div>

        {/* Timestamp → Date */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "1.2rem", padding: "2rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1.25rem" }}>Timestamp → Human Date</h2>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <input value={tsInput} onChange={e => setTsInput(e.target.value)} placeholder="e.g. 1709500000"
              style={{ flex: 1, padding: "0.85rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,124,246,0.3)", borderRadius: "0.65rem", color: "#ede9ff", fontSize: "0.95rem", fontFamily: "monospace", outline: "none" }} />
            <button onClick={convertTs} style={{ padding: "0.85rem 1.5rem", background: "linear-gradient(135deg,#a78bfa,#e879f9)", border: "none", borderRadius: "0.65rem", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem" }}>
              Convert
            </button>
          </div>
          {tsResult && (
            <div style={{ marginTop: "1.25rem", display: "grid", gap: "0.6rem" }}>
              {[["UTC", tsResult.utc], ["Local", tsResult.local], ["ISO 8601", tsResult.iso], ["Relative", tsResult.relative]].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "0.65rem" }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(220,210,255,0.5)", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "0.1rem" }}>{label}</div>
                    <div style={{ fontSize: "0.9rem", color: "#c4b5fd", fontFamily: "monospace" }}>{val}</div>
                  </div>
                  <button onClick={() => copy(val)} style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "0.4rem", padding: "0.3rem 0.65rem", color: "#c4b5fd", cursor: "pointer", fontSize: "0.75rem", fontWeight: 600 }}>Copy</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Date → Timestamp */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "1.2rem", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1.25rem" }}>Date → Timestamp</h2>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <input type="datetime-local" value={dateInput} onChange={e => setDateInput(e.target.value)}
              style={{ flex: 1, padding: "0.85rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,124,246,0.3)", borderRadius: "0.65rem", color: "#ede9ff", fontSize: "0.95rem", outline: "none", colorScheme: "dark" }} />
            <button onClick={convertDate} style={{ padding: "0.85rem 1.5rem", background: "linear-gradient(135deg,#a78bfa,#e879f9)", border: "none", borderRadius: "0.65rem", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: "0.9rem" }}>
              Convert
            </button>
          </div>
          {dateResult && (
            <div style={{ marginTop: "1.25rem", display: "grid", gap: "0.6rem" }}>
              {[["Unix (seconds)", String(dateResult.ts)], ["Unix (milliseconds)", String(dateResult.tsMs)]].map(([label, val]) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: "0.65rem" }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(220,210,255,0.5)", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "0.1rem" }}>{label}</div>
                    <div style={{ fontSize: "1.1rem", color: "#c4b5fd", fontFamily: "monospace", fontWeight: 700 }}>{val}</div>
                  </div>
                  <button onClick={() => copy(val)} style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "0.4rem", padding: "0.3rem 0.65rem", color: "#c4b5fd", cursor: "pointer", fontSize: "0.75rem", fontWeight: 600 }}>Copy</button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
