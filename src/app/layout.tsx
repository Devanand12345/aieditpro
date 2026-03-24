import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./Navbar";
import DynamicBackground from "./DynamicBackground";
import BackToTop from "./BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Edit Pro - Free Online Developer Tools Suite | 35+ Free Utilities",
  description: "Free online developer tools: QR Code Generator, JSON Beautifier, Password Generator, Image Compressor, Base64 Encoder, Hash Generator, and 29 more tools. All tools are free, fast, and privacy-focused.",
  authors: [{ name: "AI Edit Pro" }],
  creator: "AI Edit Pro",
  publisher: "AI Edit Pro",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "AI Edit Pro - Free Online Developer Tools Suite",
    description: "Free online developer tools: QR Code Generator, JSON Beautifier, Password Generator, Image Compressor, Base64 Encoder, Hash Generator, and 29 more tools. All tools are free, fast, and privacy-focused.",
    url: "https://aieditpro.net",
    siteName: "AI Edit Pro",
    images: [
      {
        url: "https://aieditpro.net/og-image.svg",
        width: 1200,
        height: 630,
        alt: "AI Edit Pro - Free Developer Tools Suite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@aieditpronet",
    creator: "@aieditpronet",
    title: "AI Edit Pro - Free Online Developer Tools Suite",
    description: "Free online developer tools: QR Code Generator, JSON Beautifier, Password Generator, Image Compressor, Base64 Encoder, Hash Generator, and 29 more tools. All tools are free, fast, and privacy-focused.",
    images: ["https://aieditpro.net/og-image.svg"],
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
    canonical: "https://aieditpro.net",
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
              "name": "AI-EditPro",
              "description": "Free online developer tools suite with 27+ tools including JSON beautifier, QR code generator, password generator, and more.",
              "url": "https://aieditpro.net",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "50000",
              },
              "potentialAction": {
                "@type": "UseAction",
                "target": "https://aieditpro.net/tools",
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
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        
        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://aieditpro.net"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Tools",
                  "item": "https://aieditpro.net/tools"
                }
              ]
            }),
          }}
        />
        
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI-EditPro",
              "url": "https://aieditpro.net",
              "logo": "https://aieditpro.net/favicon.svg",
              "sameAs": [
                "https://twitter.com/aieditpronet",
                "https://github.com/Devanand12345/aieditpro"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "contact@aieditpro.net",
                "contactType": "customer service"
              }
            }),
          }}
        />
        
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        
        {/* Google Tag Manager */}
        <Script id="gtm-script">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GT-K5MKQSV5');
          `}
        </Script>

        {/* Google Analytics 4 */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-WM5JVFQBDG`} />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WM5JVFQBDG', {
              send_page_view: true,
              page_title: document.title,
              page_location: window.location.href
            });
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GT-K5MKQSV5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Dynamic canvas background */}
        <DynamicBackground />

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
        <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
