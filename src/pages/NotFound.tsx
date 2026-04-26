import { Link } from 'react-router-dom';
import Seo from '@/components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo 
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist or has been moved." 
        noindex
      />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] px-6 py-24 mx-auto text-center">
        <p className="text-sm font-medium text-violet-600 dark:text-violet-400 uppercase tracking-widest">404 error</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400 max-w-lg">
          Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-lg bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Go back home
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </>
  );
}
