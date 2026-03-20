"use client";

import { useState } from "react";
import Link from "next/link";

const cardTypes = [
  { name: "Visa", pattern: /^4/ },
  { name: "Mastercard", pattern: /^5[1-5]/ },
  { name: "American Express", pattern: /^3[47]/ },
  { name: "Discover", pattern: /^6(?:011|5)/ },
];

export default function CreditCardValidatorClient() {
  const [cardNumber, setCardNumber] = useState("");
  const [result, setResult] = useState<{ valid: boolean; type: string; message: string } | null>(null);

  const validateCard = () => {
    const cleaned = cardNumber.replace(/\D/g, "");
    
    if (!cleaned) {
      setResult({ valid: false, type: "", message: "Please enter a card number" });
      return;
    }

    if (cleaned.length < 13 || cleaned.length > 19) {
      setResult({ valid: false, type: "", message: "Invalid card number length" });
      return;
    }

    let sum = 0;
    let isEven = false;
    for (let i = cleaned.length - 1; i >= 0; i--) {
      let digit = parseInt(cleaned[i]);
      if (isEven) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      isEven = !isEven;
    }

    const valid = sum % 10 === 0;
    const cardType = cardTypes.find(t => t.pattern.test(cleaned))?.name || "Unknown";
    
    setResult({
      valid,
      type: cardType,
      message: valid ? "Valid card number!" : "Invalid card number"
    });
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>← Back to Tools</Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>Credit Card Validator</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Validate credit card numbers using Luhn algorithm</p>

        <div style={{ padding: "2rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.25)" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Card Number</label>
            <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 16))} placeholder="1234 5678 9012 3456"
              style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1.2rem", fontFamily: "monospace", letterSpacing: "2px" }} />
          </div>

          <button onClick={validateCard}
            style={{ width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "none", background: "linear-gradient(135deg, #a78bfa, #e879f9)", color: "#fff", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
            Validate Card
          </button>

          {result && (
            <div style={{ marginTop: "2rem", padding: "1.5rem", background: result.valid ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", border: `1px solid ${result.valid ? "rgba(16,185,129,0.35)" : "rgba(239,68,68,0.35)"}`, borderRadius: "0.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{result.valid ? "✓" : "✗"}</div>
              <div style={{ fontSize: "1.2rem", fontWeight: 700, color: result.valid ? "#6ee7b7" : "#fca5a5" }}>{result.message}</div>
              {result.type && <div style={{ color: "rgba(220,210,255,0.7)", marginTop: "0.5rem" }}>Card Type: {result.type}</div>}
            </div>
          )}

          <div style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "rgba(220,210,255,0.5)", textAlign: "center" }}>
            Supports: Visa, Mastercard, Amex, Discover
          </div>
        </div>
      </div>
    </div>
  );
}
