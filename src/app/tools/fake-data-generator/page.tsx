"use client";

import { useState } from "react";
import Link from "next/link";

const firstNames = ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Thomas", "Charles", "Mary", "Patricia", "Jennifer", "Linda", "Elizabeth", "Barbara", "Susan", "Jessica", "Sarah", "Karen"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson"];
const domains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "mail.com"];

const generateData = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${Math.floor(Math.random() * 100)}@${domains[Math.floor(Math.random() * domains.length)]}`;
  const phone = `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
  const streetNum = Math.floor(Math.random() * 9999) + 1;
  const streets = ["Main St", "Oak Ave", "Maple Dr", "Cedar Ln", "Pine Rd", "Elm St", "Washington Blvd", "Park Ave"];
  const street = streets[Math.floor(Math.random() * streets.length)];
  const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego"];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const states = ["NY", "CA", "IL", "TX", "AZ", "PA"];
  const state = states[Math.floor(Math.random() * states.length)];
  const zip = Math.floor(Math.random() * 90000) + 10000;
  const username = `${firstName.toLowerCase()}${lastName.charAt(0).toLowerCase()}${Math.floor(Math.random() * 100)}`;
  const password = `Pass${Math.floor(Math.random() * 9000) + 1000}!`;
  
  return {
    fullName: `${firstName} ${lastName}`,
    firstName,
    lastName,
    email,
    phone,
    address: `${streetNum} ${street}`,
    cityStateZip: `${city}, ${state} ${zip}`,
    username,
    password,
  };
};

export default function FakeDataGeneratorClient() {
  const [data, setData] = useState(generateData());
  const [copied, setCopied] = useState(false);

  const regenerate = () => setData(generateData());

  const copyToClipboard = () => {
    const text = Object.values(data).join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>← Back to Tools</Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "#ede9ff" }}>Fake Data Generator</h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem" }}>Generate realistic test data for development and testing</p>

        <div style={{ padding: "2rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.25)" }}>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              { label: "Full Name", value: data.fullName },
              { label: "Email", value: data.email },
              { label: "Phone", value: data.phone },
              { label: "Address", value: data.address },
              { label: "City/State/Zip", value: data.cityStateZip },
              { label: "Username", value: data.username },
              { label: "Password", value: data.password },
            ].map(item => (
              <div key={item.label} style={{ padding: "1rem", background: "rgba(255,255,255,0.05)", borderRadius: "0.75rem" }}>
                <div style={{ color: "rgba(220,210,255,0.5)", fontSize: "0.85rem", marginBottom: "0.25rem" }}>{item.label}</div>
                <div style={{ color: "#ede9ff", fontWeight: 600, fontFamily: item.label === "Password" ? "monospace" : "inherit" }}>{item.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button onClick={regenerate} style={{ flex: 1, padding: "1rem", borderRadius: "0.75rem", border: "none", background: "linear-gradient(135deg, #a78bfa, #e879f9)", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
              Generate New
            </button>
            <button onClick={copyToClipboard} style={{ flex: 1, padding: "1rem", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(168,124,246,0.2)", color: "#c4b5fd", fontWeight: 700, cursor: "pointer" }}>
              {copied ? "Copied!" : "Copy All"}
            </button>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.3)", borderRadius: "0.75rem" }}>
          <div style={{ color: "#fde68a", fontWeight: 600, marginBottom: "0.5rem" }}>⚠️ For Testing Only</div>
          <div style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>These are fictional data. Do not use for illegal purposes.</div>
        </div>
      </div>
    </div>
  );
}
