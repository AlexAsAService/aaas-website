import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-6 text-sm font-medium">
        {navLinks.map(({ label, to }) => (
          <li key={to}>
            <Link
              to={to}
              className={`transition-colors hover:text-violet-600 dark:hover:text-violet-400 ${
                pathname === to
                  ? 'text-violet-600 dark:text-violet-400'
                  : 'text-zinc-500 dark:text-zinc-400'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
