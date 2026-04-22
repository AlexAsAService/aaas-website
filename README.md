# Alex As A Service

> Alex, delivered as a service.

A static marketing site promoting the professional services of Alex. Built as a fast, modern SSG site — no backend, just signal.

## Tech Stack

- **[Vite](https://vite.dev/)** — build tool & dev server
- **[vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg)** — static site generation (pre-renders each route to its own HTML file at build time)
- **[React](https://react.dev/)** — component model
- **[React Router](https://reactrouter.com/)** — client-side routing
- **[TypeScript](https://www.typescriptlang.org/)** — type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling with class-based dark mode
- **[vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)** — SVG files as inline React components
- **[Vitest](https://vitest.dev/)** — unit testing
- **[Prettier](https://prettier.io/)** — code formatting (semicolons on, single quotes)
- **[ESLint](https://eslint.org/)** — linting (with `eslint-config-prettier` to avoid conflicts)

## Getting Started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start local dev server at `http://localhost:5173` |
| `pnpm build` | Pre-render all routes to static HTML via vite-react-ssg |
| `pnpm preview` | Preview the production build locally |
| `pnpm test` | Run unit tests with Vitest |
| `pnpm lint` | Lint with ESLint |
| `pnpm format` | Format all source files with Prettier |
| `pnpm format:check` | Check formatting without writing (useful in CI) |

## Project Structure

```
src/
├── assets/
│   └── icons/          # SVG icon files (imported as React components via ?react)
├── components/
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Layout.tsx      # Root shell — composes Header, Outlet, Footer
│   ├── Nav.tsx
│   └── ThemeToggle.tsx
├── hooks/
│   └── useTheme.ts     # Dark/light mode toggle, persists to localStorage
├── pages/
│   ├── Home.tsx        # Landing page with hero / value proposition
│   ├── About.tsx
│   └── Contact.tsx
├── test/
│   └── setup.ts        # Vitest setup (jest-dom matchers)
├── routes.tsx          # Route manifest — each entry pre-renders to its own HTML
├── main.tsx            # ViteReactSSG entry point
└── index.css           # Tailwind import + class-based dark mode variant
```

## Dark Mode

Dark mode is on by default. The toggle in the header switches between dark and light, persisting the preference to `localStorage`. An inline script in `index.html` applies the correct class before React hydrates to prevent any flash of the wrong theme.
