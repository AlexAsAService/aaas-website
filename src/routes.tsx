import type { RouteRecord } from 'vite-react-ssg';
import Layout from '@/components/Layout';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Home />
        ),
      },
      {
        path: 'about',
        element: (
          <About />
        ),
      },
      {
        path: 'contact',
        element: (
          <Contact />
        ),
      },
      {
        path: '404',
        element: (
          <NotFound />
        ),
      },
      {
        path: '*',
        element: (
          <NotFound />
        ),
      },
    ],
  },
];
