import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

// Plugin to rewrite clean routes (/privacy, /terms, /support) to their HTML files
function cleanUrlRoutingPlugin(): Plugin {
  return {
    name: 'clean-url-routing',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (!req.url) return next();
        const urlPath = req.url.split('?')[0];
        if (urlPath === '/privacy') {
          req.url = req.url.replace('/privacy', '/privacy.html');
        } else if (urlPath === '/terms') {
          req.url = req.url.replace('/terms', '/terms.html');
        } else if (urlPath === '/support') {
          req.url = req.url.replace('/support', '/support.html');
        }
        next();
      });
    },
  };
}

const rootDir = import.meta.dirname ?? process.cwd();

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), cleanUrlRoutingPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(rootDir, 'index.html'),
          privacy: path.resolve(rootDir, 'privacy.html'),
          terms: path.resolve(rootDir, 'terms.html'),
          support: path.resolve(rootDir, 'support.html'),
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
