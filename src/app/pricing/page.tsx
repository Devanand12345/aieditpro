import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Perfect for occasional use",
    color: "#a78bfa",
    gradient: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    features: [
      "Up to 10 MB per file",
      "5 conversions per day",
      "All 8 formats",
      "Standard processing speed",
      "Email support",
    ],
    missing: [],
    cta: "Get Started Free",
    href: "/converter",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "80px" }}>
      <section style={{ maxWidth: "1060px", margin: "0 auto", padding: "5rem 2rem 6rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1 style={{ fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 900, letterSpacing: "-0.04em", marginBottom: "1rem", color: "#ede9ff" }}>
            Always <span className="gradient-text">Free</span>
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(220,210,255,0.82)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            No hidden fees, no credit card required. Free forever.
          </p>
        </div>

        {/* Plans */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.5rem", alignItems: "start" }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{ position: "relative" }}>
              {plan.popular && (
                <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", zIndex: 1, padding: "0.3rem 1rem", borderRadius: "9999px", background: "linear-gradient(135deg,#ec4899,#8b5cf6)", fontSize: "0.72rem", fontWeight: 800, color: "white", letterSpacing: "0.06em", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(236,72,153,0.4)" }}>
                  ⭐ MOST POPULAR
                </div>
              )}
              <div className="glass-card" style={{
                padding: "2rem",
                border: plan.popular ? "1px solid rgba(236,72,153,0.4)" : "1px solid rgba(255,255,255,0.08)",
                boxShadow: plan.popular ? "0 8px 60px rgba(236,72,153,0.15)" : undefined,
              }}>
                {/* Plan header */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: plan.gradient, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem", fontSize: "1.2rem" }}>
                    {plan.name === "Free" ? "🚀" : plan.name === "Pro" ? "⚡" : "🏢"}
                  </div>
                  <div style={{ fontSize: "0.8rem", fontWeight: 700, color: plan.color, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.25rem" }}>{plan.name}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#ede9ff", letterSpacing: "-0.04em" }}>{plan.price}</span>
                    <span style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.65)" }}>/{plan.period}</span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>{plan.desc}</p>
                </div>

                <Link href={plan.href} style={{ textDecoration: "none", display: "block", marginBottom: "1.75rem" }}>
                  <button style={{
                    width: "100%", padding: "0.8rem", borderRadius: "0.75rem",
                    border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.12)",
                    background: plan.popular ? plan.gradient : "rgba(255,255,255,0.06)",
                    color: "white", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: plan.popular ? "0 4px 20px rgba(236,72,153,0.3)" : "none",
                  }}>
                    {plan.cta}
                  </button>
                </Link>

                <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "1.5rem" }} />

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                      <span style={{ color: "#10b981", fontSize: "0.85rem", flexShrink: 0, marginTop: "1px" }}>✓</span>
                      <span style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.88)" }}>{f}</span>
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", opacity: 0.35 }}>
                      <span style={{ color: "rgba(220,210,255,0.5)", fontSize: "0.85rem", flexShrink: 0, marginTop: "1px" }}>✕</span>
                      <span style={{ fontSize: "0.875rem", color: "rgba(220,210,255,0.6)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div style={{ textAlign: "center", marginTop: "3rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", flexWrap: "wrap" }}>
          {["💳 No credit card required", "🔒 Secure & private", "⚡ Instant access", "📞 Email support"].map(t => (
            <span key={t} style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.75)", fontWeight: 500 }}>{t}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
