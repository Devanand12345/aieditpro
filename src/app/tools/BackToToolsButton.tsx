"use client";

import Link from "next/link";

export function BackToToolsButton() {
  return (
    <Link href="/tools" style={{ textDecoration: "none", display: "block", marginBottom: "3rem" }}>
      <button
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          padding: "0.8rem 1.6rem",
          borderRadius: "0.75rem",
          border: "1px solid rgba(168,124,246,0.5)",
          background: "rgba(168,124,246,0.15)",
          color: "#c4b5fd",
          cursor: "pointer",
          fontWeight: 600,
          fontSize: "0.9rem",
          transition: "all 0.3s ease",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(168,124,246,0.25)";
          e.currentTarget.style.borderColor = "rgba(168,124,246,0.8)";
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(139,92,246,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(168,124,246,0.15)";
          e.currentTarget.style.borderColor = "rgba(168,124,246,0.5)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
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
