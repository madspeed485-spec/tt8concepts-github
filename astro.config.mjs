// astro.config.mjs — Astro's settings file.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // The address of your GitHub Pages account (no repo name here).
  site: 'https://tnt8concepts.com',
  // The repo name. GitHub Pages serves "project sites" from /<repo-name>/,
  // so every link/image URL must start with this. Change it if you rename the repo.
  base: '/',
  // Writes sitemap-index.xml and sitemap-0.xml into the build. public/robots.txt
  // points crawlers at the index. Pages such as / and /build/ are included automatically.
  integrations: [sitemap()],
  vite: {
    build: {
      // Keep our CSS exactly as written. The default CSS "minifier" rewrites
      // some rules and dropped the header's frosted-glass blur in Chrome.
      cssMinify: false,
    },
  },
});
