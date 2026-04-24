import { Link } from 'react-router-dom';
import ChevronDownIcon from '@/assets/icons/chevron-down.svg?react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center text-center px-6 gap-6 md:gap-8 overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-violet-500/10 dark:bg-violet-600/15 rounded-full blur-3xl" />
      </div>

      <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400">
        Taking on new clients
      </p>

      <h1 className="max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-100">
        Software that works.{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Infrastructure that holds.
        </span>
      </h1>

      <p className="max-w-xl text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Expert software engineering from greenfield to production. Built for production, not for
        portfolios.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
        <Link
          to="/contact"
          id="hero-cta-primary"
          className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors text-center min-h-[44px] flex items-center justify-center"
        >
          Get Started
        </Link>
        <Link
          to="/about"
          className="px-8 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold transition-colors text-center min-h-[44px] flex items-center justify-center"
        >
          Learn More
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-500">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDownIcon width="16" height="16" className="animate-bounce" />
      </div>
    </section>
  );
}
