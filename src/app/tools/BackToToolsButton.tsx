"use client";

import Link from "next/link";
import { useState } from "react";

export function BackToToolsButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="/tools" style={{ textDecoration: "none" }}>
      <div
        style={{
          position: "fixed",
          top: "100px",
          left: "24px",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Floating Icon Button */}
        <button
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            border: "2px solid rgba(168,124,246,0.6)",
            background: isHovered 
              ? "linear-gradient(135deg, #a78bfa, #c084fc)" 
              : "rgba(168,124,246,0.15)",
            color: isHovered ? "#fff" : "#c4b5fd",
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "1.2rem",
            transition: "all 0.3s ease",
            boxShadow: isHovered
              ? "0 8px 32px rgba(139,92,246,0.4)"
              : "0 4px 15px rgba(0,0,0,0.2)",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 5l-7 7 7 7" />
          </svg>
        </button>

        {/* Tooltip - shows on hover */}
        {isHovered && (
          <div
            style={{
              padding: "0.6rem 1.2rem",
              borderRadius: "0.5rem",
              background: "rgba(168,124,246,0.25)",
              border: "1px solid rgba(168,124,246,0.5)",
              color: "#c4b5fd",
              fontSize: "0.85rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              animation: "slideIn 0.3s ease",
            }}
          >
            Back to Tools
          </div>
        )}

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}</style>
      </div>
    </Link>
  );
}
