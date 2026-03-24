"use client";

import Link from "next/link";
import { tools } from "@/data/tools";
import { useEffect, useState, useMemo } from "react";

const popularTools = tools.filter(t => t.popular);

export default function Home() {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    return tools.filter(t => 
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase())
    ).slice(0, 6);
  }, [search]);

  return (
    <div className="page-root">
      <div className="scroll-progress" />

      {/* Hero */}
      <section className="hero-section">
        <div className="hero-badge">
          <span className="badge-dot" />
          40+ Free Developer Tools
        </div>
        
        <h1 className="hero-title">
          <span className="gradient-text">Developer Tools</span>
          <br />
          <span style={{ color: "#e2e8f0" }}>That Just Work</span>
        </h1>
        
        <p className="hero-desc">
          JSON formatter, Base64 encoder, hash generator, QR codes & more.
          <br />
          <strong style={{ color: "#c4b5fd" }}>No signup. No limits. No ads.</strong>
        </p>

        {/* Search */}
        <div className="search-wrapper">
          <div className="search-box">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search tools... (e.g. JSON, Base64, Hash)"
              value={search}
              onChange={e => { setSearch(e.target.value); setShowResults(true); }}
              onFocus={() => setShowResults(true)}
              onBlur={() => setTimeout(() => setShowResults(false), 150)}
            />
          </div>
          
          {showResults && search.trim() && (
            <div className="search-results">
              {searchResults.length > 0 ? (
                <>
                  {searchResults.map(tool => (
                    <Link key={tool.id} href={tool.href} onClick={() => { setSearch(""); setShowResults(false); }}>
                      <div className="search-result-item">
                        <span className="result-icon">{tool.icon}</span>
                        <div>
                          <div className="result-name">{tool.name}</div>
                          <div className="result-desc">{tool.desc}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <Link href={`/tools?q=${search}`} className="search-all" onClick={() => { setSearch(""); setShowResults(false); }}>
                    View all results →
                  </Link>
                </>
              ) : (
                <div className="search-empty">No tools found for "{search}"</div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Popular Tools */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Most Popular</h2>
          <p className="section-subtitle">Tools developers use every day</p>
        </div>
        
        <div className="popular-grid">
          {popularTools.map(tool => (
            <Link key={tool.id} href={tool.href}>
              <div className="popular-card" style={{ "--accent": tool.color } as React.CSSProperties}>
                <div className="popular-icon">{tool.icon}</div>
                <div className="popular-name">{tool.name}</div>
                <div className="popular-desc">{tool.desc}</div>
                <div className="popular-arrow">→</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Categories */}
      <section className="section section-alt">
        <div className="section-header">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">Find the right tool for your task</p>
        </div>
        
        <div className="category-grid">
          <Link href="/tools?category=Security" className="category-card">
            <div className="cat-icon">🔒</div>
            <div className="cat-name">Security</div>
            <div className="cat-count">8 tools</div>
          </Link>
          <Link href="/tools?category=Data" className="category-card">
            <div className="cat-icon">📊</div>
            <div className="cat-name">Data</div>
            <div className="cat-count">5 tools</div>
          </Link>
          <Link href="/tools?category=Encoding" className="category-card">
            <div className="cat-icon">🔤</div>
            <div className="cat-name">Encoding</div>
            <div className="cat-count">4 tools</div>
          </Link>
          <Link href="/tools?category=Code" className="category-card">
            <div className="cat-icon">💻</div>
            <div className="cat-name">Code</div>
            <div className="cat-count">4 tools</div>
          </Link>
          <Link href="/tools?category=Generator" className="category-card">
            <div className="cat-icon">🎲</div>
            <div className="cat-name">Generator</div>
            <div className="cat-count">7 tools</div>
          </Link>
          <Link href="/tools?category=Utility" className="category-card">
            <div className="cat-icon">🛠️</div>
            <div className="cat-name">Utility</div>
            <div className="cat-count">8 tools</div>
          </Link>
        </div>
        
        <div className="view-all-wrap">
          <Link href="/tools" className="view-all-btn">View All 40+ Tools →</Link>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Why Developers Love Us</h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>All tools process instantly in your browser. No uploads, no waiting.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🔒</div>
            <h3>Privacy First</h3>
            <p>Your data never leaves your device. 100% client-side processing.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">💯</div>
            <h3>Always Free</h3>
            <p>No signup, no limits, no premium tiers. Every tool is free forever.</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h3>Works Everywhere</h3>
            <p>Responsive design works perfectly on desktop, tablet, and mobile.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta-box">
          <h2>Ready to boost your productivity?</h2>
          <p>Start using our free tools right now. No credit card needed.</p>
          <Link href="/tools" className="cta-btn">Get Started Free →</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <span className="logo-icon">AI</span>
                <span className="logo-text"><span className="gradient-text">AIEdit</span>Pro</span>
              </div>
              <p className="footer-desc">Free online developer tools for everyone.</p>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Tools</div>
              <Link href="/tools">All Tools</Link>
              <Link href="/tools?category=Code">Code Tools</Link>
              <Link href="/tools?category=Security">Security</Link>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Resources</div>
              <Link href="/blog">Blog</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div className="footer-bottom">
            © 2026 AI-EditPro — Free Forever
          </div>
        </div>
      </footer>

      <style>{`
        .page-root { min-height: 100vh; background: var(--bg-primary); }
        .scroll-progress { position: fixed; top: 0; left: 0; width: 100%; height: 3px; background: rgba(255,255,255,0.05); z-index: 9999; }
        
        /* Hero */
        .hero-section { text-align: center; padding: 5rem 2rem 4rem; max-width: 900px; margin: 0 auto; }
        .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.35); border-radius: 9999px; color: #a78bfa; font-size: 0.85rem; font-weight: 600; margin-bottom: 2rem; }
        .badge-dot { width: 8px; height: 8px; border-radius: 50%; background: #10b981; animation: pulse 2s infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        
        .hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 950; line-height: 1.1; margin-bottom: 1.5rem; letter-spacing: -0.03em; }
        .hero-desc { font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 2.5rem; line-height: 1.7; }
        
        /* Search */
        .search-wrapper { max-width: 560px; margin: 0 auto; position: relative; }
        .search-box { position: relative; }
        .search-icon { position: absolute; left: 1.25rem; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
        .search-box input { width: 100%; padding: 1.1rem 1.25rem 1.1rem 3.5rem; border-radius: 1rem; border: 1px solid var(--border); background: var(--bg-secondary); color: var(--text-primary); font-size: 1rem; outline: none; transition: border-color 0.2s; }
        .search-box input:focus { border-color: var(--primary); }
        .search-box input::placeholder { color: var(--text-muted); }
        
        .search-results { position: absolute; top: calc(100% + 0.5rem); left: 0; right: 0; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); z-index: 100; }
        .search-result-item { display: flex; align-items: center; gap: 1rem; padding: 0.9rem 1.25rem; border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.2s; }
        .search-result-item:hover { background: rgba(139,92,246,0.1); }
        .result-icon { font-size: 1.5rem; }
        .result-name { font-weight: 600; color: var(--text-primary); }
        .result-desc { font-size: 0.8rem; color: var(--text-muted); }
        .search-all { display: block; padding: 0.75rem; text-align: center; color: var(--primary); font-weight: 600; font-size: 0.9rem; background: rgba(139,92,246,0.1); }
        .search-empty { padding: 1.5rem; text-align: center; color: var(--text-muted); }
        
        /* Sections */
        .section { max-width: 1200px; margin: 0 auto 5rem; padding: 0 2rem; }
        .section-alt { background: var(--bg-secondary); padding: 4rem 2rem; border-radius: 1.5rem; max-width: 1200px; margin-left: auto; margin-right: auto; margin-bottom: 5rem; }
        .section-header { text-align: center; margin-bottom: 2.5rem; }
        .section-title { font-size: clamp(1.8rem, 3vw, 2.2rem); font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem; }
        .section-subtitle { color: var(--text-secondary); font-size: 1rem; }
        
        /* Popular Grid */
        .popular-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; }
        .popular-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 1rem; padding: 1.5rem; position: relative; transition: all 0.3s; cursor: pointer; }
        .popular-card:hover { border-color: var(--accent); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.15); }
        .popular-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .popular-name { font-size: 1.1rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; }
        .popular-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; }
        .popular-arrow { position: absolute; top: 1.5rem; right: 1.5rem; color: var(--accent); font-size: 1.25rem; font-weight: 700; opacity: 0; transition: opacity 0.2s; }
        .popular-card:hover .popular-arrow { opacity: 1; }
        
        /* Category Grid */
        .category-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; }
        .category-card { background: var(--bg-card); border: 1px solid var(--border); border-radius: 1rem; padding: 1.5rem; text-align: center; transition: all 0.3s; cursor: pointer; }
        .category-card:hover { border-color: var(--primary); transform: translateY(-4px); }
        .cat-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .cat-name { font-weight: 700; color: var(--text-primary); margin-bottom: 0.25rem; }
        .cat-count { font-size: 0.8rem; color: var(--text-muted); }
        
        .view-all-wrap { text-align: center; margin-top: 2rem; }
        .view-all-btn { display: inline-block; padding: 0.9rem 2rem; background: linear-gradient(135deg, #a78bfa, #c084fc); color: white; border-radius: 0.9rem; font-weight: 700; text-decoration: none; transition: transform 0.2s; }
        .view-all-btn:hover { transform: translateY(-2px); }
        
        /* Features */
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
        .feature-item { text-align: center; padding: 2rem; }
        .feature-icon { font-size: 3rem; margin-bottom: 1rem; }
        .feature-item h3 { font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.5rem; }
        .feature-item p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.6; }
        
        /* CTA */
        .cta-box { text-align: center; background: linear-gradient(135deg, rgba(139,92,246,0.15), rgba(236,72,153,0.1)); border: 1px solid rgba(139,92,246,0.25); border-radius: 1.5rem; padding: 3rem 2rem; }
        .cta-box h2 { font-size: 2rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.75rem; }
        .cta-box p { color: var(--text-secondary); margin-bottom: 1.5rem; }
        .cta-btn { display: inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #a78bfa, #e879f9); color: white; border-radius: 0.9rem; font-weight: 700; font-size: 1.1rem; text-decoration: none; transition: transform 0.2s; }
        .cta-btn:hover { transform: translateY(-3px); }
        
        /* Footer */
        .footer { background: var(--bg-secondary); border-top: 1px solid var(--border); padding: 4rem 2rem 2rem; margin-top: 3rem; }
        .footer-inner { max-width: 1200px; margin: 0 auto; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
        .footer-logo { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; }
        .logo-icon { width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(135deg, #a78bfa, #e879f9); display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 0.75rem; color: white; }
        .logo-text { font-weight: 800; font-size: 1.1rem; }
        .footer-desc { color: var(--text-muted); font-size: 0.9rem; }
        .footer-col-title { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 1rem; }
        .footer-col a { display: block; color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.6rem; text-decoration: none; transition: color 0.2s; }
        .footer-col a:hover { color: var(--primary); }
        .footer-bottom { border-top: 1px solid var(--border); padding-top: 2rem; text-align: center; color: var(--text-muted); font-size: 0.85rem; }
        
        .gradient-text { background: linear-gradient(135deg, #a78bfa, #e879f9); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        
        /* Responsive */
        @media (max-width: 768px) {
          .hero-section { padding: 4rem 1.5rem 3rem; }
          .hero-title { font-size: 2rem; }
          .hero-desc { font-size: 1rem; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .popular-grid { grid-template-columns: 1fr 1fr; }
          .category-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 480px) {
          .popular-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .section-alt { padding: 2rem 1rem; border-radius: 1rem; }
        }
      `}</style>
    </div>
  );
}
