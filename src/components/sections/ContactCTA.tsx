import { Link } from 'react-router-dom';

export default function ContactCTA() {
  return (
    <section id="contact-cta" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400 mb-6">
          Let's Talk
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Ready to build something boring?
        </h2>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10">
          Tell me about your project. I'll tell you how to make it reliable.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-semibold transition-colors"
        >
          Get in touch
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
