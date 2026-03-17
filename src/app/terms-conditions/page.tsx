"use client";

import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div style={{ minHeight: "100vh", padding: "5rem 2rem 4rem", background: "transparent" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.9rem", marginBottom: "2.5rem", fontWeight: 500 }}>
          ← Back to Home
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#f59e0b", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "0.75rem" }}>Legal</span>
          <h1 style={{ fontSize: "3rem", fontWeight: 900, color: "#ede9ff", letterSpacing: "-0.03em", margin: "0 0 0.5rem 0" }}>⚖️ Terms & Conditions</h1>
          <p style={{ fontSize: "1rem", color: "rgba(220,210,255,0.75)", margin: 0 }}>Last updated: January 2026</p>
        </div>

        <div style={{ background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.25)", borderRadius: "1rem", padding: "1.5rem", marginBottom: "3rem" }}>
          <p style={{ margin: 0, color: "rgba(220,210,255,0.85)", lineHeight: 1.7 }}>
            These Terms & Conditions govern your use of <strong>aieditpro.net</strong> and all related services. By accessing or using AI-EditPro, you agree to be bound by these terms.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>1. Acceptance of Terms</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              By using AI-EditPro, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>2. Use License</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              We grant you a non-exclusive, non-transferable license to access and use AI-EditPro for personal, non-commercial purposes. You agree not to:
            </p>
            <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Reproduce, duplicate, or copy content without permission</li>
              <li>Attempt to decompile or reverse engineer our code</li>
              <li>Use our services for illegal or unauthorized purposes</li>
              <li>Interfere with or disrupt the functioning of our platform</li>
              <li>Transmit malware, viruses, or harmful code</li>
              <li>Harvest or scrape data from our platform</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>3. File Upload & Conversion</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "rgba(220,210,255,0.85)", lineHeight: 1.8 }}>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>📂 File Responsibility</h3>
                <p style={{ margin: 0 }}>
                  You are solely responsible for the files you upload. You confirm that you own or have authorization to upload and convert all files. We are not responsible for:
                </p>
                <ul style={{ marginTop: "0.5rem", marginBottom: 0, paddingLeft: "1.5rem" }}>
                  <li>Loss or corruption of your files</li>
                  <li>Infringement of intellectual property rights</li>
                  <li>Unauthorized access to your files</li>
                </ul>
              </div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#c4b5fd", marginBottom: "0.5rem" }}>🔒 Data Protection</h3>
                <p style={{ margin: 0 }}>
                  Files are processed in-memory and deleted immediately after conversion. We do not retain, backup, or analyze file content. However, we cannot guarantee security of files during transmission.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>4. Service Availability</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              AI-EditPro is provided "AS IS" without warranties. We strive for 99.9% uptime but do not guarantee continuous, uninterrupted access. We reserve the right to:
            </p>
            <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Perform maintenance or updates</li>
              <li>Modify or discontinue services</li>
              <li>Suspend access for violations</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>5. Limitation of Liability</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong> AI-EditPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of data, revenue, or profits. Our total liability is limited to the fees paid (if any) for our services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>6. Disclaimer of Warranties</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              AI-EditPro is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>7. Conversion Accuracy</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              While we strive for high-quality conversions (99%+ accuracy), we do not guarantee perfect conversion results. Formatting, fonts, and complex structures may vary between file formats. You are responsible for reviewing converted files.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>8. Intellectual Property</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              All content, design, and technology used in AI-EditPro are owned by or licensed to us. You may not reproduce, distribute, or transmit any content without permission. This includes all logos, text, images, and code.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>9. User Conduct</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              You agree to use AI-EditPro responsibly and lawfully. Prohibited activities include:
            </p>
            <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>Harassment or abuse of any kind</li>
              <li>Sending spam or malware</li>
              <li>Excessive resource consumption</li>
              <li>Illegal activities or content</li>
              <li>Unauthorized access or hacking</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>10. Termination</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              We reserve the right to terminate or suspend your access immediately, without notice, for violations of these terms or illegal activity.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>11. Third-Party Links</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              AI-EditPro may contain links to third-party websites. We are not responsible for their content, accuracy, or practices. Your use of third-party sites is subject to their terms and privacy policies.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>12. Modifications to Terms</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              We may modify these Terms & Conditions at any time. Changes are effective immediately upon posting. Your continued use indicates acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>13. Governing Law</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              These Terms & Conditions are governed by and construed in accordance with applicable laws. Any disputes shall be resolved in the appropriate courts.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#f0f0ff", marginBottom: "1rem" }}>14. Contact Us</h2>
            <p style={{ color: "rgba(220,210,255,0.85)", lineHeight: 1.8, margin: 0 }}>
              For questions or concerns regarding these Terms & Conditions, please{" "}
              <Link href="/contact" style={{ color: "#a78bfa", textDecoration: "underline" }}>contact us</Link>.
            </p>
          </section>
        </div>

        <div style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "1rem", padding: "1.5rem", marginTop: "3rem" }}>
          <p style={{ margin: 0, color: "rgba(220,210,255,0.85)", lineHeight: 1.7 }}>
            <strong style={{ color: "#86efac" }}>✅ Fair Use Policy</strong><br />
            We believe in fair access for all users. These terms ensure a secure, reliable, and trustworthy platform for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
