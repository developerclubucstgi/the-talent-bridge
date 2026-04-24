export function LoginPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_top,rgba(53,126,221,0.14),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)] px-4">
      <form className="grid w-full max-w-md gap-5 rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">Auth</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Welcome back</h2>
        <p className="text-sm leading-6 text-slate-500">
          Replace this screen with your real authentication flow.
        </p>

        <label className="grid gap-2">
          <span className="text-sm text-slate-500">Email</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            type="email"
            placeholder="you@example.com"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm text-slate-500">Password</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
            type="password"
            placeholder="Enter your password"
          />
        </label>

        <button
          className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,99,235,0.24)] transition hover:bg-blue-700"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
