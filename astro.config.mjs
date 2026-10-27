// astro.config.mjs — Astro's settings file.
import { copyFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// @astrojs/sitemap writes sitemap-index.xml plus sitemap-0.xml (and sitemap-1.xml, …).
// Crawlers and Search Console look up /sitemap.xml, so copy the page list there too.
function sitemapXml() {
  return {
    name: 'sitemap-xml',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const chunks = (await readdir(fileURLToPath(dir)))
          .filter((name) => /^sitemap-\d+\.xml$/.test(name))
          .sort();
        // One chunk is the page list itself. Several chunks need the index.
        const sourceName = chunks.length === 1 ? chunks[0] : 'sitemap-index.xml';
        await copyFile(new URL(sourceName, dir), new URL('sitemap.xml', dir));
      },
    },
  };
}

export default defineConfig({
  // The address of your GitHub Pages account (no repo name here).
  site: 'https://tnt8concepts.com',
  // The repo name. GitHub Pages serves "project sites" from /<repo-name>/,
  // so every link/image URL must start with this. Change it if you rename the repo.
  base: '/',
  // Pages such as / and /build/ are included automatically.
  // sitemap() must run before sitemapXml() so sitemap.xml can copy its output.
  integrations: [sitemap(), sitemapXml()],
  vite: {
    build: {
      // Keep our CSS exactly as written. The default CSS "minifier" rewrites
      // some rules and dropped the header's frosted-glass blur in Chrome.
      cssMinify: false,
    },
  },
});
