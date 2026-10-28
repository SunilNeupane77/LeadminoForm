import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ApexFlow Technologies",
  description:
    "Learn about ApexFlow Technologies, our mission, executive leadership, and global footprint delivering mission-critical enterprise engineering.",
};

const LEADERSHIP = [
  {
    name: "Dr. Alexander Wright",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Former VP of Cloud Infrastructure at VMware. Over 20 years guiding Fortune 500 digital transformation strategies.",
    image: "AW",
  },
  {
    name: "Maya Chen",
    role: "Chief Technology Officer",
    bio: "Ex-Google Distributed Systems Lead. Author of two seminal publications on high-concurrency event-driven architectures.",
    image: "MC",
  },
  {
    name: "David K. Sterling",
    role: "Chief Information Security Officer",
    bio: "Former DoD Cybersecurity Consultant. Specializes in zero-trust enterprise frameworks and multi-region regulatory compliance.",
    image: "DS",
  },
  {
    name: "Sarah Lindqvist",
    role: "Head of AI & Machine Intelligence",
    bio: "Pioneered production RAG pipelines and autonomous agent deployments for financial services and healthcare systems.",
    image: "SL",
  },
];

const VALUES = [
  {
    icon: "🎯",
    title: "Engineering Rigor",
    desc: "We write maintainable, tested, and self-healing systems. No shortcuts, no fragile hacks.",
  },
  {
    icon: "🛡️",
    title: "Security Without Compromise",
    desc: "Every line of code and infrastructure config undergoes automated vulnerability analysis and strict access scoping.",
  },
  {
    icon: "⚡",
    title: "Radical Velocity",
    desc: "We reduce enterprise development cycles from quarters to weeks through reusable accelerators and autonomous tooling.",
  },
  {
    icon: "🤝",
    title: "Obsessive Client Partnership",
    desc: "We integrate directly with your engineering teams, transferring knowledge and mentoring along the journey.",
  },
];

const OFFICES = [
  { city: "New York", address: "450 Lexington Ave, Suite 2400", country: "United States", phone: "+1 (212) 555-0199" },
  { city: "London", address: "30 St Mary Axe, Floor 18", country: "United Kingdom", phone: "+44 20 7946 0912" },
  { city: "Singapore", address: "1 Marina Boulevard, Level 20", country: "Singapore", phone: "+65 6789 0123" },
  { city: "Tokyo", address: "Roppongi Hills Mori Tower 28F", country: "Japan", phone: "+81 3 5555 0142" },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
            About ApexFlow Technologies
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
            Pioneering the Future of Enterprise Systems
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Founded by veteran cloud architects and systems engineers, ApexFlow was created to eliminate the friction between enterprise vision and reliable, scalable technology execution.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Story
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Architecting Confidence in an Uncertain Digital World
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                In 2018, enterprise technology faced a crisis: legacy monolithic stacks were buckling under real-time demand, while modern cloud tooling was becoming overly complex and fragile.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                ApexFlow was formed to bring mathematical precision and relentless engineering rigor to digital modernization. Today, we partner with top tier enterprises worldwide, powering critical infrastructure that processes billions in transactions daily.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow transition"
                >
                  Partner With Us →
                </Link>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-4xl font-extrabold text-blue-600">2018</span>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Founded</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-4xl font-extrabold text-blue-600">180+</span>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Engineers & Architects</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-4xl font-extrabold text-blue-600">4</span>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Global Tech Hubs</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <span className="text-4xl font-extrabold text-blue-600">100%</span>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Enterprise Retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Guiding Principles
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              The Standards We Uphold Every Day
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Executive Leadership
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
              Visionary Systems Thinkers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((lead) => (
              <div
                key={lead.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-500 text-white font-extrabold text-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {lead.image}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{lead.name}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{lead.role}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{lead.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Worldwide Reach
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Global Support, Local Accountability
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2"
              >
                <div className="text-blue-400 font-bold text-lg">{office.city}</div>
                <p className="text-xs text-slate-300">{office.address}</p>
                <p className="text-xs text-slate-400">{office.country}</p>
                <p className="text-xs font-mono text-blue-300 pt-2">{office.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
