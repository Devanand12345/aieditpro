"use client";

import Link from "next/link";
import { tools } from "@/data/tools";
import { useEffect, useState } from "react";

const toolsList = tools.slice(0, 12);

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
  { value: "17+", label: "Free Tools", icon: "🗂️" },
  { value: "99.9%", label: "Uptime", icon: "⚡" },
  { value: "<5s", label: "Avg. Convert Time", icon: "🚀" },
];

const trendingTools = [
  { id: "json-beautifier", name: "JSON Beautifier", icon: "🎨", href: "/tools/json-beautifier", color: "#8b5cf6", tag: "🔥 Hot" },
  { id: "password-generator", name: "Password Generator", icon: "🔑", href: "/tools/password-generator", color: "#10b981", tag: "⭐ New" },
  { id: "word-counter", name: "Word Counter", icon: "📝", href: "/tools/word-counter", color: "#f59e0b", tag: "⭐ New" },
  { id: "color-picker", name: "Color Picker", icon: "🎨", href: "/tools/color-picker", color: "#06b6d4", tag: "⭐ New" },
  { id: "timestamp", name: "Timestamp Converter", icon: "⏱️", href: "/tools/timestamp", color: "#ec4899", tag: "⭐ New" },
  { id: "base64", name: "Base64 Encoder", icon: "🔤", href: "/tools/base64", color: "#ef4444", tag: "🔥 Hot" },
];


export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Show back to top button after scrolling 400px
      setShowBackToTop(window.scrollY > 400);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K for converter
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        window.location.href = '/converter';
      }
      // Cmd/Ctrl + T for tools
      if ((e.metaKey || e.ctrlKey) && e.key === 't') {
        e.preventDefault();
        window.location.href = '/tools';
      }
      // Cmd/Ctrl + / for shortcuts
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        document.getElementById('shortcuts-modal')?.classList.add('active');
      }
      // Esc to close modal
      if (e.key === 'Escape') {
        document.getElementById('shortcuts-modal')?.classList.remove('active');
      }
      // ArrowUp for back to top
      if (e.key === 'ArrowUp' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="page-root">

      {/* ── Hero Section ────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-grid">

          {/* Left: Converter Showcase */}
          <div className="hero-left fade-up">
            <div className="badge hero-badge">
              <span className="badge-dot" />
              ✨ AI-Powered File Conversion
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
                17+ Developer <span className="gradient-text">Tools</span>
              </h2>
              <p className="tools-subtitle">
                Format, validate, encode, decode, and analyze instantly.
              </p>
            </div>

            <div className="tools-grid">
              {toolsList.slice(0, 12).map(tool => (
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
                🔧 View All 17 Tools →
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

      {/* ── Trending Tools ───────────────────────────────────────────── */}
      <section className="section">
        <div className="section-header">
          <div className="section-eyebrow">Most Popular</div>
          <h2 className="section-title">
            Trending <span className="gradient-text">Tools</span>
          </h2>
          <p className="section-subtitle">The tools developers use most — all free, all instant</p>
        </div>

        <div className="trending-grid">
          {trendingTools.map(tool => (
            <Link key={tool.id} href={tool.href} style={{ textDecoration: "none" }}>
              <div className="trending-card glass-card">
                <div className="trending-tag" style={{ background: `${tool.color}18`, border: `1px solid ${tool.color}40`, color: tool.color }}>
                  {tool.tag}
                </div>
                <div className="trending-icon">{tool.icon}</div>
                <div className="trending-name">{tool.name}</div>
                <div className="trending-arrow" style={{ color: tool.color }}>→</div>
              </div>
            </Link>
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
            Why <span className="gradient-text-2">AI-EditPro</span>?
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


      {/* ── CTA Section ─────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="cta-card glass-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Files?</h2>
            <p className="cta-subtitle">Start converting now. No credit card required.</p>
            <button className="btn-cta" onClick={() => {
              alert('Press ' + (/Mac/.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark!');
            }} title="Never lose access to AI-EditPro">
              🔗 Keep AI-EditPro Handy
            </button>
          </div>
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
              <div className="footer-link-wrap">
                <Link href="/converter" className="footer-link">Converter</Link>
              </div>
              <div className="footer-link-wrap">
                <Link href="/tools" className="footer-link">Tools</Link>
              </div>
            </div>

            {/* Formats */}
            <div className="footer-col">
              <div className="footer-col-title">Formats</div>
              <div className="footer-link-wrap"><span className="footer-link">PDF</span></div>
              <div className="footer-link-wrap"><span className="footer-link">DOCX</span></div>
              <div className="footer-link-wrap"><span className="footer-link">XLSX</span></div>
              <div className="footer-link-wrap"><span className="footer-link">EPUB</span></div>
            </div>

            {/* Legal */}
            <div className="footer-col">
              <div className="footer-col-title">Legal</div>
              <div className="footer-link-wrap">
                <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
              </div>
              <div className="footer-link-wrap">
                <Link href="/terms-conditions" className="footer-link">Terms & Conditions</Link>
              </div>
            </div>

            {/* Support */}
            <div className="footer-col">
              <div className="footer-col-title">Support</div>
              <div className="footer-link-wrap">
                <Link href="/contact" className="footer-link">Contact Us</Link>
              </div>
              <div className="footer-link-wrap">
                <Link href="/contact" className="footer-link">Feedback</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © 2026 <span className="gradient-text" style={{ fontWeight: 600 }}>AI-EditPro</span> — File Conversion &amp; Developer Tools
            </span>
          </div>
        </div>
      </footer>

      {/* ── Scroll Progress Indicator ───────────────────────────────── */}
      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>


      {/* ── Back to Top Button ───────────────────────────────────────── */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to Top (↑)"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>

      {/* ── Keyboard Shortcuts Help Modal ────────────────────────────── */}
      <div id="shortcuts-modal" className="shortcuts-modal">
        <div className="shortcuts-modal-content">
          <div className="shortcuts-modal-header">
            <h3>⌨️ Keyboard Shortcuts</h3>
            <button className="shortcuts-close" onClick={() => {
              document.getElementById('shortcuts-modal')?.classList.remove('active');
            }}>×</button>
          </div>
          <div className="shortcuts-grid">
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>G</kbd><span>+</span><kbd>C</kbd>
              </div>
              <div className="shortcut-desc">Go to Converter</div>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>Ctrl</kbd><span>+</span><kbd>K</kbd>
              </div>
              <div className="shortcut-desc">Quick Search</div>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>J</kbd>
              </div>
              <div className="shortcut-desc">JSON Beautifier</div>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>P</kbd>
              </div>
              <div className="shortcut-desc">Password Generator</div>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>H</kbd>
              </div>
              <div className="shortcut-desc">Hash Generator</div>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>B</kbd>
              </div>
              <div className="shortcut-desc">Base64 Encoder</div>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>↑</kbd>
              </div>
              <div className="shortcut-desc">Back to Top</div>
            </div>
            <div className="shortcut-item">
              <div className="shortcut-keys">
                <kbd>?</kbd>
              </div>
              <div className="shortcut-desc">Show Shortcuts</div>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Scroll Progress Indicator
          window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            const progressBar = document.querySelector('.scroll-progress');
            if (progressBar) {
              progressBar.style.width = scrolled + '%';
            }

            // Back to top button visibility
            const backToTop = document.querySelector('.back-to-top');
            if (backToTop) {
              if (winScroll > 300) {
                backToTop.classList.add('visible');
              } else {
                backToTop.classList.remove('visible');
              }
            }
          });

          // Keyboard Shortcuts
          document.addEventListener('keydown', (e) => {
            // Show shortcuts help with ?
            if (e.key === '?' || (e.shiftKey && e.key === '/')) {
              e.preventDefault();
              document.getElementById('shortcuts-modal')?.classList.add('active');
            }

            // Close shortcuts with Escape
            if (e.key === 'Escape') {
              document.getElementById('shortcuts-modal')?.classList.remove('active');
            }

            // Convert: G + C
            if (e.key === 'g' || e.key === 'G') {
              window._goToConverter = true;
            }
            if (window._goToConverter && (e.key === 'c' || e.key === 'C')) {
              window._goToConverter = false;
              window.location.href = '/converter';
            }

            // Individual shortcuts
            if (e.key === 'j' || e.key === 'J') window.location.href = '/tools/json-beautifier';
            if (e.key === 'p' || e.key === 'P') window.location.href = '/tools/password-generator';
            if (e.key === 'h' || e.key === 'H') window.location.href = '/tools/hash';
            if (e.key === 'b' || e.key === 'B') window.location.href = '/tools/base64';

            // Quick search with Ctrl+K or Cmd+K
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
              e.preventDefault();
              // Could implement quick search modal here
              alert('Quick Search coming soon! Try: G+C for Converter, J for JSON, P for Password, H for Hash, B for Base64');
            }

            // Back to top with Arrow Up
            if (e.key === 'ArrowUp' && e.altKey) {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          });

          // Clear goToConverter flag on other keys
          document.addEventListener('keydown', (e) => {
            if (window._goToConverter && !'gcGC'.includes(e.key)) {
              window._goToConverter = false;
            }
          });
        `
      }} />

      <style>{`
        /* ── Root & Background ──────────────────── */
        .page-root {
          min-height: 100vh;
          padding-top: 80px;
          background: transparent;
          position: relative;
          overflow-x: hidden;
        }
        .page-root > * {
          position: relative;
          z-index: 2;
        }

        /* ── Glass card ─────────────────────────── */
        .glass-card {
          background: rgba(139, 92, 246, 0.08);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(168, 124, 246, 0.25);
          border-radius: 1.25rem;
        }

        /* ── Animations ─────────────────────────── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.8; box-shadow: 0 0 8px rgba(16, 185, 129, 0.4); }
          50%      { opacity: 1; box-shadow: 0 0 16px rgba(16, 185, 129, 0.6); }
        }
        @keyframes shimmer {
          0%   { opacity: 0.6; }
          50%  { opacity: 1; }
          100% { opacity: 0.6; }
        }
        .fade-up       { animation: fadeInUp 0.7s ease-out both; }
        .fade-up-delay { animation: fadeInUp 0.7s ease-out 0.15s both; }
        .shimmer       { animation: shimmer 2.5s ease-in-out infinite; }

        /* ── Hero ───────────────────────────────── */
        .hero-section {
          max-width: 1360px;
          margin: 0 auto;
          padding: 5rem 2rem 6rem;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        /* Hero Left */
        .hero-badge {
          margin-bottom: 1.75rem;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: rgba(16,185,129,0.15);
          border: 1px solid rgba(16,185,129,0.4);
          border-radius: 9999px;
          color: #6ee7b7;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        .badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #10b981;
          animation: pulse-glow 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }
        .hero-title {
          font-size: clamp(2.6rem, 4.5vw, 4.2rem);
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.05em;
          margin-bottom: 1.5rem;
          color: #f0f0ff;
        }
        .hero-title-accent {
          background: linear-gradient(135deg, #a78bfa, #e879f9, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 950;
        }
        .hero-desc {
          font-size: 1.1rem;
          color: rgba(220,210,255,0.88);
          margin-bottom: 2.5rem;
          line-height: 1.8;
          max-width: 480px;
        }

        /* Hero buttons */
        .hero-actions {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .btn-primary-hero {
          padding: 1rem 2.2rem;
          border-radius: 0.9rem;
          border: none;
          background: linear-gradient(135deg, #a78bfa, #c084fc, #e879f9);
          color: #fff;
          cursor: pointer;
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: 0.02em;
          transition: all 0.3s;
          box-shadow: 0 12px 40px rgba(139,92,246,0.4);
          position: relative;
          overflow: hidden;
        }
        .btn-primary-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0));
          transform: translateX(-100%);
          transition: transform 0.3s;
        }
        .btn-primary-hero:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 60px rgba(139,92,246,0.55);
        }
        .btn-primary-hero:hover::before {
          transform: translateX(100%);
        }
        .btn-icon {
          margin-right: 0.5rem;
          display: inline-block;
          transition: transform 0.3s;
        }
        .btn-primary-hero:hover .btn-icon {
          transform: rotate(-5deg);
        }
        .btn-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255,255,255,0.3), transparent);
          border-radius: inherit;
          transform: translate(-50%, -50%);
          opacity: 0;
          animation: btn-pulse 2s ease-in-out infinite;
        }
        @keyframes btn-pulse {
          0%, 100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.6; transform: translate(-50%, -50%) scale(1.1); }
        }
        .quick-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: rgba(220,210,255,0.6);
          background: rgba(139,92,246,0.1);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(139,92,246,0.2);
          animation: fadeInUp 1s ease-out 0.5s both;
        }
        .hint-key {
          background: rgba(168,124,246,0.3);
          padding: 0.15rem 0.4rem;
          border-radius: 0.3rem;
          font-size: 0.7rem;
          font-weight: 700;
          color: #e0d5ff;
          border: 1px solid rgba(168,124,246,0.5);
        }
        .btn-secondary-hero {
          padding: 1rem 2.2rem;
          border-radius: 0.9rem;
          border: 1.5px solid rgba(168,124,246,0.55);
          background: rgba(168,124,246,0.1);
          color: #c4b5fd;
          cursor: pointer;
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: 0.02em;
          transition: all 0.3s;
        }
        .btn-secondary-hero:hover {
          background: rgba(168,124,246,0.22);
          border-color: rgba(168,124,246,0.9);
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(139,92,246,0.3);
        }

        /* Button enhancements */
        .btn-icon {
          margin-right: 0.5rem;
          display: inline-block;
          transition: transform 0.3s;
        }
        .btn-primary-hero:hover .btn-icon {
          transform: scale(1.1) rotate(-5deg);
        }
        .btn-pulse {
          position: absolute;
          inset: 0;
          border-radius: 0.9rem;
          background: linear-gradient(135deg, rgba(255,255,255,0.3), transparent);
          animation: button-pulse 2s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes button-pulse {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        .btn-primary-hero {
          position: relative;
          overflow: hidden;
        }
        .quick-hint {
          font-size: 0.8rem;
          color: rgba(220,210,255,0.6);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
        }
        .hint-key {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.15rem 0.45rem;
          border-radius: 0.4rem;
          background: rgba(139,92,246,0.2);
          border: 1px solid rgba(168,124,246,0.4);
          font-size: 0.75rem;
          font-weight: 700;
          color: #c4b5fd;
          font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace;
        }

        /* Format pills */
        .format-pills {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }
        .format-pill {
          padding: 0.4rem 0.95rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 750;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: all 0.2s;
          cursor: default;
        }
        .format-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(139,92,246,0.2);
        }

        /* Trust badges */
        .trust-badges {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-radius: 0.9rem;
          background: rgba(34,197,94,0.12);
          border: 1px solid rgba(34,197,94,0.3);
          backdrop-filter: blur(10px);
          transition: all 0.2s;
        }
        .trust-badge:hover {
          background: rgba(34,197,94,0.18);
          transform: translateY(-2px);
        }
        .trust-icon { font-size: 1.3rem; }
        .trust-title {
          font-size: 0.8rem;
          font-weight: 800;
          color: #86efac;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .trust-sub {
          font-size: 0.8rem;
          color: rgba(220,210,255,0.68);
          margin-top: 0.15rem;
        }

        /* Hero Right - Tools */
        .tools-header { margin-bottom: 1.5rem; }
        .tools-title {
          font-size: 1.9rem;
          font-weight: 900;
          color: #f0f0ff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .tools-subtitle {
          color: rgba(220,210,255,0.75);
          font-size: 0.95rem;
          font-weight: 500;
        }
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .tool-card {
          padding: 1.2rem 1rem;
          border-radius: 1rem;
          border: 1.5px solid rgba(168,124,246,0.22);
          background: rgba(139, 92, 246, 0.08);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .tool-card::before {
          content: '';
          position: absolute;
          inset: -50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tool-card:hover {
          background: rgba(139, 92, 246, 0.18);
          border-color: rgba(168,124,246,0.65);
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(139,92,246,0.25);
        }
        .tool-card:hover::before { opacity: 1; }
        .tool-card-bar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2.5px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .tool-card:hover .tool-card-bar { opacity: 1; }
        .tool-icon  { font-size: 2rem; margin-bottom: 0.6rem; display: block; }
        .tool-category {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.35rem;
        }
        .tool-name {
          font-size: 0.82rem;
          font-weight: 800;
          color: #f0f0ff;
          margin-bottom: 0.25rem;
        }
        .tool-desc {
          font-size: 0.72rem;
          color: rgba(220,210,255,0.65);
          line-height: 1.5;
        }
        .btn-all-tools {
          width: 100%;
          padding: 1rem;
          border-radius: 0.9rem;
          border: 1.5px solid rgba(139,92,246,0.45);
          background: rgba(139,92,246,0.12);
          color: #c4b5fd;
          cursor: pointer;
          font-weight: 700;
          font-size: 0.95rem;
          transition: all 0.3s;
        }
        .btn-all-tools:hover {
          background: rgba(139,92,246,0.25);
          border-color: rgba(139,92,246,0.8);
          transform: translateY(-3px);
        }

        /* ── Stats ──────────────────────────────── */
        .stats-section {
          max-width: 1360px;
          margin: 0 auto 6rem;
          padding: 0 2rem;
        }
        .stats-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.08));
          border-radius: 1.25rem;
        }
        .stat-item {
          padding: 2.5rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .stat-icon { font-size: 1.8rem; }
        .stat-value { font-size: 2.4rem; font-weight: 950; letter-spacing: -0.02em; }
        .stat-label { font-size: 0.85rem; color: rgba(220,210,255,0.78); font-weight: 600; }

        /* ── Trending Tools ─────────────────────── */
        .trending-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }
        .trending-card {
          padding: 1.5rem 1.75rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: linear-gradient(135deg, rgba(139,92,246,0.08), rgba(139,92,246,0.03));
          position: relative;
          overflow: hidden;
        }
        .trending-card:hover {
          transform: translateY(-5px);
          background: rgba(139,92,246,0.14);
          border-color: rgba(168,124,246,0.5);
          box-shadow: 0 16px 40px rgba(139,92,246,0.2);
        }
        .trending-tag {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          padding: 0.2rem 0.6rem;
          border-radius: 9999px;
        }
        .trending-icon { font-size: 2rem; flex-shrink: 0; }
        .trending-name { font-size: 0.95rem; font-weight: 700; color: #ede9ff; flex: 1; }
        .trending-arrow { font-size: 1.2rem; font-weight: 800; flex-shrink: 0; transition: transform 0.2s; }
        .trending-card:hover .trending-arrow { transform: translateX(4px); }

        /* ── Shared section styles ──────────────── */
        .section {
          max-width: 1360px;
          margin: 0 auto 7rem;
          padding: 0 2rem;
        }
        .section-alt {
          background: transparent;
        }
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .section-eyebrow {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #a78bfa;
          background: rgba(139,92,246,0.15);
          border: 1px solid rgba(139,92,246,0.35);
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          margin-bottom: 1.25rem;
        }
        .section-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 950;
          letter-spacing: -0.04em;
          margin-bottom: 1rem;
          color: #f0f0ff;
        }
        .section-subtitle {
          color: rgba(220,210,255,0.78);
          font-size: 1.05rem;
          font-weight: 500;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── How It Works ───────────────────────── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          align-items: start;
          position: relative;
        }
        .step-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .step-card {
          padding: 2.5rem 2rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.05));
          backdrop-filter: blur(15px);
          flex: 1;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        .step-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .step-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(139,92,246,0.25), 0 0 0 1.5px rgba(139,92,246,0.3);
        }
        .step-card:hover::before { opacity: 1; }
        .step-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(168,124,246,0.2));
          border: 2px solid rgba(168,124,246,0.55);
          font-size: 0.75rem;
          font-weight: 850;
          color: #a78bfa;
          letter-spacing: 0.08em;
          margin: 0 auto 1rem;
        }
        .step-icon  { font-size: 2.6rem; margin-bottom: 0.9rem; }
        .step-title { font-size: 1.1rem; font-weight: 800; color: #f0f0ff; margin-bottom: 0.65rem; }
        .step-desc  { font-size: 0.88rem; color: rgba(220,210,255,0.8); line-height: 1.65; margin: 0; }
        .step-arrow {
          position: absolute;
          right: -1.3rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(139,92,246,0.5);
          font-size: 1.6rem;
          z-index: 2;
          pointer-events: none;
        }

        /* ── Features Grid ──────────────────────── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .feature-card {
          padding: 2.25rem 1.75rem;
          background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.03));
          backdrop-filter: blur(12px);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(139,92,246,0.2);
        }
        .feature-card:hover::before { opacity: 1; }
        .feature-icon {
          width: 56px;
          height: 56px;
          border-radius: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .feature-title { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.65rem; color: #f0f0ff; }
        .feature-desc  { font-size: 0.88rem; color: rgba(220,210,255,0.78); line-height: 1.65; margin: 0; }

        /* ── Testimonials ───────────────────────── */

        /* ── CTA Section ────────────────────────── */
        .cta-section {
          max-width: 1360px;
          margin: 0 auto 7rem;
          padding: 0 2rem;
        }
        .cta-card {
          padding: 4rem 3rem;
          text-align: center;
          background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1));
          backdrop-filter: blur(20px);
          position: relative;
          overflow: hidden;
        }
        .cta-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: 50%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(139,92,246,0.3), transparent);
          transform: translateX(-50%);
          pointer-events: none;
        }
        .cta-content {
          position: relative;
          z-index: 2;
        }
        .cta-title {
          font-size: 2.4rem;
          font-weight: 950;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
          color: #f0f0ff;
        }
        .cta-subtitle {
          font-size: 1.05rem;
          color: rgba(220,210,255,0.8);
          margin-bottom: 2rem;
        }
        .btn-cta {
          padding: 1.1rem 2.5rem;
          border-radius: 0.95rem;
          border: none;
          background: linear-gradient(135deg, #a78bfa, #e879f9);
          color: #fff;
          cursor: pointer;
          font-weight: 800;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
          transition: all 0.3s;
          box-shadow: 0 12px 40px rgba(139,92,246,0.4);
        }
        .btn-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 60px rgba(139,92,246,0.55);
        }

        /* ── Footer ─────────────────────────────── */
        .footer {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 5rem 2rem 3rem;
          background: rgba(15,23,42,0.95);
          backdrop-filter: blur(20px);
        }
        .footer-inner { max-width: 1360px; margin: 0 auto; }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
          gap: 3.5rem;
          margin-bottom: 4rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 1rem;
        }
        .footer-brand-name { font-weight: 800; font-size: 1rem; letter-spacing: -0.01em; }
        .footer-brand-desc {
          font-size: 0.85rem;
          color: rgba(220,210,255,0.6);
          line-height: 1.7;
          max-width: 240px;
        }
        .footer-col-title {
          font-size: 0.75rem;
          font-weight: 800;
          color: rgba(220,210,255,0.5);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .footer-link-wrap { margin-bottom: 0.8rem; }
        .footer-link {
          font-size: 0.9rem;
          color: rgba(220,210,255,0.7);
          text-decoration: none;
          transition: color 0.2s;
          font-weight: 500;
        }
        .footer-link:hover { color: #c4b5fd; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 2.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }
        .footer-copy { font-size: 0.85rem; color: rgba(220,210,255,0.5); font-weight: 500; }
        .footer-socials { display: flex; gap: 2rem; }
        .footer-social {
          font-size: 0.85rem;
          color: rgba(220,210,255,0.55);
          cursor: pointer;
          font-weight: 600;
          transition: color 0.2s;
        }
        .footer-social:hover { color: #c4b5fd; }

        /* ── Gradient text ──────────────────────── */
        .gradient-text {
          background: linear-gradient(135deg, #a78bfa, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gradient-text-2 {
          background: linear-gradient(135deg, #e879f9, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ── Scroll Progress Indicator ─────────────── */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.05);
          z-index: 9999;
        }
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #a78bfa, #e879f9);
          width: 0%;
          transition: width 0.1s;
          box-shadow: 0 0 10px rgba(167,139,250,0.8);
        }

        /* ── Floating Quick Access Toolbar ─────────── */
        .floating-toolbar {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 1rem;
          z-index: 1000;
        }
        .floating-toolbar-inner {
          display: flex;
          gap: 0.75rem;
          padding: 0.75rem;
          background: rgba(139,92,246,0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(168,124,246,0.3);
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px rgba(139,92,246,0.3);
        }
        .floating-btn {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(139,92,246,0.2), rgba(168,124,246,0.15));
          border: 2px solid rgba(168,124,246,0.4);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.2rem;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }
        .floating-btn:hover {
          background: linear-gradient(135deg, rgba(139,92,246,0.35), rgba(168,124,246,0.3));
          border-color: rgba(168,124,246,0.8);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 12px 40px rgba(139,92,246,0.4);
        }
        .floating-btn span:first-child {
          font-size: 1.3rem;
        }
        .floating-btn-label {
          font-size: 0.55rem;
          color: rgba(220,210,255,0.8);
          font-weight: 700;
        }

        /* ── Back to Top Button ────────────────────── */
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          left: 2rem;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a78bfa, #e879f9);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(139,92,246,0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px);
          transition: all 0.3s;
          z-index: 1000;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .back-to-top:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(139,92,246,0.6);
        }

        /* ── Keyboard Shortcuts Modal ──────────────── */
        .shortcuts-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          backdrop-filter: blur(5px);
        }
        .shortcuts-modal.active {
          display: flex;
        }
        .shortcuts-modal-content {
          background: rgba(15,23,42,0.95);
          backdrop-filter: blur(30px);
          border: 1px solid rgba(168,124,246,0.3);
          border-radius: 1.5rem;
          padding: 2.5rem;
          max-width: 480px;
          width: 90%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .shortcuts-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .shortcuts-modal-header h3 {
          color: #f0f0ff;
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
        }
        .shortcuts-close {
          background: none;
          border: none;
          color: rgba(220,210,255,0.7);
          font-size: 2rem;
          cursor: pointer;
          padding: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .shortcuts-close:hover {
          background: rgba(139,92,246,0.2);
          color: #f0f0ff;
        }
        .shortcut-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .shortcut-key {
          background: rgba(139,92,246,0.2);
          padding: 0.4rem 0.8rem;
          border-radius: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #e0d5ff;
          border: 1px solid rgba(168,124,246,0.4);
        }
        .shortcut-desc {
          color: rgba(220,210,255,0.7);
          font-size: 0.95rem;
        }

        /* ── Scroll Progress Indicator ───────────── */
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          z-index: 9999;
          background: rgba(139,92,246,0.1);
        }
        .scroll-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #a78bfa, #e879f9);
          width: 0%;
          transition: width 0.2s;
          box-shadow: 0 0 10px rgba(167,139,250,0.6);
        }

        /* ── Floating Toolbar ─────────────────────── */
        .floating-toolbar {
          position: fixed;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          animation: slideInLeft 0.5s ease-out;
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100px) translateY(-50%); opacity: 0; }
          to { transform: translateX(0) translateY(-50%); opacity: 1; }
        }
        @media (max-width: 768px) {
          .floating-toolbar {
            left: 1rem;
            gap: 0.5rem;
          }
        }
        .floating-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          padding: 0.9rem 1rem;
          border-radius: 1rem;
          background: rgba(139, 92, 246, 0.15);
          border: 1px solid rgba(168, 124, 246, 0.4);
          backdrop-filter: blur(15px);
          color: #e0d5ff;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          min-width: 90px;
          text-align: center;
        }
        .floating-btn:hover {
          background: rgba(139, 92, 246, 0.25);
          border-color: rgba(168, 124, 246, 0.8);
          transform: scale(1.05) translateY(-5px);
          box-shadow: 0 12px 30px rgba(139,92,246,0.3);
        }
        .floating-btn span:first-child {
          font-size: 1.6rem;
        }
        .floating-btn-label {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ── Back to Top Button ───────────────────── */
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #a78bfa, #e879f9);
          border: none;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 30px rgba(139,92,246,0.4);
          transition: all 0.3s;
          opacity: 0;
          visibility: hidden;
          z-index: 100;
        }
        .back-to-top.visible {
          opacity: 1;
          visibility: visible;
        }
        .back-to-top:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 12px 40px rgba(139,92,246,0.6);
        }

        /* ── Keyboard Shortcuts Modal ─────────────── */
        .shortcuts-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
        }
        .shortcuts-modal.active {
          opacity: 1;
          visibility: visible;
        }
        .shortcuts-modal-content {
          background: rgba(15,23,42,0.95);
          border: 1px solid rgba(168,124,246,0.3);
          border-radius: 1.5rem;
          padding: 2.5rem;
          max-width: 500px;
          width: 90%;
          box-shadow: 0 24px 80px rgba(139,92,246,0.3);
          animation: modalSlide 0.3s ease-out;
        }
        @keyframes modalSlide {
          from { transform: translateY(-50px) scale(0.9); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }
        .shortcuts-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .shortcuts-modal-header h3 {
          font-size: 1.5rem;
          font-weight: 900;
          color: #f0f0ff;
          margin: 0;
        }
        .shortcuts-close {
          background: none;
          border: none;
          color: rgba(220,210,255,0.7);
          font-size: 2rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .shortcuts-close:hover {
          background: rgba(139,92,246,0.2);
          color: #e0d5ff;
        }
        .shortcut-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .shortcut-item:last-child {
          border-bottom: none;
        }
        .shortcut-key {
          background: rgba(139,92,246,0.2);
          border: 1px solid rgba(168,124,246,0.5);
          padding: 0.4rem 0.8rem;
          border-radius: 0.5rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: #e0d5ff;
          font-family: monospace;
        }
        .shortcut-desc {
          color: rgba(220,210,255,0.7);
          font-size: 0.95rem;
        }

        /* ── Responsive ─────────────────────────── */
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .steps-grid    { grid-template-columns: repeat(2, 1fr); }
          .step-arrow    { display: none; }
          .footer-grid   { grid-template-columns: 1.5fr 1fr 1fr; }
          .hero-grid     { gap: 3.5rem; }
          .trending-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hero-grid     { grid-template-columns: 1fr; gap: 3rem; }
          .tools-grid    { grid-template-columns: repeat(3, 1fr); gap: 0.85rem; }
          .stats-inner   { grid-template-columns: repeat(2, 1fr); }
          .stat-item     { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); padding: 2rem 1.5rem; }
          .steps-grid    { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          .features-grid { grid-template-columns: 1fr 1fr; gap: 1.25rem; }
          .trust-badges  { grid-template-columns: 1fr; }
          .footer-grid   { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
          .cta-card      { padding: 3rem 2rem; }
          .trending-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
        }
        @media (max-width: 480px) {
          .hero-section  { padding: 3rem 1.25rem 4rem; }
          .tools-grid    { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .stats-inner   { grid-template-columns: 1fr 1fr; }
          .steps-grid    { grid-template-columns: 1fr; gap: 1.25rem; }
          .features-grid { grid-template-columns: 1fr; gap: 1rem; }
          .footer-grid   { grid-template-columns: 1fr; gap: 2rem; }
          .section       { padding: 0 1.25rem; }
          .hero-title    { font-size: 2.2rem; }
          .cta-card      { padding: 2rem 1.5rem; }
          .cta-title     { font-size: 1.6rem; }
          .trending-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
