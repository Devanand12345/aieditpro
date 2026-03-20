"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

type CalcType = "of" | "change" | "whatIs";

export default function PercentageCalculatorPage() {
  const [calcType, setCalcType] = useState<CalcType>("of");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) return;

    let res = 0;
    switch (calcType) {
      case "of":
        res = (n1 * n2) / 100;
        break;
      case "whatIs":
        res = n2 === 0 ? 0 : (n1 / n2) * 100;
        break;
      case "change":
        res = n1 === 0 ? 0 : ((n2 - n1) / Math.abs(n1)) * 100;
        break;
    }
    setResult(res);
  };

  const InputField = ({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder: string }) => (
    <div style={{ flex: 1 }}>
      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>{label}</label>
      <input
        type="number"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
      />
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Percentage Calculator</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Calculate percentages quickly and easily</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {[
              { key: "of" as CalcType, label: "X% of Y" },
              { key: "whatIs" as CalcType, label: "X is what % of Y" },
              { key: "change" as CalcType, label: "% Change" },
            ].map(opt => (
              <button
                key={opt.key}
                onClick={() => { setCalcType(opt.key); setResult(null); }}
                style={{
                  flex: 1,
                  padding: "0.75rem 0.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid",
                  borderColor: calcType === opt.key ? "var(--primary)" : "var(--input-border)",
                  background: calcType === opt.key ? "var(--primary)" : "var(--card-bg)",
                  color: calcType === opt.key ? "#fff" : "var(--text-primary)",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            {calcType === "of" && <>
              <InputField label="Percentage (%)" value={num1} onChange={setNum1} placeholder="e.g. 25" />
              <InputField label="Number" value={num2} onChange={setNum2} placeholder="e.g. 200" />
            </>}
            {calcType === "whatIs" && <>
              <InputField label="Number" value={num1} onChange={setNum1} placeholder="e.g. 50" />
              <InputField label="Total" value={num2} onChange={setNum2} placeholder="e.g. 200" />
            </>}
            {calcType === "change" && <>
              <InputField label="From" value={num1} onChange={setNum1} placeholder="e.g. 100" />
              <InputField label="To" value={num2} onChange={setNum2} placeholder="e.g. 150" />
            </>}
          </div>

          <button onClick={calculate} className="btn-glow" style={{ width: "100%", fontSize: "1rem", padding: "1rem" }}>
            Calculate
          </button>
        </div>

        {result !== null && (
          <div className="glass-card" style={{ padding: "2rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Result</p>
            <p style={{ fontSize: "3rem", fontWeight: 900, background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {result.toFixed(2)}%
            </p>
            <button onClick={() => navigator.clipboard.writeText(result.toFixed(2))} style={{ marginTop: "1rem", padding: "0.5rem 1rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "var(--card-bg)", color: "var(--primary-light)", cursor: "pointer" }}>
              📋 Copy
            </button>
          </div>
        )}

        <div className="glass-card" style={{ padding: "1.5rem", marginTop: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Common Calculations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", fontSize: "0.9rem" }}>
            {["10% of 100 = 10", "25% of 200 = 50", "5% of 50 = 2.5", "15% tip on $50 = $7.50", "20% off $100 = $80", "Tax 8% of $50 = $4"].map((item, i) => (
              <div key={i} style={{ padding: "0.75rem", borderRadius: "0.5rem", background: "var(--card-bg)", color: "var(--text-muted)", fontFamily: "monospace" }}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "0.5rem",
  border: "1px solid var(--input-border)",
  background: "var(--input-bg)",
  color: "var(--text-primary)",
  fontSize: "1rem",
};
