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
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-800 selection:bg-blue-600 selection:text-white font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />

        {/* LeadMino CRM Lead Capture Script */}
        <Script
          async
          src="https://app.leadmino.com/public/capture/0VKKf9HgAKjw4jee.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
