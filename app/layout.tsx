import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ApexFlow Technologies | Enterprise Cloud & AI Engineering",
  description:
    "ApexFlow Technologies provides mission-critical enterprise cloud architecture, AI automation, and custom software engineering for Fortune 1000 organizations.",
  keywords: [
    "Enterprise Software",
    "Cloud Architecture",
    "AI Automation",
    "Digital Transformation",
    "Lead Generation",
    "DevOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {/* Canonical domain redirect: ensure all Vercel previews route to the main domain */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && window.location.hostname.endsWith('.vercel.app') && window.location.hostname !== 'leadminoform.vercel.app') {
                window.location.replace('https://leadminoform.vercel.app' + window.location.pathname + window.location.search);
              }
            `,
          }}
        />
        {/* Tailwind CDN guarantees complete, instantaneous styling across all browsers */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
                      mono: ['"JetBrains Mono"', 'monospace'],
                    },
                    colors: {
                      brand: {
                        50: '#eff6ff',
                        100: '#dbeafe',
                        200: '#bfdbfe',
                        300: '#93c5fd',
                        400: '#60a5fa',
                        500: '#3b82f6',
                        600: '#2563eb',
                        700: '#1d4ed8',
                        800: '#1e40af',
                        900: '#1e3a8a',
                        950: '#172554',
                      }
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* LeadMino CRM Lead Capture Script */}
        <Script
          async
          src="https://app.leadmino.com/public/capture/Rbe09fPRLbXp1fl0.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
