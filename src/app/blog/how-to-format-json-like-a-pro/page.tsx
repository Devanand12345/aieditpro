"use client";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const article = {
    slug: "how-to-format-json-like-a-pro",
    title: "How to Format JSON Like a Pro: Complete Guide",
    desc: "Learn expert JSON formatting techniques, validation tips, and common mistakes to avoid. Master JSON beautification in minutes.",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Tutorial",
  };

  return (
    <>
      <Head>
        <title>{article.title} | AI-EditPro Blog</title>
        <meta name="description" content={article.desc} />
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
            <p style={{ marginBottom: "1.5rem" }}>JSON (JavaScript Object Notation) is the backbone of modern web development. Whether you're building APIs, configuring applications, or exchanging data between services, chances are you'll work with JSON regularly. But malformed or poorly formatted JSON can bring your entire application to a screeching halt.</p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>What is JSON Formatting?</h2>
            <p style={{ marginBottom: "1.5rem" }}>JSON formatting is the process of arranging JSON data in a clean, readable structure. This includes proper indentation, line breaks, and spacing. While computers can parse minified JSON just fine, humans need properly formatted JSON to understand and work with it efficiently.</p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Why is Proper JSON Formatting Important?</h2>
            <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}><strong>Debugging:</strong> Formatted JSON makes it easy to spot errors and trace data flow</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Collaboration:</strong> Team members can read and review code faster</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Version Control:</strong> Diff tools work better with formatted files</li>
              <li style={{ marginBottom: "0.75rem" }}><strong>Learning:</strong> Beginners can understand data structures more easily</li>
            </ul>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Common JSON Mistakes to Avoid</h2>
            <p style={{ marginBottom: "1rem" }}><strong>1. Trailing Commas:</strong> Unlike JavaScript arrays, JSON doesn't allow trailing commas:</p>
            <pre style={{ background: "var(--bg-secondary)", padding: "1rem", borderRadius: "8px", overflow: "auto", marginBottom: "1.5rem" }}>{`// Wrong
{"name": "John",}

// Correct
{"name": "John"}`}</pre>
            
            <p style={{ marginBottom: "1rem" }}><strong>2. Single Quotes:</strong> JSON requires double quotes for keys and string values:</p>
            <pre style={{ background: "var(--bg-secondary)", padding: "1rem", borderRadius: "8px", overflow: "auto", marginBottom: "1.5rem" }}>{`// Wrong
{'name': 'John'}

// Correct
{"name": "John"}`}</pre>
            
            <p style={{ marginBottom: "1.5rem" }}><strong>3. Comments:</strong> JSON doesn't support comments. Use a different format if you need metadata.</p>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Best Practices for JSON Formatting</h2>
            <ol style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
              <li style={{ marginBottom: "0.75rem" }}>Use consistent indentation (2 or 4 spaces)</li>
              <li style={{ marginBottom: "0.75rem" }}>Keep line length reasonable for readability</li>
              <li style={{ marginBottom: "0.75rem" }}>Sort keys alphabetically when appropriate</li>
              <li style={{ marginBottom: "0.75rem" }}>Use a linter or formatter tool</li>
              <li style={{ marginBottom: "0.75rem" }}>Always validate before using</li>
            </ol>
            
            <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginTop: "2.5rem", marginBottom: "1rem", color: "var(--text-primary)" }}>Try Our JSON Formatter</h2>
            <p style={{ marginBottom: "1rem" }}>Don't waste time manually formatting JSON. Use our free <Link href="/tools/json-beautifier" style={{ color: "var(--primary)" }}>JSON Beautifier</Link> to instantly format, validate, and minify your JSON data.</p>
            
            <div style={{ background: "var(--bg-secondary)", padding: "1.5rem", borderRadius: "12px", marginTop: "2rem" }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>Quick Checklist</h3>
              <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
                <li>✓ All keys are in double quotes</li>
                <li>✓ No trailing commas</li>
                <li>✓ No single quotes used</li>
                <li>✓ No comments in the file</li>
                <li>✓ Valid JSON syntax</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
