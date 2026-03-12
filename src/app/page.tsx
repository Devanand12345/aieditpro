"use client";

import Link from "next/link";

const toolsList = [
  { id: "json-beautifier", name: "JSON Beautifier", icon: "🎨", desc: "Format & minify JSON", category: "Data", href: "/tools/json-beautifier", color: "#8b5cf6" },
  { id: "html-formatter", name: "HTML Formatter", icon: "🌐", desc: "Format & minify HTML", category: "Code", href: "/tools/html-formatter", color: "#06b6d4" },
  { id: "jwt-decoder", name: "JWT Decoder", icon: "🔐", desc: "Decode JWT tokens", category: "Security", href: "/tools/jwt-decoder", color: "#ec4899" },
  { id: "text-compare", name: "Text Diff", icon: "📋", desc: "Compare texts", category: "Utility", href: "/tools/text-compare", color: "#10b981" },
  { id: "json-compare", name: "JSON Compare", icon: "⚖️", desc: "Compare JSON objects", category: "Data", href: "/tools/json-compare", color: "#8b5cf6" },
  { id: "csv-formatter", name: "CSV Formatter", icon: "📊", desc: "Format CSV data", category: "Data", href: "/tools/csv-formatter", color: "#f59e0b" },
  { id: "base64", name: "Base64", icon: "🔤", desc: "Encode/decode Base64", category: "Encoding", href: "/tools/base64", color: "#ef4444" },
  { id: "url-encode", name: "URL Encoder", icon: "🔗", desc: "Encode/decode URLs", category: "Encoding", href: "/tools/url-encode", color: "#14b8a6" },
  { id: "regex", name: "Regex Tester", icon: "🔍", desc: "Test regex patterns", category: "Code", href: "/tools/regex", color: "#06b6d4" },
  { id: "uuid", name: "UUID Generator", icon: "🆔", desc: "Generate UUIDs", category: "Generator", href: "/tools/uuid", color: "#a855f7" },
  { id: "hash", name: "Hash Generator", icon: "#️⃣", desc: "Generate hashes", category: "Security", href: "/tools/hash", color: "#ec4899" },
  { id: "xml-formatter", name: "XML Formatter", icon: "📦", desc: "Format & minify XML", category: "Code", href: "/tools/xml-formatter", color: "#8b5cf6" },
];

const features = [
  { icon: "🎨", title: "JSON & Code Formatting", desc: "Beautify, minify, and format JSON, HTML, XML with precision.", gradient: "linear-gradient(135deg,#8b5cf6,#a78bfa)" },
  { icon: "📋", title: "Text Comparison & Diff", desc: "Compare and analyze text differences instantly with side-by-side view.", gradient: "linear-gradient(135deg,#10b981,#06b6d4)" },
  { icon: "🔐", title: "Security & Encoding", desc: "Decode JWTs, encode/decode Base64 & URLs with military-grade security.", gradient: "linear-gradient(135deg,#ec4899,#f59e0b)" },
  { icon: "#️⃣", title: "Hash & UUID Generation", desc: "Generate MD5, SHA hashes and UUIDs (v1 & v4) in seconds.", gradient: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { icon: "🔍", title: "Regex & Pattern Testing", desc: "Test and validate regex patterns with real-time results.", gradient: "linear-gradient(135deg,#06b6d4,#22d3ee)" },
  { icon: "📊", title: "Data Processing", desc: "Format and organize CSV, JSON, and tabular data effortlessly.", gradient: "linear-gradient(135deg,#14b8a6,#10b981)" },
  { icon: "⚡", title: "Lightning Fast", desc: "All tools process data instantly with zero latency.", gradient: "linear-gradient(135deg,#a855f7,#8b5cf6)" },
  { icon: "✨", title: "No Sign-Up Required", desc: "Start using tools immediately — free and unlimited access.", gradient: "linear-gradient(135deg,#fbbf24,#f59e0b)" },
];

const formats = ["PDF", "DOCX", "XLSX", "PPTX", "EPUB", "HTML", "RTF", "TXT"];
const fmtStyle = [
  { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.35)", text: "#c4b5fd" },
  { bg: "rgba(236,72,153,0.12)", border: "rgba(236,72,153,0.35)", text: "#f9a8d4" },
  { bg: "rgba(34,211,238,0.10)", border: "rgba(34,211,238,0.30)", text: "#67e8f9" },
  { bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.35)", text: "#c4b5fd" },
  { bg: "rgba(236,72,153,0.12)", border: "rgba(236,72,153,0.35)", text: "#f9a8d4" },
  { bg: "rgba(34,211,238,0.10)", border: "rgba(34,211,238,0.30)", text: "#67e8f9" },
  { bg: "rgba(251,191,36,0.10)", border: "rgba(251,191,36,0.30)", text: "#fde68a" },
  { bg: "rgba(52,211,153,0.10)", border: "rgba(52,211,153,0.30)", text: "#6ee7b7" },
];

const howItWorks = [
  { step: "01", icon: "📂", title: "Upload", desc: "Drag & drop or click to browse. Any format, any size." },
  { step: "02", icon: "🎯", title: "Choose", desc: "Pick your output format from 8+ options." },
  { step: "03", icon: "⚡", title: "Convert", desc: "AI processes your file with 99%+ accuracy in seconds." },
  { step: "04", icon: "📥", title: "Download", desc: "Grab your converted file — ready to use immediately." },
];

const stats = [
  { value: "50K+", label: "Files Converted", icon: "📄" },
  { value: "8+", label: "File Formats", icon: "🗂️" },
  { value: "99.9%", label: "Uptime", icon: "⚡" },
  { value: "<5s", label: "Avg. Convert Time", icon: "🚀" },
];

export default function Home() {
  return (
    <div className="page-root">

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-grid">

          {/* Left: Converter Showcase */}
          <div className="hero-left fade-up">
            <div className="badge hero-badge">
              <span className="badge-dot" />
              AI-Powered File Conversion
            </div>

            <h1 className="hero-title">
              <span className="shimmer">Convert Any File</span>
              <br />
              <span className="hero-title-accent">with AI Precision</span>
            </h1>

            <p className="hero-desc">
              Transform your documents instantly — preserving structure, formatting,
              and content with intelligent accuracy.{" "}
              <strong style={{ color: "#c4b5fd" }}>No sign-up required.</strong>
            </p>

            <div className="hero-actions">
              <Link href="/converter" style={{ textDecoration: "none" }}>
                <button className="btn-primary-hero">
                  📤 Convert Now
                </button>
              </Link>
              <Link href="/features" style={{ textDecoration: "none" }}>
                <button className="btn-secondary-hero">
                  ✨ Learn More
                </button>
              </Link>
            </div>

            <div className="format-pills">
              {formats.map((f, i) => (
                <span
                  key={f}
                  className="format-pill"
                  style={{
                    background: fmtStyle[i].bg,
                    border: `1px solid ${fmtStyle[i].border}`,
                    color: fmtStyle[i].text,
                  }}
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="trust-badges">
              <div className="trust-badge">
                <span className="trust-icon">✅</span>
                <div>
                  <div className="trust-title">No Sign-up</div>
                  <div className="trust-sub">Start instantly</div>
                </div>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">🔒</span>
                <div>
                  <div className="trust-title">100% Secure</div>
                  <div className="trust-sub">Fully private</div>
                </div>
              </div>
              <div className="trust-badge">
                <span className="trust-icon">⚡</span>
                <div>
                  <div className="trust-title">Lightning Fast</div>
                  <div className="trust-sub">Under 5 seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Tools Grid */}
          <div className="hero-right fade-up-delay">
            <div className="tools-header">
              <h2 className="tools-title">
                12+ Developer <span className="gradient-text">Tools</span>
              </h2>
              <p className="tools-subtitle">
                Format, validate, encode, decode, and analyze instantly.
              </p>
            </div>

            <div className="tools-grid">
              {toolsList.map(tool => (
                <Link key={tool.id} href={tool.href} style={{ textDecoration: "none" }}>
                  <div className="tool-card">
                    <div
                      className="tool-card-bar"
                      style={{ background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)` }}
                    />
                    <div className="tool-icon">{tool.icon}</div>
                    <div className="tool-category" style={{ color: tool.color }}>{tool.category}</div>
                    <div className="tool-name">{tool.name}</div>
                    <div className="tool-desc">{tool.desc}</div>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/tools" style={{ textDecoration: "none" }}>
              <button className="btn-all-tools">
                🔧 View All Tools →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────────────────────────── */}
      <section className="stats-section">
        <div className="stats-inner glass-card">
          {stats.map((s, i) => (
            <div key={i} className="stat-item" style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <div className="stat-icon">{s.icon}</div>
              <div className="gradient-text stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <section className="section">
        <div className="section-header">
          <div className="section-eyebrow">Simple Process</div>
          <h2 className="section-title">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle">Four simple steps to your converted file</p>
        </div>

        <div className="steps-grid">
          {howItWorks.map((step, i) => (
            <div key={step.step} className="step-wrapper">
              <div className="step-card glass-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
              {i < howItWorks.length - 1 && (
                <div className="step-arrow">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Grid ───────────────────────────────────────────── */}
      <section className="section section-alt">
        <div className="section-header">
          <div className="section-eyebrow">Capabilities</div>
          <h2 className="section-title">
            Why <span className="gradient-text-2">AIEditPro</span>?
          </h2>
          <p className="section-subtitle">Everything you need for file conversion &amp; developer tools</p>
        </div>

        <div className="features-grid">
          {features.map(f => (
            <div key={f.title} className="feature-card glass-card">
              <div className="feature-icon" style={{ background: f.gradient }}>{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon" style={{ width: "28px", height: "28px", borderRadius: "8px", fontSize: "11px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" />
                    <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="footer-brand-name">
                  <span className="gradient-text">AIEdit</span>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>Pro</span>
                </span>
              </div>
              <p className="footer-brand-desc">
                AI-powered file conversion &amp; developer tools for productivity.
              </p>
            </div>

            {/* Product */}
            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              {[["Converter", "/converter"], ["Tools", "/tools"], ["Features", "/features"]].map(([l, h]) => (
                <div key={l} className="footer-link-wrap">
                  <Link href={h} className="footer-link">{l}</Link>
                </div>
              ))}
            </div>

            {/* Formats */}
            <div className="footer-col">
              <div className="footer-col-title">Formats</div>
              {["PDF", "DOCX", "XLSX", "EPUB", "HTML", "TXT"].map(f => (
                <div key={f} className="footer-link-wrap">
                  <span className="footer-link">{f}</span>
                </div>
              ))}
            </div>

            {/* Company */}
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              {["About", "Blog", "Careers", "Privacy", "Terms"].map(l => (
                <div key={l} className="footer-link-wrap">
                  <span className="footer-link" style={{ cursor: "pointer" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © 2026 <span className="gradient-text" style={{ fontWeight: 600 }}>AIEditPro</span> — File Conversion &amp; Developer Tools
            </span>
            <div className="footer-socials">
              {["Twitter", "GitHub", "Discord"].map(s => (
                <span key={s} className="footer-social">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        /* ── Page root ──────────────────────────── */
        .page-root {
          min-height: 100vh;
          padding-top: 80px;
          background: linear-gradient(180deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
        }

        /* ── Animations ─────────────────────────── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up       { animation: fadeInUp 0.6s ease-out both; }
        .fade-up-delay { animation: fadeInUp 0.6s ease-out 0.12s both; }

        /* ── Hero ───────────────────────────────── */
        .hero-section {
          max-width: 1320px;
          margin: 0 auto;
          padding: 4rem 2rem 5rem;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* Hero Left */
        .hero-badge {
          margin-bottom: 1.5rem;
          display: inline-flex;
          background: rgba(16,185,129,0.15);
          border: 1px solid rgba(16,185,129,0.4);
          color: #6ee7b7;
        }
        .badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-glow 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .hero-title {
          font-size: clamp(2.4rem, 4.2vw, 3.8rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.04em;
          margin-bottom: 1.35rem;
          color: #ede9ff;
        }
        .hero-title-accent {
          background: linear-gradient(120deg, #a78bfa, #c084fc, #e879f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-desc {
          font-size: 1.05rem;
          color: rgba(220,210,255,0.85);
          margin-bottom: 2rem;
          line-height: 1.75;
          max-width: 440px;
        }

        /* Hero buttons */
        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        .btn-primary-hero {
          padding: 0.9rem 2rem;
          border-radius: 0.75rem;
          border: none;
          background: linear-gradient(120deg, #a78bfa, #c084fc);
          color: #fff;
          cursor: pointer;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.25s;
          box-shadow: 0 8px 25px rgba(139,92,246,0.35);
        }
        .btn-primary-hero:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 35px rgba(139,92,246,0.45);
        }
        .btn-secondary-hero {
          padding: 0.9rem 2rem;
          border-radius: 0.75rem;
          border: 1.5px solid rgba(168,124,246,0.45);
          background: rgba(168,124,246,0.08);
          color: #c4b5fd;
          cursor: pointer;
          font-weight: 700;
          font-size: 1rem;
          transition: all 0.25s;
        }
        .btn-secondary-hero:hover {
          background: rgba(168,124,246,0.18);
          border-color: rgba(168,124,246,0.75);
          transform: translateY(-3px);
        }

        /* Format pills */
        .format-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .format-pill {
          padding: 0.3rem 0.8rem;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          transition: all 0.2s;
        }

        /* Trust badges */
        .trust-badges {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1rem;
          border-radius: 0.75rem;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.2);
          flex: 1;
          min-width: 110px;
        }
        .trust-icon { font-size: 1.1rem; }
        .trust-title {
          font-size: 0.75rem;
          font-weight: 700;
          color: #86efac;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .trust-sub {
          font-size: 0.78rem;
          color: rgba(220,210,255,0.65);
          margin-top: 0.1rem;
        }

        /* Hero Right - Tools */
        .tools-header { margin-bottom: 1.25rem; }
        .tools-title {
          font-size: 1.7rem;
          font-weight: 800;
          color: #ede9ff;
          margin-bottom: 0.4rem;
          letter-spacing: -0.02em;
        }
        .tools-subtitle {
          color: rgba(220,210,255,0.7);
          font-size: 0.9rem;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          margin-bottom: 1.25rem;
        }
        .tool-card {
          padding: 1rem 0.75rem;
          border-radius: 0.85rem;
          border: 1.5px solid rgba(168,124,246,0.18);
          background: rgba(168,124,246,0.06);
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .tool-card:hover {
          background: rgba(168,124,246,0.16);
          border-color: rgba(168,124,246,0.55);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(139,92,246,0.2);
        }
        .tool-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .tool-card:hover .tool-card-bar { opacity: 1; }
        .tool-icon  { font-size: 1.8rem; margin-bottom: 0.45rem; }
        .tool-category {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.2rem;
        }
        .tool-name {
          font-size: 0.78rem;
          font-weight: 700;
          color: #ede9ff;
          margin-bottom: 0.2rem;
        }
        .tool-desc {
          font-size: 0.7rem;
          color: rgba(220,210,255,0.6);
          line-height: 1.4;
        }
        .btn-all-tools {
          width: 100%;
          padding: 0.9rem;
          border-radius: 0.75rem;
          border: 1.5px solid rgba(139,92,246,0.35);
          background: rgba(139,92,246,0.1);
          color: #c4b5fd;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.25s;
        }
        .btn-all-tools:hover {
          background: rgba(139,92,246,0.2);
          border-color: rgba(139,92,246,0.65);
          transform: translateY(-2px);
        }

        /* ── Stats ──────────────────────────────── */
        .stats-section {
          max-width: 1320px;
          margin: 0 auto 5rem;
          padding: 0 2rem;
        }
        .stats-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.06));
        }
        .stat-item {
          padding: 2rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
        }
        .stat-icon { font-size: 1.5rem; margin-bottom: 0.25rem; }
        .stat-value { font-size: 2.1rem; font-weight: 900; }
        .stat-label { font-size: 0.82rem; color: rgba(220,210,255,0.75); font-weight: 500; }

        /* ── Shared section styles ──────────────── */
        .section {
          max-width: 1320px;
          margin: 0 auto 6rem;
          padding: 0 2rem;
        }
        .section-alt {
          background: transparent;
        }
        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .section-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a78bfa;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.3);
          padding: 0.3rem 0.9rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }
        .section-title {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
          color: #ede9ff;
        }
        .section-subtitle {
          color: rgba(220,210,255,0.75);
          font-size: 1rem;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── How It Works ───────────────────────── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: start;
          position: relative;
        }
        .step-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .step-card {
          padding: 2rem 1.5rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.04));
          flex: 1;
          transition: all 0.25s;
        }
        .step-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(139,92,246,0.25);
        }
        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(139,92,246,0.2);
          border: 1.5px solid rgba(139,92,246,0.45);
          font-size: 0.7rem;
          font-weight: 800;
          color: #a78bfa;
          letter-spacing: 0.05em;
          margin: 0 auto 0.85rem;
        }
        .step-icon  { font-size: 2.2rem; margin-bottom: 0.75rem; }
        .step-title { font-size: 1rem; font-weight: 700; color: #ede9ff; margin-bottom: 0.5rem; }
        .step-desc  { font-size: 0.83rem; color: rgba(220,210,255,0.78); line-height: 1.6; margin: 0; }
        .step-arrow {
          position: absolute;
          right: -1.1rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(139,92,246,0.5);
          font-size: 1.4rem;
          z-index: 2;
          pointer-events: none;
        }

        /* ── Features Grid ──────────────────────── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .feature-card {
          padding: 1.75rem;
          background: linear-gradient(135deg, rgba(139,92,246,0.08), rgba(139,92,246,0.02));
          cursor: pointer;
          transition: all 0.25s;
        }
        .feature-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; color: #ede9ff; }
        .feature-desc  { font-size: 0.84rem; color: rgba(220,210,255,0.78); line-height: 1.6; margin: 0; }

        /* ── Footer ─────────────────────────────── */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 4.5rem 2rem 2.5rem;
          background: rgba(15,23,42,0.85);
        }
        .footer-inner { max-width: 1320px; margin: 0 auto; }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.85rem;
        }
        .footer-brand-name { font-weight: 700; font-size: 0.95rem; }
        .footer-brand-desc {
          font-size: 0.83rem;
          color: rgba(220,210,255,0.6);
          line-height: 1.65;
          max-width: 220px;
        }
        .footer-col-title {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(220,210,255,0.45);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }
        .footer-link-wrap { margin-bottom: 0.65rem; }
        .footer-link {
          font-size: 0.875rem;
          color: rgba(220,210,255,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-link:hover { color: #c4b5fd; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.25rem;
        }
        .footer-copy { font-size: 0.82rem; color: rgba(220,210,255,0.45); }
        .footer-socials { display: flex; gap: 1.5rem; }
        .footer-social {
          font-size: 0.82rem;
          color: rgba(220,210,255,0.5);
          cursor: pointer;
          font-weight: 500;
          transition: color 0.2s;
        }
        .footer-social:hover { color: #c4b5fd; }

        /* ── Responsive ─────────────────────────── */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .steps-grid    { grid-template-columns: repeat(2, 1fr); }
          .step-arrow    { display: none; }
          .footer-grid   { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .hero-grid     { grid-template-columns: 1fr; gap: 3rem; }
          .tools-grid    { grid-template-columns: repeat(3, 1fr); }
          .stats-inner   { grid-template-columns: repeat(2, 1fr); }
          .stat-item     { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); }
          .steps-grid    { grid-template-columns: 1fr 1fr; }
          .features-grid { grid-template-columns: 1fr 1fr; }
          .trust-badges  { flex-direction: column; }
          .footer-grid   { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 480px) {
          .hero-section  { padding: 2.5rem 1.25rem 3rem; }
          .tools-grid    { grid-template-columns: repeat(2, 1fr); }
          .stats-inner   { grid-template-columns: 1fr 1fr; }
          .steps-grid    { grid-template-columns: 1fr; }
          .features-grid { grid-template-columns: 1fr; }
          .footer-grid   { grid-template-columns: 1fr; }
          .section       { padding: 0 1.25rem; }
        }
      `}</style>
    </div>
  );
}
