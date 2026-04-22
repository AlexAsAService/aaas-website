import { useState } from 'react';
import MailIcon from '../assets/icons/mail.svg?react';
import CopyIcon from '../assets/icons/copy.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import ArrowRightIcon from '../assets/icons/arrow-right.svg?react';
import GitHubIcon from '../assets/icons/github.svg?react';

const EMAIL = 'AlexAsAService@gmail.com';

function EmailCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="text-violet-600 dark:text-violet-400 shrink-0">
        <MailIcon width="24" height="24" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Email</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 truncate select-all">{EMAIL}</p>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <button
          id="copy-email"
          onClick={handleCopy}
          aria-label="Copy email address"
          title="Copy to clipboard"
          className="p-2 rounded-lg text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {copied ? (
            <CheckIcon width="16" height="16" className="text-violet-500" />
          ) : (
            <CopyIcon width="16" height="16" />
          )}
        </button>

        <a
          href={`mailto:${EMAIL}`}
          aria-label="Open in email client"
          title="Open in email client"
          className="p-2 rounded-lg text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <ArrowRightIcon width="16" height="16" />
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400 mb-4">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Let's talk
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Tell me about your project. I'll get back to you promptly.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <EmailCard />

        <a
          href="https://github.com/AlexAsAService"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
        >
          <div className="text-violet-600 dark:text-violet-400 shrink-0">
            <GitHubIcon width="24" height="24" />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">GitHub</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">github.com/AlexAsAService</p>
          </div>
          <ArrowRightIcon
            width="16"
            height="16"
            className="ml-auto text-zinc-400 group-hover:text-violet-500 group-hover:translate-x-1 transition-all"
          />
        </a>
      </div>
    </div>
  );
}
