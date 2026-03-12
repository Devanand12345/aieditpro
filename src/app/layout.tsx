import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import DynamicBackground from "./DynamicBackground";
import BackToTop from "./BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-EditPro - PDF Converter, JSON Beautifier & 17+ Developer Tools",
  description: "Convert PDF to DOCX, DOC, XLSX, PPTX, HTML, TXT, EPUB, RTF instantly. Free online JSON beautifier, Base64 encoder, URL decoder, Hash generator, Password generator, Word counter & more developer tools. No sign-up required.",
  keywords: [
    "PDF converter",
    "PDF to DOCX converter",
    "PDF to Word",
    "PDF to Excel",
    "PDF to PowerPoint",
    "online file converter",
    "free file converter",
    "document converter",
    "JSON beautifier",
    "JSON formatter",
    "JSON minifier",
    "HTML formatter",
    "CSS formatter",
    "CSV formatter",
    "XML formatter",
    "Base64 encoder",
    "Base64 decoder",
    "URL encoder",
    "URL decoder",
    "JWT decoder",
    "JWT token decoder",
    "Hash generator",
    "MD5 hash",
    "SHA256 hash",
    "UUID generator",
    "text compare",
    "text diff",
    "regex tester",
    "developer tools",
    "online tools",
    "free online tools",
    "file format converter",
    "document conversion",
    "batch converter",
    "AI file converter",
    "DOCX converter",
    "Excel converter",
    "PowerPoint converter",
    "EPUB converter",
    "RTF converter",
    "TXT converter",
    "HTML converter",
    "password generator",
    "secure password generator",
    "random password generator",
    "word counter",
    "character counter",
    "word count tool",
    "color picker",
    "hex to rgb converter",
    "rgb to hex",
    "color converter",
    "markdown editor",
    "markdown previewer",
    "markdown to html",
    "unix timestamp converter",
    "epoch converter",
    "timestamp to date",
    "online developer tools",
    "free developer utilities",
    "web developer tools",
    "JSON validator",
    "JSON parser",
    "PDF to Word free",
    "convert PDF online",
    "PDF converter free",
    "JSON beautifier online",
    "JSON formatter online",
  ].join(", "),
  authors: [{ name: "AI-EditPro" }],
  creator: "AI-EditPro",
  publisher: "AI-EditPro",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "AI-EditPro - Free Online File Converter & 17+ Developer Tools",
    description: "Convert PDF to DOCX, DOC, XLSX, PPTX + 17 free developer tools including JSON beautifier, password generator, word counter, color picker, Base64 encoder, Hash generator & more.",
    url: "https://AI-EditPro.net",
    siteName: "AI-EditPro",
    images: [
      {
        url: "https://AI-EditPro.net/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI-EditPro - Free File Converter & Developer Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-EditPro - Free Online File Converter & 17+ Developer Tools",
    description: "Convert any file format instantly. PDF to DOCX, JSON beautifier, password generator, word counter, color picker, Base64 encoder & more. No sign-up required.",
    images: ["https://AI-EditPro.net/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Technology",
  alternates: {
    canonical: "https://AI-EditPro.net",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "AI-EditPro",
              description: "Free online file converter and developer tools suite",
              url: "https://AI-EditPro.net",
              applicationCategory: "Utility",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "50000",
              },
              potentialAction: {
                "@type": "UseAction",
                target: "https://AI-EditPro.net/converter",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is AI-EditPro free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, AI-EditPro is completely free. No sign-up or credit card required."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I convert a PDF to DOCX?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Go to the Converter page, upload your PDF file, select DOCX as the output format, and click Convert. Your file will be ready in seconds."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is a JSON Beautifier?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A JSON Beautifier formats compact or minified JSON data into a readable, indented structure. AI-EditPro's JSON Beautifier also validates JSON syntax."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I generate a secure password?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use AI-EditPro's Password Generator tool. Set your desired length (up to 128 characters), choose character types (uppercase, lowercase, numbers, symbols), and click Generate."
                  }
                }
              ]
            }),
          }}
        />
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#a78bfa" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Dynamic canvas background */}
        <DynamicBackground />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
