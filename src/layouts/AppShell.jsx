import { NavLink, Outlet } from 'react-router-dom';
import { APP_NAME } from '../constants/app';

const navItems = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Login', to: '/login' },
];

export function AppShell() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(53,126,221,0.14),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)] lg:grid lg:grid-cols-[280px_1fr]">
      <aside className="flex flex-col justify-between gap-8 border-b border-slate-200/80 bg-white/75 p-6 backdrop-blur-xl lg:border-r lg:border-b-0 lg:p-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-600">Starter</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">{APP_NAME}</h1>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
            A clean React JS template for API-driven apps.
          </p>
        </div>

        <nav className="grid gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'rounded-xl px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'bg-blue-50 text-primary'
                    : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="p-5 lg:p-8">
        <Outlet />
      </main>
    </div>
  );
}
