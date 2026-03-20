"use client";

import { useState } from "react";
import Link from "next/link";

const loremWords = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum", "odio", "dapibus",
  "ultricies", "vehicula", "vestibulum", "lectus", "mauris", "vulputate",
  "cursus", "morbi", "placerat", "facilisi", "interdum", "commodo", "ante",
  "habitasse", "platea", "dictumst", "mus", "rutrum", "tellus", "eget",
  "metus", "augue", "potenti", "nisl", "fermentum", "vestibulum", "sollicitudin"
];

const generateText = (type: "words" | "sentences" | "paragraphs", count: number): string => {
  if (type === "words") {
    const words = [];
    for (let i = 0; i < count; i++) {
      words.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
    }
    return words.join(" ");
  }
  
  if (type === "sentences") {
    const sentences = [];
    for (let i = 0; i < count; i++) {
      const sentenceWords = [];
      const wordCount = Math.floor(Math.random() * 10) + 8;
      for (let j = 0; j < wordCount; j++) {
        sentenceWords.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
      }
      const sentence = sentenceWords.join(" ");
      sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".");
    }
    return sentences.join(" ");
  }
  
  // paragraphs
  const paragraphs = [];
  for (let i = 0; i < count; i++) {
    const sentences = [];
    const sentenceCount = Math.floor(Math.random() * 4) + 4;
    for (let j = 0; j < sentenceCount; j++) {
      const sentenceWords = [];
      const wordCount = Math.floor(Math.random() * 10) + 8;
      for (let k = 0; k < wordCount; k++) {
        sentenceWords.push(loremWords[Math.floor(Math.random() * loremWords.length)]);
      }
      const sentence = sentenceWords.join(" ");
      sentences.push(sentence.charAt(0).toUpperCase() + sentence.slice(1) + ".");
    }
    paragraphs.push(sentences.join(" "));
  }
  return paragraphs.join("\n\n");
};

export default function LoremIpsumGenerator() {
  const [text, setText] = useState("");
  const [type, setType] = useState<"words" | "sentences" | "paragraphs">("paragraphs");
  const [count, setCount] = useState(3);

  const generate = () => {
    setText(generateText(type, count));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link href="/tools" style={{ color: "#a78bfa", textDecoration: "none", fontSize: "0.9rem" }}>
          ← Back to Tools
        </Link>

        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginTop: "1rem", marginBottom: "0.5rem", color: "#ede9ff" }}>
          Lorem Ipsum Generator
        </h1>
        <p style={{ color: "rgba(220,210,255,0.72)", marginBottom: "2rem", fontSize: "1.05rem" }}>
          Generate placeholder text for designs, mockups, and prototypes
        </p>

        <div style={{
          padding: "2rem",
          borderRadius: "1rem",
          background: "rgba(139,92,246,0.08)",
          border: "1px solid rgba(168,124,246,0.25)",
        }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.75rem" }}>
              Type
            </label>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {(["words", "sentences", "paragraphs"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "0.5rem",
                    border: "1px solid",
                    background: type === t ? "linear-gradient(135deg, #a78bfa, #e879f9)" : "rgba(255,255,255,0.05)",
                    borderColor: type === t ? "rgba(168,124,246,0.8)" : "rgba(168,124,246,0.2)",
                    color: type === t ? "#fff" : "#c4b5fd",
                    fontWeight: 600,
                    cursor: "pointer",
                    textTransform: "capitalize",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "#c4b5fd", marginBottom: "0.5rem" }}>
              {type === "words" ? "Number of Words" : type === "sentences" ? "Number of Sentences" : "Number of Paragraphs"}: {count}
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              style={{ width: "100%" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(220,210,255,0.5)", fontSize: "0.8rem" }}>
              <span>1</span>
              <span>20</span>
            </div>
          </div>

          <button
            onClick={generate}
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "0.75rem",
              border: "none",
              background: "linear-gradient(135deg, #a78bfa, #e879f9)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              marginBottom: "1rem",
            }}
          >
            Generate Lorem Ipsum
          </button>

          {text && (
            <div>
              <textarea
                value={text}
                readOnly
                style={{
                  width: "100%",
                  height: "300px",
                  padding: "1rem",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(30,27,75,0.6)",
                  color: "#ede9ff",
                  fontSize: "0.95rem",
                  resize: "none",
                  fontFamily: "Georgia, serif",
                  lineHeight: 1.8,
                }}
              />
              <button
                onClick={copyToClipboard}
                style={{
                  marginTop: "1rem",
                  padding: "0.75rem 2rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(168,124,246,0.3)",
                  background: "rgba(168,124,246,0.2)",
                  color: "#c4b5fd",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Copy to Clipboard
              </button>
            </div>
          )}
        </div>

        <div style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "1rem", background: "rgba(139,92,246,0.08)", border: "1px solid rgba(168,124,246,0.2)" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#ede9ff", marginBottom: "1rem" }}>Why use Lorem Ipsum?</h3>
          <ul style={{ color: "rgba(220,210,255,0.85)", lineHeight: 2, paddingLeft: "1.5rem" }}>
            <li>Focus on design, not content</li>
            <li>Industry standard placeholder text</li>
            <li>Perfect for wireframes and mockups</li>
            <li>Helps visualize final layouts</li>
            <li>Web designers love it!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
