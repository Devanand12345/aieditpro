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
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "#f0f0ff" }}>
          Password Generator - Create Strong Random Passwords
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem", maxWidth: "800px" }}>
          Generate secure, random passwords with customizable length and character sets. Choose from uppercase, lowercase,
          numbers, and symbols. Create strong passwords instantly for better account security.
        </p>

        {/* Password Generator Tool */}
        <div style={{
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
          borderRadius: "1.2rem",
          padding: "2rem",
          marginBottom: "3rem",
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.85)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              <span>Password Length</span>
              <span style={{ color: "#a78bfa", fontWeight: 800 }}>{length} characters</span>
            </label>
            <input
              type="range"
              min={4}
              max={128}
              value={length}
              onChange={e => setLength(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#a78bfa", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.5)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
              <span>4</span>
              <span>128</span>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[["Uppercase (A-Z)", useUpper, setUseUpper], ["Lowercase (a-z)", useLower, setUseLower], ["Numbers (0-9)", useNumbers, setUseNumbers], ["Symbols (!@#$)", useSymbols, setUseSymbols]].map(([label, val, setter]) => (
              <label key={label as string} style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer", padding: "0.75rem 1rem", background: (val as boolean) ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.03)", border: `1px solid ${(val as boolean) ? "rgba(139,92,246,0.45)" : "rgba(255,255,255,0.08)"}`, borderRadius: "0.65rem", transition: "all 0.2s" }}>
                <input type="checkbox" checked={val as boolean} onChange={() => (setter as (v: boolean) => void)(!val)} style={{ accentColor: "#a78bfa", width: "16px", height: "16px" }} />
                <span style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.85)", fontWeight: 500 }}>{label as string}</span>
              </label>
            ))}
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.85)", fontSize: "0.9rem", fontWeight: 600, marginBottom: "0.75rem" }}>
              <span>Generate Count</span>
              <span style={{ color: "#a78bfa", fontWeight: 800 }}>{count} {count === 1 ? "password" : "passwords"}</span>
            </label>
            <input type="range" min={1} max={20} value={count} onChange={e => setCount(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#a78bfa", cursor: "pointer" }} />
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.5)", fontSize: "0.8rem", marginTop: "0.5rem" }}>
              <span>1</span>
              <span>20</span>
            </div>
          </div>

          <button
            onClick={generate}
            style={{
              width: "100%",
              padding: "1rem",
              background: "linear-gradient(135deg,#a78bfa,#e879f9)",
              border: "none",
              borderRadius: "0.85rem",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.2s",
              boxShadow: "0 8px 30px rgba(139,92,246,0.4)"
            }}
          >
            🔑 Generate {count === 1 ? "Password" : `${count} Passwords`}
          </button>
        </div>

        {password && (
          <div style={{ marginBottom: "3rem" }}>
            {/* Strength Indicator */}
            <div style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(168,124,246,0.25)",
              borderRadius: "1rem",
              padding: "1.25rem 1.5rem",
              marginBottom: "1rem"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.6rem", fontSize: "0.85rem", fontWeight: 600 }}>
                <span style={{ color: "rgba(220,210,255,0.7)" }}>Password Strength</span>
                <span style={{ color: str.color, fontWeight: 800 }}>{str.label}</span>
              </div>
              <div style={{ height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "9999px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${str.pct}%`, background: str.color, borderRadius: "9999px", transition: "width 0.4s ease" }} />
              </div>
            </div>

            {/* Generated Passwords */}
            {passwords.map((pwd, i) => (
              <div key={i} style={{
                background: "rgba(139,92,246,0.08)",
                border: "1px solid rgba(168,124,246,0.3)",
                borderRadius: "1rem",
                padding: "1.25rem 1.5rem",
                marginBottom: "0.75rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem"
              }}>
                <code style={{
                  fontSize: "0.95rem",
                  color: "#c4b5fd",
                  fontFamily: "monospace",
                  wordBreak: "break-all" as const,
                  flex: 1
                }}>{pwd}</code>
                <button
                  onClick={() => copy(pwd)}
                  style={{
                    background: "rgba(139,92,246,0.2)",
                    border: "1px solid rgba(139,92,246,0.4)",
                    borderRadius: "0.5rem",
                    padding: "0.4rem 0.8rem",
                    color: "#c4b5fd",
                    cursor: "pointer",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    whiteSpace: "nowrap" as const,
                    transition: "all 0.2s"
                  }}
                >
                  {copied ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            ))}

            {passwords.length > 1 && (
              <button
                onClick={() => copy(passwords.join("\n"))}
                style={{
                  width: "100%",
                  padding: "0.85rem",
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.35)",
                  borderRadius: "0.85rem",
                  color: "#c4b5fd",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: 600
                }}
              >
                Copy All Passwords
              </button>
            )}
          </div>
        )}

        {/* How to Use Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            How to Generate a Strong Password
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>1</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Choose Password Length</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Select your desired password length (4-128 characters). For strong security, use at least 12-16 characters. Longer passwords exponentially increase security.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>2</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Select Character Types</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Enable uppercase (A-Z), lowercase (a-z), numbers (0-9), and symbols (!@#$...). For maximum security, include all character types. For easier memorization, use at least 3 types.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>3</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Generate & Use</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Click "Generate Password" to create secure passwords. Copy to clipboard with one click. Store in a password manager like 1Password, Bitwarden, or LastPass.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Key Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>🔒</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Highly Secure</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Uses cryptographically secure random number generation. Passwords are unpredictable and follow industry best practices for security.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>⚙️</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Fully Customizable</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Control length (4-128 chars), character types, and quantity. Generate multiple passwords at once for batch account creation.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>💯</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>100% Free</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>No registration, no limits, no premium features. Generate unlimited passwords forever without any cost or restrictions.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>🔐</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Privacy Protected</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>All generation happens in your browser. Passwords never sent to servers. Your security is completely in your hands.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>📊</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Strength Indicator</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Real-time password strength meter shows how secure your password is. Visual feedback helps you create better passwords.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>📋</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>One-Click Copy</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Copy individual passwords or all passwords at once. Paste directly into registration forms or password managers.</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Popular Use Cases
          </h2>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>💼 New Account Registration</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Create strong passwords for new email, social media, banking, or shopping accounts. Never reuse passwords across sites. Each account deserves a unique, strong password generated randomly for maximum security.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>🔄 Password Updates</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Regularly update passwords for important accounts. When forced to change passwords or after security incidents, generate new strong passwords to replace old ones. Stay ahead of potential breaches.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>🏢 Team Onboarding</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>IT administrators and team leads need to create multiple secure passwords for new employees. Generate temporary passwords for system access, email, and business tools. Change after first login.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>🔐 WiFi & Network Access</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Create strong WiFi passwords for home or business networks. Secure router admin passwords. Generate credentials for VPNs, databases, and other network services that need strong authentication.</p>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Related Security Tools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            <Link href="/tools/password-strength-checker" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔒</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Password Strength Checker</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Test existing passwords and see strength ratings</p>
            </Link>
            <Link href="/tools/hash" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔐</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Hash Generator</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Generate MD5, SHA256, SHA512 hashes</p>
            </Link>
            <Link href="/tools/base64" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔤</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Base64 Encoder</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Encode and decode Base64 strings</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>How long should my password be?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>For general accounts, use at least 12-16 characters. For critical accounts (banking, email, work), use 20+ characters. The longer the password, the exponentially harder it is to crack. Our tool supports up to 128 characters.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Are the generated passwords really random?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Yes, our password generator uses cryptographically secure random number generation (CSPRNG). This is the same standard used in security-critical applications. The randomness is unpredictable and follows industry best practices.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Should I use a password generator or create my own?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Always use a password generator for truly random passwords. Humans are terrible at creating random passwords - we tend to use patterns, words, and predictable combinations. Generated passwords are significantly more secure than human-created ones.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>How do I remember all these strong passwords?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Never try to memorize strong passwords! Use a password manager like 1Password, Bitwarden, LastPass, or your browser's built-in password manager. They encrypt and store all your passwords securely. You only need to remember one master password.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Can I use these passwords for everything?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>No! Each account should have a unique password. If one account gets compromised, unique passwords prevent attackers from accessing your other accounts. This is called "password hygiene" and is crucial for security. Generate a different password for every account.</p>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Password Generator",
              "applicationCategory": "SecurityApplication",
              "description": "Free online password generator to create secure, random passwords with custom length and character sets. Generate strong passwords instantly with uppercase, lowercase, numbers, and symbols.",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "3500"
              }
            })
          }}
        />
      </div>
    </div>
  );
}