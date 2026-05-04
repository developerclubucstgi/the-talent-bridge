import { useRoutes } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { GenericPage } from '../pages/Generic/GenericPage';
import { HomePage } from '../pages/Home/HomePage';
import { LoginPage } from '../pages/Login/LoginPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

const placeholderPages = [
  {
    path: 'profiles',
    eyebrow: 'Profiles',
    title: 'Candidate profiles are ready for backend integration.',
    description:
      'This route is in place so we can plug in real profile search, filtering, and portfolio data once your backend endpoints are available.',
  },
  {
    path: 'how-to',
    eyebrow: 'How To',
    title: 'Guides and onboarding content can live here.',
    description:
      'We now have a dedicated route for product education, so later we can connect CMS content, FAQs, or onboarding workflows without changing the navigation structure.',
  },
  {
    path: 'create',
    eyebrow: 'Create',
    title: 'The profile builder route is ready.',
    description:
      'This page is reserved for the future profile and portfolio creation flow, including form state, uploads, drafts, and backend persistence.',
  },
  {
    path: 'templates',
    eyebrow: 'Templates',
    title: 'Template browsing now has its own route.',
    description:
      'When the backend is ready, we can populate this page with dynamic template collections, categories, and preview metadata.',
  },
  {
    path: 'contributors',
    eyebrow: 'Contributors',
    title: 'Contributor discovery has a dedicated frontend entry point.',
    description:
      'This route is ready for future contributor listings, editorial spotlights, and any connected backend-powered directory views.',
  },
];

export function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <AppShell />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'jobs', element: <HomePage /> },
        ...placeholderPages.map(({ path, ...pageProps }) => ({
          path,
          element: <GenericPage {...pageProps} />,
        })),
        { path: 'dashboard', element: <DashboardPage /> },
      ],
    },
    { path: '/login', element: <LoginPage /> },
    { path: '*', element: <NotFoundPage /> },
  ]);
}
