export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
      {/* AWS */}
      <div className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-900 transition">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M18.74 15.22c-.65-.48-1.57-.75-2.61-.75-1.92 0-3.32.96-3.32 2.39 0 1.34 1.14 2.14 2.82 2.14 1.25 0 2.22-.44 2.89-1.22v.97h1.61v-5.06h-1.39v1.53zm-.08 1.83c-.45.54-1.12.83-1.92.83-1.07 0-1.74-.53-1.74-1.36 0-.89.77-1.4 2.01-1.4.67 0 1.24.13 1.65.37v1.56zM8.2 14.54l-1.94 4.88H4.6L2.3 8.35h1.79l1.45 7.15 1.76-4.47h1.43l1.76 4.47 1.45-7.15h1.79l-2.3 11.07H7.72l-1.92-4.88zM22.4 17.65c-.83 1.08-2.18 1.72-3.83 1.72-1.97 0-3.41-.95-3.41-2.43 0-1.63 1.6-2.5 3.73-2.5.94 0 1.78.16 2.37.42v-.5c0-.98-.74-1.53-2.07-1.53-.98 0-1.89.29-2.58.82l-.74-1.1c.96-.75 2.27-1.15 3.65-1.15 2.27 0 3.44 1.08 3.44 2.97v5.29h-1.61v-1.01h1.05z" />
        </svg>
        <span className="text-base tracking-tight font-extrabold">AWS</span>
      </div>

      {/* Kubernetes */}
      <div className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-900 transition">
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L3.5 6.9v9.8L12 21.6l8.5-4.9V6.9L12 2zm-.9 2.1l6.7 3.8-3.1 1.8-6.7-3.8 3.1-1.8zm-7.6 4.3l6.7 3.8v3.6l-6.7-3.8V8.4zm7.6 11.1l-6.7-3.8 3.1-1.8 6.7 3.8-3.1 1.8zm1.8-4.3v-3.6l6.7-3.8v3.6l-6.7 3.8z" />
        </svg>
        <span className="text-base tracking-tight font-extrabold">Kubernetes</span>
      </div>

      {/* Snowflake */}
      <div className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-900 transition">
        <svg className="w-7 h-7 stroke-current fill-none" strokeWidth={1.75} viewBox="0 0 24 24">
          <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" strokeLinecap="round" />
        </svg>
        <span className="text-base tracking-tight font-extrabold">Snowflake</span>
      </div>

      {/* Stripe */}
      <div className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-900 transition">
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.97 16.14.47 13.91.47c-5.836 0-9.76 3.09-9.76 8.358 0 4.417 3.109 6.22 7.378 7.697 2.378.847 3.195 1.547 3.195 2.502 0 1.01-.89 1.57-2.311 1.57-2.673 0-5.592-1.189-7.382-2.193l-.934 5.656c1.942.923 4.605 1.48 7.319 1.48 6.136 0 10.038-2.929 10.038-8.22 0-4.63-3.08-6.417-7.487-8.17z" />
        </svg>
        <span className="text-base tracking-tight font-extrabold">Stripe</span>
      </div>

      {/* Datadog */}
      <div className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-900 transition">
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        <span className="text-base tracking-tight font-extrabold">Datadog</span>
      </div>

      {/* Vercel */}
      <div className="flex items-center gap-2 font-bold text-slate-400 hover:text-slate-900 transition">
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 1L24 22H0L12 1Z" />
        </svg>
        <span className="text-base tracking-tight font-extrabold">Vercel</span>
      </div>
    </div>
  );
}
