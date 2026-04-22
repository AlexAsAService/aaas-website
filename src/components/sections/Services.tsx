import type { ReactNode } from 'react';

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: ReactNode;
}

function CodeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  );
}

const services: Service[] = [
  {
    id: 'build',
    title: 'Build',
    tagline: 'Your idea, shipped.',
    description:
      'Start from nothing and end up with something real. Web apps, sites, and APIs built right from the first commit.',
    icon: <CodeIcon />,
  },
  {
    id: 'improve',
    title: 'Improve',
    tagline: 'Faster. Cleaner. Boring.',
    description:
      'Speed it up. Clean it up. Make it boring. Optimization, debugging, new features, and framework migrations.',
    icon: <TrendIcon />,
  },
  {
    id: 'ship',
    title: 'Ship',
    tagline: 'Launch with confidence.',
    description:
      'Stop deploying manually. CI/CD pipelines, containerization, and deployment automation that just works.',
    icon: <RocketIcon />,
  },
  {
    id: 'scale',
    title: 'Scale',
    tagline: 'Sleep through your deployments.',
    description:
      'AWS-first cloud infrastructure, serverless, and monitoring. Set it up once, sleep through the rest.',
    icon: <CloudIcon />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-600 dark:text-violet-400 mb-4">
            What I Do
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-violet-400/50 dark:hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
            >
              <div className="text-violet-600 dark:text-violet-400 mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                {service.title}
              </h3>
              <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-3">
                {service.tagline}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
