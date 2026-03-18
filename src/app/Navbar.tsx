"use client";

import Link from "next/link";
import { useState } from "react";

function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
      <div className="logo-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" opacity="0.9"/>
          <path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <span style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
        <span className="gradient-text">AIEdit</span>
        <span style={{ color: "rgba(255,255,255,0.92)" }}>Pro</span>
      </span>
    </Link>
  );
}

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "Converter", href: "/converter" },
  { label: "Tools",     href: "/tools" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.5rem" }}>
        <Logo />

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="desktop-nav">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {/* Bookmark Button */}
          <button className="btn-glow" onClick={() => {
            alert('Press ' + (/Mac/.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark AI-EditPro!');
          }} style={{ padding: "0.45rem 1.2rem", fontSize: "0.85rem", position: "relative" }} title="Save AI-EditPro for instant access">
            ⭐ Save to Bookmarks
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="mobile-menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "0.25rem", color: "rgba(220,210,255,0.88)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{ maxWidth: "1100px", margin: "0.75rem auto 0", padding: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="nav-link" onClick={() => setMenuOpen(false)} style={{ padding: "0.5rem 0", fontSize: "1rem" }}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
