export interface Tool {
  id: string;
  name: string;
  icon: string;
  desc: string;
  category: string;
  href: string;
  color: string;
}

export const tools: Tool[] = [
  { id: "qr-code-generator", name: "QR Code Generator", icon: "📱", desc: "Generate QR codes", category: "Generator", href: "/tools/qr-code-generator", color: "#ec4899" },
  { id: "image-compressor", name: "Image Compressor", icon: "🖼️", desc: "Reduce image size", category: "Utility", href: "/tools/image-compressor", color: "#f59e0b" },
  { id: "lorem-ipsum-generator", name: "Lorem Ipsum", icon: "📝", desc: "Generate placeholder text", category: "Generator", href: "/tools/lorem-ipsum-generator", color: "#06b6d4" },
  { id: "password-strength-checker", name: "Password Strength", icon: "🔒", desc: "Check password security", category: "Security", href: "/tools/password-strength-checker", color: "#10b981" },
  { id: "url-slug-generator", name: "URL Slug", icon: "🔗", desc: "Create SEO-friendly URLs", category: "SEO", href: "/tools/url-slug-generator", color: "#8b5cf6" },
  { id: "json-beautifier", name: "JSON Beautifier", icon: "🎨", desc: "Format & minify JSON", category: "Data", href: "/tools/json-beautifier", color: "#8b5cf6" },
  { id: "html-formatter", name: "HTML Formatter", icon: "🌐", desc: "Format & minify HTML", category: "Code", href: "/tools/html-formatter", color: "#06b6d4" },
  { id: "jwt-decoder", name: "JWT Decoder", icon: "🔐", desc: "Decode JWT tokens", category: "Security", href: "/tools/jwt-decoder", color: "#ec4899" },
  { id: "text-compare", name: "Text Diff", icon: "📋", desc: "Compare texts", category: "Utility", href: "/tools/text-compare", color: "#10b981" },
  { id: "json-compare", name: "JSON Compare", icon: "⚖️", desc: "Compare JSON objects", category: "Data", href: "/tools/json-compare", color: "#8b5cf6" },
  { id: "csv-formatter", name: "CSV Formatter", icon: "📊", desc: "Format CSV data", category: "Data", href: "/tools/csv-formatter", color: "#f59e0b" },
  { id: "base64", name: "Base64", icon: "🔤", desc: "Encode/decode Base64", category: "Encoding", href: "/tools/base64", color: "#ef4444" },
  { id: "url-encode", name: "URL Encoder", icon: "🔗", desc: "Encode/decode URLs", category: "Encoding", href: "/tools/url-encode", color: "#14b8a6" },
  { id: "regex", name: "Regex Tester", icon: "🔍", desc: "Test regex patterns", category: "Code", href: "/tools/regex", color: "#06b6d4" },
  { id: "uuid", name: "UUID Generator", icon: "🆔", desc: "Generate UUIDs", category: "Generator", href: "/tools/uuid", color: "#a855f7" },
  { id: "hash", name: "Hash Generator", icon: "🔑", desc: "Generate hashes", category: "Security", href: "/tools/hash", color: "#ec4899" },
  { id: "xml-formatter", name: "XML Formatter", icon: "📦", desc: "Format & minify XML", category: "Code", href: "/tools/xml-formatter", color: "#8b5cf6" },
  { id: "password-generator", name: "Password Generator", icon: "🔑", desc: "Generate secure passwords", category: "Security", href: "/tools/password-generator", color: "#10b981" },
  { id: "word-counter", name: "Word Counter", icon: "📝", desc: "Count words & characters", category: "Utility", href: "/tools/word-counter", color: "#f59e0b" },
  { id: "color-picker", name: "Color Picker", icon: "🎨", desc: "Pick & convert colors", category: "Design", href: "/tools/color-picker", color: "#06b6d4" },
  { id: "markdown-preview", name: "Markdown Preview", icon: "📄", desc: "Live markdown previewer", category: "Editor", href: "/tools/markdown-preview", color: "#f59e0b" },
  { id: "timestamp", name: "Timestamp", icon: "⏱️", desc: "Unix timestamp converter", category: "Utility", href: "/tools/timestamp", color: "#ec4899" },
];

export const categories = ["All", ...Array.from(new Set(tools.map(t => t.category))).sort()] as const;
