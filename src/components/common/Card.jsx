export function Card({ title, children }) {
  return (
    <section className="grid gap-5 rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      {title ? <h3 className="text-lg font-semibold text-slate-900">{title}</h3> : null}
      {children}
    </section>
  );
}
