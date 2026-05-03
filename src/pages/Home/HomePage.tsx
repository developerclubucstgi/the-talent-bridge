import { Link } from 'react-router-dom';
import heroOfficeImage from '../../assets/home/hero-office.svg';
import guildKeyboardImage from '../../assets/home/guild-keyboard.svg';
import guildMarketingImage from '../../assets/home/guild-marketing.svg';
import artisanJulianImage from '../../assets/home/artisan-julian.svg';
import artisanMayaImage from '../../assets/home/artisan-maya.svg';
import artisanDavidImage from '../../assets/home/artisan-david.svg';

type Guild = {
  title: string;
  description: string;
  span: string;
  tone: string;
  accent: string;
  text: string;
  badge?: string;
  image?: string;
};

type Artisan = {
  name: string;
  role: string;
  rating: string;
  summary: string;
  chips: string[];
  cta: string;
  image: string;
  featured?: boolean;
};

type PortraitCardProps = {
  artisan: Artisan;
};

const guilds: Guild[] = [
  {
    title: 'Systems & Engineering',
    description: 'Build the digital backbone of tomorrow.',
    badge: '142 Openings',
    span: 'lg:col-span-2 lg:row-span-2',
    tone: 'from-[#06111f] via-[#0b2745] to-[#0e1c37]',
    accent: 'bg-[radial-gradient(circle_at_20%_20%,rgba(63,229,255,0.75),transparent_18%),radial-gradient(circle_at_60%_75%,rgba(16,34,70,0.24),transparent_35%)]',
    text: 'text-white',
    image: guildKeyboardImage,
  },
  {
    title: 'Creative Direction',
    description: 'Visual storytellers and brand architects.',
    span: 'lg:col-span-1',
    tone: 'from-white via-[#fbfdff] to-[#eef4fb]',
    accent: '',
    text: 'text-slate-950',
  },
  {
    title: 'C-Suite & Strategy',
    description: 'Executive-level placement.',
    badge: 'Latest',
    span: 'lg:col-span-1',
    tone: 'from-[#071d66] via-[#082764] to-[#0b1740]',
    accent: '',
    text: 'text-white',
  },
  {
    title: 'Growth & Marketing',
    description: 'Editorial content, performance growth, and social architecture.',
    span: 'lg:col-span-2',
    tone: 'from-[#48556a] via-[#6b7c9a] to-[#263451]',
    accent: 'bg-[radial-gradient(circle_at_75%_50%,rgba(250,154,86,0.25),transparent_20%),radial-gradient(circle_at_18%_80%,rgba(255,255,255,0.2),transparent_30%)]',
    text: 'text-white',
    image: guildMarketingImage,
  },
];

const artisans: Artisan[] = [
  {
    name: 'Julian Voss',
    role: 'Senior Product Designer',
    rating: '4.0',
    summary: 'Expert in design systems and accessible fintech experiences. 8+ years at top-tier startups.',
    chips: ['UI/UX', 'Strategy', 'Design Ops'],
    cta: 'View Portfolio',
    image: artisanJulianImage,
  },
  {
    name: 'Maya Chen',
    role: 'Lead Growth Engineer',
    rating: '5.0',
    summary: 'Bridging the gap between performance marketing and complex React architecture.',
    chips: ['React', 'Analytics', 'Python'],
    cta: 'Request Interview',
    featured: true,
    image: artisanMayaImage,
  },
  {
    name: 'David Aris',
    role: 'Full-Stack Architect',
    rating: '4.8',
    summary: 'Specializing in scalable cloud infrastructure and serverless applications for scale.',
    chips: ['AWS', 'Golang', 'NoSQL'],
    cta: 'View Portfolio',
    image: artisanDavidImage,
  },
];

function SearchIcon() {
  return (
   <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  );
}

function LocationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M12 2.75a6.75 6.75 0 0 0-6.75 6.75c0 4.92 5.34 10.94 6.17 11.85a.75.75 0 0 0 1.1 0c.83-.91 6.17-6.93 6.17-11.85A6.75 6.75 0 0 0 12 2.75Zm0 9.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M13.22 5.97a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.97-3.97H4.75a.75.75 0 0 1 0-1.5H17.2l-3.97-3.97a.75.75 0 0 1 0-1.06Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M12 2.5a.75.75 0 0 1 .74.63l.82 5.08 5.08.82a.75.75 0 0 1 0 1.48l-5.08.82-.82 5.08a.75.75 0 0 1-1.48 0l-.82-5.08-5.08-.82a.75.75 0 0 1 0-1.48l5.08-.82.82-5.08A.75.75 0 0 1 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="m12 3.5 2.5 5.07 5.6.82-4.05 3.95.96 5.58L12 16.3l-5.01 2.62.96-5.58-4.05-3.95 5.6-.82L12 3.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroPortrait() {
  return (
    <div className="relative h-[430px] overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(7,18,38,0.22)]">
      <img src={heroOfficeImage} alt="Professional by a city window" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(6,17,32,0.12))]" />
    </div>
  );
}

function PortraitCard({ artisan }: PortraitCardProps) {
  return (
    <article
      className={`rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-[color:var(--border)] dark:bg-[color:var(--card)] dark:shadow-[0_24px_60px_rgba(0,0,0,0.28)] ${artisan.featured ? 'ring-1 ring-blue-200 dark:ring-blue-400/35' : ''}`}
    >
      <div className="relative h-60 overflow-hidden rounded-[18px] bg-slate-100 dark:bg-slate-900">
        <img src={artisan.image} alt={artisan.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.22))]" />
        {artisan.featured ? (
          <span className="absolute right-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
            Top Curator Choice
          </span>
        ) : (
          <span className="absolute right-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-700 dark:bg-slate-950/75 dark:text-slate-100">
            Available Now
          </span>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-950 dark:text-[color:var(--foreground)]">{artisan.name}</h3>
          <p className="mt-1 text-sm font-medium text-blue-600">{artisan.role}</p>
        </div>
        <div className="mt-1 flex items-center gap-1 text-sm font-semibold text-slate-500 dark:text-[color:var(--muted-foreground)]">
          <span className="text-emerald-400">
            <StarIcon />
          </span>
          {artisan.rating}
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-[color:var(--muted-foreground)]">{artisan.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {artisan.chips.map((chip) => (
          <span
            key={chip}
            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:border-[color:var(--border)] dark:bg-white/5 dark:text-[color:var(--muted-foreground)]"
          >
            {chip}
          </span>
        ))}
      </div>

      <button
        type="button"
        className={`mt-6 w-full rounded-2xl border px-4 py-3 text-sm font-semibold transition ${artisan.featured ? 'border-blue-600 bg-blue-600 text-white shadow-[0_20px_40px_rgba(37,99,235,0.28)] hover:brightness-110' : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50 dark:border-[color:var(--border)] dark:bg-transparent dark:text-[color:var(--foreground)] dark:hover:bg-white/5'}`}
      >
        {artisan.cta}
      </button>
    </article>
  );
}

export function HomePage() {
  return (
    <div className="pb-12 text-slate-950 dark:text-[color:var(--foreground)]">
      <section className="grid gap-14 pt-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)] lg:items-center lg:pt-14">
        <div className="max-w-xl">
          <div className="inline-flex rounded-full bg-[#bdf2ee] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#0f6d6a]">
            Editorial Excellence In Talent
          </div>

          <h1 className="mt-7 text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-[4.6rem]">
            <span className="block text-slate-950 dark:text-(--foreground)">The Architect of</span>
            <span className="block text-[#2563eb] dark:text-(--primary)">Your Future.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-500 dark:text-(--muted-foreground) sm:text-lg">
            Moving beyond simple job boards, The Talent Bridge leverages architectural design and editorial
            strategy to place elite talent in world-class environments.
          </p>

          <div className="mt-9 grid w-full max-w-[34.5rem] gap-1.5 rounded-[16px] border border-slate-200 bg-white p-1.5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-(--border) dark:bg-(--card) dark:shadow-[0_18px_40px_rgba(0,0,0,0.32)] sm:grid-cols-[1.7fr_1fr_auto]">
            <label className="grid min-w-0 grid-cols-[14px_minmax(0,1fr)] items-center gap-3 rounded-[10px] border border-slate-300 bg-white px-4 py-3 text-[13px] text-slate-600 dark:border-white/5 dark:bg-[#132138e0] dark:text-white/45">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search curated roles or creators."
                className="w-full border-0 bg-transparent p-0 text-[13px] text-slate-900 dark:text-white outline-none placeholder:opacity-100 placeholder:text-[13px] placeholder:text-slate-500 dark:placeholder:text-white/45"
              />
            </label>

            <label className="grid min-w-0 grid-cols-[14px_minmax(0,1fr)] items-center gap-3 rounded-[10px] border border-slate-300 bg-gray-500 px-4 py-3 text-[13px] text-slate-600 dark:border-white/5 dark:bg-[#132138e0] dark:text-white/45">
              <LocationIcon />
              <input
                type="text"
                placeholder="Location"
                className="w-full border-0 bg-transparent p-0 text-[13px] text-slate-900 outline-none placeholder:opacity-100 placeholder:text-[13px] placeholder:text-slate-500 dark:text-white dark:placeholder:text-white/45"
              />
            </label>

            <button
              type="button"
              className="rounded-[10px] bg-[#2563eb] px-6 py-3 text-[13px] font-semibold text-white shadow-[0_18px_30px_rgba(37,99,235,0.24)] transition hover:brightness-110"
            >
              Find Now
            </button>
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <HeroPortrait />

          <div className="absolute -bottom-8 left-0 max-w-[260px] rounded-[22px] border border-slate-200 bg-white/96 p-4 shadow-[0_24px_50px_rgba(15,23,42,0.16)] backdrop-blur dark:border-[color:var(--border)] dark:bg-[color:var(--card)]">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#bdf2ee] text-[#0f6d6a]">
                <SparkIcon />
              </span>
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-[color:var(--foreground)]">Curated Pick</p>
                <p className="text-[11px] text-slate-400 dark:text-[color:var(--muted-foreground)]">Design Architect</p>
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-[color:var(--muted-foreground)]">"The portfolio approach changed everything."</p>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-[color:var(--foreground)]">Explore Guilds</h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 dark:text-[color:var(--muted-foreground)]">
              Browse our specialized networks of industry leaders and visionary creators.
            </p>
          </div>

          <Link
            to="/profiles"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition hover:text-blue-700"
          >
            View all
            <ArrowRightIcon />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {guilds.map((guild) => (
            <article
              key={guild.title}
              className={`relative overflow-hidden rounded-[24px] bg-gradient-to-br ${guild.tone} ${guild.span} min-h-[220px] p-6 shadow-[0_24px_50px_rgba(15,23,42,0.08)]`}
            >
              {guild.image ? (
                <img
                  src={guild.image}
                  alt={guild.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : null}
              {guild.image ? <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,19,0.08),rgba(4,10,19,0.46))]" /> : null}
              {guild.accent ? <div className={`absolute inset-0 ${guild.accent}`} /> : null}
              <div className={`relative flex h-full flex-col justify-between ${guild.text}`}>
                <div className="flex items-start justify-between gap-4">
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.24em] ${guild.text === 'text-white' ? 'text-white/80' : 'text-emerald-500'}`}>
                    {guild.badge || 'Guild'}
                  </span>
                </div>
                <div>
                  <h3 className="text-[1.7rem] font-semibold leading-tight tracking-[-0.04em]">{guild.title}</h3>
                  <p className={`mt-3 max-w-sm text-sm leading-6 ${guild.text === 'text-white' ? 'text-white/78' : 'text-slate-500'}`}>
                    {guild.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-32">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-[color:var(--foreground)]">Featured Artisans</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-[color:var(--muted-foreground)]">
            Spotlighting candidates who treat their craft like art.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {artisans.map((artisan) => (
            <PortraitCard key={artisan.name} artisan={artisan} />
          ))}
        </div>
      </section>

      <section className="mt-28 overflow-hidden rounded-[32px] bg-[#071d66] text-white shadow-[0_30px_70px_rgba(7,29,102,0.24)]">
        <div className="grid min-h-[340px] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12">
            <h2 className="max-w-md text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              Your Profile is a Masterpiece.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/74 sm:text-base">
              Our template system doesn&apos;t just list your skills. It curates your narrative. Use our
              architectural layout to stand out from the noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/create"
                className="rounded-2xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_30px_rgba(37,99,235,0.35)] transition hover:brightness-110"
              >
                Start Creating
              </Link>
              <Link
                to="/templates"
                className="rounded-2xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Browse Templates
              </Link>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,18,66,0.5)_0%,rgba(18,54,138,0.7)_35%,rgba(7,29,102,0.95)_100%)]" />
            <div className="absolute inset-0 bg-[conic-gradient(from_10deg_at_60%_50%,rgba(46,104,211,0.15)_0deg,rgba(99,179,255,0.35)_60deg,rgba(17,55,141,0.65)_150deg,rgba(9,26,88,0.95)_230deg,rgba(58,127,255,0.2)_300deg,rgba(46,104,211,0.15)_360deg)]" />
            <div className="absolute -right-10 top-0 h-56 w-56 rotate-12 bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(255,255,255,0.02))] [clip-path:polygon(24%_0,100%_0,100%_72%)]" />
            <div className="absolute left-[26%] top-[18%] h-72 w-72 rotate-[18deg] bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(37,99,235,0.02))] [clip-path:polygon(0_20%,78%_0,100%_88%,14%_100%)]" />
            <div className="absolute right-[12%] top-[28%] h-64 w-64 -rotate-[14deg] bg-[linear-gradient(135deg,rgba(96,165,250,0.24),rgba(255,255,255,0.02))] [clip-path:polygon(12%_0,100%_16%,84%_100%,0_82%)]" />
          </div>
        </div>
      </section>

      <footer className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-8 text-[11px] uppercase tracking-[0.16em] text-slate-400 dark:border-[color:var(--border)] dark:text-[color:var(--muted-foreground)] lg:flex-row lg:items-center lg:justify-between">
        <span>The Talent Bridge</span>
        <span>&copy; 2026 The Talent Bridge. Editorial excellence in talent.</span>
        <div className="flex flex-wrap gap-4">
          <Link to="/how-to" className="transition hover:text-slate-600 dark:hover:text-[color:var(--foreground)]">
            How To
          </Link>
          <Link to="/templates" className="transition hover:text-slate-600 dark:hover:text-[color:var(--foreground)]">
            Templates
          </Link>
          <Link to="/contributors" className="transition hover:text-slate-600 dark:hover:text-[color:var(--foreground)]">
            Contributors
          </Link>
        </div>
      </footer>
    </div>
  );
}
