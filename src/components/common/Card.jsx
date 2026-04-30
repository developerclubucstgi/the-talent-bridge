export function Card({ title, children }) {
  return (
    <section className="grid gap-5 rounded-[1.75rem] border border-border bg-card p-6 text-card-foreground shadow-[var(--shadow-elevated)] backdrop-blur-sm">
      {title ? <h3 className="text-lg font-semibold text-card-foreground">{title}</h3> : null}
      {children}
    </section>
  );
}
