import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from '@/components/Nav';
import ThemeToggle from '@/components/ThemeToggle';
import MenuIcon from '@/assets/icons/menu.svg?react';
import XIcon from '@/assets/icons/x.svg?react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / wordmark */}
        <Link
          to="/"
          className="text-sm font-semibold tracking-widest uppercase text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          Alex<span className="text-violet-500">As</span>AService
        </Link>

        {/* Desktop: nav + theme toggle */}
        <div className="hidden md:flex items-center gap-6">
          <Nav />
          <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            id="mobile-menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {menuOpen ? <XIcon width="20" height="20" /> : <MenuIcon width="20" height="20" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown nav */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md"
        >
          <Nav mobile onLinkClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
