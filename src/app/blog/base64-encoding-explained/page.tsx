"use client";

import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const article = {
    slug: "base64-encoding-explained",
    title: "Base64 Encoding Explained: What It Is and When to Use It",
    desc: "Understanding Base64 encoding made simple. Learn how Base64 works and when to use it in your projects.",
    date: "March 12, 2026",
    readTime: "4 min read",
    category: "Tutorial",
  };

  return (
    <>
      <Head>
        <title>{article.title} | AI-EditPro Blog</title>
        < meta name="description" content={article.desc} />
      </Head>
      <div style={{ minHeight: "100vh", padding: "8rem 2rem 4rem", maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/blog" style={{ color: "var(--primary)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
          ← Back to Blog
        </Link>
        
        <article>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span style={{ background: "var(--primary)", color: "#fff", padding: "0.2rem 0.6rem", borderRadius: "9999px", fontSize: "0.75rem", fontWeight: 600 }}>{article.category}</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>{article.date}</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>• {article.readTime}</span>
          </div>
          
          <h1 style={{ fontSize: "2.5rem", fontWeight: 900, marginBottom: "1.5rem", color: "var(--text-primary)" }}>{article.title}</h1>
          
          <div style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "1.1rem" }}>
            <p style={{ marginBottom: "1.5rem" }}>If you've ever seen a string of random letters and numbers that looks like gibberish but isn't quite, you've probably encountered Base64 encoding. But what exactly is it, and why does it exist?</p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>What is Base64?</h2>
            <p style={{ marginBottom: "1rem" }}>Base64 is a way of converting binary data (like images, files, or any sequence of bytes) into ASCII text format. It uses 64 different characters (A-Z, a-z, 0-9, +, /) to represent binary data in a printable string format.</p>
            <p style={{ marginBottom: "1.5rem" }}>The "64" comes from the 64 available characters in the Base64 alphabet.</p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>How Does Base64 Work?</h2>
            <p style={{ marginBottom: "1rem" }}>Here's a simplified breakdown:</p>
            <ol style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>Take your binary data (8 bits per byte)</li>
              <li style={{ marginBottom: "0.75rem" }}>Group the bits into sets of 6 bits (since 2^6 = 64)</li>
              <li style={{ marginBottom: "0.75rem" }}>Convert each 6-bit group to a Base64 character</li>
              <li style={{ marginBottom: "0.75rem" }}>Add padding (=) if needed to make the output a multiple of 4 characters</li>
            </ol>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Try It Yourself</h2>
            <p style={{ marginBottom: "1.5rem" }}>Use our <Link href="/tools/base64" style={{ color: "var(--primary)" }}>Base64 Encoder/Decoder</Link> to convert text to Base64 and back.</p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Real-World Uses of Base64</h2>
            <p style={{ marginBottom: "1rem" }}><strong>1. Email Attachments (MIME)</strong></p>
            <p style={{ marginBottom: "1rem" }}>Email was designed for plain text. Base64 allows binary attachments (images, documents) to be sent via email.</p>
            
            <p style={{ marginBottom: "1rem" }}><strong>2. Data URLs</strong></p>
            <p style={{ marginBottom: "1rem" }}>Embed small images directly in HTML/CSS: <code style={{ background: "var(--bg-secondary)", padding: "0.2rem 0.4rem", borderRadius: "4px" }}>data:image/png;base64,iVBOR...</code></p>
            
            <p style={{ marginBottom: "1rem" }}><strong>3. API Responses</strong></p>
            <p style={{ marginBottom: "1rem" }}>Many APIs return binary data (like images or files) as Base64 strings in JSON responses.</p>
            
            <p style={{ marginBottom: "1.5rem" }}><strong>4. Storing Binary in JSON</strong></p>
            <p style={{ marginBottom: "1.5rem" }}>JSON can't natively represent binary data, so Base64 is often used to embed files in JSON.</p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Base64 vs. Other Encodings</h2>
            <p style={{ marginBottom: "1rem" }}><strong>It's NOT encryption:</strong> Base64 is not a security measure. It's trivially reversible and provides no privacy.</p>
            <p style={{ marginBottom: "1.5rem" }}><strong>Size increase:</strong> Base64 increases data size by about 33%. Three bytes become four characters.</p>
            
            <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "12px", marginTop: "2rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Quick Example</h3>
              <p style={{ marginBottom: "0.5rem" }}><strong>Original:</strong> Hi</p>
              <p style={{ marginBottom: "0.5rem" }}><strong>Base64:</strong> SGk=</p>
              <p style={{ margin: 0 }}><strong>How:</strong> H=72=01001000, i=105=01101001 → SGk=</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
