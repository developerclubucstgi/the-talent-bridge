import { Navigate, useRoutes } from 'react-router-dom';
import { AppShell } from '../layouts/AppShell';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { LoginPage } from '../pages/Login/LoginPage';
import { NotFoundPage } from '../pages/NotFound/NotFoundPage';

export function AppRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <AppShell />,
      children: [
        { index: true, element: <Navigate to="/dashboard" replace /> },
        { path: 'dashboard', element: <DashboardPage /> },
      ],
    },
    { path: '/login', element: <LoginPage /> },
    { path: '*', element: <NotFoundPage /> },
  ]);
}
