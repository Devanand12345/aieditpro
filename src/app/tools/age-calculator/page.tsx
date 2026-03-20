"use client";

import { useState } from "react";
import Link from "next/link";

export default function AgeCalculatorClient() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateAge = () => {
    if (!birthDate) return;
    
    const birth = new Date(birthDate);
    const today = new Date();
    
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();
    
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += lastMonth.getDate();
    }
    
    if (months < 0) {
      years--;
      months += 12;
    }
    
    const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;
    
    const nextBirthday = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());
    if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);
    const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    setResult({ years, months, days, totalDays, totalHours, totalMinutes, totalSeconds, daysUntilBirthday });
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>← Back to Tools</Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>Age Calculator</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Find out your exact age in years, months, days and more</p>

        <div style={{ padding: "2rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.25)" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Enter your birth date</label>
            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)}
              style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem" }} />
          </div>

          <button onClick={calculateAge}
            style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "none", background: "linear-gradient(135deg, #a78bfa, #e879f9)", color: "#fff", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
            Calculate Age
          </button>

          {result && (
            <div style={{ marginTop: "2rem" }}>
              <div style={{ padding: "1.5rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.35)", borderRadius: "0.75rem", textAlign: "center", marginBottom: "1rem" }}>
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "#6ee7b7" }}>{result.years} years old</div>
                <div style={{ color: "rgba(220,210,255,0.7)", marginTop: "0.5rem" }}>{result.years} years, {result.months} months, {result.days} days</div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { label: "Total Days", value: result.totalDays.toLocaleString() },
                  { label: "Total Hours", value: result.totalHours.toLocaleString() },
                  { label: "Total Minutes", value: result.totalMinutes.toLocaleString() },
                  { label: "Total Seconds", value: result.totalSeconds.toLocaleString() },
                  { label: "Days Until Birthday", value: result.daysUntilBirthday },
                ].map(item => (
                  <div key={item.label} style={{ padding: "1rem", background: "var(--card-bg)", borderRadius: "0.75rem", textAlign: "center" }}>
                    <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.85rem" }}>{item.label}</div>
                    <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.2rem", marginTop: "0.25rem" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
