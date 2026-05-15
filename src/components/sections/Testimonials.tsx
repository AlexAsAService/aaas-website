import QuoteIcon from '@/assets/icons/quote.svg?react';

const placeholders = [
  {
    id: 1,
    initials: 'EC',
    name: 'Eileen Comeaux',
    company: 'Hana Herbs',
    website: 'https://hanaherbs.com',
    text: "Alex has lots of aloha. He gave from his heart. He knows what he's doing. He is fast, efficient, confident, respectful, knowledgeable, and a nice guy. He did hanaherbs.com. And I couldn't ask for a better job to be done. Thanks, Alex."
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
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
              <QuoteIcon width="32" height="32" className="text-violet-400/30 mb-4" />
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed mb-6">
                {p.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-600 dark:text-zinc-300">
                  {p.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-300">{p.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {p.company}
                    {p.website && (
                      <>
                        {' - '}
                        <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 hover:underline">
                          {p.website}
                        </a>
                      </>
                    )}
                    
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
