"use client";

import { useState } from "react";

const faqs = [
  { q: "What file formats does AI-EditPro support?", a: "AI-EditPro supports PDF, DOCX, XLSX, PPTX, EPUB, HTML, RTF, and TXT. We're constantly adding new formats — more coming soon!" },
  { q: "Is my data safe and private?", a: "Absolutely. Files are processed in isolated environments, never stored on our servers after conversion, and all transfers are encrypted end-to-end with TLS." },
  { q: "Do I need to create an account?", a: "No account needed for the free tier. Simply upload your file and convert instantly. Pro features require a free account sign-up." },
  { q: "How large can my files be?", a: "Free users can upload files up to 10 MB. Pro users get up to 500 MB per file, and Enterprise users have no limits." },
  { q: "How accurate is the conversion?", a: "Our AI-powered engine preserves fonts, layout, images, tables, and formatting with industry-leading accuracy — typically 99%+ fidelity." },
  { q: "Can I convert multiple files at once?", a: "Yes! Pro and Enterprise plans support batch conversion of up to 50 files simultaneously, saving you hours of manual work." },
  { q: "Is there an API available?", a: "Yes, Enterprise plans include full REST API access with SDKs for JavaScript, Python, and more. Perfect for integrating conversions into your own workflow." },
  { q: "What happens if a conversion fails?", a: "If a conversion fails for any reason, you'll see a clear error message. We also offer automatic retry and our support team is available 24/7 for Pro and Enterprise users." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ maxWidth: "780px", margin: "0 auto 6rem", padding: "0 2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "0.75rem", color: "#ede9ff" }}>
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        <p style={{ color: "rgba(220,210,255,0.82)", fontSize: "1rem" }}>Everything you need to know about AI-EditPro</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="glass-card"
            style={{
              overflow: "hidden",
              border: open === i ? "1px solid rgba(139,92,246,0.4)" : "1px solid rgba(255,255,255,0.08)",
              transition: "border-color 0.2s",
              borderRadius: "0.9rem",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%", padding: "1.1rem 1.4rem",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: "transparent", border: "none", cursor: "pointer",
                textAlign: "left", gap: "1rem",
              }}
            >
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: open === i ? "#c4b5fd" : "#ede9ff", lineHeight: 1.4 }}>
                {faq.q}
              </span>
              <span style={{
                width: "26px", height: "26px", borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                background: open === i ? "rgba(139,92,246,0.25)" : "rgba(255,255,255,0.06)",
                color: open === i ? "#a78bfa" : "rgba(220,210,255,0.7)",
                fontSize: "1rem", fontWeight: 700, transition: "all 0.2s",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
              }}>+</span>
            </button>

            {open === i && (
              <div style={{ padding: "0 1.4rem 1.2rem" }}>
                <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "1rem" }} />
                <p style={{ fontSize: "0.9rem", color: "rgba(220,210,255,0.88)", lineHeight: 1.75, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
