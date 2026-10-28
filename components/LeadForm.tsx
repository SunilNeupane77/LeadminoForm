interface LeadFormProps {
  title?: string;
  subtitle?: string;
  pageUrl?: string;
  buttonText?: string;
  className?: string;
  compact?: boolean;
}

export default function LeadForm({
  title = "Request Technical Assessment",
  subtitle = "Our Principal Architects respond within 2 business hours under mutual NDA.",
  pageUrl = "http://localhost:3000",
  buttonText = "Schedule Strategic Call",
  className = "",
  compact = false,
}: LeadFormProps) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-2xl border border-slate-200/90 p-6 sm:p-8 relative overflow-hidden ${className}`}
    >
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-400"></div>

      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60 mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
          Direct CRM Lead Pipeline
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* LeadMino Form Integration */}
      <form
        id="lead-capture-form"
        method="post"
        action="https://app.leadmino.com/public/forms/v23VKJBQh963B-ln"
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
            <input
              id={`name-${pageUrl}`}
              type="text"
              name="name"
              placeholder="e.g. Johnathan Vance"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
            />
          </div>

          {/* Business Email */}
          <div>
            <label
              htmlFor={`email-${pageUrl}`}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Corporate Email <span className="text-red-500">*</span>
            </label>
            <input
              id={`email-${pageUrl}`}
              type="email"
              name="email"
              placeholder="vance@enterprise.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
            />
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
            <input
              id={`phone-${pageUrl}`}
              type="tel"
              name="phone"
              placeholder="+1 (555) 019-2834"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor={`company-${pageUrl}`}
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
            >
              Organization / Company <span className="text-red-500">*</span>
            </label>
            <input
              id={`company-${pageUrl}`}
              type="text"
              name="companyName"
              placeholder="Acme Global Inc."
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner"
            />
          </div>
        </div>

        {/* Message / Scope */}
        <div>
          <label
            htmlFor={`notes-${pageUrl}`}
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
          >
            Project Scope & Infrastructure Needs <span className="text-red-500">*</span>
          </label>
          <textarea
            id={`notes-${pageUrl}`}
            name="notes"
            rows={compact ? 3 : 4}
            placeholder="Describe your current tech stack, concurrency goals, or migration timeline..."
            required
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white focus:border-transparent transition duration-150 shadow-inner resize-none"
          ></textarea>
        </div>

        {/* Spam Trap Field: Invisible to real humans */}
        <input
          type="text"
          name="website_url"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px" }}
        />

        {/* Origin Tracking URL for LeadMino Attribution */}
        <input type="hidden" name="page_url" value={pageUrl} />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 active:scale-[0.99] text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group text-sm sm:text-base"
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
              strokeWidth={2.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </form>

      {/* Security Footer */}
      <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
        <span className="flex items-center gap-1.5 text-slate-600">
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          SOC 2 Type II Encrypted
        </span>
        <span className="text-slate-400">Strict Mutual NDA Protected</span>
      </div>
    </div>
  );
}
