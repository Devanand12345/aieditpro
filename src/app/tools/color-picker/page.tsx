"use client";
import { useState, useCallback } from "react";
import Link from "next/link";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}
function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}
function hexToCmyk(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const rp = r / 255, gp = g / 255, bp = b / 255;
  const k = 1 - Math.max(rp, gp, bp);
  if (k === 1) return { c: 0, m: 0, y: 0, k: 100 };
  return {
    c: Math.round(((1 - rp - k) / (1 - k)) * 100),
    m: Math.round(((1 - gp - k) / (1 - k)) * 100),
    y: Math.round(((1 - bp - k) / (1 - k)) * 100),
    k: Math.round(k * 100),
  };
}

const PALETTES = [
  "#ef4444","#f97316","#f59e0b","#84cc16","#10b981","#06b6d4","#3b82f6","#8b5cf6","#ec4899","#6366f1",
  "#0f172a","#1e293b","#334155","#64748b","#94a3b8","#cbd5e1","#e2e8f0","#f1f5f9","#f8fafc","#ffffff",
];

export default function ColorPicker() {
  const [color, setColor] = useState("#a78bfa");
  const [hexInput, setHexInput] = useState("#a78bfa");
  const [copied, setCopied] = useState("");

  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const cmyk = hexToCmyk(color);

  const copy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  const handleHexInput = useCallback((v: string) => {
    setHexInput(v);
    if (/^#[0-9a-fA-F]{6}$/.test(v)) setColor(v);
  }, []);

  const formats = [
    { label: "HEX", value: color },
    { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
    { label: "CMYK", value: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)` },
  ];

  // Generate shades
  const shades = Array.from({ length: 9 }, (_, i) => {
    const l = 10 + i * 10;
    return `hsl(${hsl.h}, ${hsl.s}%, ${l}%)`;
  });

  return (
    <div style={{ minHeight: "100vh", padding: "5rem 1.5rem 4rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          ← Back to Tools
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#06b6d4", background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "1rem" }}>Design</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, color: "#ede9ff", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>🎨 Color Picker &amp; Converter</h1>
          <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "1rem", lineHeight: 1.6 }}>Pick colors and convert between HEX, RGB, HSL, and CMYK formats instantly.</p>
        </div>

        {/* Main picker */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "1.2rem", padding: "2rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            <div>
              <div style={{ height: "200px", borderRadius: "1rem", background: color, marginBottom: "1rem", border: "2px solid rgba(255,255,255,0.1)", boxShadow: `0 20px 60px ${color}60` }} />
              <input type="color" value={color} onChange={e => { setColor(e.target.value); setHexInput(e.target.value); }}
                style={{ width: "100%", height: "50px", borderRadius: "0.65rem", border: "1px solid rgba(168,124,246,0.3)", cursor: "pointer", background: "transparent" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
              <input value={hexInput} onChange={e => handleHexInput(e.target.value)} placeholder="#000000"
                style={{ padding: "0.85rem 1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(168,124,246,0.3)", borderRadius: "0.65rem", color: "#ede9ff", fontSize: "1rem", fontFamily: "monospace", outline: "none", letterSpacing: "0.05em" }} />
              {formats.map(f => (
                <div key={f.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(168,124,246,0.15)", borderRadius: "0.65rem" }}>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "rgba(220,210,255,0.5)", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "0.15rem" }}>{f.label}</div>
                    <div style={{ fontSize: "0.88rem", color: "#c4b5fd", fontFamily: "monospace" }}>{f.value}</div>
                  </div>
                  <button onClick={() => copy(f.value, f.label)} style={{ background: copied === f.label ? "rgba(16,185,129,0.2)" : "rgba(139,92,246,0.15)", border: `1px solid ${copied === f.label ? "rgba(16,185,129,0.4)" : "rgba(139,92,246,0.35)"}`, borderRadius: "0.45rem", padding: "0.35rem 0.7rem", color: copied === f.label ? "#6ee7b7" : "#c4b5fd", cursor: "pointer", fontSize: "0.78rem", fontWeight: 600, transition: "all 0.2s" }}>
                    {copied === f.label ? "✓" : "Copy"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shades */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "1rem", padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(220,210,255,0.6)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "1rem" }}>Color Shades</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(9, 1fr)", gap: "0.5rem" }}>
            {shades.map((s, i) => (
              <div key={i} onClick={() => { setColor(s); setHexInput(s); }} style={{ height: "48px", borderRadius: "0.5rem", background: s, cursor: "pointer", transition: "transform 0.2s", border: "2px solid rgba(255,255,255,0.1)" }} title={s} />
            ))}
          </div>
        </div>

        {/* Palette */}
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "1rem", padding: "1.5rem" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(220,210,255,0.6)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "1rem" }}>Quick Palette</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: "0.5rem" }}>
            {PALETTES.map(p => (
              <div key={p} onClick={() => { setColor(p); setHexInput(p); }} style={{ height: "36px", borderRadius: "0.4rem", background: p, cursor: "pointer", border: color === p ? "2px solid white" : "2px solid rgba(255,255,255,0.1)", transition: "transform 0.2s", boxShadow: color === p ? `0 0 12px ${p}` : "none" }} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          div[style*="grid-template-columns: repeat(10"] { grid-template-columns: repeat(5, 1fr) !important; }
          div[style*="grid-template-columns: repeat(9"] { grid-template-columns: repeat(5, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
