import { Link } from 'react-router-dom';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react';

export default function AboutTeaser() {
  return (
    <section id="about-teaser" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400 mb-6">
          About
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-6">
          Alex
        </h2>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
          I believe in boring software. Not because it is easy, but because boring means it works
          every time, without drama.
        </p>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10">
          I am not here to impress you with the newest framework. I am here to solve your problem
          and make sure it stays solved.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-500 dark:hover:text-violet-300 transition-colors group"
        >
          More about Alex
          <ArrowRightIcon
            width="16"
            height="16"
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
