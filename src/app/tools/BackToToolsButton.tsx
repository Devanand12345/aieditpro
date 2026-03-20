"use client";

import Link from "next/link";
import { useState } from "react";
import ShareButtons from "@/components/ShareButtons";

export function BackToToolsButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="back-share-container">
        <Link href="/tools" style={{ textDecoration: "none" }}>
          <div
            className="back-button"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5" />
                <path d="M12 5l-7 7 7 7" />
              </svg>
            </button>

            {isHovered && (
              <div
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  background: "rgba(168,124,246,0.25)",
                  border: "1px solid rgba(168,124,246,0.5)",
                  color: "#c4b5fd",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  animation: "slideIn 0.3s ease",
                }}
              >
                Back to Tools
              </div>
            )}
          </div>
        </Link>
        
        <div className="share-buttons">
          <ShareButtons />
        </div>
      </div>

      <style>{`
        .back-share-container {
          position: fixed;
          top: 100px;
          left: 20px;
          z-index: 40;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .back-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .share-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
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
        @media (max-width: 768px) {
          .back-share-container {
            position: static;
            flex-direction: row;
            justify-content: space-between;
            padding: 1rem;
            margin-bottom: 1rem;
          }
          .share-buttons {
            flex-direction: row;
            flex-wrap: wrap;
          }
        }
        @media (max-width: 480px) {
          .back-share-container {
            padding: 0.75rem;
          }
        }
      `}</style>
    </>
  );
}
