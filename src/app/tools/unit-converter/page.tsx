"use client";

import { useState } from "react";
import Link from "next/link";

const categories = [
  { id: "length", name: "Length", units: ["Meter", "Kilometer", "Centimeter", "Millimeter", "Mile", "Yard", "Foot", "Inch"] },
  { id: "weight", name: "Weight", units: ["Kilogram", "Gram", "Milligram", "Pound", "Ounce", "Ton"] },
  { id: "temperature", name: "Temperature", units: ["Celsius", "Fahrenheit", "Kelvin"] },
];

const conversions: Record<string, Record<string, number>> = {
  length: {
    Meter: 1, Kilometer: 0.001, Centimeter: 100, Millimeter: 1000,
    Mile: 0.000621371, Yard: 1.09361, Foot: 3.28084, Inch: 39.3701
  },
  weight: {
    Kilogram: 1, Gram: 1000, Milligram: 1000000, Pound: 2.20462, Ounce: 35.274, Ton: 0.001
  },
};

export default function UnitConverterClient() {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("Meter");
  const [toUnit, setToUnit] = useState("Kilometer");
  const [input, setInput] = useState("1");
  const [result, setResult] = useState("");

  const currentCategory = categories.find(c => c.id === category);

  const convert = (value: string, from: string, to: string, cat: string) => {
    if (!value || isNaN(parseFloat(value))) {
      setResult("");
      return;
    }
    const num = parseFloat(value);
    
    if (cat === "temperature") {
      let celsius: number;
      if (from === "Celsius") celsius = num;
      else if (from === "Fahrenheit") celsius = (num - 32) * 5/9;
      else celsius = num - 273.15;

      let output: number;
      if (to === "Celsius") output = celsius;
      else if (to === "Fahrenheit") output = celsius * 9/5 + 32;
      else output = celsius + 273.15;

      setResult(output.toFixed(4));
    } else {
      const rates = conversions[cat];
      const baseValue = num / rates[from];
      const output = baseValue * rates[to];
      setResult(output.toFixed(6).replace(/\.?0+$/, ""));
    }
  };

  const handleConvert = () => convert(input, fromUnit, toUnit, category);

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>← Back to Tools</Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>Unit Converter</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Convert between different units instantly</p>

        <div style={{ padding: "2rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.25)" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Category</label>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {categories.map(cat => (
                <button key={cat.id} onClick={() => { setCategory(cat.id); setFromUnit(cat.units[0]); setToUnit(cat.units[1]); setResult(""); }}
                  style={{ padding: "0.75rem 1.5rem", borderRadius: "0.5rem", border: "1px solid", cursor: "pointer", fontWeight: 600, transition: "all 0.2s",
                    background: category === cat.id ? "linear-gradient(135deg, #a78bfa, #e879f9)" : "rgba(255,255,255,0.05)",
                    borderColor: category === cat.id ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                    color: category === cat.id ? "#fff" : "#c4b5fd" }}>
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "1rem", alignItems: "end", marginBottom: "1.5rem" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>From</label>
              <select value={fromUnit} onChange={(e) => { setFromUnit(e.target.value); convert(input, e.target.value, toUnit, category); }}
                style={{ width: "100%", padding: "0.9rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem" }}>
                {currentCategory?.units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
              <input type="number" value={input} onChange={(e) => { setInput(e.target.value); convert(e.target.value, fromUnit, toUnit, category); }}
                style={{ width: "100%", padding: "0.9rem", marginTop: "0.5rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem" }} />
            </div>
            <div style={{ fontSize: "1.5rem", paddingBottom: "0.75rem" }}>→</div>
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>To</label>
              <select value={toUnit} onChange={(e) => { setToUnit(e.target.value); convert(input, fromUnit, e.target.value, category); }}
                style={{ width: "100%", padding: "0.9rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem" }}>
                {currentCategory?.units.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>

          {result && (
            <div style={{ padding: "1.5rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)", borderRadius: "0.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 700, color: "#6ee7b7" }}>{result} {toUnit}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
