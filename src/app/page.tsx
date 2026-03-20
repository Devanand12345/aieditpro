"use client";

import Link from "next/link";
import { tools } from "@/data/tools";
import { useEffect, useState, useMemo } from "react";

const toolsList = tools.slice(0, 12);

const features = [
  { icon: "📱", title: "QR Code Generator", desc: "Create QR codes for URLs, WiFi, contacts, text & more. Download as PNG instantly.", gradient: "linear-gradient(135deg,#ec4899,#f59e0b)" },
  { icon: "🖼️", title: "Image Compressor", desc: "Reduce image file size without losing quality. Supports JPG, PNG, WebP.", gradient: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { icon: "📝", title: "Lorem Ipsum Generator", desc: "Generate placeholder text for designs, mockups, and prototypes.", gradient: "linear-gradient(135deg,#10b981,#06b6d4)" },
  { icon: "🔒", title: "Password Strength Checker", desc: "Test password security, see crack time estimates, and get improvement tips.", gradient: "linear-gradient(135deg,#14b8a6,#10b981)" },
  { icon: "🔗", title: "URL Slug Generator", desc: "Create SEO-friendly URL slugs from any text. Perfect for blog posts.", gradient: "linear-gradient(135deg,#a855f7,#8b5cf6)" },
  { icon: "🔐", title: "Security & Encoding", desc: "Decode JWTs, encode/decode Base64 & URLs with military-grade security.", gradient: "linear-gradient(135deg,#ec4899,#f59e0b)" },
  { icon: "⚡", title: "Lightning Fast", desc: "All tools process data instantly. Client-side processing for privacy & speed.", gradient: "linear-gradient(135deg,#fbbf24,#f59e0b)" },
  { icon: "✨", title: "100% Free Forever", desc: "No registration. No limits. 22+ developer tools completely free forever.", gradient: "linear-gradient(135deg,#06b6d4,#10b981)" },
];

const stats = [
  { value: "22+", label: "Free Tools", icon: "🛠️" },
  { value: "100K+", label: "Users", icon: "👥" },
  { value: "99.9%", label: "Uptime", icon: "⚡" },
  { value: "100%", label: "Free Forever", icon: "💯" },
];

const trendingTools = [
  { id: "qr-code-generator", name: "QR Code Generator", icon: "📱", href: "/tools/qr-code-generator", color: "#ec4899", tag: "🔥 Hot" },
  { id: "image-compressor", name: "Image Compressor", icon: "🖼️", href: "/tools/image-compressor", color: "#f59e0b", tag: "⭐ New" },
  { id: "lorem-ipsum-generator", name: "Lorem Ipsum", icon: "📝", href: "/tools/lorem-ipsum-generator", color: "#10b981", tag: "⭐ New" },
  { id: "password-strength-checker", name: "Password Strength", icon: "🔒", href: "/tools/password-strength-checker", color: "#06b6d4", tag: "⭐ New" },
  { id: "url-slug-generator", name: "URL Slug", icon: "🔗", href: "/tools/url-slug-generator", color: "#8b5cf6", tag: "⭐ New" },
  { id: "password-generator", name: "Password Generator", icon: "🔑", href: "/tools/password-generator", color: "#10b981", tag: "⭐ Popular" },
];

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return tools.filter(t => 
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 8);
  }, [search]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="page-root">
      {/* Scroll Progress */}
      <div className="scroll-progress" />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="badge hero-badge">
              <span className="badge-dot" />
              ✨ 22+ Free Developer Tools
            </div>

            <h1 className="hero-title">
              <span className="shimmer">Free Online</span>
              <br />
              <span className="hero-title-accent">Developer Tools</span>
            </h1>

            <p className="hero-desc">
              QR Code Generator, Image Compressor, Lorem Ipsum, Password Checker, URL Slug & more.{" "}
              <strong style={{ color: "#c4b5fd" }}>All tools free. No sign-up required. No downloads needed.</strong>
            </p>

            {/* Search Bar */}
            <div style={{ position: "relative", maxWidth: "500px", marginBottom: "1.5rem" }}>
              <div style={{ position: "relative" }}>
                <svg style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#c4b5fd" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search 35+ tools..."
                  value={search}
                  onChange={e => { setSearch(e.target.value); setShowResults(true); }}
                  onFocus={() => setShowResults(true)}
                  onBlur={() => setTimeout(() => setShowResults(false), 200)}
                  style={{
                    width: "100%",
                    padding: "1rem 1rem 1rem 3rem",
                    borderRadius: "1rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    color: "#ede9ff",
                    fontSize: "1rem",
                    outline: "none",
                  }}
                />
              </div>
              {/* Search Results Dropdown */}
              {showResults && search.trim() && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  marginTop: "0.5rem",
                  borderRadius: "1rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(22,11,46,0.98)",
                  backdropFilter: "blur(20px)",
                  overflow: "hidden",
                  zIndex: 100,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                }}>
                  {searchResults.length > 0 ? (
                    searchResults.map(tool => (
                      <Link key={tool.id} href={tool.href} style={{ textDecoration: "none" }}>
                        <div style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.85rem 1rem",
                          borderBottom: "1px solid rgba(168,124,246,0.15)",
                          cursor: "pointer",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(139,92,246,0.2)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                        >
                          <span style={{ fontSize: "1.5rem" }}>{tool.icon}</span>
                          <div>
                            <div style={{ color: "#ede9ff", fontWeight: 600, fontSize: "0.95rem" }}>{tool.name}</div>
                            <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.8rem" }}>{tool.desc}</div>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div style={{ padding: "1.5rem", textAlign: "center", color: "rgba(220,210,255,0.6)" }}>
                      No tools found for "{search}"
                    </div>
                  )}
                  <Link href="/tools" style={{ textDecoration: "none" }}>
                    <div style={{ padding: "0.75rem", textAlign: "center", color: "#c4b5fd", fontSize: "0.9rem", fontWeight: 600, background: "rgba(139,92,246,0.15)" }}>
                      View all {tools.length} tools →
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <div className="hero-actions">
              <Link href="/tools" style={{ textDecoration: "none" }}>
                <button className="btn-primary-hero">
                  🛠️ Browse All Tools
                </button>
              </Link>
            </div>
          </div>

          <div className="hero-right">
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

      {/* Stats Bar */}
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

      {/* Trending Tools */}
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

      {/* Features Grid */}
      <section className="section section-alt">
        <div className="section-header">
          <div className="section-eyebrow">Capabilities</div>
          <h2 className="section-title">
            Why <span className="gradient-text-2">AI-EditPro</span>?
          </h2>
          <p className="section-subtitle">Everything you need for file conversion & developer tools</p>
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

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-card glass-card">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Files?</h2>
            <p className="cta-subtitle">Start converting now. No credit card required.</p>
            <Link href="/converter" style={{ textDecoration: "none" }}>
              <button className="btn-cta">
                🚀 Get Started Free
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <span>AI</span>
                </div>
                <span className="footer-brand-name">
                  <span className="gradient-text">AIEdit</span>
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>Pro</span>
                </span>
              </div>
              <p className="footer-brand-desc">
                AI-powered file conversion & developer tools for productivity.
              </p>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Product</div>
              <div className="footer-link-wrap">
                <Link href="/converter" className="footer-link">Converter</Link>
              </div>
              <div className="footer-link-wrap">
                <Link href="/tools" className="footer-link">Tools</Link>
              </div>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">Support</div>
              <div className="footer-link-wrap">
                <Link href="/contact" className="footer-link">Contact Us</Link>
              </div>
              <div className="footer-link-wrap">
                <Link href="/privacy-policy" className="footer-link">Privacy</Link>
              </div>
              <div className="footer-link-wrap">
                <Link href="/terms-conditions" className="footer-link">Terms</Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copy">
              © 2026 <span className="gradient-text">AI-EditPro</span> — File Conversion & Developer Tools
            </span>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to Top"
      >
        ↑
      </button>

      <style>{`
        .page-root { min-height: 100vh; padding-top: 80px; background: transparent; }
        .glass-card { background: rgba(139, 92, 246, 0.08); backdrop-filter: blur(15px); border: 1px solid rgba(168, 124, 246, 0.25); border-radius: 1.25rem; }

        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes shimmer { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
        .fade-up { animation: fadeInUp 0.7s ease-out both; }
        .shimmer { animation: shimmer 2.5s ease-in-out infinite; }

        .hero-section { max-width: 1360px; margin: 0 auto; padding: 5rem 2rem 6rem; }
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .hero-badge { margin-bottom: 1.75rem; display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1.25rem; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.4); border-radius: 9999px; color: #6ee7b7; font-size: 0.9rem; font-weight: 600; }
        .badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; animation: pulse-glow 2.5s ease-in-out infinite; flex-shrink: 0; }
        .hero-title { font-size: clamp(2.6rem, 4.5vw, 4.2rem); font-weight: 950; line-height: 1.05; letter-spacing: -0.05em; margin-bottom: 1.5rem; color: #f0f0ff; }
        .hero-title-accent { background: linear-gradient(135deg, #a78bfa, #e879f9, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 950; }
        .hero-desc { font-size: 1.1rem; color: rgba(220,210,255,0.88); margin-bottom: 2.5rem; line-height: 1.8; max-width: 480px; }

        .hero-actions { display: flex; justify-content: center; margin-bottom: 2.5rem; }
        .btn-primary-hero { padding: 1rem 2.2rem; border-radius: 0.9rem; border: none; background: linear-gradient(135deg, #a78bfa, #c084fc, #e879f9); color: #fff; cursor: pointer; font-weight: 800; font-size: 1.05rem; letter-spacing: 0.02em; transition: all 0.3s; box-shadow: 0 12px 40px rgba(139,92,246,0.4); }
        .btn-primary-hero:hover { transform: translateY(-4px); box-shadow: 0 18px 60px rgba(139,92,246,0.55); }

        .format-pills { display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2.5rem; }
        .format-pill { padding: 0.4rem 0.95rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 750; letter-spacing: 0.08em; text-transform: uppercase; transition: all 0.2s; cursor: default; }
        .format-pill:hover { transform: translateY(-2px); }

        .trust-badges { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .trust-badge { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.25rem; border-radius: 0.9rem; background: rgba(34,197,94,0.12); border: 1px solid rgba(34,197,94,0.3); backdrop-filter: blur(10px); transition: all 0.2s; }
        .trust-badge:hover { background: rgba(34,197,94,0.18); transform: translateY(-2px); }
        .trust-icon { font-size: 1.3rem; }
        .trust-title { font-size: 0.8rem; font-weight: 800; color: #86efac; text-transform: uppercase; letter-spacing: 0.05em; }
        .trust-sub { font-size: 0.8rem; color: rgba(220,210,255,0.68); margin-top: 0.15rem; }

        .tools-header { margin-bottom: 1.5rem; }
        .tools-title { font-size: 1.9rem; font-weight: 900; color: #f0f0ff; margin-bottom: 0.5rem; letter-spacing: -0.02em; }
        .tools-subtitle { color: rgba(220,210,255,0.75); font-size: 0.95rem; font-weight: 500; }
        .tools-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.5rem; }
        .tool-card { padding: 1.2rem 1rem; border-radius: 1rem; border: 1.5px solid rgba(168,124,246,0.22); background: rgba(139, 92, 246, 0.08); backdrop-filter: blur(10px); cursor: pointer; transition: all 0.3s; text-align: center; position: relative; overflow: hidden; }
        .tool-card:hover { background: rgba(139, 92, 246, 0.18); border-color: rgba(168,124,246,0.65); transform: translateY(-6px); box-shadow: 0 12px 40px rgba(139,92,246,0.25); }
        .tool-card-bar { position: absolute; top: 0; left: 0; right: 0; height: 2.5px; opacity: 0; transition: opacity 0.3s; }
        .tool-card:hover .tool-card-bar { opacity: 1; }
        .tool-icon { font-size: 2rem; margin-bottom: 0.6rem; display: block; }
        .tool-category { font-size: 0.7rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.35rem; }
        .tool-name { font-size: 0.82rem; font-weight: 800; color: #f0f0ff; margin-bottom: 0.25rem; }
        .tool-desc { font-size: 0.72rem; color: rgba(220,210,255,0.65); line-height: 1.5; }
        .btn-all-tools { width: 100%; padding: 1rem; border-radius: 0.9rem; border: 1.5px solid rgba(139,92,246,0.45); background: rgba(139,92,246,0.12); color: #c4b5fd; cursor: pointer; font-weight: 700; font-size: 0.95rem; transition: all 0.3s; }
        .btn-all-tools:hover { background: rgba(139,92,246,0.25); border-color: rgba(139,92,246,0.8); transform: translateY(-3px); }

        .stats-section { max-width: 1360px; margin: 0 auto 6rem; padding: 0 2rem; }
        .stats-inner { display: grid; grid-template-columns: repeat(4, 1fr); overflow: hidden; background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.08)); border-radius: 1.25rem; }
        .stat-item { padding: 2.5rem 2rem; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .stat-icon { font-size: 1.8rem; }
        .stat-value { font-size: 2.4rem; font-weight: 950; letter-spacing: -0.02em; }
        .stat-label { font-size: 0.85rem; color: rgba(220,210,255,0.78); font-weight: 600; }

        .section { max-width: 1360px; margin: 0 auto 7rem; padding: 0 2rem; }
        .section-alt { background: transparent; }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .section-eyebrow { display: inline-block; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; color: #a78bfa; background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.35); padding: 0.4rem 1rem; border-radius: 9999px; margin-bottom: 1.25rem; }
        .section-title { font-size: clamp(2rem, 3.5vw, 2.8rem); font-weight: 950; letter-spacing: -0.04em; margin-bottom: 1rem; color: #f0f0ff; }
        .section-subtitle { color: rgba(220,210,255,0.78); font-size: 1.05rem; font-weight: 500; max-width: 520px; margin: 0 auto; line-height: 1.7; }

        .trending-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .trending-card { padding: 1.5rem 1.75rem; display: flex; align-items: center; gap: 1rem; cursor: pointer; transition: all 0.3s; background: linear-gradient(135deg, rgba(139,92,246,0.08), rgba(139,92,246,0.03)); position: relative; overflow: hidden; }
        .trending-card:hover { transform: translateY(-5px); background: rgba(139,92,246,0.14); border-color: rgba(168,124,246,0.5); box-shadow: 0 16px 40px rgba(139,92,246,0.2); }
        .trending-tag { position: absolute; top: 0.75rem; right: 0.75rem; font-size: 0.65rem; font-weight: 800; letter-spacing: 0.05em; padding: 0.2rem 0.6rem; border-radius: 9999px; }
        .trending-icon { font-size: 2rem; flex-shrink: 0; }
        .trending-name { font-size: 0.95rem; font-weight: 700; color: #ede9ff; flex: 1; }
        .trending-arrow { font-size: 1.2rem; font-weight: 800; flex-shrink: 0; transition: transform 0.2s; }
        .trending-card:hover .trending-arrow { transform: translateX(4px); }

        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; align-items: start; position: relative; }
        .step-wrapper { position: relative; display: flex; align-items: center; }
        .step-card { padding: 2.5rem 2rem; text-align: center; background: linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.05)); backdrop-filter: blur(15px); flex: 1; transition: all 0.3s; position: relative; overflow: hidden; }
        .step-card:hover { transform: translateY(-8px); box-shadow: 0 24px 60px rgba(139,92,246,0.25), 0 0 0 1.5px rgba(139,92,246,0.3); }
        .step-number { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, rgba(139,92,246,0.3), rgba(168,124,246,0.2)); border: 2px solid rgba(168,124,246,0.55); font-size: 0.75rem; font-weight: 850; color: #a78bfa; letter-spacing: 0.08em; margin: 0 auto 1rem; }
        .step-icon { font-size: 2.6rem; margin-bottom: 0.9rem; }
        .step-title { font-size: 1.1rem; font-weight: 800; color: #f0f0ff; margin-bottom: 0.65rem; }
        .step-desc { font-size: 0.88rem; color: rgba(220,210,255,0.8); line-height: 1.65; margin: 0; }
        .step-arrow { position: absolute; right: -1.3rem; top: 50%; transform: translateY(-50%); color: rgba(139,92,246,0.5); font-size: 1.6rem; z-index: 2; pointer-events: none; }

        .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .feature-card { padding: 2.25rem 1.75rem; background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(139,92,246,0.03)); backdrop-filter: blur(12px); cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(139,92,246,0.2); }
        .feature-icon { width: 56px; height: 56px; border-radius: 0.9rem; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 1rem; }
        .feature-title { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.65rem; color: #f0f0ff; }
        .feature-desc { font-size: 0.88rem; color: rgba(220,210,255,0.78); line-height: 1.65; margin: 0; }

        .cta-section { max-width: 1360px; margin: 0 auto 7rem; padding: 0 2rem; }
        .cta-card { padding: 4rem 3rem; text-align: center; background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1)); backdrop-filter: blur(20px); position: relative; overflow: hidden; }
        .cta-card::before { content: ''; position: absolute; top: -50%; left: 50%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(139,92,246,0.3), transparent); transform: translateX(-50%); pointer-events: none; }
        .cta-content { position: relative; z-index: 2; }
        .cta-title { font-size: 2.4rem; font-weight: 950; letter-spacing: -0.03em; margin-bottom: 0.75rem; color: #f0f0ff; }
        .cta-subtitle { font-size: 1.05rem; color: rgba(220,210,255,0.8); margin-bottom: 2rem; }
        .btn-cta { padding: 1.1rem 2.5rem; border-radius: 0.95rem; border: none; background: linear-gradient(135deg, #a78bfa, #e879f9); color: #fff; cursor: pointer; font-weight: 800; font-size: 1.1rem; letter-spacing: 0.02em; transition: all 0.3s; box-shadow: 0 12px 40px rgba(139,92,246,0.4); }
        .btn-cta:hover { transform: translateY(-4px); box-shadow: 0 18px 60px rgba(139,92,246,0.55); }

        .footer { border-top: 1px solid rgba(255,255,255,0.08); padding: 5rem 2rem 3rem; background: rgba(15,23,42,0.95); backdrop-filter: blur(20px); }
        .footer-inner { max-width: 1360px; margin: 0 auto; }
        .footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 3.5rem; margin-bottom: 4rem; }
        .footer-logo { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem; }
        .logo-icon { width: 28px; height: 28px; border-radius: 8px; font-size: 11px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #a78bfa, #e879f9); }
        .footer-brand-name { font-weight: 800; font-size: 1rem; letter-spacing: -0.01em; }
        .footer-brand-desc { font-size: 0.85rem; color: rgba(220,210,255,0.6); line-height: 1.7; max-width: 240px; }
        .footer-col-title { font-size: 0.75rem; font-weight: 800; color: rgba(220,210,255,0.5); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.25rem; }
        .footer-link-wrap { margin-bottom: 0.8rem; }
        .footer-link { font-size: 0.9rem; color: rgba(220,210,255,0.7); text-decoration: none; transition: color 0.2s; font-weight: 500; }
        .footer-link:hover { color: #c4b5fd; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 2.5rem; display: flex; justify-content: center; align-items: center; gap: 1.5rem; }
        .footer-copy { font-size: 0.85rem; color: rgba(220,210,255,0.5); font-weight: 500; }

        .gradient-text { background: linear-gradient(135deg, #a78bfa, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gradient-text-2 { background: linear-gradient(135deg, #e879f9, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

        .scroll-progress { position: fixed; top: 0; left: 0; width: 100%; height: 3px; background: rgba(255,255,255,0.05); z-index: 9999; }
        .back-to-top { position: fixed; bottom: 2rem; left: 2rem; width: 52px; height: 52px; border-radius: 50%; background: linear-gradient(135deg, #a78bfa, #e879f9); border: none; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 20px rgba(139,92,246,0.4); opacity: 0; visibility: hidden; transform: translateY(20px); transition: all 0.3s; z-index: 1000; }
        .back-to-top.visible { opacity: 1; visibility: visible; transform: translateY(0); }
        .back-to-top:hover { transform: translateY(-5px); box-shadow: 0 8px 30px rgba(139,92,246,0.6); }

        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr); }
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
          .step-arrow { display: none; }
          .footer-grid { grid-template-columns: 1.5fr 1fr; }
          .hero-grid { gap: 3.5rem; }
          .trending-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
          .tools-grid { grid-template-columns: repeat(3, 1fr); gap: 0.85rem; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .stat-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.07); padding: 2rem 1.5rem; }
          .steps-grid { grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          .features-grid { grid-template-columns: 1fr 1fr; gap: 1.25rem; }
          .trust-badges { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .cta-card { padding: 3rem 2rem; }
          .trending-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
        }
        @media (max-width: 480px) {
          .hero-section { padding: 6rem 1rem 3rem; }
          .tools-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
          .stats-inner { grid-template-columns: 1fr 1fr; }
          .steps-grid { grid-template-columns: 1fr; gap: 1.25rem; }
          .features-grid { grid-template-columns: 1fr; gap: 1rem; }
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .section { padding: 0 1rem; }
          .hero-title { font-size: 1.8rem; }
          .hero-badge { font-size: 0.8rem; padding: 0.5rem 1rem; }
          .cta-card { padding: 2rem 1rem; }
          .cta-title { font-size: 1.4rem; }
          .trending-grid { grid-template-columns: 1fr; }
          .hero-desc { font-size: 0.95rem; }
          .section-title { font-size: 1.6rem; }
          .section-subtitle { font-size: 0.9rem; }
          .stats-section { padding: 0 1rem; }
          .stat-value { font-size: 1.8rem; }
        }

        @media (max-width: 360px) {
          .hero-title { font-size: 1.6rem; }
          .tools-grid { grid-template-columns: 1fr; }
          .btn-primary-hero { padding: 0.8rem 1.5rem; font-size: 0.95rem; }
        }

        /* Light Mode */
        [data-theme="light"] .hero-title { color: #0f0a1e; }
        [data-theme="light"] .hero-title-accent { background: linear-gradient(135deg, #7c3aed, #db2777, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        [data-theme="light"] .hero-desc { color: rgba(30,27,75,0.85); }
        [data-theme="light"] .hero-badge { background: rgba(124,58,237,0.1); border-color: rgba(124,58,237,0.3); color: #7c3aed; }
        [data-theme="light"] .tools-title { color: #0f0a1e; }
        [data-theme="light"] .tools-subtitle { color: rgba(30,27,75,0.7); }
        [data-theme="light"] .tool-card { background: rgba(255,255,255,0.9); border-color: rgba(124,58,237,0.2); }
        [data-theme="light"] .tool-card:hover { background: rgba(255,255,255,0.98); border-color: rgba(124,58,237,0.5); }
        [data-theme="light"] .tool-name { color: #0f0a1e; }
        [data-theme="light"] .tool-desc { color: rgba(30,27,75,0.7); }
        [data-theme="light"] .btn-all-tools { background: rgba(124,58,237,0.08); border-color: rgba(124,58,237,0.3); color: #7c3aed; }
        [data-theme="light"] .stat-label { color: rgba(30,27,75,0.7); }
        [data-theme="light"] .section-title { color: #0f0a1e; }
        [data-theme="light"] .section-subtitle { color: rgba(30,27,75,0.75); }
        [data-theme="light"] .section-eyebrow { background: rgba(124,58,237,0.1); border-color: rgba(124,58,237,0.25); color: #7c3aed; }
        [data-theme="light"] .trending-name { color: #0f0a1e; }
        [data-theme="light"] .feature-title { color: #0f0a1e; }
        [data-theme="light"] .feature-desc { color: rgba(30,27,75,0.75); }
        [data-theme="light"] .cta-title { color: #0f0a1e; }
        [data-theme="light"] .cta-subtitle { color: rgba(30,27,75,0.75); }
        [data-theme="light"] .footer { background: rgba(248,245,255,0.95); border-color: rgba(124,58,237,0.1); }
        [data-theme="light"] .footer-brand-desc { color: rgba(30,27,75,0.6); }
        [data-theme="light"] .footer-col-title { color: rgba(30,27,75,0.5); }
        [data-theme="light"] .footer-link { color: rgba(30,27,75,0.7); }
        [data-theme="light"] .footer-link:hover { color: #7c3aed; }
        [data-theme="light"] .footer-copy { color: rgba(30,27,75,0.5); }
        [data-theme="light"] .gradient-text { background: linear-gradient(135deg, #7c3aed, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        [data-theme="light"] .gradient-text-2 { background: linear-gradient(135deg, #db2777, #7c3aed); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        [data-theme="light"] .glass-card { background: rgba(255,255,255,0.9); border-color: rgba(124,58,237,0.2); }
        [data-theme="light"] .stat-item { border-color: rgba(124,58,237,0.1) !important; }
      `}</style>
    </div>
  );
}