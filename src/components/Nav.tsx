import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

interface NavProps {
  mobile?: boolean;
  onLinkClick?: () => void;
}

export default function Nav({ mobile = false, onLinkClick }: NavProps) {
  const { pathname } = useLocation();

  const linkClass = (to: string) =>
    `transition-colors hover:text-violet-600 dark:hover:text-violet-400 ${
      pathname === to
        ? 'text-violet-600 dark:text-violet-400'
        : 'text-zinc-600 dark:text-zinc-400'
    }`;

  if (mobile) {
    return (
      <nav aria-label="Primary navigation">
        <ul className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                onClick={onLinkClick}
                className={`flex items-center px-6 py-4 text-base font-medium min-h-[48px] ${linkClass(to)}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-6 text-sm font-medium">
        {navLinks.map(({ label, to }) => (
          <li key={to}>
            <Link to={to} className={linkClass(to)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
