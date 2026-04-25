import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [
      tailwindcss(), 
      svgr(), 
      react(),
      {
        name: 'html-inject-ga',
        transformIndexHtml(html) {
          if (env.VITE_GA_ID) {
            return html.replace(
              '<!-- GA_PLACEHOLDER -->',
              `<link rel="preconnect" href="https://www.googletagmanager.com">\n    <script src="https://www.googletagmanager.com/gtag/js?id=${env.VITE_GA_ID}" defer></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', '${env.VITE_GA_ID}');\n    </script>`
            );
          }
          return html.replace('<!-- GA_PLACEHOLDER -->', '');
        },
      }
    ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '@/test/setup.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
  }
  };
});
