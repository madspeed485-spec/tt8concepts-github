// astro.config.mjs — Astro's settings file.
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The address of your GitHub Pages account (no repo name here).
  site: 'https://tnt8concepts.com',
  // The repo name. GitHub Pages serves "project sites" from /<repo-name>/,
  // so every link/image URL must start with this. Change it if you rename the repo.
  base: '/',
  vite: {
    build: {
      // Keep our CSS exactly as written. The default CSS "minifier" rewrites
      // some rules and dropped the header's frosted-glass blur in Chrome.
      cssMinify: false,
    },
  },
});
