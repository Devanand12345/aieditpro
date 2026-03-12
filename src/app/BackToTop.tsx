"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      style={{
        position: "fixed", bottom: "2rem", right: "2rem", zIndex: 50,
        width: "46px", height: "46px", borderRadius: "50%",
        background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
        border: "none", cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 4px 24px rgba(139,92,246,0.5)",
        transition: "transform 0.2s, box-shadow 0.2s",
        animation: "fadeInUp 0.3s ease",
      }}
      onMouseOver={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-3px) scale(1.08)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 32px rgba(139,92,246,0.65)";
      }}
      onMouseOut={e => {
        (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0) scale(1)";
        (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 24px rgba(139,92,246,0.5)";
      }}
      title="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5"/><path d="M5 12l7-7 7 7"/>
      </svg>
      <style>{`@keyframes fadeInUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }`}</style>
    </button>
  );
}
