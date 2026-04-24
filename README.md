# React JS API Project Template

A ready-to-use React JS starter built with Vite, React Router, Tailwind CSS v4, and a reusable API layer.

## Verified baseline

- React latest stable docs version: `19.2`
- Bundler approach: Vite, which React recommends instead of Create React App for new apps
- Styling approach: Tailwind CSS v4 with the official Vite plugin

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Folder structure

```text
.
├── public/
├── src/
│   ├── api/                # HTTP client and request helpers
│   ├── app/                # App-level wiring and providers
│   ├── assets/             # Images, icons, fonts
│   ├── components/
│   │   ├── common/         # Shared UI building blocks
│   │   └── feedback/       # Loading and error states
│   ├── config/             # Environment and runtime configuration
│   ├── constants/          # App constants
│   ├── features/           # Feature-focused modules
│   ├── hooks/              # Reusable custom hooks
│   ├── layouts/            # Layout shells
│   ├── pages/              # Route pages
│   ├── routes/             # Central route definitions
│   ├── services/           # API-facing business services
│   ├── styles/             # Global styles
│   └── utils/              # Pure helpers
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## What is included

- React Router setup with a main app shell
- Tailwind CSS v4 wired through the official Vite plugin
- API client with GET, POST, PUT, PATCH, DELETE helpers
- Environment-based API base URL
- Dashboard example that calls a real API
- Reusable loader and error components
- Simple login and 404 pages
- Clean folder structure ready for scaling

## API setup

Update `.env.example` values in your own `.env` file:

```bash
VITE_API_BASE_URL=https://your-api-url.com
VITE_APP_NAME=Your App Name
```

## Suggested next steps

- Add auth token handling inside `src/api/httpClient.js`
- Add form validation for auth and settings pages
- Add state management only when your app actually needs it
- Add testing with Vitest and React Testing Library if you want a test-ready version
