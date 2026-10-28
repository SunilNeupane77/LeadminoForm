"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-500 flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              ▲
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                ApexFlow
              </span>
              <span className="hidden sm:inline-block text-xs font-medium text-slate-400 block -mt-1 tracking-wider uppercase">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow transition-all duration-150"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
                  isActive
                    ? "text-blue-600 bg-blue-50 font-semibold"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
