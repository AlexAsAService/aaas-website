# Alex As A Service

> Alex, delivered as a service.

A static marketing site promoting the professional services of Alex. Built as a fast, modern SSG-style site — no backend, just signal.

## Tech Stack

- **[Vite](https://vite.dev/)** — build tool & dev server
- **[React](https://react.dev/)** — component model
- **[TypeScript](https://www.typescriptlang.org/)** — type safety
- **[Tailwind CSS](https://tailwindcss.com/)** — utility-first styling
- **[Vitest](https://vitest.dev/)** — unit testing

## Getting Started

```bash
pnpm install
pnpm dev
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start local dev server at `http://localhost:5173` |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build locally |
| `pnpm test` | Run unit tests with Vitest |
| `pnpm lint` | Lint with ESLint |

## Project Structure

```
src/
├── assets/       # Static assets (images, fonts, etc.)
├── components/   # Reusable UI components
├── App.tsx       # Root component
└── main.tsx      # Entry point
```
