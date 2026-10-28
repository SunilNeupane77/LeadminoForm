import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Call to Action */}
      <div className="border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 p-8 sm:p-10 rounded-3xl border border-blue-500/20 shadow-2xl">
            <div className="space-y-1 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Enterprise Acceleration
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Transform your architecture with guaranteed SLAs.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Direct engagement with Principal Architects. No junior handoffs, no ambiguous billables.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all whitespace-nowrap"
              >
                Explore Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Corporate Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-xl shadow-lg">
                ▲
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                ApexFlow Technologies
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Global mission-critical cloud modernization, autonomous AI systems, and distributed engineering partner for Fortune 1000 organizations.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5 font-medium">
              <p>📍 Headquarters: 450 Lexington Ave, Suite 2400, New York, NY 10017</p>
              <p>📞 Toll-Free Hotline: +1 (800) 555-APEX / Direct: +1 (212) 555-0199</p>
              <p>✉️ Inquiries: contact@apexflowtech.com</p>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link href="/services#cloud" className="hover:text-blue-400 transition">
                  Multi-Cloud & Kubernetes
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-blue-400 transition">
                  Enterprise AI & RAG
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="hover:text-blue-400 transition">
                  Zero-Trust Security & SOC 2
                </Link>
              </li>
              <li>
                <Link href="/services#engineering" className="hover:text-blue-400 transition">
                  Reactive Distributed Systems
                </Link>
              </li>
              <li>
                <Link href="/services#data" className="hover:text-blue-400 transition">
                  Streaming Big Data Lakes
                </Link>
              </li>
              <li>
                <Link href="/services#managed" className="hover:text-blue-400 transition">
                  24/7 Managed SRE Pods
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-medium">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  Company Story
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-blue-400 transition">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-blue-400 transition">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400 transition">
                  Pricing & Engagement
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Locations & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Executive Newsletter Lead Capture */}
          <div>
            <h4 className="text-xs font-bold text-white tracking-widest uppercase mb-4">
              Executive Briefing
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Quarterly enterprise systems architectural blueprints and research papers.
            </p>

            <form
              method="post"
              action="https://app.leadmino.com/public/forms/v23VKJBQh963B-ln"
              className="space-y-2"
            >
              <input type="hidden" name="name" value="Executive Briefing Subscriber" />
              <input type="hidden" name="companyName" value="Website Subscriber" />
              <input type="hidden" name="phone" value="+10000000000" />
              <input type="hidden" name="notes" value="Subscribed to quarterly executive tech briefing" />
              <input type="hidden" name="page_url" value="http://localhost:3000/footer" />

              {/* Spam Trap */}
              <input
                type="text"
                name="website_url"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-9999px" }}
              />

              <input
                type="email"
                name="email"
                placeholder="Enter corporate email"
                required
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition duration-150 cursor-pointer shadow-md"
              >
                Subscribe to Briefing
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ApexFlow Technologies Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 font-medium">
            <span className="hover:text-slate-300 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 transition cursor-pointer">Security Whitepaper</span>
            <span className="hover:text-slate-300 transition cursor-pointer">SOC 2 Type II Audited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
