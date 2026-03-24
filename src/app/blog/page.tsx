"use client";

import Link from "next/link";

const articles = [
  {
    slug: "how-to-format-json-like-a-pro",
    title: "How to Format JSON Like a Pro: Complete Guide",
    desc: "Learn expert JSON formatting techniques, validation tips, and common mistakes to avoid. Master JSON beautification in minutes.",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Tutorial",
  },
  {
    slug: "top-15-free-developer-tools-2026",
    title: "Top 15 Free Developer Tools Every Programmer Needs in 2026",
    desc: "Discover the best free developer tools for coding, debugging, and productivity. Save time and write better code with these essential utilities.",
    date: "March 18, 2026",
    readTime: "8 min read",
    category: "Top Picks",
  },
  {
    slug: "password-security-best-practices",
    title: "Password Security Best Practices: What You Need to Know",
    desc: "Learn how to create unbreakable passwords, understand hashing, and protect your accounts from hackers.",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Security",
  },
  {
    slug: "base64-encoding-explained",
    title: "Base64 Encoding Explained: What It Is and When to Use It",
    desc: "Understanding Base64 encoding made simple. Learn how Base64 works and when to use it in your projects.",
    date: "March 12, 2026",
    readTime: "4 min read",
    category: "Tutorial",
  },
  {
    slug: "qr-code-guide-for-businesses",
    title: "QR Code Guide for Businesses: Everything You Need to Know",
    desc: "How to create effective QR codes for marketing, payments, and customer engagement. Best practices and examples.",
    date: "March 10, 2026",
    readTime: "7 min read",
    category: "Business",
  },
];

export default function BlogPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "1000px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem", color: "var(--text-primary)" }}>
        <span style={{ background: "var(--gradient-1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Blog</span> & Guides
      </h1>
      <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
        Tips, tutorials, and guides for developers. Learn how to use our tools and improve your coding skills.
      </p>

      <div style={{ display: "grid", gap: "1.5rem" }}>
        {articles.map(article => (
          <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: "none" }}>
            <article className="glass-card" style={{ padding: "1.5rem", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(139,92,246,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                <span style={{ background: "var(--primary)", color: "#fff", padding: "0.2rem 0.6rem", borderRadius: "9999px", fontSize: "0.7rem", fontWeight: 600 }}>{article.category}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{article.date}</span>
                <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>• {article.readTime}</span>
              </div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--text-primary)" }}>{article.title}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{article.desc}</p>
              <div style={{ marginTop: "1rem", color: "var(--primary-light)", fontWeight: 600, fontSize: "0.9rem" }}>Read More →</div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
