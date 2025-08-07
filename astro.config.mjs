// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dentalimage.ca',
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});