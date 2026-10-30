import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { CheckCircleIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Us & Schedule Technical Discovery | ApexFlow Technologies",
  description:
    "Connect directly with our solutions architecture team. Rapid response guarantee under 2 business hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Let&apos;s Build Together
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-3">
            Connect With Our Enterprise Architects
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Whether evaluating new cloud migrations, deploying generative AI workflows, or auditing infrastructure, we respond within 2 business hours.
          </p>
        </div>
      </section>

      {/* Main Content: Left info + Right Lead Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info & Locations */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Direct Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Immediate Engagement
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Our technical partners and solutions architects work directly with your leadership team under strict mutual NDA protection.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 stroke-current fill-none" strokeWidth={1.75} viewBox="0 0 24 24">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Direct Inquiries</h3>
                    <p className="text-xs text-slate-500 mt-1 font-mono">contact@apexflowtech.com</p>
                    <p className="text-xs text-slate-500 font-mono">partnerships@apexflowtech.com</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 stroke-current fill-none" strokeWidth={1.75} viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Enterprise Hotline</h3>
                    <p className="text-xs text-slate-500 mt-1 font-mono">+1 (800) 555-APEX (US Toll Free)</p>
                    <p className="text-xs text-slate-500 font-mono">+1 (212) 555-0199 (Global Direct)</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 stroke-current fill-none" strokeWidth={1.75} viewBox="0 0 24 24">
                      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                      <path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Corporate Headquarters</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      ApexFlow Technologies Inc.
                    </p>
                    <p className="text-xs text-slate-500">
                      450 Lexington Ave, Suite 2400, New York, NY 10017
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-8 rounded-3xl bg-blue-50 border border-blue-100 space-y-4">
                <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Our Engagement Guarantee
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm font-semibold text-blue-900">
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>2-hour response during business hours</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Immediate execution of standard mutual NDA</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Direct conversation with a Principal Architect</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>No sales pressure, strictly technical feasibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm
                title="Send Project Inquiry"
                subtitle="Fill out the details below and an enterprise architect will review your submission."
                pageUrl="https://leadminoform.vercel.app/contact"
                buttonText="Send Secure Message"
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
