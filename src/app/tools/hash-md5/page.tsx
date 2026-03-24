"use client";

import { useState } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

function md5(text: string): string {
  const rotate = (n: number, s: number) => (n << s) | (n >>> (32 - s));
  const add = (n: number, t: number) => (n + t) | 0;
  const hex = (n: number) => n.toString(16).padStart(8, "0");
  
  const x = encodeURI(text).replace(/%([0-9A-F]{2})/g, (_, p) => String.fromCharCode(parseInt(p, 16)));
  const len = x.length;
  const a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
  
  let k = Math.ceil((len + 8) / 64) * 16;
  const M: number[] = Array(k).fill(0);
  for (let i = 0; i < len; i++) M[i >> 2] |= x.charCodeAt(i) << ((i % 4) * 8);
  M[len >> 2] |= 0x80 << ((len % 4) * 8);
  M[k - 2] = len * 8;

  let A = a, B = b, C = c, D = d;
  const S = [7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21];
  const K = Array(64).fill(0).map((_, i) => Math.floor(Math.abs(Math.sin(i + 1)) * 0x100000000));

  for (let i = 0; i < k; i += 16) {
    const [F0, F1, F2, F3] = [A, B, C, D];
    const ff = (a: number, b: number, c: number, d: number, x: number, s: number, t: number) => add(rotate(add(a, add(add(b & c, ~b & d), x)), t), s);
    const gg = (a: number, b: number, c: number, d: number, x: number, s: number, t: number) => add(rotate(add(a, add(add(b & d, c & ~d), x)), t), s);
    const hh = (a: number, b: number, c: number, d: number, x: number, s: number, t: number) => add(rotate(add(a, add(b ^ c ^ d, x)), t), s);
    const ii = (a: number, b: number, c: number, d: number, x: number, s: number, t: number) => add(rotate(add(a, add(c ^ (b | ~d), x)), t), s);

    A = ff(A, B, C, D, M[i], S[0], K[0]); D = ff(D, A, B, C, M[i + 1], S[1], K[1]); C = ff(C, D, A, B, M[i + 2], S[2], K[2]); B = ff(B, C, D, A, M[i + 3], S[3], K[3]);
    A = ff(A, B, C, D, M[i + 4], S[4], K[4]); D = ff(D, A, B, C, M[i + 5], S[5], K[5]); C = ff(C, D, A, B, M[i + 6], S[6], K[6]); B = ff(B, C, D, A, M[i + 7], S[7], K[7]);
    A = ff(A, B, C, D, M[i + 8], S[8], K[8]); D = ff(D, A, B, C, M[i + 9], S[9], K[9]); C = ff(C, D, A, B, M[i + 10], S[10], K[10]); B = ff(B, C, D, A, M[i + 11], S[11], K[11]);
    A = ff(A, B, C, D, M[i + 12], S[12], K[12]); D = ff(D, A, B, C, M[i + 13], S[13], K[13]); C = ff(C, D, A, B, M[i + 14], S[14], K[14]); B = ff(B, C, D, A, M[i + 15], S[15], K[15]);

    A = gg(A, B, C, D, M[i + 1], S[16], K[16]); D = gg(D, A, B, C, M[i + 6], S[17], K[17]); C = gg(C, D, A, B, M[i + 11], S[18], K[18]); B = gg(B, C, D, A, M[i], S[19], K[19]);
    A = gg(A, B, C, D, M[i + 5], S[20], K[20]); D = gg(D, A, B, C, M[i + 10], S[21], K[21]); C = gg(C, D, A, B, M[i + 15], S[22], K[22]); B = gg(B, C, D, A, M[i + 4], S[23], K[23]);
    A = gg(A, B, C, D, M[i + 9], S[24], K[24]); D = gg(D, A, B, C, M[i + 14], S[25], K[25]); C = gg(C, D, A, B, M[i + 3], S[26], K[26]); B = gg(B, C, D, A, M[i + 8], S[27], K[27]);
    A = gg(A, B, C, D, M[i + 13], S[28], K[28]); D = gg(D, A, B, C, M[i + 2], S[29], K[29]); C = gg(C, D, A, B, M[i + 7], S[30], K[30]); B = gg(B, C, D, A, M[i + 12], S[31], K[31]);

    A = hh(A, B, C, D, M[i + 5], S[32], K[32]); D = hh(D, A, B, C, M[i + 8], S[33], K[33]); C = hh(C, D, A, B, M[i + 11], S[34], K[34]); B = hh(B, C, D, A, M[i + 14], S[35], K[35]);
    A = hh(A, B, C, D, M[i + 1], S[36], K[36]); D = hh(D, A, B, C, M[i + 4], S[37], K[37]); C = hh(C, D, A, B, M[i + 7], S[38], K[38]); B = hh(B, C, D, A, M[i + 10], S[39], K[39]);
    A = hh(A, B, C, D, M[i + 13], S[40], K[40]); D = hh(D, A, B, C, M[i + 0], S[41], K[41]); C = hh(C, D, A, B, M[i + 3], S[42], K[42]); B = hh(B, C, D, A, M[i + 6], S[43], K[43]);
    A = hh(A, B, C, D, M[i + 9], S[44], K[44]); D = hh(D, A, B, C, M[i + 12], S[45], K[45]); C = hh(C, D, A, B, M[i + 15], S[46], K[46]); B = hh(B, C, D, A, M[i + 2], S[47], K[47]);

    A = ii(A, B, C, D, M[i], S[48], K[48]); D = ii(D, A, B, C, M[i + 7], S[49], K[49]); C = ii(C, D, A, B, M[i + 14], S[50], K[50]); B = ii(B, C, D, A, M[i + 5], S[51], K[51]);
    A = ii(A, B, C, D, M[i + 12], S[52], K[52]); D = ii(D, A, B, C, M[i + 3], S[53], K[53]); C = ii(C, D, A, B, M[i + 10], S[54], K[54]); B = ii(B, C, D, A, M[i + 1], S[55], K[55]);
    A = ii(A, B, C, D, M[i + 8], S[56], K[56]); D = ii(D, A, B, C, M[i + 15], S[57], K[57]); C = ii(C, D, A, B, M[i + 6], S[58], K[58]); B = ii(B, C, D, A, M[i + 13], S[59], K[59]);
    A = ii(A, B, C, D, M[i + 4], S[60], K[60]); D = ii(D, A, B, C, M[i + 11], S[61], K[61]); C = ii(C, D, A, B, M[i + 2], S[62], K[62]); B = ii(B, C, D, A, M[i + 9], S[63], K[63]);

    A = add(A, F0); B = add(B, F1); C = add(C, F2); D = add(D, F3);
  }
  return hex(A) + hex(B) + hex(C) + hex(D);
}

export default function HashMD5Page() {
  const [input, setInput] = useState("");
  const [hash, setHash] = useState("");

  const generate = () => {
    if (!input) return;
    setHash(md5(input));
  };

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>MD5 Hash Generator</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Generate MD5 checksums for text and files</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: "var(--primary-light)", marginBottom: "0.5rem" }}>Enter Text</label>
            <textarea value={input} onChange={e => setInput(e.target.value)} placeholder="Enter text to hash..." style={{ ...textareaStyle, minHeight: "100px" }} />
          </div>
          <button onClick={generate} className="btn-glow" style={{ width: "100%", marginBottom: "1rem" }}>Generate MD5 Hash</button>
          {hash && (
            <>
              <div style={{ padding: "1rem", background: "var(--input-bg)", borderRadius: "0.75rem", fontFamily: "monospace", fontSize: "0.9rem", color: "var(--text-primary)", wordBreak: "break-all", marginBottom: "0.75rem" }}>{hash}</div>
              <button onClick={() => navigator.clipboard.writeText(hash)} style={btnStyle}>📋 Copy Hash</button>
            </>
          )}
        </div>
        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>MD5 Uses</h2>
          <div style={{ display: "grid", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            {["Verify file integrity", "Password storage (legacy)", "Create checksums", "Digital signatures"].map((u, i) => (
              <div key={i} style={{ padding: "0.75rem", background: "var(--card-bg)", borderRadius: "0.5rem" }}>✓ {u}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const textareaStyle = { width: "100%", padding: "1rem", borderRadius: "0.75rem", border: "1px solid var(--input-border)", background: "var(--input-bg)", color: "var(--text-primary)", fontSize: "1rem", resize: "vertical" as const };
const btnStyle = { padding: "0.75rem 1.5rem", borderRadius: "0.5rem", border: "1px solid var(--input-border)", background: "var(--card-bg)", color: "var(--primary-light)", cursor: "pointer", fontWeight: 600, fontSize: "0.95rem" };
