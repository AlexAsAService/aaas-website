import SunIcon from '../assets/icons/sun.svg?react';
import MoonIcon from '../assets/icons/moon.svg?react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
