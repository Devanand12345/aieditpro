import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About AI-EditPro - Free Online Developer Tools",
  description: "Learn about AI-EditPro, a free online developer tools platform with 27+ tools including QR code generator, JSON beautifier, password generator, and more. No sign-up required.",
  keywords: ["about AI-EditPro", "developer tools", "free online tools", "about us", "AI-EditPro mission"],
  alternates: {
    canonical: "https://aieditpro.net/about",
  },
};

export default function About() {
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem", color: "var(--text-primary)" }}>
        About <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>AI-EditPro</span>
      </h1>
      
      <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "2rem", lineHeight: 1.8 }}>
        AI-EditPro is a free online developer tools platform designed to make developers and creators more productive. We provide 27+ professional-grade tools that work directly in your browser — no downloads, no sign-ups, no fees.
      </p>

      <div style={{ display: "grid", gap: "1.5rem", marginBottom: "3rem" }}>
        <div className="glass-card" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>🚀 Our Mission</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
            We believe powerful tools should be accessible to everyone. Our mission is to provide professional-grade developer utilities completely free, helping developers, designers, and businesses work faster and smarter.
          </p>
        </div>

        <div className="glass-card" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>🛠️ What We Offer</h2>
          <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1rem" }}>
            From QR code generation to JSON formatting, password security to timestamp conversion — we have tools for every stage of your development workflow.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {["QR Code Generator", "JSON Beautifier", "Base64 Encoder", "Password Generator", "JWT Decoder", "Hash Generator", "URL Encoder", "Regex Tester", "UUID Generator", "Lorem Ipsum"].map(tool => (
              <span key={tool} style={{ background: "var(--primary)", color: "#fff", padding: "0.3rem 0.8rem", borderRadius: "9999px", fontSize: "0.8rem", fontWeight: 600 }}>{tool}</span>
            ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>💯 Our Promise</h2>
          <ul style={{ color: "var(--text-muted)", lineHeight: 2, paddingLeft: "1.5rem" }}>
            <li>100% Free — No hidden costs, no premium tiers</li>
            <li>No Sign-up — Start using tools immediately</li>
            <li>Privacy First — All processing happens in your browser</li>
            <li>Lightning Fast — Optimized for speed and performance</li>
            <li>Always Updated — New tools added regularly</li>
          </ul>
        </div>

        <div className="glass-card" style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>📈 Statistics</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1.5rem", textAlign: "center" }}>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>27+</div>
              <div style={{ color: "var(--text-muted)" }}>Free Tools</div>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>100%</div>
              <div style={{ color: "var(--text-muted)" }}>Free Forever</div>
            </div>
            <div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>0</div>
              <div style={{ color: "var(--text-muted)" }}>Sign-up Required</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "2rem 0" }}>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>Ready to use our tools?</p>
        <Link href="/tools" style={{ textDecoration: "none" }}>
          <button className="btn-glow" style={{ fontSize: "1.1rem", padding: "1rem 2.5rem" }}>
            Explore All Tools →
          </button>
        </Link>
      </div>
    </div>
  );
}
