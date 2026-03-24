export interface Tool {
  id: string;
  name: string;
  icon: string;
  desc: string;
  category: string;
  href: string;
  color: string;
  popular?: boolean;
}

export const tools: Tool[] = [
  { id: "json-beautifier", name: "JSON Beautifier", icon: "🎨", desc: "Format, minify & validate JSON instantly", category: "Data", href: "/tools/json-beautifier", color: "#8b5cf6", popular: true },
  { id: "base64", name: "Base64 Encoder", icon: "🔤", desc: "Encode & decode Base64 strings", category: "Encoding", href: "/tools/base64", color: "#ef4444", popular: true },
  { id: "hash", name: "SHA-256 Hash", icon: "🔑", desc: "Generate secure SHA-256 hashes", category: "Security", href: "/tools/hash", color: "#ec4899", popular: true },
  { id: "jwt-decoder", name: "JWT Decoder", icon: "🔐", desc: "Decode & inspect JWT tokens", category: "Security", href: "/tools/jwt-decoder", color: "#a855f7", popular: true },
  { id: "password-generator", name: "Password Generator", icon: "🔑", desc: "Generate strong secure passwords", category: "Security", href: "/tools/password-generator", color: "#10b981", popular: true },
  { id: "qr-code-generator", name: "QR Code Generator", icon: "📱", desc: "Create QR codes for any content", category: "Generator", href: "/tools/qr-code-generator", color: "#ec4899", popular: true },
  { id: "regex", name: "Regex Tester", icon: "🔍", desc: "Test & debug regex patterns", category: "Code", href: "/tools/regex", color: "#06b6d4", popular: true },
  { id: "uuid", name: "UUID Generator", icon: "🆔", desc: "Generate UUID v4 identifiers", category: "Generator", href: "/tools/uuid", color: "#a855f7" },
  { id: "image-compressor", name: "Image Compressor", icon: "🖼️", desc: "Compress images without quality loss", category: "Utility", href: "/tools/image-compressor", color: "#f59e0b" },
  { id: "url-encode", name: "URL Encoder", icon: "🔗", desc: "Encode URLs for safe transmission", category: "Encoding", href: "/tools/url-encode", color: "#14b8a6" },
  { id: "html-formatter", name: "HTML Formatter", icon: "🌐", desc: "Format & minify HTML code", category: "Code", href: "/tools/html-formatter", color: "#06b6d4" },
  { id: "lorem-ipsum-generator", name: "Lorem Ipsum", icon: "📝", desc: "Generate placeholder text fast", category: "Generator", href: "/tools/lorem-ipsum-generator", color: "#06b6d4" },
  { id: "hash-md5", name: "MD5 Hash", icon: "🔑", desc: "Generate MD5 checksums", category: "Security", href: "/tools/hash-md5", color: "#ef4444" },
  { id: "password-strength-checker", name: "Password Strength", icon: "🔒", desc: "Check password security level", category: "Security", href: "/tools/password-strength-checker", color: "#10b981" },
  { id: "url-slug-generator", name: "URL Slug", icon: "🔗", desc: "Convert text to SEO URLs", category: "SEO", href: "/tools/url-slug-generator", color: "#8b5cf6" },
  { id: "text-compare", name: "Text Diff", icon: "📋", desc: "Compare two texts side by side", category: "Utility", href: "/tools/text-compare", color: "#10b981" },
  { id: "json-compare", name: "JSON Compare", icon: "⚖️", desc: "Compare two JSON objects", category: "Data", href: "/tools/json-compare", color: "#8b5cf6" },
  { id: "csv-formatter", name: "CSV Formatter", icon: "📊", desc: "Format & validate CSV data", category: "Data", href: "/tools/csv-formatter", color: "#f59e0b" },
  { id: "xml-formatter", name: "XML Formatter", icon: "📦", desc: "Format & minify XML", category: "Code", href: "/tools/xml-formatter", color: "#8b5cf6" },
  { id: "word-counter", name: "Word Counter", icon: "📝", desc: "Count words, chars & lines", category: "Utility", href: "/tools/word-counter", color: "#f59e0b" },
  { id: "timestamp", name: "Timestamp", icon: "⏱️", desc: "Convert Unix timestamps", category: "Utility", href: "/tools/timestamp", color: "#ec4899" },
  { id: "markdown-preview", name: "Markdown Preview", icon: "📄", desc: "Live preview markdown", category: "Editor", href: "/tools/markdown-preview", color: "#f59e0b" },
  { id: "color-picker", name: "Color Picker", icon: "🎨", desc: "Pick colors & copy codes", category: "Design", href: "/tools/color-picker", color: "#06b6d4" },
  { id: "cron-generator", name: "Cron Generator", icon: "⏰", desc: "Create cron job expressions", category: "Developer", href: "/tools/cron-generator", color: "#a855f7" },
  { id: "uuid-v7-generator", name: "UUID v7 Generator", icon: "🆔", desc: "Time-ordered UUIDs", category: "Developer", href: "/tools/uuid-v7-generator", color: "#ec4899" },
  { id: "fake-data-generator", name: "Fake Data", icon: "🎭", desc: "Generate test data", category: "Generator", href: "/tools/fake-data-generator", color: "#8b5cf6" },
  { id: "unit-converter", name: "Unit Converter", icon: "📏", desc: "Convert measurement units", category: "Utility", href: "/tools/unit-converter", color: "#06b6d4" },
  { id: "age-calculator", name: "Age Calculator", icon: "🎂", desc: "Calculate exact age", category: "Utility", href: "/tools/age-calculator", color: "#f59e0b" },
  { id: "bmi-calculator", name: "BMI Calculator", icon: "⚖️", desc: "Calculate BMI index", category: "Health", href: "/tools/bmi-calculator", color: "#10b981" },
  { id: "credit-card-validator", name: "Credit Card Validator", icon: "💳", desc: "Validate card numbers", category: "Security", href: "/tools/credit-card-validator", color: "#ec4899" },
  { id: "json-to-yaml", name: "JSON ↔ YAML", icon: "🔄", desc: "Convert between formats", category: "Data", href: "/tools/json-to-yaml", color: "#ef4444" },
  { id: "binary-converter", name: "Binary Converter", icon: "💻", desc: "Binary to text converter", category: "Developer", href: "/tools/binary-converter", color: "#10b981" },
  { id: "case-converter", name: "Case Converter", icon: "🔤", desc: "Convert text case formats", category: "Text", href: "/tools/case-converter", color: "#f59e0b" },
  { id: "ip-lookup", name: "IP Lookup", icon: "🌐", desc: "Find IP address info", category: "Utility", href: "/tools/ip-lookup", color: "#ec4899" },
  { id: "random-string-generator", name: "Random String", icon: "🎲", desc: "Generate random strings", category: "Generator", href: "/tools/random-string-generator", color: "#10b981" },
  { id: "percentage-calculator", name: "Percentage Calc", icon: "🧮", desc: "Calculate percentages", category: "Math", href: "/tools/percentage-calculator", color: "#8b5cf6" },
  { id: "html-encoder", name: "HTML Encoder", icon: "🌐", desc: "Encode/decode HTML entities", category: "Encoding", href: "/tools/html-encoder", color: "#06b6d4" },
  { id: "text-to-slug", name: "Text to Slug", icon: "🔗", desc: "Create SEO-friendly URLs", category: "SEO", href: "/tools/text-to-slug", color: "#8b5cf6" },
  { id: "lorem-ipsum", name: "Lorem Ipsum", icon: "📝", desc: "Generate placeholder text", category: "Generator", href: "/tools/lorem-ipsum", color: "#06b6d4" },
  { id: "color-converter", name: "Color Converter", icon: "🎨", desc: "Convert color formats", category: "Design", href: "/tools/color-converter", color: "#f59e0b" },
];

export const categories = ["All", ...Array.from(new Set(tools.map(t => t.category))).sort()] as const;
