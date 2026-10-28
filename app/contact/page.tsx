import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us & Schedule Technical Discovery | ApexFlow Technologies",
  description:
    "Connect directly with our solutions architecture team. Rapid response guarantee under 2 business hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Let&apos;s Build Together
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Connect With Our Enterprise Architects
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Whether evaluating new cloud migrations, deploying generative AI workflows, or auditing infrastructure, we respond within 2 business hours.
          </p>
        </div>
      </section>

      {/* Main Content: Left info + Right Lead Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info & Locations */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Direct Channels
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  Immediate Engagement
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Our technical partners and solutions architects work directly with your leadership team under strict mutual NDA protection.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Direct Inquiries</h3>
                    <p className="text-xs text-slate-500 mt-0.5">contact@apexflowtech.com</p>
                    <p className="text-xs text-slate-500">partnerships@apexflowtech.com</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Enterprise Hotline</h3>
                    <p className="text-xs text-slate-500 mt-0.5">+1 (800) 555-APEX (US Toll Free)</p>
                    <p className="text-xs text-slate-500">+1 (212) 555-0199 (Global Direct)</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg shrink-0">
                    🏢
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Corporate Headquarters</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      ApexFlow Technologies Inc.
                    </p>
                    <p className="text-xs text-slate-500">
                      450 Lexington Ave, Suite 2400, New York, NY 10017
                    </p>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 space-y-3">
                <h3 className="text-sm font-bold text-blue-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Our Engagement Guarantee
                </h3>
                <ul className="space-y-2 text-xs text-blue-800">
                  <li className="flex items-center gap-2">
                    ✓ 2-hour response during business hours
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Immediate execution of standard mutual NDA
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ Direct conversation with a Principal Architect
                  </li>
                  <li className="flex items-center gap-2">
                    ✓ No sales pressure, strictly technical feasibility
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
