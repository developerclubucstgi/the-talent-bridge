import { Outlet } from 'react-router-dom';
import { TopNavBar } from '../components/common/TopNavBar';

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavBar />
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Outlet />
      </main>
    </div>
  );
}
