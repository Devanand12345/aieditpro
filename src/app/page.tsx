import Link from "next/link";
import HeroButtons from "./HeroButtons";
import FAQ from "./FAQ";

const toolsList = [
  { id: "json-beautifier", name: "JSON Beautifier", icon: "🎨", desc: "Format & minify JSON", category: "Data", href: "/tools/json-beautifier", color: "#8b5cf6" },
  { id: "html-formatter", name: "HTML Formatter", icon: "🌐", desc: "Format & minify HTML", category: "Code", href: "/tools/html-formatter", color: "#06b6d4" },
  { id: "jwt-decoder", name: "JWT Decoder", icon: "🔐", desc: "Decode JWT tokens", category: "Security", href: "/tools/jwt-decoder", color: "#ec4899" },
  { id: "text-compare", name: "Text Diff", icon: "📋", desc: "Compare texts", category: "Utility", href: "/tools/text-compare", color: "#10b981" },
  { id: "json-compare", name: "JSON Compare", icon: "⚖️", desc: "Compare JSON objects", category: "Data", href: "/tools/json-compare", color: "#8b5cf6" },
  { id: "csv-formatter", name: "CSV Formatter", icon: "📊", desc: "Format CSV data", category: "Data", href: "/tools/csv-formatter", color: "#f59e0b" },
  { id: "base64", name: "Base64", icon: "🔤", desc: "Encode/decode Base64", category: "Encoding", href: "/tools/base64", color: "#ef4444" },
  { id: "url-encode", name: "URL Encoder", icon: "🔗", desc: "Encode/decode URLs", category: "Encoding", href: "/tools/url-encode", color: "#14b8a6" },
  { id: "regex", name: "Regex Tester", icon: "🔍", desc: "Test regex patterns", category: "Code", href: "/tools/regex", color: "#06b6d4" },
  { id: "uuid", name: "UUID Generator", icon: "🆔", desc: "Generate UUIDs", category: "Generator", href: "/tools/uuid", color: "#a855f7" },
  { id: "hash", name: "Hash Generator", icon: "#️⃣", desc: "Generate hashes", category: "Security", href: "/tools/hash", color: "#ec4899" },
  { id: "xml-formatter", name: "XML Formatter", icon: "📦", desc: "Format & minify XML", category: "Code", href: "/tools/xml-formatter", color: "#8b5cf6" },
];

const features = [
  { icon:"⚡", title:"Lightning Fast",    desc:"Convert files in seconds with our optimized AI pipeline.",             gradient:"linear-gradient(135deg,#f59e0b,#ef4444)" },
  { icon:"🔒", title:"Secure & Private",  desc:"Files processed in isolation, deleted immediately after conversion.",  gradient:"linear-gradient(135deg,#10b981,#06b6d4)" },
  { icon:"🎯", title:"High Accuracy",     desc:"99%+ fidelity — fonts, tables, images, layout all preserved.",         gradient:"linear-gradient(135deg,#8b5cf6,#ec4899)" },
  { icon:"📦", title:"8+ Formats",        desc:"PDF, DOCX, TXT, HTML, EPUB, RTF, XLSX, PPTX and more.",               gradient:"linear-gradient(135deg,#ec4899,#f59e0b)" },
  { icon:"🔄", title:"Batch Convert",     desc:"Upload and convert up to 50 files simultaneously.",                    gradient:"linear-gradient(135deg,#22d3ee,#8b5cf6)" },
  { icon:"🛠️", title:"REST API",          desc:"Full API access for developers. SDKs for JS and Python.",             gradient:"linear-gradient(135deg,#8b5cf6,#22d3ee)" },
  { icon:"📊", title:"Analytics",         desc:"Track conversions, usage trends and team performance.",                gradient:"linear-gradient(135deg,#f59e0b,#10b981)" },
  { icon:"💬", title:"24/7 Support",      desc:"Real human support agents ready to help around the clock.",            gradient:"linear-gradient(135deg,#ec4899,#a78bfa)" },
];

const formats = ["PDF","DOCX","XLSX","PPTX","EPUB","HTML","RTF","TXT"];
const fmtStyle = [
  { bg:"rgba(139,92,246,0.12)", border:"rgba(139,92,246,0.35)", text:"#c4b5fd" },
  { bg:"rgba(236,72,153,0.12)", border:"rgba(236,72,153,0.35)", text:"#f9a8d4" },
  { bg:"rgba(34,211,238,0.10)", border:"rgba(34,211,238,0.30)", text:"#67e8f9" },
  { bg:"rgba(139,92,246,0.12)", border:"rgba(139,92,246,0.35)", text:"#c4b5fd" },
  { bg:"rgba(236,72,153,0.12)", border:"rgba(236,72,153,0.35)", text:"#f9a8d4" },
  { bg:"rgba(34,211,238,0.10)", border:"rgba(34,211,238,0.30)", text:"#67e8f9" },
  { bg:"rgba(251,191,36,0.10)", border:"rgba(251,191,36,0.30)", text:"#fde68a" },
  { bg:"rgba(52,211,153,0.10)", border:"rgba(52,211,153,0.30)", text:"#6ee7b7" },
];

const testimonials = [
  { name:"Sarah K.",   role:"Content Manager",    avatar:"👩‍💼", text:"AIEditPro saved our team hours every week. The PDF to DOCX conversion is incredibly accurate — even complex tables come out perfectly.", stars:5, tag:"⚡ Saves 3h/week" },
  { name:"James R.",   role:"Freelance Developer", avatar:"👨‍💻", text:"The REST API is exactly what I needed. Integration took under an hour and the accuracy is outstanding. Best file conversion service I've used.", stars:5, tag:"🛠️ API user" },
  { name:"Priya S.",   role:"Legal Consultant",    avatar:"👩‍⚖️", text:"As a lawyer, document accuracy is critical. AIEditPro's conversion fidelity is unmatched — I trust it with sensitive legal documents.", stars:5, tag:"🔒 Security focused" },
  { name:"Tom H.",     role:"Startup Founder",     avatar:"🧑‍🚀", text:"We process thousands of documents a month. The batch conversion and unlimited plan makes it incredibly cost-effective for our team.", stars:5, tag:"📦 Batch power user" },
  { name:"Mei L.",     role:"UX Designer",          avatar:"👩‍🎨", text:"Converted all our design specs from PPTX to PDF in seconds. The formatting stayed pixel-perfect. Absolutely love this tool!", stars:5, tag:"🎨 Design team" },
  { name:"Carlos M.",  role:"Data Analyst",         avatar:"👨‍💻", text:"The XLSX to CSV conversion is flawless. Handles complex spreadsheets with merged cells and formulas without breaking a sweat.", stars:5, tag:"📊 Data workflows" },
];

const trustedBy = ["Vercel", "Stripe", "Figma", "Notion", "Linear", "Shopify", "GitHub", "Slack"];

const howItWorks = [
  { step:"01", icon:"📂", title:"Upload",  desc:"Drag & drop or click to browse. Any format, any size." },
  { step:"02", icon:"🎯", title:"Choose",  desc:"Pick your output format from 8+ options." },
  { step:"03", icon:"⚡", title:"Convert", desc:"AI processes your file with 99%+ accuracy in seconds." },
  { step:"04", icon:"📥", title:"Download",desc:"Grab your converted file — ready to use immediately." },
];

export default function Home() {
  return (
    <div style={{ minHeight:"100vh", paddingTop:"80px", background: "linear-gradient(to bottom, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)" }}>

      {/* ── Hero Section: Two Columns (Converter + Tools) ──────────────────── */}
      <section style={{ maxWidth:"1400px", margin:"0 auto", padding:"3rem 2rem 4rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"4rem", alignItems:"start" }}>
        
        {/* Left: Converter Showcase */}
        <div style={{ animation: "fadeInUp 0.6s ease-out" }}>
          <div className="badge" style={{ marginBottom:"1.5rem", display:"inline-flex", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.4)" }}>
            <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#10b981", animation:"pulse-glow 2s ease-in-out infinite", flexShrink:0 }} />
            AI-Powered File Conversion
          </div>
          <h1 style={{ fontSize:"clamp(2.2rem,4vw,3.8rem)", fontWeight:900, lineHeight:1.1, letterSpacing:"-0.04em", marginBottom:"1.25rem", color: "#ede9ff" }}>
            <span className="shimmer">Convert Any File</span><br />
            <span style={{ background: "linear-gradient(120deg, #a78bfa, #c084fc)", backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>with AI Precision</span>
          </h1>
          <p style={{ fontSize:"1.05rem", color:"rgba(220,210,255,0.88)", marginBottom:"2rem", lineHeight:1.7, maxWidth: "450px" }}>
            Transform your documents instantly — preserving structure, formatting, and content with intelligent accuracy. <strong>No sign-up required.</strong>
          </p>
          
          <div style={{ display:"flex", gap:"1rem", marginBottom:"2.5rem", flexWrap:"wrap" }}>
            <Link href="/converter" style={{ textDecoration:"none" }}>
              <button style={{ padding:"1rem 2.2rem", borderRadius:"0.75rem", border:"none", background:"linear-gradient(120deg, #a78bfa, #c084fc)", color:"#fff", cursor:"pointer", fontWeight:700, fontSize:"1rem", transition:"all 0.3s", boxShadow: "0 8px 25px rgba(139,92,246,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(139,92,246,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(139,92,246,0.3)"; }}
              >
                📤 Convert Now
              </button>
            </Link>
            <Link href="/features" style={{ textDecoration:"none" }}>
              <button style={{ padding:"1rem 2.2rem", borderRadius:"0.75rem", border:"1.5px solid rgba(168,124,246,0.5)", background:"rgba(168,124,246,0.1)", color:"#c4b5fd", cursor:"pointer", fontWeight:700, fontSize:"1rem", transition:"all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(168,124,246,0.2)"; e.currentTarget.style.borderColor = "rgba(168,124,246,0.8)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(168,124,246,0.1)"; e.currentTarget.style.borderColor = "rgba(168,124,246,0.5)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                ✨ Learn More
              </button>
            </Link>
          </div>

          <div style={{ display:"flex", gap:"0.5rem", flexWrap:"wrap", marginBottom:"2rem" }}>
            {formats.map((f,i) => (
              <span key={f} style={{ padding:"0.35rem 0.85rem", borderRadius:"9999px", fontSize:"0.75rem", fontWeight:700, letterSpacing:"0.06em", background:fmtStyle[i].bg, border:`1px solid ${fmtStyle[i].border}`, color:fmtStyle[i].text, transition: "all 0.2s", cursor: "default" }}>
                {f}
              </span>
            ))}
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem", marginBottom: "2rem" }}>
            <div style={{ padding:"1rem", borderRadius:"0.75rem", background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.3)" }}>
              <div style={{ fontSize:"0.75rem", fontWeight:700, color:"#86efac", textTransform: "uppercase", letterSpacing: "0.05em" }}>✅ No Sign-up</div>
              <div style={{ fontSize:"0.85rem", color:"rgba(220,210,255,0.75)", marginTop: "0.25rem" }}>Start instantly</div>
            </div>
            <div style={{ padding:"1rem", borderRadius:"0.75rem", background:"rgba(34,197,94,0.1)", border:"1px solid rgba(34,197,94,0.3)" }}>
              <div style={{ fontSize:"0.75rem", fontWeight:700, color:"#86efac", textTransform: "uppercase", letterSpacing: "0.05em" }}>🔒 Secure</div>
              <div style={{ fontSize:"0.85rem", color:"rgba(220,210,255,0.75)", marginTop: "0.25rem" }}>100% private</div>
            </div>
          </div>
        </div>

        {/* Right: Tools Grid Showcase */}
        <div style={{ animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <div style={{ marginBottom:"0.5rem" }}>
            <h2 style={{ fontSize:"1.75rem", fontWeight:800, marginBottom:"0.5rem", color:"#ede9ff" }}>
              12+ Developer <span className="gradient-text">Tools</span>
            </h2>
            <p style={{ color:"rgba(220,210,255,0.75)", marginBottom:"1.75rem", fontSize:"0.95rem" }}>
              Format, validate, encode, decode, and analyze instantly.
            </p>
          </div>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"0.9rem", marginBottom:"1.75rem" }}>
            {toolsList.map(tool => (
              <Link key={tool.id} href={tool.href} style={{ textDecoration:"none" }}>
                <div style={{
                  padding:"1.1rem",
                  borderRadius:"0.85rem",
                  border:"1.5px solid rgba(168,124,246,0.2)",
                  background:"rgba(168,124,246,0.08)",
                  cursor:"pointer",
                  transition:"all 0.3s ease",
                  textAlign:"center",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(168,124,246,0.18)";
                  e.currentTarget.style.borderColor = "rgba(168,124,246,0.6)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 8px 25px ${tool.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(168,124,246,0.08)";
                  e.currentTarget.style.borderColor = "rgba(168,124,246,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)`, opacity: 0 }}>
                    <div style={{ animation: "shimmer 2s infinite" }} />
                  </div>
                  <div style={{ fontSize:"1.95rem", marginBottom:"0.5rem" }}>{tool.icon}</div>
                  <div style={{ fontSize:"0.8rem", fontWeight:700, color:tool.color, marginBottom:"0.25rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>{tool.category}</div>
                  <div style={{ fontSize:"0.8rem", fontWeight:700, color:"#ede9ff", marginBottom:"0.25rem" }}>{tool.name}</div>
                  <div style={{ fontSize:"0.7rem", color:"rgba(220,210,255,0.65)" }}>{tool.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/tools" style={{ textDecoration:"none" }}>
            <button style={{ width:"100%", padding:"1rem", borderRadius:"0.75rem", border:"1.5px solid rgba(139,92,246,0.4)", background:"rgba(139,92,246,0.12)", color:"#c4b5fd", cursor:"pointer", fontWeight:600, fontSize:"0.95rem", transition:"all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(139,92,246,0.22)"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.7)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(139,92,246,0.12)"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.4)"; }}
            >
              🔧 View All Tools →
            </button>
          </Link>
        </div>
      </section>

      {/* ── Trusted By ───────────────────────────────────── */}
      <section style={{ maxWidth:"1400px", margin:"4rem auto", padding:"0 2rem" }}>
        <p style={{ textAlign:"center", fontSize:"0.78rem", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(220,210,255,0.5)", marginBottom:"1.5rem" }}>
          Trusted by teams at
        </p>
        <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"1rem 2.5rem" }}>
          {trustedBy.map(name => (
            <span key={name} style={{ fontSize:"1rem", fontWeight:700, color:"rgba(220,210,255,0.35)", letterSpacing:"0.02em" }}>{name}</span>
          ))}
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section style={{ maxWidth:"1400px", margin:"0 auto 4rem", padding:"0 2rem" }}>
        <div className="glass-card" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", overflow:"hidden", background: "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.05))" }}>
          {[
            { value:"50K+",  label:"Files Converted" },
            { value:"8+",    label:"File Formats" },
            { value:"99.9%", label:"Uptime" },
            { value:"<5s",   label:"Avg. Convert Time" },
          ].map((s,i) => (
            <div key={i} style={{ padding:"2rem 1.5rem", textAlign:"center", borderRight: i<3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
              <div className="gradient-text" style={{ fontSize:"2.2rem", fontWeight:900, marginBottom:"0.5rem" }}>{s.value}</div>
              <div style={{ fontSize:"0.82rem", color:"rgba(220,210,255,0.8)", fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section style={{ maxWidth:"1400px", margin:"0 auto 6rem", padding:"0 2rem" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <h2 style={{ fontSize:"2.2rem", fontWeight:800, letterSpacing:"-0.03em", marginBottom:"0.75rem", color:"#ede9ff" }}>
            How It <span className="gradient-text">Works</span>
          </h2>
          <p style={{ color:"rgba(220,210,255,0.82)", fontSize:"1rem" }}>Four simple steps to your converted file</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"1.5rem", position:"relative" }}>
          {howItWorks.map((step, i) => (
            <div key={step.step} style={{ textAlign:"center", position:"relative" }}>
              <div className="glass-card" style={{ padding:"2rem 1.5rem", background: "linear-gradient(135deg, rgba(139,92,246,0.12), rgba(139,92,246,0.05))" }}>
                <div style={{ fontSize:"2.4rem", marginBottom:"0.75rem" }}>{step.icon}</div>
                <div style={{ fontSize:"0.7rem", fontWeight:800, color:"rgba(139,92,246,0.8)", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:"0.6rem" }}>Step {step.step}</div>
                <h3 style={{ fontSize:"1.05rem", fontWeight:700, color:"#ede9ff", marginBottom:"0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize:"0.83rem", color:"rgba(220,210,255,0.82)", lineHeight:1.6, margin:0 }}>{step.desc}</p>
              </div>
              {i < howItWorks.length - 1 && (
                <div style={{ position:"absolute", top:"50%", right:"-1rem", transform:"translateY(-50%)", color:"rgba(139,92,246,0.4)", fontSize:"1.5rem", zIndex:2, display:"flex" }}>→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────────── */}
      <section style={{ maxWidth:"1400px", margin:"0 auto 6rem", padding:"0 2rem" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <h2 style={{ fontSize:"2.2rem", fontWeight:800, letterSpacing:"-0.03em", marginBottom:"0.75rem", color:"#ede9ff" }}>
            Why <span className="gradient-text-2">AIEditPro</span>?
          </h2>
          <p style={{ color:"rgba(220,210,255,0.82)", fontSize:"1rem" }}>Everything you need for effortless file conversion</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1.2rem" }}>
          {features.map(f => (
            <div key={f.title} className="glass-card feature-card" style={{ padding:"1.8rem", background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(139,92,246,0.02))", cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.08))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(139,92,246,0.02))";
              }}>
              <div className="feature-icon" style={{ background:f.gradient, fontSize: "1.8rem" }}>{f.icon}</div>
              <h3 style={{ fontSize:"1.05rem", fontWeight:700, marginBottom:"0.5rem", color:"#ede9ff" }}>{f.title}</h3>
              <p style={{ fontSize:"0.85rem", color:"rgba(220,210,255,0.82)", lineHeight:1.6, margin:0 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section style={{ maxWidth:"1400px", margin:"0 auto 6rem", padding:"0 2rem" }}>
        <div style={{ textAlign:"center", marginBottom:"3rem" }}>
          <h2 style={{ fontSize:"2.2rem", fontWeight:800, letterSpacing:"-0.03em", marginBottom:"0.75rem", color:"#ede9ff" }}>
            Loved by <span className="gradient-text">Thousands</span>
          </h2>
          <p style={{ color:"rgba(220,210,255,0.82)", fontSize:"1rem" }}>Don't take our word for it — here's what our users say</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:"1.5rem" }}>
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card feature-card" style={{ padding:"1.8rem", display:"flex", flexDirection:"column", gap:"1rem", background: "linear-gradient(135deg, rgba(139,92,246,0.08), rgba(236,72,153,0.05))" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"0.75rem" }}>
                  <div style={{ width:"45px", height:"45px", borderRadius:"50%", background:"linear-gradient(135deg,rgba(139,92,246,0.3),rgba(236,72,153,0.3))", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", border:"1.5px solid rgba(168,124,246,0.3)" }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ fontSize:"0.9rem", fontWeight:700, color:"#ede9ff" }}>{t.name}</div>
                    <div style={{ fontSize:"0.75rem", color:"rgba(220,210,255,0.7)" }}>{t.role}</div>
                  </div>
                </div>
                <span style={{ fontSize:"0.7rem", fontWeight:700, padding:"0.3rem 0.7rem", borderRadius:"9999px", background:"rgba(139,92,246,0.15)", border:"1px solid rgba(139,92,246,0.25)", color:"#c4b5fd", whiteSpace:"nowrap" }}>{t.tag}</span>
              </div>
              <div style={{ display:"flex", gap:"3px" }}>
                {Array.from({length:t.stars}).map((_,i) => <span key={i} style={{ color:"#fbbf24", fontSize:"0.9rem" }}>★</span>)}
              </div>
              <p style={{ fontSize:"0.875rem", color:"rgba(220,210,255,0.88)", lineHeight:1.7, margin:0, fontStyle:"italic" }}>"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <FAQ />

      {/* ── Newsletter ───────────────────────────────────── */}
      <section style={{ maxWidth:"600px", margin:"0 auto 6rem", padding:"0 2rem", textAlign:"center" }}>
        <div className="glass-card" style={{ padding:"2.75rem 2.25rem", background:"linear-gradient(135deg,rgba(139,92,246,0.15),rgba(236,72,153,0.1))", border:"1.5px solid rgba(139,92,246,0.3)" }}>
          <div style={{ fontSize:"2.2rem", marginBottom:"1rem" }}>📬</div>
          <h3 style={{ fontSize:"1.45rem", fontWeight:800, color:"#ede9ff", marginBottom:"0.5rem", letterSpacing:"-0.02em" }}>
            Stay in the loop
          </h3>
          <p style={{ fontSize:"0.9rem", color:"rgba(220,210,255,0.82)", marginBottom:"1.75rem", lineHeight:1.6 }}>
            Get notified about new formats, features, and special offers.
          </p>
          <div style={{ display:"flex", gap:"0.6rem", flexWrap:"wrap", justifyContent:"center" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{ flex:"1", minWidth:"200px", padding:"0.85rem 1.1rem", borderRadius:"0.75rem", border:"1px solid rgba(255,255,255,0.15)", background:"rgba(255,255,255,0.08)", color:"#ede9ff", fontSize:"0.9rem", outline:"none", transition: "all 0.2s" }}
              onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(168,124,246,0.6)"; e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
            />
            <button className="btn-glow" style={{ padding:"0.85rem 1.6rem", fontSize:"0.9rem", borderRadius:"0.75rem", whiteSpace:"nowrap" }}>
              Subscribe
            </button>
          </div>
          <p style={{ fontSize:"0.75rem", color:"rgba(220,210,255,0.55)", marginTop:"0.9rem" }}>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section style={{ maxWidth:"700px", margin:"0 auto 6rem", padding:"0 2rem", textAlign:"center" }}>
        <div style={{ padding:"3.75rem 2.25rem", borderRadius:"1.5rem", position:"relative", overflow:"hidden", background:"linear-gradient(135deg,rgba(139,92,246,0.2),rgba(236,72,153,0.12))", border:"1.5px solid rgba(139,92,246,0.35)", backdropFilter:"blur(20px)", boxShadow:"0 8px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)" }}>
          <div style={{ position:"absolute", top:"-80px", left:"50%", transform:"translateX(-50%)", width:"320px", height:"220px", background:"radial-gradient(circle,rgba(139,92,246,0.25),transparent 70%)", pointerEvents:"none" }} />
          <h2 style={{ fontSize:"2.1rem", fontWeight:800, letterSpacing:"-0.03em", marginBottom:"1rem", position:"relative", color:"#ede9ff" }}>
            Ready to <span className="gradient-text">get started?</span>
          </h2>
          <p style={{ color:"rgba(220,210,255,0.85)", marginBottom:"2rem", position:"relative", fontSize: "1rem" }}>
            No account needed. Upload your file and convert instantly.
          </p>
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap", position:"relative" }}>
            <Link href="/converter" style={{ textDecoration:"none" }}>
              <button className="btn-glow" style={{ fontSize:"1.05rem", padding:"1rem 2.75rem" }}>
                Convert Your First File — Free
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer style={{ borderTop:"1px solid rgba(255,255,255,0.08)", padding:"4rem 2rem 2.5rem", background: "rgba(15,23,42,0.8)" }}>
        <div style={{ maxWidth:"1400px", margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:"2.5rem", marginBottom:"3.5rem" }}>
            {/* Brand */}
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:"0.6rem", marginBottom:"0.85rem" }}>
                <div className="logo-icon" style={{ width:"28px", height:"28px", borderRadius:"8px", fontSize:"11px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5z" fill="white"/><path d="M2 17l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
                <span style={{ fontWeight:700, fontSize:"0.95rem" }}><span className="gradient-text">AIEdit</span><span style={{ color:"rgba(255,255,255,0.9)" }}>Pro</span></span>
              </div>
              <p style={{ fontSize:"0.82rem", color:"rgba(220,210,255,0.65)", lineHeight:1.6, maxWidth:"220px" }}>AI-powered file conversion & developer tools for productivity.</p>
            </div>
            {/* Product */}
            <div>
              <div style={{ fontSize:"0.78rem", fontWeight:700, color:"rgba(220,210,255,0.5)", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:"1rem" }}>Product</div>
              {[["Converter","/converter"],["Tools","/tools"],["Features","/features"]].map(([l,h]) => (
                <div key={l} style={{ marginBottom:"0.65rem" }}>
                  <Link href={h} style={{ fontSize:"0.875rem", color:"rgba(220,210,255,0.75)", textDecoration:"none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#c4b5fd"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(220,210,255,0.75)"}>{l}</Link>
                </div>
              ))}
            </div>
            {/* Formats */}
            <div>
              <div style={{ fontSize:"0.78rem", fontWeight:700, color:"rgba(220,210,255,0.5)", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:"1rem" }}>Formats</div>
              {["PDF","DOCX","XLSX","EPUB","HTML","TXT"].map(f => (
                <div key={f} style={{ marginBottom:"0.65rem", fontSize:"0.875rem", color:"rgba(220,210,255,0.75)" }}>{f}</div>
              ))}
            </div>
            {/* Company */}
            <div>
              <div style={{ fontSize:"0.78rem", fontWeight:700, color:"rgba(220,210,255,0.5)", letterSpacing:"0.07em", textTransform:"uppercase", marginBottom:"1rem" }}>Company</div>
              {["About","Blog","Careers","Privacy","Terms"].map(l => (
                <div key={l} style={{ marginBottom:"0.65rem" }}>
                  <span style={{ fontSize:"0.875rem", color:"rgba(220,210,255,0.75)", cursor:"pointer", transition: "color 0.2s" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#c4b5fd"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(220,210,255,0.75)"}>{l}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderTop:"1px solid rgba(255,255,255,0.08)", paddingTop:"2rem", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:"1.5rem" }}>
            <span style={{ fontSize:"0.82rem", color:"rgba(220,210,255,0.5)" }}>© 2026 <span className="gradient-text" style={{ fontWeight:600 }}>AIEditPro</span> — File Conversion & Developer Tools</span>
            <div style={{ display:"flex", gap:"1.5rem" }}>
              {["Twitter","GitHub","Discord"].map(s => (
                <span key={s} style={{ fontSize:"0.82rem", color:"rgba(220,210,255,0.55)", cursor:"pointer", fontWeight:500, transition: "color 0.2s" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#c4b5fd"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "rgba(220,210,255,0.55)"}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @media (max-width: 768px) {
          section[style*="gridTemplateColumns: 1fr 1fr"] {
            display: flex !important;
            flex-direction: column !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
