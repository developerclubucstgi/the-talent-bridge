export function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-4 text-foreground">
      <form className="grid w-full max-w-md gap-5 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] backdrop-blur-sm">
        <p className="font-['Space_Grotesk'] text-xs font-bold uppercase tracking-[0.28em] text-primary">Auth</p>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">Welcome back</h2>
        <p className="text-sm leading-6 text-muted-foreground">
          Replace this screen with your real authentication flow.
        </p>

        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">Email</span>
          <input
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-ring"
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-muted-foreground">Password</span>
          <input
            className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-4 focus:ring-ring"
            type="password"
            placeholder="Enter your password"
          />
        </label>

        <button
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition hover:brightness-110"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
