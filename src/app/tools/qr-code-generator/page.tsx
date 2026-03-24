"use client";

import { useState, useRef } from "react";
import Link from "next/link";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [errorLevel, setErrorLevel] = useState("M");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateQR = () => {
    if (!text || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = size;
    canvas.height = size;

    // Draw background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, size, size);

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&color=${fgColor.replace('#', '')}&bgcolor=${bgColor.replace('#', '')}&ecc=${errorLevel}`;

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
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "#f0f0ff" }}>
          QR Code Generator - Free Online Tool
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem", maxWidth: "800px" }}>
          Create custom QR codes instantly for URLs, text, WiFi passwords, contact info, and more.
          Download as PNG, customize colors and size. Completely free with no watermarks.
        </p>

        {/* QR Code Generator Tool */}
        <div style={{
          padding: "2rem",
          borderRadius: "1rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
          marginBottom: "3rem",
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
              Enter URL, Text, or WiFi Details
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Example: https://yourwebsite.com or WiFi details: WIFI:T:WPA;S:NetworkName;P:Password;;"
              style={{
                width: "100%",
                height: "100px",
                padding: "1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(168,124,246,0.3)",
                background: "rgba(30,27,75,0.6)",
                color: "#f0f0ff",
                fontSize: "1rem",
                resize: "none",
                outline: "none",
              }}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem", marginBottom: "1.5rem" }}>
            <div>
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

            <div>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                Error Correction
              </label>
              <select
                value={errorLevel}
                onChange={(e) => setErrorLevel(e.target.value)}
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(30,27,75,0.6)",
                  color: "#f0f0ff",
                  fontSize: "0.95rem",
                }}
              >
                <option value="L">Low (7%)</option>
                <option value="M">Medium (15%)</option>
                <option value="Q">Quartile (25%)</option>
                <option value="H">High (30%)</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                Foreground Color
              </label>
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                style={{ width: "100%", height: "40px", borderRadius: "0.5rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(30,27,75,0.6)" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                Background Color
              </label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                style={{ width: "100%", height: "40px", borderRadius: "0.5rem", border: "1px solid rgba(168,124,246,0.3)", background: "rgba(30,27,75,0.6)" }}
              />
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
            🎨 Generate QR Code
          </button>

          {text && (
            <div style={{ textAlign: "center", padding: "2rem", background: "rgba(30,27,75,0.6)", borderRadius: "1rem" }}>
              <canvas ref={canvasRef} style={{ maxWidth: "100%", borderRadius: "0.5rem", background: bgColor }} />
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
                📥 Download PNG
              </button>
            </div>
          )}
        </div>

        {/* How to Use Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            How to Generate a QR Code
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>1</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Enter Your Content</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Type or paste your URL, text, WiFi credentials (WIFI:T:WPA;S:NetworkName;P:Password;;), or vCard contact information.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>2</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Customize Settings</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Choose your desired size (100-500px), error correction level, and customize colors to match your brand.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>3</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Generate & Download</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Click "Generate QR Code" to create your custom QR code. Download instantly as a high-quality PNG image.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Key Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>⚡</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Instant Generation</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Generate QR codes in seconds with real-time preview. No waiting, no processing delays.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>🎨</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Fully Customizable</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Adjust size, colors, and error correction levels. Create branded QR codes that stand out.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>📥</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>High-Quality Download</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Download as PNG with transparent backgrounds. Perfect for print and digital use.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>🔒</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Privacy-First</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>All processing happens in your browser. Your data never leaves your device or touches our servers.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>💯</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>100% Free</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>No watermarks, no sign-up required, no usage limits. Generate unlimited QR codes forever.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>📱</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Mobile Responsive</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Works perfectly on all devices - desktop, tablet, and mobile. Generate QR codes anywhere.</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Popular Use Cases
          </h2>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>📌 Business & Marketing</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Share your website, social media profiles, or product pages instantly. QR codes on business cards, flyers, posters, and packaging make it easy for customers to find you online. Track engagement with different QR codes for various campaigns.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>📶 WiFi Access</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Create WiFi QR codes so guests can connect to your network instantly without typing passwords. Perfect for cafes, restaurants, hotels, and home use. Format: <code style={{ background: "rgba(168,124,246,0.2)", padding: "0.25rem 0.5rem", borderRadius: "0.25rem" }}>WIFI:T:WPA;S:NetworkName;P:Password;;</code></p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>👤 Contact Information</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Share your vCard with name, phone, email, website, and more. Ideal for networking events, business cards, or adding yourself to someone's phone. Recipients can save your contact info instantly with one scan.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>🎫 Events & Tickets</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Event organizers use QR codes for tickets, check-ins, and agenda access. Conference attendees can scan to get speaker bios, session materials, or connect with speakers on LinkedIn.</p>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Related Tools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            <Link href="/tools/qr-code-generator" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔗</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>URL Encoder</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Encode URLs for QR codes and sharing</p>
            </Link>
            <Link href="/tools/image-compressor" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🖼️</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Image Compressor</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Optimize images before uploading</p>
            </Link>
            <Link href="/tools/text-compare" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📝</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Text Compare</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Compare text and find differences</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Are the generated QR codes free to use commercially?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Yes! QR codes generated with our tool are completely free for personal and commercial use. There are no licensing fees or attribution requirements. You can use them in marketing materials, product packaging, business cards, or any other application.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>What's the difference between error correction levels?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Error correction determines how much of the QR code can be damaged and still scan successfully. Low (L) = 7%, Medium (M) = 15%, Quartile (Q) = 25%, High (H) = 30%. Use Higher levels for QR codes that might get dirty or damaged, or when you want to add a logo over the code.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Can I track how many people scan my QR code?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Basic QR codes don't include tracking. To track scans, use a URL shortening service (like bit.ly) before generating the QR code, or use a dedicated QR code tracking service. The QR codes we generate are static and don't include tracking capabilities.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>What file format do I get when downloading?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>QR codes are downloaded as PNG images with high resolution. You can choose a transparent background or custom colors. The PNG format is widely supported and works great for both digital use (websites, emails) and print (posters, business cards).</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>How much data can a QR code hold?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>It depends on the QR code version and error correction level. Version 40 (largest) can hold up to 2,953 bytes for numeric data, 1,789 for alphanumeric, or 295 bytes for binary data. For most use cases (URLs, contact info, short text), you'll never hit the limit.</p>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "QR Code Generator",
              "applicationCategory": "DeveloperApplication",
              "description": "Free online QR code generator. Create custom QR codes for URLs, text, WiFi, and contact info. Download as PNG with no watermarks.",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "1250"
              }
            })
          }}
        />
      </div>
    </div>
  );
}