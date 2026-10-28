export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
        <div className="mb-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 mb-2">
            LeadMino Local Testing
          </span>
          <h1 className="text-2xl font-bold text-slate-900">Contact Us</h1>
          <p className="text-sm text-slate-500 mt-1">
            Fill out the form below to test lead capture on localhost.
          </p>
        </div>

        {/* LeadMino Form */}
        <form
          method="post"
          action="https://app.leadmino.com/public/forms/0VKKf9HgAKjw4jee"
          className="space-y-4"
        >
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. John Doe"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. john@example.com"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="e.g. +1 234 567 8900"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition"
            />
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Company <span className="text-red-500">*</span>
            </label>
            <input
              id="companyName"
              type="text"
              name="companyName"
              placeholder="e.g. Acme Corp"
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition"
            />
          </div>

          {/* Message / Notes */}
          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              placeholder="Your enquiry or notes..."
              required
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition resize-none"
            ></textarea>
          </div>

          {/* Spam Trap - hidden from real users */}
          <input
            type="text"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px" }}
          />

          {/* Origin Page URL */}
          <input
            type="hidden"
            name="page_url"
            value="http://localhost:3000"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg shadow transition duration-150 ease-in-out cursor-pointer mt-2"
          >
            Send
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
          Powered by LeadMino Form Integration
        </div>
      </div>
    </div>
  );
}
