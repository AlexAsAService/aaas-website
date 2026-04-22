import { Link } from 'react-router-dom';
import Nav from './Nav';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-widest uppercase text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          Alex<span className="text-violet-500">As</span>AService
        </Link>

        <div className="flex items-center gap-6">
          <Nav />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
