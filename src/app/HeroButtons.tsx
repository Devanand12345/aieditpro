"use client";

import { useState } from "react";
import Link from "next/link";
import DemoModal from "./DemoModal";

export default function HeroButtons() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <Link href="/converter" style={{ textDecoration: "none" }}>
          <button className="btn-glow" style={{ fontSize: "1rem", padding: "0.85rem 2.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            Start Converting
          </button>
        </Link>

        <button
          onClick={() => setShowDemo(true)}
          style={{
            fontSize: "1rem", padding: "0.85rem 2.2rem", borderRadius: "9999px",
            border: "1.5px solid rgba(124,58,237,0.25)", background: "rgba(255,255,255,0.7)",
            color: "#6d28d9", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem",
            backdropFilter: "blur(8px)", fontWeight: 600, transition: "all 0.2s",
          }}
          onMouseOver={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(124,58,237,0.08)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124,58,237,0.45)";
          }}
          onMouseOut={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.7)";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(124,58,237,0.25)";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
          </svg>
          See How It Works
        </button>
      </div>

      {showDemo && <DemoModal onClose={() => setShowDemo(false)} />}
    </>
  );
}
