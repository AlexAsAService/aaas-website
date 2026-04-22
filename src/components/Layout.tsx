import { Link, Outlet, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100">
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            to="/"
            className="text-sm font-semibold tracking-widest uppercase text-zinc-100 hover:text-violet-400 transition-colors"
          >
            Alex<span className="text-violet-500">As</span>AService
          </Link>

          {/* Nav */}
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {navLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`transition-colors hover:text-violet-400 ${
                      pathname === to
                        ? 'text-violet-400'
                        : 'text-zinc-400'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Page content ───────────────────────────────────────── */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800 py-8 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Alex As A Service. All rights reserved.
      </footer>
    </div>
  )
}
