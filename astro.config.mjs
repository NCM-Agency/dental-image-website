// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dentalimage.ca',
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'security-headers',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            // Security headers for development server
            res.setHeader('X-Frame-Options', 'DENY');
            res.setHeader('X-Content-Type-Options', 'nosniff');
            res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
            res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
            res.setHeader('Content-Security-Policy', 
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://widget.carecru.com https://maps.googleapis.com https://api.mapbox.com; " +
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
              "font-src 'self' https://fonts.gstatic.com data:; " +
              "img-src 'self' data: https: blob:; " +
              "media-src 'self' https://cdn.prod.website-files.com; " +
              "connect-src 'self' https: wss:; " +
              "frame-src 'self' https://www.google.com https://widget.carecru.com https://maps.geoapify.com; " +
              "frame-ancestors 'none'; " +
              "base-uri 'self'; " +
              "form-action 'self'; " +
              "object-src 'none'"
            );
            next();
          });
        }
      }
    ],
    build: {
      cssMinify: true
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});