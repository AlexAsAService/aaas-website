export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Page header */}
      <div className="mb-16 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400 mb-4">
          About
        </p>

        {/* Photo placeholder */}
        <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-violet-500/20">
          A
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
          Alex
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400">Full Stack Engineer</p>
      </div>

      {/* Section 1 — Philosophy */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          The way I think about software
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I believe in boring software. Not because it is easy, but because boring means it works
          every time, without drama. I am not here to impress you with the newest framework. I am
          here to solve your problem and make sure it stays solved.
        </p>
      </section>

      {/* Section 2 — Credibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          The work
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          I single-handedly built a SaaS platform for a recycled plastics manufacturer that is
          still running today, increasing their efficiency and saving them hundreds of thousands of
          dollars.
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Today I work full-stack at a high-stakes online auction platform, covering engineering,
          DevOps, and reliability. I have extensive experience making sure things run in real-world
          production environments where failure is not an option.
        </p>
      </section>

      {/* Section 3 — The person */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          The person
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Computers have always been my thing. I learned to program because I could not stay away
          from them. These days I am particularly interested in automation, CI/CD, containers, and
          the practical side of AI. I am a pragmatist. I reach for the right tool, not the shiny
          one.
        </p>
      </section>
    </div>
  );
}
