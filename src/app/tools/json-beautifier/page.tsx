"use client";

import { BackToToolsButton } from "../BackToToolsButton";
import JsonBeautifierClient from "./JsonBeautifierClient";
import Link from "next/link";

export default function JsonBeautifierPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "#f0f0ff" }}>
          JSON Beautifier - Format & Validate JSON Online
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem", maxWidth: "800px" }}>
          Format messy JSON, validate syntax errors, minify for production, and beautify with proper indentation.
          Copy-paste your JSON and get instant formatting with real-time validation.
        </p>

        {/* JSON Beautifier Tool */}
        <div style={{ marginBottom: "3rem" }}>
          <JsonBeautifierClient />
        </div>

        {/* How to Use Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            How to Format JSON
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>1</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Paste Your JSON</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Copy your JSON data and paste it into the input field. You can paste minified, single-line, or messy JSON.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>2</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Choose Mode</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>Select "Beautify" for pretty-printed, readable JSON with proper indentation, or "Minify" for compressed, single-line output.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "start", padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, #a78bfa, #e879f9)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>3</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>View & Copy</h3>
                <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6 }}>The formatted JSON appears instantly in the output panel. Click "Copy" to copy it to your clipboard and paste it into your code.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Key Features
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>✓</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Real-time Validation</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Instantly validates JSON syntax and highlights errors with detailed error messages showing line and column numbers.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>🎨</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Beautify & Minify</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Switch between pretty-printed (indented) and minified (compressed) JSON with one click. Perfect for development and production.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>📋</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>One-Click Copy</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Copy formatted JSON to clipboard with a single click. No manual selection needed, no formatting lost in copy.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>⚡</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Lightning Fast</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Processes JSON instantly as you type. No upload to servers, no waiting. Everything happens in your browser.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>🔒</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>100% Private</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Your JSON data never leaves your device. All processing happens client-side for maximum privacy and security.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>📝</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>Clean Formatting</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.6, fontSize: "0.95rem" }}>Beautified JSON uses 2-space indentation by default for optimal readability. Perfect for configuration files and debugging.</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Popular Use Cases
          </h2>
          <div style={{ display: "grid", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>💻 API Development & Testing</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Format API responses to read JSON data easily. Pretty-print response bodies from Postman, curl, or browser developer tools. Debug API issues by making messy JSON readable.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>⚙️ Configuration Files</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Clean up config.json, package.json, or any JSON configuration files. Make them readable for version control, code reviews, and documentation. Ensure proper indentation for team collaboration.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>🎓 Learning & Teaching</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Students and educators use JSON beautifier to understand JSON structure. Format examples from documentation, tutorials, or API specs. Visualize nested objects and arrays clearly.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>🚀 Production Deployment</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.8 }}>Minify JSON for production to reduce file size and improve loading speed. Create compact configuration files for deployment pipelines and reduce network payload.</p>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Related Tools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
            <Link href="/tools/json-compare" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔄</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>JSON Compare</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Compare two JSON files and find differences</p>
            </Link>
            <Link href="/tools/yaml-to-json" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🔀</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>YAML to JSON</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Convert YAML files to JSON format</p>
            </Link>
            <Link href="/tools/csv-formatter" style={{ textDecoration: "none", padding: "1.25rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)", transition: "all 0.3s", display: "block" }} onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")} onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>📊</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#f0f0ff" }}>CSV Formatter</h3>
              <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "0.9rem" }}>Format and validate CSV data</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "1.5rem", color: "#f0f0ff" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>What's the difference between beautify and minify?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}><strong>Beautify</strong> formats JSON with proper indentation (typically 2 spaces) and line breaks, making it easy to read. <strong>Minify</strong> removes all unnecessary whitespace to create a compact, single-line string that reduces file size for faster transmission.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Can this tool validate JSON?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Yes! The tool validates JSON syntax in real-time as you type or paste. If your JSON has errors, it will display a clear error message showing what's wrong and where (line and column number). This helps you quickly identify and fix syntax issues.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Is my JSON data secure?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>Absolutely. All processing happens locally in your browser using JavaScript. Your JSON data never leaves your device or gets sent to any server. This makes it completely private and secure, even for sensitive information like API keys or user data.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>Does beautifying JSON change its values?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>No! Beautifying only changes formatting (indentation and line breaks). It doesn't modify data values, keys, or structure. Minifying also only removes whitespace - the JSON remains functionally identical. The tool preserves all data integrity.</p>
            </div>
            <div style={{ padding: "1.5rem", background: "rgba(139,92,246,0.08)", borderRadius: "0.75rem", border: "1px solid rgba(168,124,246,0.25)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.75rem", color: "#f0f0ff" }}>What indentation does the beautifier use?</h3>
              <p style={{ color: "rgba(220,210,255,0.75)", lineHeight: 1.7 }}>By default, the beautifier uses 2 spaces for indentation, which is a common standard in JavaScript development. This makes JSON easy to read while not being too wide for typical screens. The spacing helps visualize nested object and array structures clearly.</p>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "JSON Beautifier",
              "applicationCategory": "DeveloperApplication",
              "description": "Free online JSON formatter, beautifier, and validator. Format JSON with proper indentation, validate syntax errors, and minify for production.",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "2100"
              }
            })
          }}
        />
      </div>
    </div>
  );
}