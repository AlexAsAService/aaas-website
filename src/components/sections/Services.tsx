import CodeIcon from '@/assets/icons/code.svg?react';
import TrendIcon from '@/assets/icons/trend.svg?react';
import RocketIcon from '@/assets/icons/rocket.svg?react';
import CloudIcon from '@/assets/icons/cloud.svg?react';

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'build',
    title: 'Build',
    tagline: 'Your idea, shipped.',
    description:
      'Start from nothing and end up with something real. Web apps, sites, and APIs built right from the first commit.',
    icon: <CodeIcon width="28" height="28" />,
  },
  {
    id: 'improve',
    title: 'Improve',
    tagline: 'Faster. Cleaner. Boring.',
    description:
      'Speed it up. Clean it up. Make it boring. Optimization, debugging, new features, and framework migrations.',
    icon: <TrendIcon width="28" height="28" />,
  },
  {
    id: 'ship',
    title: 'Ship',
    tagline: 'Launch with confidence.',
    description:
      'Stop deploying manually. CI/CD pipelines, containerization, and deployment automation that just works.',
    icon: <RocketIcon width="28" height="28" />,
  },
  {
    id: 'scale',
    title: 'Scale',
    tagline: 'Sleep through your deployments.',
    description:
      'AWS-first cloud infrastructure, serverless, and monitoring. Set it up once, sleep through the rest.',
    icon: <CloudIcon width="28" height="28" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
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
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
