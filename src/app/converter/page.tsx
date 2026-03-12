"use client";

import { useState, FormEvent, useRef } from "react";
import Link from "next/link";

const FORMATS = ["pdf","docx","txt","html","epub","rtf","xlsx","pptx"];
const FORMAT_ICONS: Record<string,string> = { pdf:"📄",docx:"📝",txt:"🗒️",html:"🌐",epub:"📚",rtf:"📋",xlsx:"📊",pptx:"🎞️" };

// AI Features info
const AI_FEATURES = [
  { icon: "🎯", title: "Smart Detection", desc: "Auto-detects file type and optimal format" },
  { icon: "⚡", title: "Fast Processing", desc: "Converts in <5 seconds with 99%+ accuracy" },
  { icon: "🔄", title: "Format Optimization", desc: "Maintains structure and formatting" },
  { icon: "🌍", title: "Universal Support", desc: "8+ formats, unlimited conversions" },
];

export default function ConverterPage() {
  const [file, setFile]     = useState<File|null>(null);
  const [target, setTarget] = useState(FORMATS[0]);
  const [status, setStatus] = useState<"idle"|"uploading"|"done"|"error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [conversionTime, setConversionTime] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    
    setStatus("uploading");
    setErrorMsg("");
    setConversionTime(0);
    
    const startTime = Date.now();
    const form = new FormData();
    form.append("file", file);
    form.append("target", target);
    
    try {
      const res = await fetch("/api/convert", { method: "POST", body: form });
      const endTime = Date.now();
      const time = ((endTime - startTime) / 1000).toFixed(2);
      setConversionTime(parseFloat(time));
      
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
    <div style={{ minHeight:"100vh", padding:"100px 1.5rem 3rem", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>
      <div style={{ maxWidth:"900px", margin:"0 auto" }}>

        <Link href="/" style={{ display:"inline-flex", alignItems:"center", gap:"0.4rem", color:"rgba(220,210,255,0.75)", textDecoration:"none", fontSize:"0.85rem", marginBottom:"2.5rem", fontWeight:600, transition:"all 0.2s" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5"/><path d="M12 5l-7 7 7 7"/>
          </svg>
          ← Back to Home
        </Link>

        {/* Main Converter */}
        <div className="glass-card" style={{ padding:"3rem", marginBottom:"2.5rem", background:"rgba(139, 92, 246, 0.08)", backdropFilter:"blur(20px)", borderRadius:"1.5rem" }}>
          <div style={{ marginBottom:"2.5rem" }}>
            <div className="badge" style={{ marginBottom:"1rem", display:"inline-flex", alignItems:"center", gap:"0.6rem", padding:"0.7rem 1.2rem", background:"rgba(139,92,246,0.2)", border:"1px solid rgba(168,124,246,0.4)", borderRadius:"9999px" }}>
              <span style={{ width:"7px",height:"7px",borderRadius:"50%",background:"#a78bfa",animation:"pulse-glow 2s ease-in-out infinite" }} />
              ✨ AI-Powered File Converter
            </div>
            <h1 style={{ fontSize:"clamp(1.8rem,3vw,2.8rem)", fontWeight:900, letterSpacing:"-0.04em", marginBottom:"0.75rem", color:"#f0f0ff" }}>
              Convert <span style={{ background:"linear-gradient(135deg, #a78bfa, #e879f9)", backgroundClip:"text", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Any File</span> in Seconds
            </h1>
            <p style={{ color:"rgba(220,210,255,0.85)", fontSize:"1.05rem", lineHeight:1.65 }}>
              Upload your file, select output format, and download instantly. 99%+ fidelity with automatic format optimization.
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"1.8rem" }}>
            {/* Drop zone */}
            <div className="drop-zone" onClick={() => inputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={e => { e.preventDefault(); setIsDragging(false); const f=e.dataTransfer.files[0]; if(f) setFile(f); }}
              style={{
                padding:"2.5rem",
                borderRadius:"1.25rem",
                border: isDragging ? "2.5px solid rgba(139,92,246,0.9)" : file ? "2.5px solid rgba(16,185,129,0.6)" : "2.5px dashed rgba(168,124,246,0.3)",
                background: isDragging ? "rgba(139,92,246,0.15)" : file ? "rgba(16,185,129,0.08)" : "rgba(139,92,246,0.05)",
                cursor:"pointer",
                transition:"all 0.25s",
                textAlign:"center"
              }}>
              <input ref={inputRef} type="file" style={{ display:"none" }} onChange={e => { if(e.target.files) setFile(e.target.files[0]); }} />
              {file ? (
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"1rem" }}>
                  <div style={{ fontSize:"2.2rem" }}>✅</div>
                  <div style={{ textAlign:"left", flex:1 }}>
                    <div style={{ fontWeight:700, color:"#f0f0ff", fontSize:"1rem" }}>{file.name}</div>
                    <div style={{ fontSize:"0.8rem", color:"rgba(220,210,255,0.7)", marginTop:"0.25rem" }}>{(file.size/1024/1024).toFixed(2)} MB — click to change</div>
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize:"3.5rem", marginBottom:"1rem" }}>📂</div>
                  <div style={{ fontWeight:700, color:"rgba(220,210,255,0.92)", marginBottom:"0.4rem", fontSize:"1.1rem" }}>Drop your file here</div>
                  <div style={{ fontSize:"0.85rem", color:"rgba(220,210,255,0.7)" }}>or click to browse — any document format welcome</div>
                </div>
              )}
            </div>

            {/* Format grid */}
            <div>
              <label style={{ display:"block", fontSize:"0.78rem", fontWeight:800, color:"rgba(220,210,255,0.75)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"0.85rem" }}>
                Convert To
              </label>
              <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"0.65rem" }}>
                {FORMATS.map(fmt => (
                  <button key={fmt} type="button" onClick={() => setTarget(fmt)} style={{
                    padding:"0.75rem 0.5rem", borderRadius:"0.85rem", cursor:"pointer", transition:"all 0.2s",
                    border: target===fmt ? "2px solid rgba(139,92,246,0.8)" : "1.5px solid rgba(255,255,255,0.1)",
                    background: target===fmt ? "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(168,124,246,0.15))" : "rgba(255,255,255,0.04)",
                    color: target===fmt ? "#e0d5ff" : "rgba(220,210,255,0.75)",
                    fontSize:"0.8rem", fontWeight:750, letterSpacing:"0.05em",
                    display:"flex", flexDirection:"column", alignItems:"center", gap:"0.35rem",
                  }}>
                    <span style={{ fontSize:"1.35rem" }}>{FORMAT_ICONS[fmt]}</span>
                    {fmt.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" disabled={!file||status==="uploading"} className="btn-glow" style={{
              fontSize:"1.05rem", padding:"1.1rem 1.5rem", display:"flex", alignItems:"center", justifyContent:"center", gap:"0.75rem", 
              borderRadius:"1rem", fontWeight:800, letterSpacing:"0.02em", background:"linear-gradient(135deg, #a78bfa, #e879f9)", 
              color:"#fff", border:"none", cursor: !file||status==="uploading" ? "not-allowed" : "pointer", opacity: !file||status==="uploading" ? 0.6 : 1,
              boxShadow:"0 12px 40px rgba(139,92,246,0.4)", transition:"all 0.3s"
            }}>
              {status==="uploading" ? (
                <><svg style={{ animation:"spin-slow 1s linear infinite" }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" opacity="0.2"/><path d="M21 12a9 9 0 00-9-9"/></svg>Converting…</>
              ) : (
                <><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Convert &amp; Download</>
              )}
            </button>
          </form>

          {status==="done" && (
            <div style={{ marginTop:"1.5rem", padding:"1.2rem 1.5rem", borderRadius:"1rem", background:"rgba(16,185,129,0.15)", border:"1px solid rgba(16,185,129,0.35)", display:"flex", alignItems:"center", gap:"0.75rem", color:"#6ee7b7", fontSize:"0.95rem", fontWeight:600, flexWrap:"wrap" }}>
              <span style={{ fontSize:"1.4rem" }}>✅</span> 
              <span>File converted successfully in <strong>{conversionTime}s</strong>! Check your downloads.</span>
            </div>
          )}
          {status==="error" && (
            <div style={{ marginTop:"1.5rem", padding:"1.2rem 1.5rem", borderRadius:"1rem", background:"rgba(239,68,68,0.15)", border:"1px solid rgba(239,68,68,0.35)", display:"flex", alignItems:"flex-start", gap:"0.75rem", color:"#fca5a5", fontSize:"0.95rem", fontWeight:600 }}>
              <span style={{ fontSize:"1.3rem", flexShrink:0 }}>❌</span>
              <span>{errorMsg || "Conversion failed. Please try again."}</span>
            </div>
          )}
        </div>

        {/* AI Features Section */}
        <div style={{ marginBottom:"2.5rem" }}>
          <h2 style={{ fontSize:"1.3rem", fontWeight:850, color:"#f0f0ff", marginBottom:"1.25rem", letterSpacing:"-0.02em" }}>
            ✨ AI-Powered Features
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:"1rem" }}>
            {AI_FEATURES.map(f => (
              <div key={f.title} style={{
                padding:"1.5rem", borderRadius:"1rem", 
                background:"rgba(139, 92, 246, 0.1)", border:"1px solid rgba(168,124,246,0.25)",
                transition:"all 0.3s"
              }} onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(139, 92, 246, 0.18)";
                el.style.transform = "translateY(-4px)";
              }} onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(139, 92, 246, 0.1)";
                el.style.transform = "translateY(0)";
              }}>
                <div style={{ fontSize:"1.8rem", marginBottom:"0.5rem" }}>{f.icon}</div>
                <h3 style={{ fontSize:"0.95rem", fontWeight:700, color:"#ede9ff", marginBottom:"0.35rem" }}>{f.title}</h3>
                <p style={{ fontSize:"0.82rem", color:"rgba(220,210,255,0.7)", margin:0, lineHeight:1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{
          padding:"1.5rem", borderRadius:"1.25rem",
          background:"linear-gradient(135deg, rgba(139,92,246,0.12), rgba(236,72,153,0.08))",
          border:"1px solid rgba(168,124,246,0.2)", textAlign:"center"
        }}>
          <p style={{ fontSize:"0.9rem", color:"rgba(220,210,255,0.82)", margin:0, fontWeight:600 }}>
            🚀 <strong>50,000+</strong> files converted · <strong>99.9%</strong> uptime · <strong>&lt;5s</strong> average conversion time
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.8; box-shadow: 0 0 8px rgba(167, 139, 250, 0.4); }
          50% { opacity: 1; box-shadow: 0 0 16px rgba(167, 139, 250, 0.6); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
