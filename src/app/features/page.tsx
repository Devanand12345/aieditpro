import Link from "next/link";

const allFeatures = [
  {
    category: "Conversion",
    icon: "🔄",
    color: "#8b5cf6",
    gradient: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    items: [
      { title: "8+ File Formats", desc: "Convert between PDF, DOCX, XLSX, PPTX, EPUB, HTML, RTF, and TXT with a single click." },
      { title: "Layout Preservation", desc: "AI engine maintains fonts, tables, images, headers, and complex formatting perfectly." },
      { title: "Batch Conversion", desc: "Convert up to 50 files simultaneously. Save hours of repetitive manual work." },
      { title: "High-Fidelity Output", desc: "99%+ accuracy rate. Your converted files look exactly as intended." },
    ],
  },
  {
    category: "Speed & Performance",
    icon: "⚡",
    color: "#f59e0b",
    gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
    items: [
      { title: "Lightning Fast", desc: "Average conversion time under 5 seconds for files up to 10 MB." },
      { title: "Cloud Processing", desc: "Powered by distributed cloud infrastructure for consistent performance." },
      { title: "Priority Queue", desc: "Pro users jump to the front of the processing queue for instant results." },
      { title: "Parallel Processing", desc: "Multiple files are processed simultaneously, not sequentially." },
    ],
  },
  {
    category: "Security",
    icon: "🔒",
    color: "#10b981",
    gradient: "linear-gradient(135deg,#10b981,#06b6d4)",
    items: [
      { title: "End-to-End Encryption", desc: "All file transfers are encrypted with TLS 1.3. Your data is always protected." },
      { title: "Zero Storage Policy", desc: "Files are automatically deleted after conversion. We never store your documents." },
      { title: "Isolated Processing", desc: "Each conversion runs in an isolated sandbox. No cross-user data exposure." },
      { title: "GDPR Compliant", desc: "Fully compliant with GDPR, CCPA, and other major privacy regulations." },
    ],
  },
  {
    category: "Developer Tools",
    icon: "🛠️",
    color: "#22d3ee",
    gradient: "linear-gradient(135deg,#22d3ee,#8b5cf6)",
    items: [
      { title: "REST API", desc: "Full-featured API with comprehensive documentation, SDKs, and code examples." },
      { title: "Webhooks", desc: "Get notified instantly when conversions complete via webhooks." },
      { title: "JavaScript SDK", desc: "Official npm package for seamless integration in Node.js and browser environments." },
      { title: "Python SDK", desc: "pip-installable SDK for Python projects, including async support." },
    ],
  },
  {
    category: "Collaboration",
    icon: "👥",
    color: "#ec4899",
    gradient: "linear-gradient(135deg,#ec4899,#f59e0b)",
    items: [
      { title: "Team Workspaces", desc: "Share conversion quotas and settings across your entire team." },
      { title: "Conversion History", desc: "Full audit log of every conversion — searchable, filterable, downloadable." },
      { title: "Role Management", desc: "Admin, editor, and viewer roles with fine-grained permission controls." },
      { title: "Usage Analytics", desc: "Track conversion volume, file types, and team usage with rich dashboards." },
    ],
  },
  {
    category: "Support",
    icon: "💬",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg,#a78bfa,#ec4899)",
    items: [
      { title: "24/7 Live Chat", desc: "Real human support agents available around the clock for Pro and Enterprise." },
      { title: "Dedicated Manager", desc: "Enterprise clients get a dedicated account manager for white-glove service." },
      { title: "Video Tutorials", desc: "Library of step-by-step tutorials covering every feature in detail." },
      { title: "SLA Guarantee", desc: "99.9% uptime SLA backed by financial guarantees for Enterprise customers." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "80px" }}>
      <div style={{ maxWidth: "1060px", margin: "0 auto", padding: "5rem 2rem 6rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="badge" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#8b5cf6", flexShrink: 0 }} />
            Everything You Need
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "1.25rem", color: "#ede9ff" }}>
            Powerful Features,<br /><span className="gradient-text">Built for Everyone</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(220,210,255,0.82)", maxWidth: "560px", margin: "0 auto 2rem", lineHeight: 1.75 }}>
            From one-click conversions to enterprise-grade APIs — AIEditPro has everything to power your document workflow.
          </p>
          <Link href="/converter" style={{ textDecoration: "none" }}>
            <button className="btn-glow" style={{ fontSize: "1rem", padding: "0.85rem 2.2rem" }}>
              Try It Free →
            </button>
          </Link>
        </div>

        {/* Feature categories */}
        {allFeatures.map((cat) => (
          <div key={cat.category} style={{ marginBottom: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.9rem", marginBottom: "1.75rem" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: cat.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", boxShadow: `0 4px 20px ${cat.color}40` }}>
                {cat.icon}
              </div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#ede9ff", letterSpacing: "-0.02em", margin: 0 }}>
                {cat.category}
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem" }}>
              {cat.items.map((item) => (
                <div key={item.title} className="glass-card feature-card" style={{ padding: "1.5rem" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: cat.color, marginBottom: "0.9rem", boxShadow: `0 0 10px ${cat.color}` }} />
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#ede9ff", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.82)", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", padding: "3rem 2rem", borderRadius: "1.5rem", background: "linear-gradient(135deg,rgba(139,92,246,0.12),rgba(236,72,153,0.08))", border: "1px solid rgba(139,92,246,0.2)", backdropFilter: "blur(20px)" }}>
          <h2 style={{ fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.75rem", color: "#ede9ff", letterSpacing: "-0.03em" }}>
            Ready to experience all <span className="gradient-text">these features?</span>
          </h2>
          <p style={{ color: "rgba(220,210,255,0.82)", marginBottom: "1.75rem" }}>Start for free — no credit card required.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/converter" style={{ textDecoration: "none" }}>
              <button className="btn-glow" style={{ fontSize: "1rem", padding: "0.85rem 2rem" }}>Start Converting Free</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
