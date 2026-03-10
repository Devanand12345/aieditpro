"use client";

import { useState, FormEvent, useRef } from "react";
import Link from "next/link";

const FORMATS = ["pdf","docx","txt","html","epub","rtf","xlsx","pptx"];
const FORMAT_ICONS: Record<string,string> = { pdf:"📄",docx:"📝",txt:"🗒️",html:"🌐",epub:"📚",rtf:"📋",xlsx:"📊",pptx:"🎞️" };

export default function ConverterPage() {
  const [file, setFile]     = useState<File|null>(null);
  const [target, setTarget] = useState(FORMATS[0]);
  const [status, setStatus] = useState<"idle"|"uploading"|"done"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setStatus("uploading");
    setErrorMsg("");
    const form = new FormData();
    form.append("file", file);
    form.append("target", target);
    try {
      const res = await fetch("/api/convert", { method: "POST", body: form });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json.error || "Conversion failed. Please try again.");
        setStatus("error");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      const contentDisposition = res.headers.get("content-disposition") || "";
      const filenameMatch = contentDisposition.match(/filename="?([^"]+)"?/);
      a.download = filenameMatch?.[1] || file.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("done");
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", padding:"100px 1.5rem 3rem" }}>
      <div style={{ width:"100%", maxWidth:"560px" }}>

        <Link href="/" style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", color:"rgba(220,210,255,0.75)", textDecoration:"none", fontSize:"0.85rem", marginBottom:"2rem", fontWeight:500, transition:"color 0.2s" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          Back to Home
        </Link>

        <div className="glass-card" style={{ padding:"2.5rem" }}>
          <div style={{ marginBottom:"2rem" }}>
            <div className="badge" style={{ marginBottom:"1rem" }}>
              <span style={{ width:"6px",height:"6px",borderRadius:"50%",background:"#8b5cf6",animation:"pulse-glow 2s ease-in-out infinite",flexShrink:0 }} />
              AI File Converter
            </div>
            <h1 style={{ fontSize:"1.9rem", fontWeight:800, letterSpacing:"-0.03em", marginBottom:"0.5rem", color:"#ede9ff" }}>
              Convert <span className="gradient-text">Any File</span>
            </h1>
            <p style={{ color:"rgba(220,210,255,0.82)", fontSize:"0.9rem" }}>
              Upload a file, choose your output format, and download instantly.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1.4rem" }}>
            {/* Drop zone */}
            <div className="drop-zone"
              style={{ borderColor: isDragging ? "rgba(139,92,246,0.9)" : file ? "rgba(16,185,129,0.5)" : undefined, background: isDragging ? "rgba(139,92,246,0.1)" : file ? "rgba(16,185,129,0.04)" : undefined }}
              onClick={() => inputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={e => { e.preventDefault(); setIsDragging(false); const f=e.dataTransfer.files[0]; if(f) setFile(f); }}>
              <input ref={inputRef} type="file" style={{ display:"none" }} onChange={e => { if(e.target.files) setFile(e.target.files[0]); }} />
              {file ? (
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"0.75rem" }}>
                  <span style={{ fontSize:"1.8rem" }}>✅</span>
                  <div style={{ textAlign:"left" }}>
                    <div style={{ fontWeight:600, color:"#ede9ff", fontSize:"0.95rem" }}>{file.name}</div>
                    <div style={{ fontSize:"0.78rem", color:"rgba(220,210,255,0.72)" }}>{(file.size/1024).toFixed(1)} KB — click to change</div>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ fontSize:"2.5rem", marginBottom:"0.75rem" }}>📂</div>
                  <div style={{ fontWeight:600, color:"rgba(220,210,255,0.92)", marginBottom:"0.3rem" }}>Drop your file here</div>
                  <div style={{ fontSize:"0.8rem", color:"rgba(220,210,255,0.72)" }}>or click to browse</div>
                </>
              )}
            </div>

            {/* Format grid */}
            <div>
              <label style={{ display:"block", fontSize:"0.78rem", fontWeight:700, color:"rgba(220,210,255,0.8)", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:"0.65rem" }}>
                Convert To
              </label>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0.5rem" }}>
                {FORMATS.map(fmt => (
                  <button key={fmt} type="button" onClick={() => setTarget(fmt)} style={{
                    padding:"0.6rem 0.4rem", borderRadius:"0.75rem", cursor:"pointer",
                    border: target===fmt ? "1.5px solid rgba(139,92,246,0.7)" : "1.5px solid rgba(255,255,255,0.08)",
                    background: target===fmt ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.03)",
                    color: target===fmt ? "#c4b5fd" : "rgba(220,210,255,0.78)",
                    fontSize:"0.78rem", fontWeight:700,
                    display:"flex", flexDirection:"column", alignItems:"center", gap:"0.25rem",
                    transition:"all 0.15s", letterSpacing:"0.04em",
                  }}>
                    <span style={{ fontSize:"1.1rem" }}>{FORMAT_ICONS[fmt]}</span>
                    {fmt.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" disabled={!file||status==="uploading"} className="btn-glow"
              style={{ fontSize:"1rem", padding:"0.9rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"0.6rem", borderRadius:"0.85rem" }}>
              {status==="uploading" ? (
                <><svg style={{ animation:"spin-slow 1s linear infinite" }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2"/><path d="M21 12a9 9 0 00-9-9"/></svg>Converting…</>
              ) : (
                <><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Convert &amp; Download</>
              )}
            </button>
          </form>

          {status==="done" && (
            <div style={{ marginTop:"1.25rem", padding:"1rem 1.25rem", borderRadius:"0.75rem", background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.3)", display:"flex", alignItems:"center", gap:"0.6rem", color:"#6ee7b7", fontSize:"0.9rem", fontWeight:500 }}>
              <span style={{ fontSize:"1.2rem" }}>✅</span> File converted and downloaded successfully!
            </div>
          )}
          {status==="error" && (
            <div style={{ marginTop:"1.25rem", padding:"1rem 1.25rem", borderRadius:"0.75rem", background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.3)", display:"flex", alignItems:"flex-start", gap:"0.6rem", color:"#fca5a5", fontSize:"0.88rem", fontWeight:500 }}>
              <span style={{ fontSize:"1.2rem", flexShrink:0 }}>❌</span>
              <span>{errorMsg || "Conversion failed. Please try again."}</span>
            </div>
          )}
        </div>

        <p style={{ textAlign:"center", marginTop:"1.5rem", fontSize:"0.8rem", color:"rgba(220,210,255,0.65)" }}>
          Files are processed securely and never stored.
        </p>
      </div>
    </div>
  );
}
