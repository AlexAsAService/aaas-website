export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400 mb-6">
          The Philosophy
        </p>

        <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-100 mb-8">
          Boring infrastructure.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">
            Exciting products.
          </span>
        </h2>

        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-16">
          Your product should be exciting. Your software should be boring. I do the boring part.
          Boring means it runs when you need it, scales when you grow, and never makes headlines
          for the wrong reasons.
        </p>

        <blockquote className="max-w-lg mx-auto border-l-2 border-violet-500 pl-6 text-left">
          <p className="text-2xl font-medium text-zinc-700 dark:text-zinc-300 italic leading-snug">
            "Great software disappears. That's the goal."
          </p>
        </blockquote>
      </div>
    </section>
  );
}
