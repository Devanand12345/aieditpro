"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div style={{ minHeight: "100vh", padding: "5rem 2rem 4rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.9rem", marginBottom: "2.5rem", fontWeight: 500 }}>
          ← Back to Home
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#f59e0b", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "0.75rem" }}>Legal</span>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#ede9ff", letterSpacing: "-0.03em", margin: "0 0 0.5rem 0" }}>🔒 Privacy Policy</h1>
          <p style={{ fontSize: "1rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>Last updated: January 2026</p>
        </div>

        <div style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.25)", borderRadius: "1rem", padding: "1.5rem", marginBottom: "3rem" }}>
          <p style={{ margin: 0, color: "rgba(220,210,255,0.85)", lineHeight: 1.7 }}>
            AI-EditPro ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>aieditpro.net</strong>.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>1. Information We Collect</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "rgba(220,210,255,0.85)", lineHeight: 1.8 }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>📋 Information You Provide</h3>
                <p style={{ margin: 0 }}>When you use our contact form or feedback feature, we collect:</p>
                <ul style={{ marginTop: "0.5rem", marginBottom: 0, paddingLeft: "1.5rem" }}>
                  <li>Name and email address</li>
                  <li>Subject and message content</li>
                  <li>Optional contact preferences</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>📊 Automatically Collected Information</h3>
                <p style={{ margin: 0 }}>We may automatically collect:</p>
                <ul style={{ marginTop: "0.5rem", marginBottom: 0, paddingLeft: "1.5rem" }}>
                  <li>Browser type and version</li>
                  <li>IP address (non-identifying)</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent</li>
                  <li>Referral source</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>📁 File Processing</h3>
                <p style={{ margin: 0 }}>Files uploaded for conversion are <strong>NOT stored</strong> on our servers. They are processed in-memory and deleted immediately after conversion. We do not collect, retain, or analyze file content.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>2. How We Use Your Information</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>We use collected information to:</p>
            <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Respond to your inquiries and feedback</li>
              <li>Improve and optimize our services</li>
              <li>Analyze usage patterns and user behavior</li>
              <li>Ensure security and prevent abuse</li>
              <li>Comply with legal obligations</li>
              <li>Send transactional emails (form responses)</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>3. Data Security</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              We implement industry-standard security measures including HTTPS encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>4. Cookie Policy</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              AI-EditPro uses cookies and similar technologies to enhance user experience. These cookies are used for:
            </p>
            <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li><strong>Essential cookies:</strong> Required for site functionality</li>
              <li><strong>Analytics cookies:</strong> Help us understand how users interact with our site</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, marginTop: "1rem", margin: 0 }}>
              You can manage cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>5. Third-Party Services</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              We may use third-party services for analytics, hosting, and email delivery. These services are bound by confidentiality agreements and are not permitted to use your information for other purposes.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>6. Your Rights & Choices</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>You have the right to:</p>
            <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, marginTop: "1rem", margin: 0 }}>
              To exercise these rights, contact us at our email provided on the Contact page.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>7. Children's Privacy</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              AI-EditPro is not intended for children under 13. We do not knowingly collect information from children. If we discover that a child has provided personal information, we will delete it immediately.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>8. Changes to This Privacy Policy</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              We may update this Privacy Policy periodically. Changes are effective immediately upon posting to the website. Your continued use of AI-EditPro indicates acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>9. Contact Us</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              If you have questions about this Privacy Policy or our privacy practices, please{" "}
              <Link href="/contact" style={{ color: "#a78bfa", textDecoration: "underline" }}>contact us</Link>.
            </p>
          </section>
        </div>

        <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "1rem", padding: "1.5rem", marginTop: "3rem" }}>
          <p style={{ margin: 0, color: "rgba(220,210,255,0.85)", lineHeight: 1.7 }}>
            <strong style={{ color: "#86efac" }}>✅ Your Trust Matters</strong><br />
            We take your privacy seriously. All information collected is handled with care and used only for the purposes outlined above.
          </p>
        </div>
      </div>
    </div>
  );
}
