"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

export default function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const analysis = useMemo(() => {
    if (!password) return null;

    const length = password.length;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);
    
    let score = 0;
    const feedback: string[] = [];

    // Length checks
    if (length >= 8) score += 1;
    else feedback.push("Use at least 8 characters");
    
    if (length >= 12) score += 1;
    
    if (length >= 16) score += 1;
    
    // Character type checks
    if (hasLower) score += 1;
    else feedback.push("Add lowercase letters");
    
    if (hasUpper) score += 1;
    else feedback.push("Add uppercase letters");
    
    if (hasNumber) score += 1;
    else feedback.push("Add numbers");
    
    if (hasSpecial) score += 1;
    else feedback.push("Add special characters (!@#$%)");

    // Patterns to avoid
    const commonPatterns = /^(123|abc|qwerty|password|admin|user|letmein)/i;
    if (commonPatterns.test(password)) {
      score = Math.max(0, score - 2);
      feedback.push("Avoid common patterns");
    }

    // Repeated characters
    if (/(.)\1{2,}/.test(password)) {
      score = Math.max(0, score - 1);
      feedback.push("Avoid repeated characters");
    }

    // Sequential characters
    if (/abc|bcd|cde|def|efg|123|234|345|456|567|678|789|890|qwe|wer|ert|rty|tyu|yui|uo/.test(password.toLowerCase())) {
      score = Math.max(0, score - 1);
      feedback.push("Avoid sequential characters");
    }

    const maxScore = 8;
    const percentage = Math.min(100, (score / maxScore) * 100);

    let strength: "weak" | "fair" | "good" | "strong" | "excellent";
    let color: string;
    
    if (score <= 2) { strength = "weak"; color = "#ef4444"; }
    else if (score <= 4) { strength = "fair"; color = "#f59e0b"; }
    else if (score <= 5) { strength = "good"; color = "#22c55e"; }
    else if (score <= 6) { strength = "strong"; color = "#10b981"; }
    else { strength = "excellent"; color = "#06b6d4"; }

    // Estimate crack time
    const charsetSize = (hasLower ? 26 : 0) + (hasUpper ? 26 : 0) + (hasNumber ? 10 : 0) + (hasSpecial ? 32 : 0);
    const combinations = Math.pow(charsetSize, length);
    const seconds = combinations / 1000000000; // 1 billion guesses per second

    let crackTime: string;
    if (seconds < 1) crackTime = "Instantly";
    else if (seconds < 60) crackTime = `${Math.round(seconds)} seconds`;
    else if (seconds < 3600) crackTime = `${Math.round(seconds / 60)} minutes`;
    else if (seconds < 86400) crackTime = `${Math.round(seconds / 3600)} hours`;
    else if (seconds < 2592000) crackTime = `${Math.round(seconds / 86400)} days`;
    else if (seconds < 31536000) crackTime = `${Math.round(seconds / 2592000)} months`;
    else if (seconds < 3153600000) crackTime = `${Math.round(seconds / 31536000)} years`;
    else crackTime = "Centuries";

    return { score, maxScore, percentage, strength, color, feedback, length, hasLower, hasUpper, hasNumber, hasSpecial, crackTime };
  }, [password]);

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
          Password Strength Checker
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem" }}>
          Check password strength and learn how to make it stronger
        </p>

        <div style={{
          padding: "2rem",
          borderRadius: "1rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
              Enter Password
            </label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password to check..."
                style={{
                  width: "100%",
                  padding: "1rem",
                  paddingRight: "3rem",
                  borderRadius: "0.75rem",
                  border: "1px solid var(--input-border)",
                  background: "var(--input-bg)",
                  color: "var(--text-primary)",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--primary-light)",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {analysis && (
            <div>
              {/* Strength bar */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 600, color: "var(--text-primary)", textTransform: "capitalize" }}>{analysis.strength}</span>
                  <span style={{ color: "rgba(220,210,255,0.6)" }}>{analysis.score}/{analysis.maxScore}</span>
                </div>
                <div style={{ height: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ 
                    width: `${analysis.percentage}%`, 
                    height: "100%", 
                    background: analysis.color,
                    borderRadius: "4px",
                    transition: "all 0.3s",
                  }} />
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.5rem" }}>
                <div style={{ padding: "1rem", background: "var(--card-bg)", borderRadius: "0.75rem", textAlign: "center" }}>
                  <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Characters</div>
                  <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.5rem" }}>{analysis.length}</div>
                </div>
                <div style={{ padding: "1rem", background: "var(--card-bg)", borderRadius: "0.75rem", textAlign: "center" }}>
                  <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Crack Time</div>
                  <div style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1.2rem" }}>{analysis.crackTime}</div>
                </div>
              </div>

              {/* Character types */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {[
                  { label: "Lowercase", value: analysis.hasLower },
                  { label: "Uppercase", value: analysis.hasUpper },
                  { label: "Numbers", value: analysis.hasNumber },
                  { label: "Special chars", value: analysis.hasSpecial },
                ].map((item) => (
                  <div key={item.label} style={{ 
                    padding: "0.75rem", 
                    background: item.value ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)",
                    borderRadius: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}>
                    <span style={{ color: item.value ? "#6ee7b7" : "#fca5a5" }}>{item.value ? "✓" : "✗"}</span>
                    <span style={{ color: item.value ? "#6ee7b7" : "#fca5a5", fontSize: "0.9rem" }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Feedback */}
              {analysis.feedback.length > 0 && (
                <div style={{ padding: "1rem", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)", borderRadius: "0.75rem" }}>
                  <div style={{ color: "#fde68a", fontWeight: 600, marginBottom: "0.5rem" }}>Suggestions:</div>
                  {analysis.feedback.map((tip, i) => (
                    <div key={i} style={{ color: "rgba(220,210,255,0.85)", fontSize: "0.9rem", marginBottom: "0.25rem" }}>
                      • {tip}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {!password && (
            <div style={{ textAlign: "center", padding: "2rem", color: "rgba(220,210,255,0.6)" }}>
              Enter a password above to check its strength
            </div>
          )}
        </div>

        <div style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid var(--input-border)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>Password Tips</h3>
          <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 2, paddingLeft: "1.5rem" }}>
            <li>Use at least 12 characters</li>
            <li>Mix uppercase and lowercase letters</li>
            <li>Include numbers and special characters</li>
            <li>Avoid personal information</li>
            <li>Don't use common words or patterns</li>
            <li>Use unique passwords for each account</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
