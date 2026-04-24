import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,rgba(53,126,221,0.14),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)] px-4">
      <div className="grid max-w-md gap-4 rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-center shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">404</p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Page not found</h2>
      <p className="text-sm leading-6 text-slate-500">The page you requested does not exist.</p>
      <Link
        className="mx-auto rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition hover:bg-blue-700"
        to="/dashboard"
      >
        Go to dashboard
      </Link>
      </div>
    </div>
  );
}
