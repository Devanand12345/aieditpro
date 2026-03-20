"use client";

import { useState } from "react";
import Link from "next/link";

export default function BmiCalculatorClient() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) return;
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const bmiValue = w / (h * h);
    setBmi(bmiValue.toFixed(1));

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 25) setCategory("Normal weight");
    else if (bmiValue < 30) setCategory("Overweight");
    else setCategory("Obese");
  };

  const getColor = () => {
    if (category === "Underweight") return "#f59e0b";
    if (category === "Normal weight") return "#10b981";
    if (category === "Overweight") return "#f97316";
    return "#ef4444";
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>← Back to Tools</Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>BMI Calculator</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Calculate your body mass index</p>

        <div style={{ padding: "2rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.25)" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Height (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="e.g., 170"
              style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem" }} />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="e.g., 70"
              style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem" }} />
          </div>

          <button onClick={calculateBMI}
            style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "none", background: "linear-gradient(135deg, #a78bfa, #e879f9)", color: "#fff", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
            Calculate BMI
          </button>

          {bmi && (
            <div style={{ marginTop: "2rem", padding: "2rem", background: "rgba(16,185,129,0.15)", border: `2px solid ${getColor()}`, borderRadius: "0.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "4rem", fontWeight: 800, color: getColor() }}>{bmi}</div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: getColor(), marginTop: "0.5rem" }}>{category}</div>
            </div>
          )}

          <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "rgba(220,210,255,0.6)", textAlign: "center" }}>
            <div style={{ marginBottom: "0.5rem" }}>BMI Ranges:</div>
            <div>Underweight: &lt;18.5 | Normal: 18.5-24.9 | Overweight: 25-29.9 | Obese: ≥30</div>
          </div>
        </div>
      </div>
    </div>
  );
}
