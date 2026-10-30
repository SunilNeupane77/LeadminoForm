"use client";

import { useEffect, useState } from "react";
import { ShieldCheckIcon, ArrowRightIcon, LockIcon } from "@/components/Icons";

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  pageUrl?: string;
  buttonText?: string;
  className?: string;
  compact?: boolean;
}

const SERVICE_PILLS = [
  "Cloud Architecture",
  "Enterprise AI & RAG",
  "Zero-Trust Security",
  "Distributed Systems",
  "Managed 24/7 DevOps",
];

const TIMELINE_OPTIONS = [
  "Immediate (< 30 Days)",
  "Next Quarter (Q1/Q2)",
  "Technical Discovery / RFP",
];

export default function LeadForm({
  title = "Request Technical Assessment",
  subtitle = "Our Principal Architects respond within 2 business hours under mutual NDA.",
  pageUrl = "https://leadminoform.vercel.app",
  buttonText = "Schedule Strategic Call",
  className = "",
  compact = false,
}: LeadFormProps) {
  const [activeUrl, setActiveUrl] = useState(pageUrl);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Cloud Architecture"]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("Immediate (< 30 Days)");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    userNotes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      if (hostname.includes("vercel.app") && hostname !== "leadminoform.vercel.app") {
        setActiveUrl(`https://leadminoform.vercel.app${window.location.pathname}`);
      } else {
        setActiveUrl(window.location.href);
      }
    }
  }, [pageUrl]);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  // Calculate completion percentage
  const filledCount = [
    formData.name.trim(),
    formData.email.trim(),
    formData.phone.trim(),
    formData.companyName.trim(),
    formData.userNotes.trim(),
  ].filter(Boolean).length;
  const progressPercent = Math.round((filledCount / 5) * 100);

  // Combined notes combining chosen services, timeline, and user text
  const combinedNotes = `[Focus Area: ${selectedServices.join(", ")}] | [Timeline: ${selectedTimeline}]\n\nRequirements:\n${formData.userNotes || "General architecture assessment requested."}`;

  return (
    <div
      className={`bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 sm:p-8 relative overflow-hidden ${className}`}
    >
      {/* Top Gradient Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400 transition-all duration-300"
          style={{ width: `${Math.max(progressPercent, 15)}%` }}
        ></div>
      </div>

      {/* Header */}
      <div className="mb-6 pt-1">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/70">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
            Direct CRM Lead Pipeline
          </div>
          <span className="text-[11px] font-bold text-slate-400 font-mono">
            {progressPercent}% Complete
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Service Focus Area Selector (Interactive Pills) */}
      {!compact && (
        <div className="mb-5 pb-5 border-b border-slate-100">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            1. Select Primary Architectural Focus
          </label>
          <div className="flex flex-wrap gap-1.5">
            {SERVICE_PILLS.map((service) => {
              const isSelected = selectedServices.includes(service);
              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-500/25 ring-2 ring-blue-600/30"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {isSelected ? "✓ " : "+ "}
                  {service}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* LeadMino Form Integration */}
      <form
        id="lead-capture-form"
        method="post"
        action="https://app.leadmino.com/public/forms/Rbe09fPRLbXp1fl0"
        onSubmit={() => setIsSubmitting(true)}
        className="space-y-4 lead-capture-form"
      >
        <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          {/* Full Name */}
          <div>
            <label
              htmlFor={`name-${pageUrl}`}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                id={`name-${pageUrl}`}
                type="text"
                name="name"
                placeholder="e.g. Johnathan Vance"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
              />
            </div>
          </div>

          {/* Corporate Email */}
          <div>
            <label
              htmlFor={`email-${pageUrl}`}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Corporate Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                id={`email-${pageUrl}`}
                type="email"
                name="email"
                placeholder="vance@enterprise.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
              />
            </div>
          </div>
        </div>

        <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          {/* Phone */}
          <div>
            <label
              htmlFor={`phone-${pageUrl}`}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <input
                id={`phone-${pageUrl}`}
                type="tel"
                name="phone"
                placeholder="+1 (555) 019-2834"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor={`company-${pageUrl}`}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Organization / Company <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              <input
                id={`company-${pageUrl}`}
                type="text"
                name="companyName"
                placeholder="Acme Global Inc."
                required
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Timeline Preference */}
        {!compact && (
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Target Rollout Timeline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {TIMELINE_OPTIONS.map((timeline) => {
                const isSelected = selectedTimeline === timeline;
                return (
                  <button
                    key={timeline}
                    type="button"
                    onClick={() => setSelectedTimeline(timeline)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium text-center border transition-all cursor-pointer ${
                      isSelected
                        ? "border-blue-600 bg-blue-50 text-blue-900 font-bold"
                        : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {timeline}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Message / Scope */}
        <div>
          <div className="flex justify-between items-center mb-1">
            <label
              htmlFor={`notes-${pageUrl}`}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Project Scope & Architecture Requirements <span className="text-red-500">*</span>
            </label>
            <span className="text-[11px] text-slate-400 font-mono">
              {formData.userNotes.length} chars
            </span>
          </div>
          <textarea
            id={`notes-${pageUrl}`}
            rows={compact ? 3 : 4}
            placeholder="Describe your current tech stack, concurrency goals, or migration timeline..."
            required
            value={formData.userNotes}
            onChange={(e) => setFormData({ ...formData, userNotes: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner resize-none"
          ></textarea>

          {/* Hidden actual notes input submitted to LeadMino with complete details */}
          <input type="hidden" name="notes" value={combinedNotes} />
        </div>

        {/* Spam Trap Field: Strictly hidden from humans */}
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
        />

        {/* Origin Tracking URL for LeadMino Attribution */}
        <input type="hidden" name="page_url" value={activeUrl} />

        {/* Enhanced Submit Button - Guaranteed Never Blank */}
        <div className="pt-2">
          <button
            type="submit"
            id="lead-submit-btn"
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              minHeight: "56px",
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold py-4 px-6 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group text-base"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2.5 text-white font-bold" style={{ color: "#ffffff" }}>
                <svg className="animate-spin w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                <span>Transmitting to LeadMino...</span>
              </span>
            ) : (
              <span className="flex items-center gap-2 text-white font-bold" style={{ color: "#ffffff" }}>
                <span>{buttonText}</span>
                <ArrowRightIcon className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              </span>
            )}
          </button>
        </div>
      </form>

      {/* Security Footer */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-500">
        <span className="flex items-center gap-1.5 text-slate-700">
          <ShieldCheckIcon className="w-4 h-4 text-emerald-500" />
          SOC 2 Type II Encrypted
        </span>
        <span className="flex items-center gap-1 text-slate-400">
          <LockIcon className="w-3.5 h-3.5" />
          Strict Mutual NDA Protected
        </span>
      </div>
    </div>
  );
}
