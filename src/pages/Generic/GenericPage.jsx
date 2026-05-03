/**
 * 
 * *  temporary reusable page shell for incomplete routes
 */

import { Link } from 'react-router-dom';

export function GenericPage({ eyebrow, title, description, ctaLabel = 'Return Home', ctaTo = '/' }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-3xl rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-[color:var(--border)] dark:bg-[color:var(--card)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:p-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-blue-600">{eyebrow}</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-[color:var(--foreground)] sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-500 dark:text-[color:var(--muted-foreground)] sm:text-lg">{description}</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link
            to={ctaTo}
            className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(37,99,235,0.28)] transition hover:brightness-110"
          >
            {ctaLabel}
          </Link>
          <Link
            to="/dashboard"
            className="rounded-2xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-[color:var(--border)] dark:text-[color:var(--foreground)] dark:hover:bg-white/5"
          >
            Open Dashboard
          </Link>
        </div>
      </div>
    </section>
  );
}
