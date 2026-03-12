"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpace = text.replace(/\s/g, "").length;
    const sentences = text.trim() ? text.split(/[.!?]+/).filter(s => s.trim()).length : 0;
    const paragraphs = text.trim() ? text.split(/\n\s*\n/).filter(p => p.trim()).length : 0;
    const lines = text.split("\n").length;
    const readTime = Math.max(1, Math.ceil(words / 200));
    const speakTime = Math.max(1, Math.ceil(words / 130));

    // Top words
    const wordFreq: Record<string, number> = {};
    if (text.trim()) {
      text.toLowerCase().match(/\b[a-z]{3,}\b/g)?.forEach(w => {
        const stops = new Set(["the","and","for","are","but","not","you","all","any","can","had","her","was","one","our","out","day","get","has","him","his","how","man","new","now","old","see","two","way","who","its","let","put","say","she","too","use"]);
        if (!stops.has(w)) wordFreq[w] = (wordFreq[w] || 0) + 1;
      });
    }
    const topWords = Object.entries(wordFreq).sort((a, b) => b[1] - a[1]).slice(0, 8);
    return { words, chars, charsNoSpace, sentences, paragraphs, lines, readTime, speakTime, topWords };
  }, [text]);

  const statCards = [
    { label: "Words", value: stats.words, color: "#a78bfa" },
    { label: "Characters", value: stats.chars, color: "#06b6d4" },
    { label: "Chars (no spaces)", value: stats.charsNoSpace, color: "#ec4899" },
    { label: "Sentences", value: stats.sentences, color: "#10b981" },
    { label: "Paragraphs", value: stats.paragraphs, color: "#f59e0b" },
    { label: "Lines", value: stats.lines, color: "#8b5cf6" },
    { label: "Read Time (min)", value: stats.readTime, color: "#14b8a6" },
    { label: "Speak Time (min)", value: stats.speakTime, color: "#ef4444" },
  ];

  return (
    <div style={{ minHeight: "100vh", padding: "5rem 1.5rem 4rem", background: "linear-gradient(160deg,#0f172a 0%,#1e1b4b 55%,#0f172a 100%)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Link href="/tools" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(220,210,255,0.65)", textDecoration: "none", fontSize: "0.85rem", marginBottom: "2rem", fontWeight: 500 }}>
          ← Back to Tools
        </Link>

        <div style={{ marginBottom: "2rem" }}>
          <span style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#10b981", background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", padding: "0.28rem 0.85rem", borderRadius: "9999px", marginBottom: "1rem" }}>Utility</span>
          <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.5rem)", fontWeight: 800, color: "#ede9ff", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>📝 Word Counter</h1>
          <p style={{ color: "rgba(220,210,255,0.7)", fontSize: "1rem", lineHeight: 1.6 }}>Count words, characters, sentences, paragraphs. Get reading &amp; speaking time estimates.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "1.5rem" }}>
          <div>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Paste or type your text here..."
              style={{ width: "100%", minHeight: "400px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.25)", borderRadius: "1rem", padding: "1.25rem", color: "#ede9ff", fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical" as const, outline: "none", fontFamily: "inherit" }}
            />
            {text && (
              <button onClick={() => setText("")} style={{ marginTop: "0.75rem", padding: "0.6rem 1.25rem", background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: "0.6rem", color: "#fca5a5", cursor: "pointer", fontSize: "0.85rem", fontWeight: 600 }}>
                Clear Text
              </button>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.75rem" }}>
            {statCards.map(s => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${s.color}30`, borderRadius: "0.85rem", padding: "1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.82rem", color: "rgba(220,210,255,0.7)", fontWeight: 500 }}>{s.label}</span>
                <span style={{ fontSize: "1.2rem", fontWeight: 800, color: s.color }}>{s.value.toLocaleString()}</span>
              </div>
            ))}

            {stats.topWords.length > 0 && (
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(168,124,246,0.2)", borderRadius: "0.85rem", padding: "1rem 1.25rem" }}>
                <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "rgba(220,210,255,0.6)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "0.75rem" }}>Top Keywords</div>
                {stats.topWords.map(([word, freq]) => (
                  <div key={word} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "#c4b5fd" }}>{word}</span>
                    <span style={{ fontSize: "0.85rem", color: "rgba(220,210,255,0.5)", fontWeight: 600 }}>{freq}x</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 340px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
