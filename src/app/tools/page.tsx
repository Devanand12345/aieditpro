"use client";

import Link from "next/link";

const TOOLS = [
  { id: "json-beautifier",  name: "JSON Beautifier",       icon: "🎨", desc: "Format and minify JSON with syntax validation and instant preview.",          category: "Data",      color: "#8b5cf6" },
  { id: "html-formatter",   name: "HTML Formatter",         icon: "🌐", desc: "Beautify or minify HTML markup with proper indentation and structure.",       category: "Code",      color: "#06b6d4" },
  { id: "jwt-decoder",      name: "JWT Decoder",            icon: "🔐", desc: "Decode and inspect JWT tokens — header, payload, and signature.",             category: "Security",  color: "#ec4899" },
  { id: "text-compare",     name: "Text Diff",              icon: "📋", desc: "Compare two blocks of text side-by-side and highlight differences.",          category: "Utility",   color: "#10b981" },
  { id: "json-compare",     name: "JSON Compare",           icon: "⚖️", desc: "Deep compare two JSON objects and pinpoint structural differences.",           category: "Data",      color: "#a855f7" },
  { id: "csv-formatter",    name: "CSV Formatter",          icon: "📊", desc: "Format, preview, and convert CSV data into readable table layouts.",          category: "Data",      color: "#f59e0b" },
  { id: "base64",           name: "Base64 Encoder",         icon: "🔤", desc: "Encode text or files to Base64 and decode Base64 strings back to text.",      category: "Encoding",  color: "#ef4444" },
  { id: "url-encode",       name: "URL Encoder",            icon: "🔗", desc: "Encode special characters in URLs or decode percent-encoded strings.",         category: "Encoding",  color: "#14b8a6" },
  { id: "regex",            name: "Regex Tester",           icon: "🔍", desc: "Write and test regular expressions with real-time match highlighting.",        category: "Code",      color: "#06b6d4" },
  { id: "uuid",             name: "UUID Generator",         icon: "🆔", desc: "Generate universally unique identifiers — v1 (time-based) or v4 (random).",   category: "Generator", color: "#a855f7" },
  { id: "hash",             name: "Hash Generator",         icon: "#️⃣", desc: "Generate MD5, SHA-1, SHA-256, and SHA-512 hashes from any text.",             category: "Security",  color: "#ec4899" },
  { id: "xml-formatter",    name: "XML Formatter",          icon: "📦", desc: "Beautify or minify XML documents with proper structure and indentation.",      category: "Code",      color: "#8b5cf6" },
];

export default function ToolsPage() {
  return (
    <div className="tools-page">
      <div className="tools-container">

        {/* Back link */}
        <Link href="/" className="back-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" /><path d="M12 5l-7 7 7 7" />
          </svg>
          Back to Home
        </Link>

        {/* Page header */}
        <div className="page-header">
          <div className="page-eyebrow">12 Tools Available</div>
          <h1 className="page-title">
            Developer{" "}
            <span style={{ background: "linear-gradient(120deg,#a78bfa,#c084fc)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Tools
            </span>
          </h1>
          <p className="page-subtitle">
            A comprehensive suite of utilities for developers. Convert, compare, format,
            and analyze data — all free, all instant.
          </p>
        </div>

        {/* Tools grid */}
        <div className="tools-grid">
          {TOOLS.map((tool) => (
            <div key={tool.id} className="tool-card">
              {/* Top accent line */}
              <div className="tool-accent" style={{ background: `linear-gradient(90deg, transparent, ${tool.color}80, transparent)` }} />

              {/* Card body */}
              <div className="tool-body">
                <div className="tool-top">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-category" style={{ color: tool.color, background: `${tool.color}18`, border: `1px solid ${tool.color}40` }}>
                    {tool.category}
                  </span>
                </div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-desc">{tool.desc}</p>
              </div>

              {/* CTA button */}
              <div className="tool-footer">
                <Link href={`/tools/${tool.id}`} style={{ textDecoration: "none", width: "100%" }}>
                  <button
                    className="tool-btn"
                    style={{
                      background: `linear-gradient(120deg, ${tool.color}22, ${tool.color}10)`,
                      border: `1.5px solid ${tool.color}50`,
                      color: tool.color,
                    }}
                  >
                    Open Tool
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .tools-page {
          min-height: 100vh;
          padding: 5rem 1.5rem 4rem;
          background: linear-gradient(160deg, #0f172a 0%, #1e1b4b 55%, #0f172a 100%);
        }
        .tools-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Back link */
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(220,210,255,0.65);
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 2.5rem;
          transition: color 0.2s;
        }
        .back-link:hover { color: #c4b5fd; }

        /* Page header */
        .page-header { margin-bottom: 3rem; }
        .page-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a78bfa;
          background: rgba(139,92,246,0.12);
          border: 1px solid rgba(139,92,246,0.3);
          padding: 0.28rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1rem;
        }
        .page-title {
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ede9ff;
          margin-bottom: 0.85rem;
        }
        .page-subtitle {
          font-size: 1rem;
          color: rgba(220,210,255,0.78);
          max-width: 560px;
          line-height: 1.7;
        }

        /* Grid */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        /* Card */
        .tool-card {
          border-radius: 1rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(168,124,246,0.15);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease;
          position: relative;
        }
        .tool-card:hover {
          transform: translateY(-5px);
          background: rgba(168,124,246,0.08);
          border-color: rgba(168,124,246,0.4);
          box-shadow: 0 16px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(139,92,246,0.15);
        }

        /* Top accent bar */
        .tool-accent {
          height: 2px;
          width: 100%;
          opacity: 0;
          transition: opacity 0.25s;
        }
        .tool-card:hover .tool-accent { opacity: 1; }

        /* Card body */
        .tool-body {
          padding: 1.5rem 1.5rem 1rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .tool-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.25rem;
        }
        .tool-icon { font-size: 2rem; line-height: 1; }
        .tool-category {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          padding: 0.22rem 0.65rem;
          border-radius: 9999px;
        }
        .tool-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ede9ff;
          margin: 0;
          line-height: 1.3;
        }
        .tool-desc {
          font-size: 0.84rem;
          color: rgba(220,210,255,0.68);
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }

        /* Card footer with CTA */
        .tool-footer {
          padding: 0 1.5rem 1.5rem;
        }
        .tool-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.72rem 1rem;
          border-radius: 0.65rem;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
        }
        .tool-btn:hover {
          filter: brightness(1.25);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        /* Responsive */
        @media (max-width: 640px) {
          .tools-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
          .tool-body  { padding: 1.1rem 1.1rem 0.75rem; }
          .tool-footer{ padding: 0 1.1rem 1.1rem; }
        }
        @media (max-width: 420px) {
          .tools-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
