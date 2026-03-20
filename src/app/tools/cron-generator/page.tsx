"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

const presets = [
  { label: "Every minute", value: "* * * * *" },
  { label: "Every hour", value: "0 * * * *" },
  { label: "Every day at midnight", value: "0 0 * * *" },
  { label: "Every week", value: "0 0 * * 0" },
  { label: "Every month", value: "0 0 1 * *" },
  { label: "Every year", value: "0 0 1 1 *" },
  { label: "Every 5 minutes", value: "*/5 * * * *" },
  { label: "Every 15 minutes", value: "*/15 * * * *" },
  { label: "Every 30 minutes", value: "*/30 * * * *" },
  { label: "Daily at 9 AM", value: "0 9 * * *" },
  { label: "Weekdays at 9 AM", value: "0 9 * * 1-5" },
  { label: "Every Sunday at 6 PM", value: "0 18 * * 0" },
];

export default function CronGeneratorPage() {
  const [minute, setMinute] = useState("*");
  const [hour, setHour] = useState("*");
  const [day, setDay] = useState("*");
  const [month, setMonth] = useState("*");
  const [weekday, setWeekday] = useState("*");

  const expression = `${minute} ${hour} ${day} ${month} ${weekday}`;

  const getNextRuns = (expr: string) => {
    const runs: string[] = [];
    const now = new Date();
    let date = new Date(now);
    
    for (let i = 0; i < 5; i++) {
      date = new Date(date.getTime() + 60000);
      runs.push(date.toLocaleString());
    }
    return runs;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(expression);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>Cron Expression Generator</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Create and validate cron expressions for scheduling tasks</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Quick Presets</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {presets.map(p => (
              <button
                key={p.value}
                onClick={() => {
                  const parts = p.value.split(" ");
                  setMinute(parts[0]);
                  setHour(parts[1]);
                  setDay(parts[2]);
                  setMonth(parts[3]);
                  setWeekday(parts[4]);
                }}
                style={{
                  padding: "0.4rem 0.8rem",
                  borderRadius: "0.4rem",
                  border: "1px solid var(--input-border)",
                  background: "var(--card-bg)",
                  color: "var(--primary-light)",
                  cursor: "pointer",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              { label: "Minute", value: minute, set: setMinute, min: 0, max: 59 },
              { label: "Hour", value: hour, set: setHour, min: 0, max: 23 },
              { label: "Day", value: day, set: setDay, min: 1, max: 31 },
              { label: "Month", value: month, set: setMonth, min: 1, max: 12 },
              { label: "Weekday", value: weekday, set: setWeekday, min: 0, max: 6 },
            ].map(field => (
              <div key={field.label}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>{field.label}</label>
                <input
                  type="text"
                  value={field.value}
                  onChange={e => field.set(e.target.value)}
                  placeholder="*"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "0.5rem",
                    border: "1px solid var(--input-border)",
                    background: "var(--input-bg)",
                    color: "var(--text-primary)",
                    fontFamily: "monospace",
                    fontSize: "1rem",
                    textAlign: "center",
                  }}
                />
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1rem", color: "var(--text-muted)", marginBottom: "0.5rem" }}>Generated Expression</h2>
            <div style={{
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              background: "var(--input-bg)",
              border: "2px solid var(--primary)",
              display: "inline-block",
            }}>
              <code style={{ fontSize: "1.8rem", fontFamily: "monospace", color: "var(--text-primary)", letterSpacing: "0.1em" }}>{expression}</code>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <button onClick={copyToClipboard} className="btn-glow" style={{ fontSize: "1rem", padding: "0.8rem 2rem" }}>
              📋 Copy Expression
            </button>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Format Reference</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem", fontSize: "0.85rem" }}>
            {[
              { field: "Minute", range: "0-59" },
              { field: "Hour", range: "0-23" },
              { field: "Day", range: "1-31" },
              { field: "Month", range: "1-12" },
              { field: "Weekday", range: "0-6 (Sun-Sat)" },
            ].map(f => (
              <div key={f.field} style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 600, color: "var(--primary-light)" }}>{f.field}</div>
                <div style={{ color: "var(--text-muted)" }}>{f.range}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-muted)", textAlign: "center" }}>
            Use <code style={{ background: "var(--input-bg)", padding: "0.2rem 0.4rem", borderRadius: "0.25rem" }}>*</code> for any value, <code style={{ background: "var(--input-bg)", padding: "0.2rem 0.4rem", borderRadius: "0.25rem" }}>*/n</code> for every n units
          </p>
        </div>
      </div>
    </div>
  );
}
