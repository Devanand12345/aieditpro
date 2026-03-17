"use client";

import { useState } from "react";

export default function DonationWidget() {
  const [showDonation, setShowDonation] = useState(false);

  const handleDonate = () => {
    window.open("https://buymeacoffee.com/aieditpronet", "_blank");
  };

  return (
    <>
      {/* Donation Button in Header */}
      <button
        onClick={() => setShowDonation(true)}
        className="donation-btn"
        title="Help us build amazing free tools"
        style={{
          padding: "0.45rem 1.2rem",
          fontSize: "0.85rem",
          background: "linear-gradient(135deg, #f59e0b, #f97316)",
          border: "none",
          borderRadius: "9999px",
          color: "#fff",
          fontWeight: 700,
          cursor: "pointer",
          transition: "all 0.3s",
          boxShadow: "0 4px 15px rgba(249,158,11,0.3)",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(249,158,11,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(249,158,11,0.3)";
        }}
      >
        ☕ Coffee
      </button>

      {/* Donation Modal */}
      {showDonation && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            backdropFilter: "blur(5px)",
            padding: "1rem",
          }}
          onClick={() => setShowDonation(false)}
        >
          <div
            className="donation-modal"
            style={{
              position: "relative",
              background: "linear-gradient(135deg, rgba(31,41,55,0.95), rgba(17,24,39,0.95))",
              border: "1.5px solid rgba(249,158,11,0.3)",
              borderRadius: "1.5rem",
              padding: "clamp(1.5rem, 5%, 3rem) clamp(1rem, 5%, 2rem)",
              maxWidth: "500px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              animation: "slideUp 0.3s ease-out",
              backdropFilter: "blur(20px)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowDonation(false)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "rgba(249,158,11,0.1)",
                border: "1px solid rgba(249,158,11,0.3)",
                borderRadius: "50%",
                width: "2.5rem",
                height: "2.5rem",
                color: "#fcd34d",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                fontWeight: 700,
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(249,158,11,0.25)";
                e.currentTarget.style.transform = "rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(249,158,11,0.1)";
                e.currentTarget.style.transform = "rotate(0)";
              }}
              title="Close donation modal"
            >
              ✕
            </button>
            {/* Header */}
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💝</div>
              <h2 style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                background: "linear-gradient(135deg, #FFDD00, #FFAA00)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
                letterSpacing: "-0.02em",
              }}>
                Buy us a coffee ☕
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "rgba(220,210,255,0.85)",
                lineHeight: 1.6,
                marginBottom: "1rem",
              }}>
                Help us keep building amazing free tools for developers worldwide! Your support drives innovation and keeps AI-EditPro free for everyone.
              </p>
              <div style={{
                padding: "1rem",
                background: "rgba(249,158,11,0.1)",
                border: "1px solid rgba(249,158,11,0.3)",
                borderRadius: "0.75rem",
                fontSize: "0.9rem",
                color: "#fcd34d",
                fontWeight: 600,
              }}>
                ✨ 100% of donations go to development
              </div>
            </div>

            {/* Donation Options */}
            <div style={{ marginBottom: "2rem" }}>
              <button
                onClick={handleDonate}
                style={{
                  width: "100%",
                  padding: "1.5rem",
                  borderRadius: "1rem",
                  border: "none",
                  background: "linear-gradient(135deg, #FFDD00, #FFAA00)",
                  color: "#000",
                  cursor: "pointer",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  transition: "all 0.3s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 8px 30px rgba(255,221,0,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,221,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,221,0,0.4)";
                }}
              >
                ☕ Buy me a coffee
                <span style={{ fontSize: "0.85rem", opacity: 0.8, fontWeight: 600 }}>Support AI-EditPro</span>
              </button>
            </div>

            {/* Info */}
            <div style={{
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.3)",
              borderRadius: "0.75rem",
              padding: "1.25rem",
              marginBottom: "1.5rem",
              fontSize: "0.85rem",
              color: "rgba(220,210,255,0.75)",
              lineHeight: 1.7,
            }}>
              <strong style={{ color: "#c4b5fd" }}>Why donate?</strong><br />
              ✅ Free tools stay free forever<br />
              ✅ Faster development & updates<br />
              ✅ New features & tools<br />
              ✅ Community-driven development
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowDonation(false)}
              style={{
                width: "100%",
                padding: "0.9rem",
                borderRadius: "0.75rem",
                border: "1.5px solid rgba(168,124,246,0.3)",
                background: "rgba(168,124,246,0.1)",
                color: "#c4b5fd",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.95rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(168,124,246,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(168,124,246,0.1)";
              }}
            >
              Maybe Later ✨
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
