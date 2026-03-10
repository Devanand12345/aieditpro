"use client";

import Link from "next/link";

export function BackToToolsButton() {
  return (
    <Link href="/tools" style={{ textDecoration: "none", display: "inline-block", marginBottom: "2rem" }}>
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          padding: "0.9rem 1.8rem",
          borderRadius: "0.75rem",
          border: "1px solid rgba(168,124,246,0.5)",
          background: "rgba(168,124,246,0.15)",
          color: "#c4b5fd",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "0.95rem",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(168,124,246,0.25)";
          e.currentTarget.style.borderColor = "rgba(168,124,246,0.8)";
          e.currentTarget.style.transform = "translateX(-4px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(168,124,246,0.15)";
          e.currentTarget.style.borderColor = "rgba(168,124,246,0.5)";
          e.currentTarget.style.transform = "translateX(0)";
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
        </svg>
        Back to Tools
      </button>
    </Link>
  );
}
