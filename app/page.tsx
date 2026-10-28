import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const STATS = [
  { value: "$2.5B+", label: "Client Transactions Processed" },
  { value: "99.99%", label: "Uptime Across Enterprise Systems" },
  { value: "450+", label: "Engineered Solutions Deployed" },
  { value: "14 Days", label: "Average Time-to-Architecture" },
];

const SOLUTIONS = [
  {
    icon: "☁️",
    title: "Enterprise Cloud Architecture",
    desc: "Multi-cloud migration, Kubernetes orchestration, and serverless infrastructure designed for infinite scalability and zero downtime.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
  },
  {
    icon: "⚡",
    title: "AI & Autonomous Workflows",
    desc: "Custom LLM integrations, predictive analytics engines, and robotic process automation that eliminate manual operational bottlenecks.",
    tags: ["Generative AI", "RAG Pipelines", "PyTorch", "Automation"],
  },
  {
    icon: "🛡️",
    title: "Cybersecurity & Governance",
    desc: "Zero-trust network architecture, automated compliance audits (SOC 2 Type II, ISO 27001, HIPAA), and continuous threat detection.",
    tags: ["Zero-Trust", "SOC 2", "Pen-testing", "IAM"],
  },
  {
    icon: "💻",
    title: "Custom Mission-Critical Software",
    desc: "Bespoke high-throughput applications, reactive microservices, and modern web platforms built with TypeScript, Next.js, and Go.",
    tags: ["Next.js", "Go", "Distributed Systems", "GraphQL"],
  },
  {
    icon: "📊",
    title: "Data Engineering & Analytics",
    desc: "High-volume data pipelines, real-time streaming architectures, and unified business intelligence data lakes.",
    tags: ["Snowflake", "Databricks", "Kafka", "PostgreSQL"],
  },
  {
    icon: "🚀",
    title: "24/7 Managed DevOps & SRE",
    desc: "Round-the-clock site reliability engineering, proactive anomaly detection, automated rollbacks, and SLA-backed response times.",
    tags: ["Terraform", "CI/CD", "Datadog", "Prometheus"],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "ApexFlow rebuilt our legacy core banking pipeline. Their team delivered in 4 months what our internal teams estimated at 18 months. Lead processing velocity surged by 340%.",
    author: "Marcus Vance",
    role: "Chief Information Officer",
    company: "Apex Capital Partners",
  },
  {
    quote:
      "The AI automation workflows integrated by ApexFlow saved our operations team over 1,200 hours per month. The ROI was evident within the first 60 days.",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "Synthetix Health Systems",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-20 pb-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Pitch */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Next-Generation Enterprise Engineering
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Enterprise Cloud & AI Architecture{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-teal-300">
                  Engineered for Scale.
                </span>
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                ApexFlow Technologies partners with global enterprises to modernize legacy stacks, deploy autonomous AI systems, and engineer high-concurrency cloud infrastructure with guaranteed uptime.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg hover:shadow-blue-500/25 transition-all text-center"
                >
                  Schedule Technical Discovery
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 transition-all text-center"
                >
                  Explore Capabilities →
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  SOC 2 Type II Audited
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  99.99% Enterprise SLA
                </span>
              </div>
            </div>

            {/* Right Column: Hero Lead Capture Form */}
            <div className="lg:col-span-5">
              <LeadForm
                title="Book Architecture Assessment"
                subtitle="Discuss your tech stack and requirements with a Principal Architect."
                pageUrl="http://localhost:3000/hero-form"
                buttonText="Request Strategic Session"
                compact={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="bg-white border-y border-slate-200 py-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {STATS.map((stat) => (
              <div key={stat.label} className="pt-4 lg:pt-0">
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Our Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Engineered for Enterprise Complexity
            </h2>
            <p className="text-slate-600 mt-4 text-base">
              From resilient cloud foundations to autonomous agentic intelligence, we deliver technology solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-600 transition shadow-sm text-sm"
            >
              View Full Architecture Catalog & Capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Trusted Results
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Endorsed by Enterprise Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <p className="text-slate-700 italic text-base leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                    <p className="text-xs text-slate-500">
                      {t.role} · <span className="font-medium text-slate-700">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Accelerate Your Enterprise Roadmap?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base">
            Reach out to our solution engineering team today. We provide architectural assessments, technical proofs-of-concept, and enterprise execution plans.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 font-bold text-white shadow-lg transition"
            >
              Contact Our Enterprise Team
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 font-semibold text-white transition"
            >
              Explore Pricing & Engagement Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
