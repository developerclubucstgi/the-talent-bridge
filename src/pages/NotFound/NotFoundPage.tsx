import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-4">
      <div className="grid max-w-md gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-elevated)] backdrop-blur-sm">
        <p className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.28em] text-primary">404</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">Page not found</h2>
        <p className="text-sm leading-6 text-muted-foreground">The page you requested does not exist.</p>
        <Link
          className="mx-auto rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
          to="/dashboard"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
}
