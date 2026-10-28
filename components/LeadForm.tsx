interface LeadFormProps {
  title?: string;
  subtitle?: string;
  pageUrl?: string;
  buttonText?: string;
  className?: string;
  compact?: boolean;
}

export default function LeadForm({
  title = "Get in Touch",
  subtitle = "Our enterprise consultants respond within 2 business hours.",
  pageUrl = "http://localhost:3000",
  buttonText = "Submit Enquiry",
  className = "",
  compact = false,
}: LeadFormProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 md:p-8 ${className}`}
    >
      <div className="mb-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 mb-2">
          Direct CRM Lead Capture
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* LeadMino Form Integration */}
      <form
        method="post"
        action="https://app.leadmino.com/public/forms/0VKKf9HgAKjw4jee"
        className="space-y-4"
      >
        <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          {/* Full Name */}
          <div>
            <label
              htmlFor={`name-${pageUrl}`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id={`name-${pageUrl}`}
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor={`email-${pageUrl}`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Business Email <span className="text-red-500">*</span>
            </label>
            <input
              id={`email-${pageUrl}`}
              type="email"
              name="email"
              placeholder="john@company.com"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>
        </div>

        <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
          {/* Phone */}
          <div>
            <label
              htmlFor={`phone-${pageUrl}`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id={`phone-${pageUrl}`}
              type="tel"
              name="phone"
              placeholder="+1 (555) 000-0000"
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor={`company-${pageUrl}`}
              className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
            >
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              id={`company-${pageUrl}`}
              type="text"
              name="companyName"
              placeholder="Acme Global Inc."
              required
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Message / Requirements */}
        <div>
          <label
            htmlFor={`notes-${pageUrl}`}
            className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5"
          >
            Project Scope / Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id={`notes-${pageUrl}`}
            name="notes"
            rows={compact ? 3 : 4}
            placeholder="Tell us about your organization's goals, timeline, and current tech stack..."
            required
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition resize-none"
          ></textarea>
        </div>

        {/* Spam Trap: strictly hidden from humans */}
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
        />

        {/* Page origin URL tracking for CRM attribution */}
        <input type="hidden" name="page_url" value={pageUrl} />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
        >
          <span>{buttonText}</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </form>

      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          256-bit Encrypted
        </span>
        <span>LeadMino CRM Verified</span>
      </div>
    </div>
  );
}
