import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const STATS = [
  { value: "$2.5B+", label: "Annual Client Transactions Processed", sub: "Zero lost transactions" },
  { value: "99.999%", label: "Multi-Cloud Uptime SLA", sub: "Automated multi-region failover" },
  { value: "340%", label: "Average Throughput Acceleration", sub: "Kubernetes & Go microservices" },
  { value: "< 14 Days", label: "Discovery-to-Working Prototype", sub: "Production-ready blueprints" },
];

const LOGOS = [
  { name: "Snowflake", symbol: "❄️" },
  { name: "Datadog", symbol: "🐶" },
  { name: "Cloudflare", symbol: "⚡" },
  { name: "Stripe", symbol: "💳" },
  { name: "Kubernetes", symbol: "☸️" },
  { name: "Vercel", symbol: "▲" },
];

const SOLUTIONS = [
  {
    icon: "☁️",
    badge: "Cloud Scale",
    title: "Multi-Cloud Architecture & Kubernetes",
    desc: "Transform fragile monolithic legacy servers into self-healing, multi-region Kubernetes clusters with automated GitOps pipelines and zero-downtime rolling releases.",
    tags: ["AWS EKS", "Azure AKS", "GCP", "Terraform", "GitOps"],
    metrics: "40% average cloud compute savings",
    href: "/services#cloud",
  },
  {
    icon: "🤖",
    badge: "AI Systems",
    title: "Enterprise AI & Autonomous Workflows",
    desc: "Private, air-gapped LLM deployments, vector embeddings data lakes, and autonomous agent systems that handle high-volume business operations without external data leakage.",
    tags: ["Private LLMs", "RAG Pipelines", "PyTorch", "vLLM", "Agentic Workflows"],
    metrics: "1,200+ human hours automated/mo",
    href: "/services#ai",
  },
  {
    icon: "🛡️",
    badge: "Governance",
    title: "Zero-Trust Security & SOC 2 Hardening",
    desc: "Cryptographic identity verification, automated vulnerability scanners in continuous delivery, and full compliance engineering for SOC 2 Type II, ISO 27001, and HIPAA.",
    tags: ["Zero-Trust", "SOC 2 Type II", "HIPAA", "IAM", "Vault"],
    metrics: "100% compliance audit pass rate",
    href: "/services#security",
  },
  {
    icon: "⚡",
    badge: "Performance",
    title: "High-Throughput Reactive Engineering",
    desc: "Low-latency distributed backends and reactive web frontends designed for sub-millisecond execution, event streams, and massive concurrent user traffic.",
    tags: ["Go", "Next.js", "TypeScript", "Apache Kafka", "PostgreSQL"],
    metrics: "Sub-50ms p99 response times",
    href: "/services#engineering",
  },
  {
    icon: "📊",
    badge: "Intelligence",
    title: "Real-Time Big Data Streaming & Lakes",
    desc: "Unify fragmented departmental databases into real-time streaming architectures. Ingest millions of telemetry events per second with instant analytical querying.",
    tags: ["Snowflake", "Databricks", "ClickHouse", "dbt", "Airflow"],
    metrics: "15M+ events/second ingestion",
    href: "/services#data",
  },
  {
    icon: "🚀",
    badge: "24/7 Operations",
    title: "Managed SRE & Site Reliability Pods",
    desc: "Round-the-clock site reliability engineering, proactive chaos testing, automated anomaly detection, and 15-minute SLA incident response guarantees.",
    tags: ["24/7 SRE", "Chaos Testing", "Datadog", "Prometheus", "PagerDuty"],
    metrics: "15-minute critical incident SLA",
    href: "/services#managed",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "ApexFlow took our monolithic high-frequency order book and re-engineered it into a distributed Kafka-driven cluster. We scaled from 15k to 120k orders per second without a single blip.",
    author: "Marcus Vance",
    role: "Chief Information Officer",
    company: "Apex Global Capital Markets",
    rating: 5,
  },
  {
    quote:
      "Their enterprise AI team built a private RAG diagnostic pipeline for our healthcare platform. It complies strictly with HIPAA and reduced physician chart-review times by 60%.",
    author: "Dr. Elena Rostova",
    role: "VP of Digital Health Systems",
    company: "Synthetix Health Network",
    rating: 5,
  },
  {
    quote:
      "Working with ApexFlow is like having an elite SWAT team of Principal Architects. They delivered our entire multi-region cloud migration 3 months ahead of schedule.",
    author: "Tariq Mansoor",
    role: "Head of Infrastructure & DevOps",
    company: "OmniRetail Global",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-32 border-b border-slate-800">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-400/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Mission & Pitch */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-blue-400 text-xs font-bold tracking-wide uppercase shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>ApexFlow Systems v4.8 Active · Enterprise Ready</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Architecting Cloud & AI Foundations For{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  Global Enterprises.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We engineer mission-critical cloud topologies, private autonomous AI workflows, and distributed microservices with guaranteed 99.999% uptime for Fortune 1000 organizations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 transition-all text-center transform hover:-translate-y-0.5"
                >
                  Schedule Technical Discovery →
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all text-center"
                >
                  Explore Capabilities Catalog
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-400">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  SOC 2 Type II Audited
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  AWS Premier Partner
                </span>
              </div>
            </div>

            {/* Right Column: Hero Lead Capture Form */}
            <div className="lg:col-span-5">
              <LeadForm
                title="Schedule Strategic Discovery"
                subtitle="Connect directly with an Enterprise Principal Architect."
                pageUrl="http://localhost:3000/hero"
                buttonText="Book Strategic Call"
                compact={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise System Simulation Dashboard Preview */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <div>
                <h3 className="font-bold text-sm text-white">ApexFlow Global Telemetry & Mesh</h3>
                <p className="text-xs text-slate-400">Live multi-cloud telemetry across 3 continents</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400">
                Cluster Health: 100%
              </span>
              <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                0 Active Incidents
              </span>
            </div>
          </div>

          {/* Interactive Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
            <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Mesh Throughput</p>
              <p className="text-2xl sm:text-3xl font-black text-white mt-1">312,490 <span className="text-xs text-slate-500 font-normal">req/s</span></p>
              <p className="text-[11px] text-emerald-400 mt-2 font-mono">▲ +18.4% peak headroom</p>
            </div>
            <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">AI Inference Latency</p>
              <p className="text-2xl sm:text-3xl font-black text-cyan-400 mt-1">42.8 <span className="text-xs text-slate-500 font-normal">ms (p99)</span></p>
              <p className="text-[11px] text-cyan-400 mt-2 font-mono">TensorRT-LLM optimized</p>
            </div>
            <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Multi-Region Replication</p>
              <p className="text-2xl sm:text-3xl font-black text-white mt-1">1.8 <span className="text-xs text-slate-500 font-normal">ms</span></p>
              <p className="text-[11px] text-emerald-400 mt-2 font-mono">Active-Active Raft consensus</p>
            </div>
            <div className="bg-slate-950/60 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">CRM Lead Ingestion</p>
              <p className="text-2xl sm:text-3xl font-black text-indigo-400 mt-1">Instant <span className="text-xs text-slate-500 font-normal">(LeadMino)</span></p>
              <p className="text-[11px] text-indigo-400 mt-2 font-mono">Zero drops · Verified 200 OK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Logos Bar */}
      <section className="py-16 bg-white border-b border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Powering Mission-Critical Platforms Built With World-Class Stacks
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {LOGOS.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2 text-slate-600 font-bold text-lg hover:text-slate-900 transition">
                <span className="text-2xl">{logo.symbol}</span>
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm text-center">
                <p className="text-4xl font-extrabold text-blue-600 tracking-tight">{s.value}</p>
                <p className="text-xs font-bold uppercase text-slate-700 mt-2">{s.label}</p>
                <p className="text-xs text-slate-400 mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Enterprise Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2 tracking-tight">
              Six Pillars of Digital Excellence
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Each capability is staffed by Senior Staff Engineers and Principal Architects who have led core systems at major technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((s) => (
              <div
                key={s.title}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200/90 hover:border-blue-300 hover:bg-white hover:shadow-xl transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {s.icon}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div>
                  <div className="py-3 px-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs font-semibold text-blue-900 mb-4">
                    ⚡ {s.metrics}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200">
                    {s.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white text-slate-700 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 mt-4"
                  >
                    <span>View Specifications</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition"
            >
              Explore Full Engineering Roadmap & Tech Specs →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Executive Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Trusted by Technical Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="bg-slate-800/90 p-8 rounded-3xl border border-slate-700/80 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-700/80">
                  <h4 className="font-bold text-white text-sm">{t.author}</h4>
                  <p className="text-xs text-blue-400">{t.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Section with Embedded LeadForm */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Ready to Modernize?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              Accelerate Your Enterprise Roadmap
            </h2>
            <p className="text-slate-600 text-base mt-2 max-w-xl mx-auto">
              Tell us about your project requirements and let our Principal Architects draft a tailored technical blueprint.
            </p>
          </div>

          <LeadForm
            title="Book Your Discovery Session"
            subtitle="Guaranteed 2-hour executive response under mutual NDA."
            pageUrl="http://localhost:3000/bottom-cta"
            buttonText="Submit Technical Inquiry"
          />
        </div>
      </section>
    </div>
  );
}
