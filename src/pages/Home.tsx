export default function Home() {
  return (
    <>
      {/* ── Hero / Above the Fold ──────────────────────────────── */}
      <section
        id="hero"
        className="min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center text-center px-6 gap-8"
      >
        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400">
          Available for hire
        </p>

        {/* Value proposition headline */}
        <h1 className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-100">
          Expert software engineering,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            on demand.
          </span>
        </h1>

        {/* Supporting sub-headline */}
        <p className="max-w-xl text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {/* TODO: replace with real copy */}
          Stub — describe the core benefit and who this is for in 1–2 sentences.
        </p>

        {/* CTA — action TBD */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <button
            id="hero-cta-primary"
            disabled
            className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* TODO: decide CTA action */}
            Get Started
          </button>
          <a
            href="/about"
            className="px-8 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 font-semibold transition-colors"
          >
            Learn More
          </a>
        </div>
      </section>
    </>
  )
}
