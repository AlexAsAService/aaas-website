import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../hooks/useTheme';

export default function Layout() {
  useTheme(); // ensure theme class is applied on mount

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <Header />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
