import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Top Banner / Quick Lead Connect */}
      <div className="border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 p-8 rounded-2xl border border-blue-800/40">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Ready to accelerate?
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Transform your enterprise operations today.
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-xl">
                Connect with our systems architects to design an AI and cloud infrastructure that scales.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all duration-150 whitespace-nowrap"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/pricing"
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all duration-150 whitespace-nowrap"
              >
                View Plans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-lg">
                ▲
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ApexFlow Technologies
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Global enterprise software, AI automation, and cloud engineering partner. Delivering mission-critical architectures for Fortune 1000 organizations.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>📍 Headquarters: 450 Lexington Ave, New York, NY 10017</p>
              <p>📞 Phone: +1 (800) 555-APEX / +1 (212) 555-0199</p>
              <p>✉️ Inquiries: contact@apexflowtech.com</p>
            </div>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/services#cloud" className="hover:text-white transition">
                  Cloud Architecture
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="hover:text-white transition">
                  Enterprise AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/services#engineering" className="hover:text-white transition">
                  Custom Software Dev
                </Link>
              </li>
              <li>
                <Link href="/services#security" className="hover:text-white transition">
                  Cybersecurity & SOC 2
                </Link>
              </li>
              <li>
                <Link href="/services#managed" className="hover:text-white transition">
                  24/7 Managed DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-white transition">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-white transition">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Pricing & Models
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact & Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Lead Capture Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Executive Briefing
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Quarterly enterprise tech reports and strategic architectural insights.
            </p>
            {/* LeadMino Newsletter Form */}
            <form
              method="post"
              action="https://app.leadmino.com/public/forms/0VKKf9HgAKjw4jee"
              className="space-y-2"
            >
              <input
                type="hidden"
                name="name"
                value="Executive Briefing Subscriber"
              />
              <input
                type="hidden"
                name="companyName"
                value="Website Subscriber"
              />
              <input
                type="hidden"
                name="phone"
                value="+0000000000"
              />
              <input
                type="hidden"
                name="notes"
                value="Subscribed to Executive Briefing Newsletter via Footer"
              />
              <input
                type="hidden"
                name="page_url"
                value="http://localhost:3000/footer"
              />
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
                placeholder="Enter work email"
                required
                className="w-full px-3 py-2 text-xs rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition duration-150 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ApexFlow Technologies Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 transition cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 transition cursor-pointer">Security & Compliance</span>
            <span className="hover:text-slate-400 transition cursor-pointer">SOC 2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
