import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
        404 Error
      </span>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-slate-600 max-w-md mb-8 text-sm">
        The page you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow transition"
      >
        Return to Homepage
      </Link>
    </div>
  );
}
