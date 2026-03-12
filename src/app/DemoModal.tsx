"use client";

import { useEffect, useState } from "react";

function UploadDemo() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPhase(p => (p+1)%4), 900);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"0.75rem" }}>
      <div style={{ width:"100%", padding:"1.5rem", borderRadius:"0.9rem", textAlign:"center", transition:"all 0.4s",
        border:`2px dashed ${phase>=2 ? "rgba(139,92,246,0.8)" : "rgba(139,92,246,0.3)"}`,
        background: phase>=2 ? "rgba(139,92,246,0.1)" : "rgba(255,255,255,0.03)" }}>
        <div style={{ fontSize:"2rem", marginBottom:"0.4rem", transition:"transform 0.3s", transform: phase===1?"scale(1.2)":"scale(1)" }}>
          {phase>=3 ? "✅" : "📂"}
        </div>
        <div style={{ fontSize:"0.82rem", fontWeight:600, color: phase>=2 ? "#c4b5fd" : "rgba(220,210,255,0.82)" }}>
          {phase===0 && "Drop your file here"}
          {phase===1 && "Dragging file…"}
          {phase===2 && "report.docx detected"}
          {phase===3 && "File ready! 2.4 MB"}
        </div>
      </div>
      {phase>=3 && (
        <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", padding:"0.5rem 1rem", borderRadius:"9999px", background:"rgba(16,185,129,0.12)", border:"1px solid rgba(16,185,129,0.3)", fontSize:"0.78rem", fontWeight:600, color:"#6ee7b7" }}>
          ✓ report.docx uploaded successfully
        </div>
      )}
    </div>
  );
}

function FormatDemo() {
  const fmts = ["PDF","DOCX","XLSX","HTML","EPUB","TXT"];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(a => (a+1)%fmts.length), 800);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"0.6rem" }}>
      <div style={{ fontSize:"0.75rem", fontWeight:700, color:"rgba(220,210,255,0.78)", letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"0.2rem" }}>
        Select output format
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"0.45rem" }}>
        {fmts.map((f,i) => (
          <div key={f} style={{ padding:"0.5rem", borderRadius:"0.6rem", textAlign:"center", transition:"all 0.3s",
            border: i===active ? "1.5px solid rgba(236,72,153,0.7)" : "1.5px solid rgba(255,255,255,0.08)",
            background: i===active ? "rgba(236,72,153,0.15)" : "rgba(255,255,255,0.03)",
            color: i===active ? "#f9a8d4" : "rgba(220,210,255,0.78)",
            fontSize:"0.78rem", fontWeight:700, transform: i===active?"scale(1.06)":"scale(1)" }}>
            {f}
          </div>
        ))}
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:"0.5rem", padding:"0.5rem 0.75rem", borderRadius:"0.6rem", background:"rgba(236,72,153,0.1)", border:"1px solid rgba(236,72,153,0.25)", fontSize:"0.78rem", color:"#f9a8d4", fontWeight:600, marginTop:"0.2rem" }}>
        🎯 Converting to <strong style={{ marginLeft:"0.25rem" }}>{fmts[active]}</strong>
      </div>
    </div>
  );
}

function DownloadDemo() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    setProgress(0); setDone(false);
    const t = setInterval(() => setProgress(p => { if(p>=100){clearInterval(t);setDone(true);return 100;} return p+5; }), 80);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:"0.75rem" }}>
      <div style={{ padding:"1rem", borderRadius:"0.9rem", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"0.6rem" }}>
          <span style={{ fontSize:"0.82rem", fontWeight:600, color:"#ede9ff" }}>{done?"✅ report.pdf":"⚡ Processing…"}</span>
          <span style={{ fontSize:"0.78rem", fontWeight:700, color:"#a78bfa" }}>{progress}%</span>
        </div>
        <div style={{ height:"6px", borderRadius:"9999px", background:"rgba(255,255,255,0.08)", overflow:"hidden" }}>
          <div style={{ height:"100%", borderRadius:"9999px", transition:"width 0.08s linear", width:`${progress}%`, background:"linear-gradient(90deg,#8b5cf6,#ec4899)" }} />
        </div>
      </div>
      {done && (
        <button style={{ padding:"0.7rem", borderRadius:"0.75rem", border:"none", background:"linear-gradient(135deg,#8b5cf6,#ec4899)", color:"white", fontWeight:700, fontSize:"0.88rem", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:"0.5rem", boxShadow:"0 4px 20px rgba(139,92,246,0.4)" }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download report.pdf
        </button>
      )}
    </div>
  );
}

const steps = [
  { step:"01", icon:"📂", title:"Upload Your File",       desc:"Drag & drop or click to browse. Supports PDF, DOCX, XLSX, PPTX, EPUB, HTML, RTF, TXT and more.", color:"#8b5cf6", bg:"rgba(139,92,246,0.12)",  border:"rgba(139,92,246,0.25)",  demo:<UploadDemo /> },
  { step:"02", icon:"🎯", title:"Choose Output Format",   desc:"Pick any of 8+ supported formats. Our AI preserves your layout, fonts, and structure precisely.",  color:"#ec4899", bg:"rgba(236,72,153,0.12)",  border:"rgba(236,72,153,0.25)",  demo:<FormatDemo /> },
  { step:"03", icon:"⚡", title:"Download Instantly",     desc:"Your converted file is ready in seconds. Click download and you're done — no sign-up required.",   color:"#22d3ee", bg:"rgba(34,211,238,0.10)", border:"rgba(34,211,238,0.22)",  demo:<DownloadDemo /> },
];

export default function DemoModal({ onClose }: { onClose: () => void }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s+1)%steps.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if(e.key==="Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  const step = steps[activeStep];

  return (
    <div onClick={onClose} style={{ position:"fixed", inset:0, zIndex:200, background:"rgba(5,3,20,0.7)", backdropFilter:"blur(10px)", display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem", animation:"fadeIn 0.2s ease" }}>
      <div onClick={e => e.stopPropagation()} style={{ width:"100%", maxWidth:"620px", background:"rgba(18,10,40,0.97)", borderRadius:"1.5rem", border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 30px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(139,92,246,0.15)", overflow:"hidden", animation:"slideUp 0.25s ease" }}>

        {/* Header */}
        <div style={{ padding:"1.5rem 1.75rem 1.25rem", borderBottom:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", justifyContent:"space-between", background:"linear-gradient(135deg,rgba(139,92,246,0.08),rgba(236,72,153,0.05))" }}>
          <div>
            <div style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.08em", color:"#a78bfa", textTransform:"uppercase", marginBottom:"0.3rem" }}>How It Works</div>
            <h2 style={{ fontSize:"1.35rem", fontWeight:800, color:"#ede9ff", letterSpacing:"-0.02em", margin:0 }}>Convert files in 3 simple steps</h2>
          </div>
          <button onClick={onClose} style={{ width:"34px", height:"34px", borderRadius:"50%", border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(220,210,255,0.88)", fontSize:"1rem" }}>✕</button>
        </div>

        {/* Step tabs */}
        <div style={{ display:"flex", padding:"1rem 1.75rem 0", gap:"0.5rem" }}>
          {steps.map((s,i) => (
            <button key={i} onClick={() => setActiveStep(i)} style={{ flex:1, padding:"0.6rem 0.5rem", borderRadius:"0.65rem", cursor:"pointer", border: i===activeStep ? `1.5px solid ${s.color}50` : "1.5px solid rgba(255,255,255,0.07)", background: i===activeStep ? s.bg : "rgba(255,255,255,0.03)", transition:"all 0.2s", display:"flex", flexDirection:"column", alignItems:"center", gap:"0.2rem" }}>
              <span style={{ fontSize:"1.1rem" }}>{s.icon}</span>
              <span style={{ fontSize:"0.72rem", fontWeight:700, color: i===activeStep ? s.color : "rgba(220,210,255,0.75)" }}>Step {s.step}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding:"1.25rem 1.75rem 1.75rem" }}>
          <div style={{ padding:"1.5rem", borderRadius:"1rem", background:step.bg, border:`1px solid ${step.border}`, marginBottom:"1.25rem" }}>
            <div style={{ display:"flex", alignItems:"flex-start", gap:"0.9rem", marginBottom:"1.25rem" }}>
              <div style={{ width:"44px", height:"44px", borderRadius:"12px", flexShrink:0, background:`linear-gradient(135deg,${step.color},${step.color}aa)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.3rem", boxShadow:`0 4px 16px ${step.color}40` }}>
                {step.icon}
              </div>
              <div>
                <div style={{ fontSize:"0.72rem", fontWeight:700, color:step.color, letterSpacing:"0.06em", textTransform:"uppercase", marginBottom:"0.2rem" }}>Step {step.step}</div>
                <h3 style={{ fontSize:"1.1rem", fontWeight:800, color:"#ede9ff", margin:0, letterSpacing:"-0.01em" }}>{step.title}</h3>
              </div>
            </div>
            <p style={{ fontSize:"0.88rem", color:"rgba(220,210,255,0.88)", lineHeight:1.65, margin:"0 0 1.25rem" }}>{step.desc}</p>
            {step.demo}
          </div>

          {/* Dots + Nav */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div style={{ display:"flex", gap:"0.5rem" }}>
              {steps.map((_,i) => (
                <button key={i} onClick={() => setActiveStep(i)} style={{ width: i===activeStep?"24px":"8px", height:"8px", borderRadius:"9999px", border:"none", cursor:"pointer", transition:"all 0.3s", background: i===activeStep ? step.color : "rgba(255,255,255,0.15)" }} />
              ))}
            </div>
            <div style={{ display:"flex", gap:"0.5rem" }}>
              <button onClick={() => setActiveStep(s => Math.max(0,s-1))} disabled={activeStep===0} style={{ padding:"0.45rem 1rem", borderRadius:"9999px", fontSize:"0.82rem", fontWeight:600, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.05)", color:"rgba(220,210,255,0.82)", cursor: activeStep===0?"not-allowed":"pointer", opacity: activeStep===0?0.35:1 }}>← Prev</button>
              {activeStep < steps.length-1 ? (
                <button onClick={() => setActiveStep(s => s+1)} style={{ padding:"0.45rem 1rem", borderRadius:"9999px", fontSize:"0.82rem", fontWeight:600, border:"none", background:"linear-gradient(135deg,#8b5cf6,#ec4899)", color:"white", cursor:"pointer" }}>Next →</button>
              ) : (
                <a href="/converter" style={{ textDecoration:"none" }}>
                  <button style={{ padding:"0.45rem 1.1rem", borderRadius:"9999px", fontSize:"0.82rem", fontWeight:700, border:"none", background:"linear-gradient(135deg,#8b5cf6,#ec4899)", color:"white", cursor:"pointer" }}>Try It Now ✨</button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn  { from{opacity:0}        to{opacity:1} }
        @keyframes slideUp { from{transform:translateY(24px);opacity:0} to{transform:translateY(0);opacity:1} }
      `}</style>
    </div>
  );
}
