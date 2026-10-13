import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures relative assets work on GitHub Pages, Vercel, or any subpath
});
