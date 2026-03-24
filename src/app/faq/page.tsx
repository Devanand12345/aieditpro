import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | AI-EditPro",
  description: "Frequently asked questions about AI-EditPro developer tools. Learn how to use QR codes, JSON formatter, password generator, and more. Get answers to common questions.",
  keywords: ["faq", "frequently asked questions", "help", "support", "how to use", "questions", "answers", "developer tools help"],
  alternates: { canonical: "https://aieditpro.net/faq" },
};

const faqs = [
  {
    q: "Are all tools really free?",
    a: "Yes! All 40+ tools on AI-EditPro are 100% free to use. No signup required, no hidden fees, no premium version. We believe powerful tools should be accessible to everyone.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely! All processing happens in your browser. Your data never leaves your device - it is processed locally. We don't store, collect, or transmit any of your data to our servers.",
  },
  {
    q: "Do I need to create an account?",
    a: "No! All our tools work instantly without any registration. Just visit the tool you need and start using it immediately.",
  },
  {
    q: "What is a QR Code Generator?",
    a: "A QR Code Generator creates scannable QR codes from text, URLs, WiFi credentials, contact information, and more. Our free QR code generator lets you create, customize, and download QR codes instantly.",
  },
  {
    q: "How does JSON Beautifier work?",
    a: "Our JSON Beautifier formats messy, minified, or unformatted JSON into readable, indented code. It also validates JSON syntax and can minify JSON for production use.",
  },
  {
    q: "Is the Password Generator secure?",
    a: "Yes! Our password generator creates cryptographically secure random passwords using your browser's built-in random number generator. Passwords are generated locally and never transmitted anywhere.",
  },
  {
    q: "What is Base64 encoding?",
    a: "Base64 is a way to encode binary data (like images) into ASCII text format. It's commonly used for email attachments, API data transfer, and storing complex data in text formats.",
  },
  {
    q: "How do I use the Cron Generator?",
    a: "Our Cron Generator helps you create cron expressions for scheduling tasks. Choose from common presets or manually set minute, hour, day, month, and weekday values. It generates valid cron syntax instantly.",
  },
  {
    q: "Can I use these tools on mobile?",
    a: "Yes! All our tools are fully responsive and work great on smartphones, tablets, and desktops. Just visit the site in your mobile browser.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach us through our contact form or email us directly. We typically respond within 24-48 hours.",
  },
  {
    q: "Do you offer API access?",
    a: "Currently, our tools are available through our website only. API access may be offered in the future.",
  },
  {
    q: "How often are new tools added?",
    a: "We regularly add new tools based on user feedback and demand. Follow us on social media to stay updated on new releases.",
  },
];

export default function FAQPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem", color: "var(--text-primary)" }}>
        Frequently Asked <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Questions</span>
      </h1>
      <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
        Everything you need to know about AI-EditPro developer tools.
      </p>

      <div style={{ display: "grid", gap: "1rem" }}>
        {faqs.map((faq, i) => (
          <div key={i} className="glass-card" style={{ padding: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
              ❓ {faq.q}
            </h2>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ padding: "2rem", marginTop: "2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Still have questions?</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem" }}>Can't find what you're looking for? Reach out to us!</p>
        <a href="/contact" style={{ textDecoration: "none" }}>
          <button className="btn-glow" style={{ fontSize: "1rem", padding: "0.8rem 2rem" }}>Contact Us</button>
        </a>
      </div>
    </div>
  );
}
