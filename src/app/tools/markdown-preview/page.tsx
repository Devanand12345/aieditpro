"use client";
import { useState } from "react";
import Link from "next/link";

const SAMPLE = `# Welcome to Markdown Preview

## Features
- **Bold text** and *italic text*
- \`inline code\` and code blocks
- [Links](https://AI-EditPro.net)
- > Blockquotes
- Ordered and unordered lists

## Code Block
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

## Table
| Tool | Category | Free |
|------|----------|------|
| JSON Beautifier | Data | ✅ |
| PDF Converter | Files | ✅ |
| Hash Generator | Security | ✅ |

---

Made with ❤️ on **AI-EditPro**
`;

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/^\> (.*$)/gm, "<blockquote>$1</blockquote>")
    .replace(/^\- (.*$)/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
    .replace(/^\d+\. (.*$)/gm, "<li>$1</li>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split("|").filter(c => c.trim());
      if (cells.every(c => /^[-:]+$/.test(c.trim()))) return "";
      return "<tr>" + cells.map(c => `<td>${c.trim()}</td>`).join("") + "</tr>";
    })
    .replace(/(<tr>.*<\/tr>)/gs, "<table>$1</table>")
    .replace(/^---$/gm, "<hr>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[h|u|o|l|b|p|c|t|a|e])/gm, "");
}

export default function MarkdownPreview() {
  const [md, setMd] = useState(SAMPLE);
  const [view, setView] = useState<"split" | "edit" | "preview">("split");

  const html = markdownToHtml(md);

  return (
    <div style={{ minHeight: "100vh", padding: "5rem 1.5rem 4rem", background: "transparent" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          ← Back to Tools
        </Link>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#f59e0b", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "0.75rem" }}>Editor</span>
            <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, color: "#ede9ff", letterSpacing: "-0.03em", margin: 0 }}>📄 Markdown Preview</h1>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {(["split", "edit", "preview"] as const).map(v => (
              <button key={v} onClick={() => setView(v)} style={{ padding: "0.55rem 1rem", background: view === v ? "rgba(139,92,246,0.25)" : "rgba(255,255,255,0.05)", border: `1px solid ${view === v ? "rgba(139,92,246,0.55)" : "rgba(255,255,255,0.1)"}`, borderRadius: "0.6rem", color: view === v ? "#c4b5fd" : "rgba(220,210,255,0.6)", cursor: "pointer", fontSize: "0.82rem", fontWeight: 600, textTransform: "capitalize" as const }}>
                {v}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: view === "split" ? "1fr 1fr" : "1fr", gap: "1.5rem", height: "65vh" }}>
          {(view === "split" || view === "edit") && (
            <textarea value={md} onChange={e => setMd(e.target.value)}
              style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.25)", borderRadius: "1rem", padding: "1.25rem", color: "#ede9ff", fontSize: "0.92rem", lineHeight: 1.7, resize: "none", outline: "none", fontFamily: "monospace" }} />
          )}
          {(view === "split" || view === "preview") && (
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.25)", borderRadius: "1rem", padding: "1.75rem 2rem", overflowY: "auto", color: "#ede9ff", fontSize: "0.95rem", lineHeight: 1.75 }}
              dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </div>
      </div>

      <style>{`
        div[dangerouslySetInnerHTML] h1 { font-size: 1.8rem; font-weight: 800; color: #f0f0ff; margin-bottom: 0.75rem; border-bottom: 1px solid rgba(168,124,246,0.3); padding-bottom: 0.5rem; }
        div[dangerouslySetInnerHTML] h2 { font-size: 1.4rem; font-weight: 700; color: #e0d9ff; margin: 1.5rem 0 0.75rem; }
        div[dangerouslySetInnerHTML] h3 { font-size: 1.1rem; font-weight: 700; color: #c4b5fd; margin: 1rem 0 0.5rem; }
        div[dangerouslySetInnerHTML] code { background: rgba(139,92,246,0.15); border: 1px solid rgba(139,92,246,0.3); padding: 0.1rem 0.4rem; border-radius: 0.3rem; font-family: monospace; font-size: 0.88em; color: #c4b5fd; }
        div[dangerouslySetInnerHTML] pre { background: rgba(0,0,0,0.35); border: 1px solid rgba(139,92,246,0.2); border-radius: 0.75rem; padding: 1.25rem; overflow-x: auto; margin: 1rem 0; }
        div[dangerouslySetInnerHTML] pre code { background: none; border: none; padding: 0; }
        div[dangerouslySetInnerHTML] blockquote { border-left: 3px solid #a78bfa; padding-left: 1rem; margin: 1rem 0; color: rgba(220,210,255,0.7); font-style: italic; }
        div[dangerouslySetInnerHTML] ul { padding-left: 1.5rem; margin: 0.75rem 0; }
        div[dangerouslySetInnerHTML] li { margin-bottom: 0.4rem; }
        div[dangerouslySetInnerHTML] a { color: #a78bfa; text-decoration: underline; }
        div[dangerouslySetInnerHTML] table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
        div[dangerouslySetInnerHTML] td { padding: 0.65rem 1rem; border: 1px solid rgba(168,124,246,0.2); font-size: 0.9rem; }
        div[dangerouslySetInnerHTML] tr:first-child td { background: rgba(139,92,246,0.12); font-weight: 700; }
        div[dangerouslySetInnerHTML] hr { border: none; border-top: 1px solid rgba(168,124,246,0.3); margin: 1.5rem 0; }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; height: auto !important; }
        }
      `}</style>
    </div>
  );
}
