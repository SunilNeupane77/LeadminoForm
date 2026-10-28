import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models | ApexFlow Technologies",
  description:
    "Transparent enterprise engagement models, from proof-of-concept discovery sprints to full-scale dedicated engineering pods.",
};

const TIERS = [
  {
    name: "Architectural Discovery & POC",
    badge: "Fast Track",
    price: "$8,500",
    period: "Fixed Investment",
    description: "Ideal for evaluating new architectures, assessing technical feasibility, or auditing legacy infrastructure.",
    deliverables: [
      "Full infrastructure & security audit",
      "Production-ready architectural blueprint",
      "Working proof-of-concept repository",
      "Executive technical roadmap & timeline",
      "Complete code & infrastructure ownership",
    ],
    cta: "Start Discovery Sprint",
    highlight: false,
  },
  {
    name: "Dedicated Engineering Pod",
    badge: "Most Popular",
    price: "$24,500",
    period: "Per Month",
    description: "An autonomous, senior pod embedded in your roadmap to design, build, and deploy high-concurrency systems.",
    deliverables: [
      "1 Principal Solutions Architect",
      "2 Senior Full-Stack / Cloud Engineers",
      "1 Dedicated DevOps / SRE Engineer",
      "Bi-weekly production increments",
      "Direct Slack / Teams communication",
      "Standard 99.9% uptime SLA guarantee",
    ],
    cta: "Deploy Engineering Pod",
    highlight: true,
  },
  {
    name: "Enterprise Transformation",
    badge: "Custom Scale",
    price: "Custom",
    period: "Multi-Quarter Agreement",
    description: "For Fortune 1000 organizations undertaking core platform re-platforming, zero-trust overhauls, or AI transitions.",
    deliverables: [
      "Multi-pod scaling (10+ senior engineers)",
      "Executive stakeholder steering committee",
      "24/7/365 dedicated site reliability engineering",
      "Custom SLA (up to 99.999% uptime guarantee)",
      "Strict data residency & air-gapped options",
      "Custom Master Services Agreement (MSA)",
    ],
    cta: "Request Enterprise Quote",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "How fast can an ApexFlow engineering pod start?",
    a: "Our typical onboarding timeline is 7 to 10 business days following agreement execution. We hit the ground running with established frameworks and CI/CD blueprints.",
  },
  {
    q: "Who owns the Intellectual Property (IP) and code created?",
    a: "Your organization retains 100% full legal ownership of all code, documentation, architectures, and artifacts produced during the engagement.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs) prior to discovery?",
    a: "Yes. We execute mutual enterprise NDAs before reviewing any proprietary repositories, architecture diagrams, or confidential business requirements.",
  },
  {
    q: "What timezone do your engineers work in?",
    a: "We operate across US Eastern/Pacific, European (GMT/CET), and APAC timezones, ensuring consistent working-hours overlap with your internal teams.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Investment & Engagement
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Transparent, SLA-Backed Models
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            No hidden retainers or ambiguous billable hours. Clear deliverables, senior-only engineering talent, and guaranteed accountability.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 ${
                  tier.highlight
                    ? "bg-white border-2 border-blue-600 shadow-xl relative scale-100 lg:-translate-y-2"
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                        tier.highlight
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h2>
                  <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {tier.price}
                    </span>
                    <span className="text-xs font-medium text-slate-500 ml-2">
                      / {tier.period}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                    What&apos;s Included:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                        <svg
                          className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#custom-quote"
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-center transition block shadow-sm ${
                    tier.highlight
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="custom-quote" className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            title="Request Custom Scope & Pricing"
            subtitle="Send your project requirements for a detailed estimate and proposal."
            pageUrl="http://localhost:3000/pricing"
            buttonText="Get Scope & Estimate"
          />
        </div>
      </section>
    </div>
  );
}
