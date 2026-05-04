import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { APP_NAME } from '../../constants/app';
import { useTheme } from '../../hooks/useTheme';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Profile', to: '/profiles' },
  { label: 'How to', to: '/how-to' },
  { label: 'Templates', to: '/templates' },
];

function GlobeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm5.95 8.25h-2.8a14.7 14.7 0 0 0-1.3-5.03 7.54 7.54 0 0 1 4.1 5.03ZM12 4.54c.9 1.03 1.62 3.03 1.82 5.21h-3.64c.2-2.18.92-4.18 1.82-5.2ZM4.05 11.25a7.54 7.54 0 0 1 4.1-5.03 14.7 14.7 0 0 0-1.3 5.03h-2.8Zm0 1.5h2.8c.14 1.8.58 3.5 1.3 5.03a7.54 7.54 0 0 1-4.1-5.03Zm5.77 0h4.36c-.2 2.18-.92-4.18-1.82 5.2-.9-1.02-1.62-3.02-1.82-5.2Zm0-1.5c.2-2.18.92-4.18 1.82-5.2.9 1.02 1.62 3.02 1.82 5.2H9.82Zm4.03 6.53a14.7 14.7 0 0 0 1.3-5.03h2.8a7.54 7.54 0 0 1-4.1 5.03Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path
        d="M13.589 21.659c-3.873 1.038-8.517-.545-10.98-3.632a1 1 0 0 1 .751-1.623c3.984-.118 6.662-1.485 8.17-4.098 1.51-2.613 1.354-5.616-.535-9.125a1 1 0 0 1 1.03-1.463c3.904.59 7.597 3.82 8.635 7.694 1.43 5.334-1.737 10.818-7.071 12.247z"
        fill="currentColor"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path
        d="M12 1.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm0 17.75a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75ZM4.22 4.22a.75.75 0 0 1 1.06 0l1.42 1.42a.75.75 0 1 1-1.06 1.06L4.22 5.28a.75.75 0 0 1 0-1.06Zm12.9 12.9a.75.75 0 0 1 1.06 0l1.42 1.42a.75.75 0 0 1-1.06 1.06l-1.42-1.42a.75.75 0 0 1 0-1.06ZM1.75 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm17.75 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM4.22 19.78a.75.75 0 0 1 0-1.06l1.42-1.42a.75.75 0 1 1 1.06 1.06l-1.42 1.42a.75.75 0 0 1-1.06 0Zm12.9-12.9a.75.75 0 0 1 0-1.06l1.42-1.42a.75.75 0 0 1 1.06 1.06l-1.42 1.42a.75.75 0 0 1-1.06 0ZM12 6.25A5.75 5.75 0 1 0 17.75 12 5.76 5.76 0 0 0 12 6.25Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.32 0-6 2.02-6 4.5 0 .28.22.5.5.5h11a.5.5 0 0 0 .5-.5C18 16.02 15.32 14 12 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path
        d="M4 7.25A.75.75 0 0 1 4.75 6.5h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 7.25Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12.5Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 17.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
      <path
        d="M6.22 6.22a.75.75 0 0 1 1.06 0L12 10.94l4.72-4.72a.75.75 0 0 1 1.06 1.06L13.06 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L12 13.06l-4.72 4.72a.75.75 0 0 1-1.06-1.06L10.94 12 6.22 7.28a.75.75 0 0 1 0-1.06Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TopNavBar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const menuToggleRef = useRef(null);
  const brand = APP_NAME.replace(/\s+/g, '_').toUpperCase();
  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon;
  const nextThemeLabel = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      const target = event.target;

      if (menuRef.current?.contains(target) || menuToggleRef.current?.contains(target)) {
        return;
      }

      setMenuOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className={`sticky top-0 z-50 border-b border-border bg-nav text-nav-foreground backdrop-blur-xl transition-shadow duration-150 ${isScrolled ? 'shadow-[var(--shadow-elevated)]' : ''}`}>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8 md:h-[4.5rem] md:flex-row md:items-center md:gap-4 md:py-0">
        <div className="flex min-w-0 items-center justify-between gap-3 md:flex-none md:justify-start">
          <NavLink
            to="/"
            className="bg-gradient-to-r from-primary via-primary to-nav-foreground bg-clip-text text-base font-black tracking-[0.12em] text-transparent sm:text-lg lg:text-[1.75rem]"
          >
            {brand}
          </NavLink>

          <button
            ref={menuToggleRef}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition hover:bg-accent hover:text-primary md:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex md:px-8 lg:gap-7">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            const className = [
              'cursor-pointer border-b pb-1 text-[0.82rem] font-semibold uppercase tracking-[0.08em] transition-colors lg:text-[0.92rem]',
              isActive
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-nav-foreground',
            ].join(' ');

            return (
              <NavLink key={item.to} to={item.to} className={className}>
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <div className="hidden items-center justify-end md:flex md:gap-1.5 sm:gap-3.5 md:flex-none">
          <button
            type="button"
            className="hidden h-10 flex-col cursor-pointer items-center justify-center rounded-lg px-2 text-muted-foreground transition hover:bg-accent hover:text-primary sm:flex"
          >
            <GlobeIcon />
          </button>

          <button
            type="button"
            aria-label={`Switch to ${nextThemeLabel} mode`}
            onClick={toggleTheme}
            className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-muted-foreground transition hover:bg-accent hover:text-primary sm:flex"
          >
            <ThemeIcon />
          </button>

          <button
            type="button"
            aria-label="Profile"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-primary transition hover:bg-accent"
          >
            <ProfileIcon />
          </button>
        </div>

        {menuOpen ? (
          <>
            <div
              ref={menuRef}
              id="mobile-nav-menu"
              className="absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border border-border bg-background p-3 shadow-[var(--shadow-elevated)]"
            >
            <nav className="grid gap-1.5">
              {navItems.map((item) => {
                const isActive = location.pathname === item.to;
                const className = [
                  'flex items-center justify-between rounded-xl border px-3 py-3 font-[\'Space_Grotesk\'] text-[11px] uppercase tracking-[0.28em] transition-colors cursor-pointer bg-background',
                  isActive
                    ? 'border-primary bg-primary/15 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/60 hover:bg-accent hover:text-nav-foreground',
                ].join(' ');

                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={className}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                );
              })}
            </nav>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm text-muted-foreground cursor-pointer transition hover:border-primary/60 hover:bg-accent hover:text-nav-foreground"
              >
                <GlobeIcon />
                <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.28em]">EN/MM</span>
              </button>

              <button
                type="button"
                aria-label={`Switch to ${nextThemeLabel} mode`}
                onClick={toggleTheme}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm text-muted-foreground cursor-pointer transition hover:border-primary/60 hover:bg-accent hover:text-nav-foreground"
              >
                <ThemeIcon />
                <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.28em]">
                  {nextThemeLabel}
                </span>
              </button>

              <button
                type="button"
                aria-label="Profile"
                className="col-span-2 flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-sm text-primary cursor-pointer transition hover:border-primary/60 hover:bg-accent"
              >
                <ProfileIcon />
                <span className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.28em]">Profile</span>
              </button>
            </div>
            </div>
          </>
        ) : null}
      </div>
    </header>
  );
}
