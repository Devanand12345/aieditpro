"use client";

import { useState, useEffect } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function rgbToCmyk(r: number, g: number, b: number): { c: number; m: number; y: number; k: number } {
  if (r === 0 && g === 0 && b === 0) return { c: 0, m: 0, y: 0, k: 100 };
  const c = 1 - r / 255, m = 1 - g / 255, y = 1 - b / 255;
  const k = Math.min(c, m, y);
  return {
    c: Math.round(((c - k) / (1 - k)) * 100),
    m: Math.round(((m - k) / (1 - k)) * 100),
    y: Math.round(((y - k) / (1 - k)) * 100),
    k: Math.round(k * 100)
  };
}

export default function ColorConverterPage() {
  const [color, setColor] = useState("#8b5cf6");
  const [rgb, setRgb] = useState({ r: 139, g: 92, b: 246 });
  const [hsl, setHsl] = useState({ h: 262, s: 89, l: 66 });
  const [cmyk, setCmyk] = useState({ c: 43, m: 63, y: 0, k: 4 });

  useEffect(() => {
    const rgbVal = hexToRgb(color);
    if (rgbVal) {
      setRgb(rgbVal);
      setHsl(rgbToHsl(rgbVal.r, rgbVal.g, rgbVal.b));
      setCmyk(rgbToCmyk(rgbVal.r, rgbVal.g, rgbVal.b));
    }
  }, [color]);

  const copyValue = (val: string) => {
    navigator.clipboard.writeText(val);
  };

  const presets = ["#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#ef4444", "#06b6d4", "#3b82f6", "#84cc16", "#f97316", "#a855f7"];

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Color Converter</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Convert between HEX, RGB, HSL, and CMYK color formats</p>

        <div className="glass-card" style={{ padding: "2rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", gap: "2rem", alignItems: "center", marginBottom: "1.5rem" }}>
            <input
              type="color"
              value={color}
              onChange={e => setColor(e.target.value)}
              style={{ width: "100px", height: "100px", border: "none", borderRadius: "1rem", cursor: "pointer" }}
            />
            <div style={{ flex: 1 }}>
              <div style={{
                width: "100%",
                height: "80px",
                borderRadius: "1rem",
                background: color,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }} />
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>HEX</label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                value={color.toUpperCase()}
                onChange={e => {
                  const val = e.target.value;
                  if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) setColor(val);
                }}
                style={{
                  flex: 1,
                  padding: "0.75rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--input-border)",
                  background: "var(--input-bg)",
                  color: "var(--text-primary)",
                  fontFamily: "monospace",
                  fontSize: "1rem",
                }}
              />
              <button onClick={() => copyValue(color)} style={btnStyle}>📋</button>
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>RGB</label>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <input type="number" value={rgb.r} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <input type="number" value={rgb.g} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <input type="number" value={rgb.b} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <button onClick={() => copyValue(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)} style={btnStyle}>📋</button>
            </div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>HSL</label>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <input type="number" value={hsl.h} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <input type="number" value={hsl.s} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <input type="number" value={hsl.l} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <button onClick={() => copyValue(`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)} style={btnStyle}>📋</button>
            </div>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>CMYK</label>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <input type="number" value={cmyk.c} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <input type="number" value={cmyk.m} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <input type="number" value={cmyk.y} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <input type="number" value={cmyk.k} readOnly style={{ ...numStyle, background: "var(--card-bg)" }} />
              <button onClick={() => copyValue(`cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`)} style={btnStyle}>📋</button>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Quick Colors</h2>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {presets.map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "0.5rem",
                  border: color === c ? "3px solid var(--primary)" : "1px solid var(--input-border)",
                  background: c,
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--input-border)",
  background: "var(--card-bg)",
  color: "var(--primary-light)",
  cursor: "pointer",
  fontSize: "1rem",
};

const numStyle = {
  width: "70px",
  padding: "0.75rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--input-border)",
  background: "var(--input-bg)",
  color: "var(--text-primary)",
  fontFamily: "monospace",
  fontSize: "1rem",
  textAlign: "center" as const,
};
