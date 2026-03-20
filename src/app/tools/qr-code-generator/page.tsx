"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = () => {
    if (!text || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Simple QR Code generation using canvas
    canvas.width = size;
    canvas.height = size;

    // Draw white background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, size, size);

    // Use a QR code library via CDN or generate simple pattern
    // For now, we'll use a simple text-based approach with a QR code API
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}`;
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, size, size);
    };
    img.src = qrUrl;
  };

  const downloadQR = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "#ede9ff" }}>
          QR Code Generator
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem" }}>
          Generate QR codes instantly for URLs, text, WiFi, contacts and more
        </p>

        <div style={{
          padding: "2rem",
          borderRadius: "1rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
              Enter URL or Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://example.com or any text..."
              style={{
                width: "100%",
                height: "100px",
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(168,124,246,0.3)",
                background: "rgba(30,27,75,0.6)",
                color: "#ede9ff",
                fontSize: "1rem",
                resize: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
              Size: {size}x{size}px
            </label>
            <input
              type="range"
              min="100"
              max="500"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              style={{ width: "100%" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.5)", fontSize: "0.8rem" }}>
              <span>100px</span>
              <span>500px</span>
            </div>
          </div>

          <button
            onClick={generateQR}
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "0.75rem",
              border: "none",
              background: "linear-gradient(135deg, #a78bfa, #e879f9)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            Generate QR Code
          </button>

          {text && (
            <div style={{ textAlign: "center", padding: "2rem", background: "rgba(255,255,255,0.05)", borderRadius: "1rem" }}>
              <canvas ref={canvasRef} style={{ maxWidth: "100%", borderRadius: "0.5rem" }} />
              <button
                onClick={downloadQR}
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem 2rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Download PNG
              </button>
            </div>
          )}
        </div>

        <div style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.2)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1rem" }}>Popular Uses</h3>
          <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 2, paddingLeft: "1.5rem" }}>
            <li>Share website URLs</li>
            <li>WiFi login credentials</li>
            <li>Contact information (vCard)</li>
            <li>Event tickets</li>
            <li>Product information</li>
            <li>Social media links</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
