"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    type: "general" as "feedback" | "bug" | "feature" | "general",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "", type: "general" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", padding: "5rem 2rem 4rem", background: "transparent" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.9rem", marginBottom: "2.5rem", fontWeight: 500 }}>
          ← Back to Home
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          {/* Left: Info */}
          <div>
            <div style={{ marginBottom: "2rem" }}>
              <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#06b6d4", background: "rgba(6,182,212,0.12)", border: "1px solid rgba(6,182,212,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "0.75rem" }}>Get in Touch</span>
              <h1 style={{ fontSize: "2.8rem", fontWeight: 900, color: "#ede9ff", letterSpacing: "-0.03em", margin: "0 0 0.5rem 0" }}>💬 Contact Us</h1>
              <p style={{ fontSize: "1rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>We'd love to hear from you. Send us feedback, report issues, or suggest features.</p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Card 1 */}
              <div style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>✉️</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "0.35rem" }}>Email</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>We'll respond within 24 hours</p>
                <p style={{ fontSize: "0.9rem", color: "#67e8f9", fontWeight: 600, margin: "0.5rem 0 0" }}>Contact us via the form below</p>
              </div>

              {/* Card 2 */}
              <div style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>💡</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "0.35rem" }}>Feedback</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>Help us improve with your suggestions</p>
              </div>

              {/* Card 3 */}
              <div style={{ background: "rgba(236,72,153,0.1)", border: "1px solid rgba(236,72,153,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🐛</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "0.35rem" }}>Report Issues</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>Found a bug? Let us know immediately</p>
              </div>

              {/* Card 4 */}
              <div style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "1rem", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⭐</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "0.35rem" }}>Feature Requests</h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>Want a new tool or feature?</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form onSubmit={handleSubmit} style={{
              background: "rgba(139,92,246,0.08)",
              border: "1px solid rgba(168,124,246,0.25)",
              borderRadius: "1.25rem",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}>
              {/* Name */}
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    color: "#ede9ff",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(168,124,246,0.7)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(168,124,246,0.3)"}
                />
              </div>

              {/* Email */}
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    color: "#ede9ff",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(168,124,246,0.7)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(168,124,246,0.3)"}
                />
              </div>

              {/* Type */}
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                  Type *
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    color: "#ede9ff",
                    fontSize: "0.95rem",
                    outline: "none",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(168,124,246,0.7)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(168,124,246,0.3)"}
                >
                  <option value="general">💬 General Inquiry</option>
                  <option value="feedback">💡 Feedback</option>
                  <option value="bug">🐛 Bug Report</option>
                  <option value="feature">⭐ Feature Request</option>
                </select>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    color: "#ede9ff",
                    fontSize: "0.95rem",
                    outline: "none",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(168,124,246,0.7)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(168,124,246,0.3)"}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more..."
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.75rem",
                    border: "1px solid rgba(168,124,246,0.3)",
                    background: "rgba(30,27,75,0.6)",
                    color: "#ede9ff",
                    fontSize: "0.95rem",
                    outline: "none",
                    resize: "vertical",
                    minHeight: "120px",
                    transition: "border-color 0.2s",
                  }}
                  onFocus={(e) => e.target.style.borderColor = "rgba(168,124,246,0.7)"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(168,124,246,0.3)"}
                />
              </div>

              {/* Status Message */}
              {status !== "idle" && (
                <div style={{
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  background: status === "success" ? "rgba(34,197,94,0.15)" : status === "error" ? "rgba(239,68,68,0.15)" : "rgba(59,130,246,0.15)",
                  border: `1px solid ${status === "success" ? "rgba(34,197,94,0.4)" : status === "error" ? "rgba(239,68,68,0.4)" : "rgba(59,130,246,0.4)"}`,
                  color: status === "success" ? "#86efac" : status === "error" ? "#fca5a5" : "#93c5fd",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                }}>
                  {message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  padding: "0.9rem 1.5rem",
                  borderRadius: "0.75rem",
                  border: "none",
                  background: status === "loading" ? "rgba(139,92,246,0.5)" : "linear-gradient(135deg, #a78bfa, #e879f9)",
                  color: "#fff",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  transition: "all 0.3s",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (status !== "loading") {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 35px rgba(139,92,246,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>

        {/* Privacy Notice */}
        <div style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)", borderRadius: "1rem", padding: "1.5rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ margin: 0, color: "rgba(220,210,255,0.85)", lineHeight: 1.7 }}>
            <strong style={{ color: "#67e8f9" }}>🔒 Privacy Protected</strong><br />
            Your information is safe with us. We never share your data with third parties. See our{" "}
            <Link href="/privacy-policy" style={{ color: "#a78bfa", textDecoration: "underline" }}>Privacy Policy</Link> for details.
          </p>
        </div>
      </div>
    </div>
  );
}
