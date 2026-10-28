import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & Client Results | ApexFlow Technologies",
  description:
    "Explore how ApexFlow Technologies modernized legacy stacks and built AI-driven systems for global enterprise leaders.",
};

const CASE_STUDIES = [
  {
    client: "Equinox Financial Markets",
    industry: "FinTech & High-Frequency Trading",
    title: "Migrating a $40B Trading Platform to Cloud-Native Kubernetes",
    summary:
      "Equinox was struggling with on-premise hardware limits during market opening surges. ApexFlow redesigned their order execution backbone using event-driven microservices on AWS EKS.",
    results: [
      { metric: "+340%", label: "Peak Transaction Capacity" },
      { metric: "1.2ms", label: "Average Order Execution Latency" },
      { metric: "$1.8M", label: "Annual Infrastructure Savings" },
    ],
    tech: ["Go", "Kubernetes", "Apache Kafka", "AWS EKS", "Terraform"],
  },
  {
    client: "HealthPulse Global",
    industry: "Healthcare Systems & Telemedicine",
    title: "Securing 2.5M Patient Records with Zero-Trust AI Intelligence",
    summary:
      "HealthPulse needed an enterprise-wide HIPAA-compliant data mesh to power predictive patient outcomes without exposing sensitive PII to external model APIs.",
    results: [
      { metric: "100%", label: "HIPAA & SOC 2 Compliance" },
      { metric: "99.999%", label: "SLA Production Uptime" },
      { metric: "62%", label: "Faster Diagnostics Workflow" },
    ],
    tech: ["Python", "PyTorch", "Snowflake", "Azure Confidential Computing"],
  },
  {
    client: "Apex Logistics & Freight",
    industry: "Global Supply Chain & Logistics",
    title: "Real-Time Telemetry and Autonomous Fleet Route Optimization",
    summary:
      "Processing over 15,000 IoT sensor pings per second across 8 countries. ApexFlow implemented an automated routing pipeline reducing delays and carbon footprint.",
    results: [
      { metric: "28%", label: "Reduced Transit Anomalies" },
      { metric: "15,000/s", label: "Sensor Events Ingested" },
      { metric: "4.2M gal", label: "Fuel Saved Annually" },
    ],
    tech: ["Next.js", "TypeScript", "TimescaleDB", "GCP Cloud Run"],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            Proven Impact
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Real Enterprise Transformations
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            See how our systems engineering teams solve the toughest scalability, security, and velocity challenges for industry pioneers.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.client}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition p-8 sm:p-12"
              >
                <div className="flex flex-col lg:flex-row gap-10 items-start justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700">
                        {study.industry}
                      </span>
                      <span className="text-xs font-semibold text-blue-600">
                        {study.client}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
                      {study.title}
                    </h2>

                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {study.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {study.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact Stats Card */}
                  <div className="w-full lg:w-80 shrink-0 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400">
                      Key Outcomes
                    </h3>
                    <div className="space-y-5">
                      {study.results.map((res) => (
                        <div key={res.label} className="border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                          <p className="text-3xl font-black text-white">{res.metric}</p>
                          <p className="text-xs text-slate-400 mt-1">{res.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Conversion Prompt */}
          <div className="mt-20 text-center bg-white rounded-2xl border border-slate-200 p-12 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">
              Have a Similar Engineering Challenge?
            </h3>
            <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
              Our architects will review your current architecture and outline potential bottlenecks, optimizations, and delivery paths.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow transition"
              >
                Discuss Your Case With an Architect →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
