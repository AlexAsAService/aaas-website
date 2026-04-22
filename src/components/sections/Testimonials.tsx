import QuoteIcon from '@/assets/icons/quote.svg?react';

const placeholders = [
  { id: 1, initials: 'JD', name: 'Jane D.', company: 'Acme Co.' },
  { id: 2, initials: 'RS', name: 'Robert S.', company: 'Startup Inc.' },
  { id: 3, initials: 'ML', name: 'Maria L.', company: 'Manufacturing Ltd.' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400 mb-4">
            Social Proof
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            What clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {placeholders.map((p) => (
            <div
              key={p.id}
              className="relative p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden"
            >
              <div className="absolute inset-0 backdrop-blur-[2px] bg-white/60 dark:bg-zinc-950/60 flex flex-col items-center justify-center z-10">
                <span className="text-xs font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 border border-violet-400/40 rounded-full px-3 py-1">
                  Coming soon
                </span>
              </div>

              <QuoteIcon width="32" height="32" className="text-violet-400/30 mb-4" />
              <p className="text-zinc-400 dark:text-zinc-600 text-sm leading-relaxed mb-6">
                Placeholder testimonial text will appear here once client quotes are collected.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-500 dark:text-zinc-400">
                  {p.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-400 dark:text-zinc-600">{p.name}</p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-600">{p.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
