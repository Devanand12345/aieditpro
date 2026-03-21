"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export default function ImageCompressor() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");
  const [quality, setQuality] = useState(80);
  const [compressed, setCompressed] = useState<string>("");
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressing, setCompressing] = useState(false);
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const validateFile = (file: File): string | null => {
    if (!ALLOWED_TYPES.includes(file.type)) {
      return "Invalid file type. Please upload JPEG, PNG, WebP, or GIF.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return `File too large. Maximum size is 10MB. Your file is ${(file.size / (1024 * 1024)).toFixed(1)}MB.`;
    }
    return null;
  };

  const handleImageSelect = (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");
    setImage(file);
    setCompressed("");
    setCompressedSize(0);
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
      setOriginalSize(file.size);
    };
    reader.readAsDataURL(file);
  };

  const compressImage = () => {
    if (!image || !canvasRef.current) return;
    
    setCompressing(true);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const dataUrl = canvas.toDataURL("image/jpeg", quality / 100);
      setCompressed(dataUrl);
      
      // Calculate compressed size
      const base64 = dataUrl.split(",")[1];
      const compressedBytes = (base64.length * 3) / 4;
      setCompressedSize(Math.round(compressedBytes));
      setCompressing(false);
    };
    img.src = preview;
  };

  const downloadCompressed = () => {
    if (!compressed) return;
    const link = document.createElement("a");
    link.download = `compressed-${image?.name || "image"}.jpg`;
    link.href = compressed;
    link.click();
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "var(--text-primary)" }}>
          Image Compressor
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem" }}>
          Reduce image file size without losing quality
        </p>

        {error && (
          <div style={{ padding: "1rem", borderRadius: "0.75rem", background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.4)", color: "#fca5a5", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
            ⚠️ {error}
          </div>
        )}

        <div style={{
          padding: "2rem",
          borderRadius: "1rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
        }}>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files?.[0] && handleImageSelect(e.target.files[0])}
            style={{ display: "none" }}
            id="image-upload"
          />
          
          {!image ? (
            <label
              htmlFor="image-upload"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "3rem",
                borderRadius: "1rem",
                border: "2px dashed rgba(168,124,246,0.3)",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📷</div>
              <div style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem" }}>
                Click to upload image
              </div>
              <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.9rem" }}>
                Supports JPG, PNG, WebP, GIF
              </div>
            </label>
          ) : (
            <div>
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ padding: "1rem", background: "var(--card-bg)", borderRadius: "0.75rem", textAlign: "center" }}>
                    <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Original</div>
                    <div style={{ color: "#fca5a5", fontWeight: 700 }}>{formatSize(originalSize)}</div>
                  </div>
                  <div style={{ padding: "1rem", background: "var(--card-bg)", borderRadius: "0.75rem", textAlign: "center" }}>
                    <div style={{ color: "rgba(220,210,255,0.6)", fontSize: "0.85rem", marginBottom: "0.25rem" }}>Compressed</div>
                    <div style={{ color: "#6ee7b7", fontWeight: 700 }}>
                      {compressedSize ? formatSize(compressedSize) : "-"}
                    </div>
                  </div>
                </div>
                {compressedSize > 0 && (
                  <div style={{ textAlign: "center", padding: "0.5rem", background: "rgba(16,185,129,0.15)", borderRadius: "0.5rem", color: "#6ee7b7", fontWeight: 600 }}>
                    Saved {Math.round((1 - compressedSize / originalSize) * 100)}%!
                  </div>
                )}
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>
                  Quality: {quality}%
                </label>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  style={{ width: "100%" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.5)", fontSize: "0.8rem" }}>
                  <span>Smaller file</span>
                  <span>Higher quality</span>
                </div>
              </div>

              <button
                onClick={compressImage}
                disabled={compressing}
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "none",
                  background: compressing ? "rgba(139,92,246,0.3)" : "linear-gradient(135deg, #a78bfa, #e879f9)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: compressing ? "not-allowed" : "pointer",
                  marginBottom: "1rem",
                }}
              >
                {compressing ? "Compressing..." : "Compress Image"}
              </button>

              {compressed && (
                <div style={{ textAlign: "center", padding: "1.5rem", background: "var(--card-bg)", borderRadius: "0.75rem" }}>
                  <img src={compressed} alt="Compressed" style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "0.5rem" }} />
                  <button
                    onClick={downloadCompressed}
                    style={{
                      marginTop: "1rem",
                      padding: "0.75rem 2rem",
                      borderRadius: "0.5rem",
                      border: "1px solid var(--input-border)",
                      background: "rgba(168,124,246,0.2)",
                      color: "var(--primary-light)",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Download Compressed Image
                  </button>
                </div>
              )}
            </div>
          )}

          <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>

        <div style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid var(--input-border)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem" }}>Why compress images?</h3>
          <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 2, paddingLeft: "1.5rem" }}>
            <li>Faster website loading times</li>
            <li>Reduced storage costs</li>
            <li>Better user experience</li>
            <li>Improved SEO rankings</li>
            <li>Save bandwidth</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
