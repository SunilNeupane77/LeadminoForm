import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import {
  CloudIcon,
  CpuIcon,
  ShieldCheckIcon,
  ZapIcon,
  DatabaseIcon,
  ServerIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Enterprise Services & Solutions | ApexFlow Technologies",
  description:
    "Explore our cloud architecture, AI automation, custom software, and managed DevOps capabilities tailored for enterprise scale.",
};

const DETAILED_SERVICES = [
  {
    id: "cloud",
    title: "Cloud Architecture & Multi-Cloud Migration",
    badge: "Infrastructure",
    icon: CloudIcon,
    description:
      "Modernize legacy monoliths into resilient, automated multi-cloud topologies. We architect immutable Kubernetes clusters, serverless computing backbones, and infrastructure as code.",
    features: [
      "Zero-downtime database and application migrations",
      "Terraform & Pulumi automated infrastructure pipelines",
      "Multi-region failover and active-active setups",
      "FinOps cloud spend optimization (averaging 38% reduction)",
    ],
  },
  {
    id: "ai",
    title: "Enterprise AI & Autonomous Workflows",
    badge: "Artificial Intelligence",
    icon: CpuIcon,
    description:
      "Operationalize generative AI and autonomous agent systems safely inside your enterprise perimeter with end-to-end data privacy and low-latency inference.",
    features: [
      "Enterprise Retrieval-Augmented Generation (RAG) knowledge engines",
      "Custom fine-tuned LLMs on internal corporate data",
      "Autonomous RPA workflows that replace manual paperwork",
      "Real-time fraud and anomaly detection models",
    ],
  },
  {
    id: "engineering",
    title: "Mission-Critical Software Engineering",
    badge: "Core Engineering",
    icon: ZapIcon,
    description:
      "High-concurrency distributed applications and web platforms engineered with type-safety, test-driven rigor, and micro-frontend modularity.",
    features: [
      "Next.js, TypeScript, React, and Go distributed backends",
      "Event-driven architectures using Apache Kafka and RabbitMQ",
      "GraphQL federation and microservice API gateways",
      "Comprehensive test suites with automated regression gates",
    ],
  },
  {
    id: "security",
    title: "Zero-Trust Security & Compliance",
    badge: "Cybersecurity",
    icon: ShieldCheckIcon,
    description:
      "Enterprise-grade defense-in-depth architecture. We prepare your organization for rigorous audits while hardening applications against sophisticated threats.",
    features: [
      "SOC 2 Type II, ISO 27001, and HIPAA compliance engineering",
      "Automated continuous vulnerability scanning in CI/CD",
      "Identity and Access Management (IAM) role-based hardening",
      "Secrets management and cryptographic key rotation",
    ],
  },
  {
    id: "data",
    title: "Data Engineering & Real-Time Analytics",
    badge: "Big Data",
    icon: DatabaseIcon,
    description:
      "Convert fragmented data siloes into clean, unified streaming lakes that empower your executives and models with sub-second business intelligence.",
    features: [
      "Snowflake, BigQuery, and Databricks data lakehouse builds",
      "ETL and ELT pipelines using dbt, Apache Airflow, and Spark",
      "Real-time event streaming dashboards and alerts",
      "GDPR and CCPA automated data lineage and compliance",
    ],
  },
  {
    id: "managed",
    title: "24/7 Managed DevOps & Site Reliability",
    badge: "Operations",
    icon: ServerIcon,
    description:
      "Continuous system monitoring, incident prevention, and rapid mitigation with industry-leading SLAs and dedicated SRE pods.",
    features: [
      "15-minute response SLA for critical enterprise incidents",
      "Automated incident remediation and self-healing systems",
      "Full-stack observability with Datadog and Grafana",
      "Regular disaster recovery drills and chaos engineering",
    ],
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    name: "Architectural Discovery",
    desc: "We analyze your existing topology, dependencies, bottlenecks, and security posture.",
  },
  {
    step: "02",
    name: "Target State Blueprint",
    desc: "We design a modular, future-proof blueprint with clear milestones, deliverables, and SLAs.",
  },
  {
    step: "03",
    name: "Agile Sprint Execution",
    desc: "Our senior engineers integrate into your team, shipping production increments bi-weekly.",
  },
  {
    step: "04",
    name: "Continuous Reliability",
    desc: "Post-launch, our SRE team monitors and optimizes performance around the clock.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Enterprise Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mt-3">
            Comprehensive Capabilities for Complex Systems
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            From modern cloud engineering to autonomous intelligence, we deliver the technology foundations that enable market leaders to thrive.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {DETAILED_SERVICES.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm transition hover:shadow-xl flex flex-col lg:flex-row gap-8 items-start justify-between ${
                    index % 2 === 1 ? "bg-slate-50/70" : ""
                  }`}
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-700">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-base mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircleIcon className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="w-full lg:w-72 shrink-0 bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center">
                    <p className="text-xs uppercase font-bold tracking-wider text-slate-500">
                      Engagement Model
                    </p>
                    <p className="text-lg font-black text-slate-900 mt-1">
                      Dedicated Pod or Project
                    </p>
                    <p className="text-xs text-slate-500 mt-2 mb-4">
                      Staffed by senior architects with direct SLA guarantees.
                    </p>
                    <a
                      href="#quote"
                      className="w-full text-center py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5"
                    >
                      <span>Request Proposal</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Workflow */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              Our 4-Stage Delivery Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm"
              >
                <span className="text-3xl font-black text-blue-600 font-mono">{step.step}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-3 mb-2">{step.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="quote" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            title="Request Service Proposal"
            subtitle="Tell us which capabilities you require and our Lead Architect will prepare an evaluation."
            pageUrl="https://leadminoform.vercel.app/services"
            buttonText="Submit RFP / Quote Request"
          />
        </div>
      </section>
    </div>
  );
}
