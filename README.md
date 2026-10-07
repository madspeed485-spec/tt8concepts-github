# T&T 8 Concepts — website

Live site: https://madspeed485-spec.github.io/tt8concepts-github/

## What is Astro?
[Astro](https://astro.build) is a tool that builds websites. You write the page
in small, tidy pieces ("components"), and Astro glues them together into one
plain, fast HTML page. Visitors get exactly the same kind of static website as
before — Astro just makes it easier to organise and edit.

## How the files are organised
```
src/
  pages/index.astro        ← the home page: lists the sections in order
  layouts/BaseLayout.astro ← <head> (title, description, fonts) + the page's JavaScript
  components/              ← one file per section of the page
    Header.astro  Hero.astro  Services.astro  Process.astro
    Showcase.astro  Contact.astro  Footer.astro
  styles/global.css        ← all the styling (colours, fonts, layout)
  assets/carbon.png        ← carbon-fibre background tile (used by global.css)
  utils/asset.js           ← helper that builds correct image URLs for GitHub Pages
public/images/             ← photos, copied to the site as-is
astro.config.mjs           ← Astro settings (site address + repo name)
.github/workflows/deploy.yml ← tells GitHub how to build & publish the site
```

## How to edit text
- Open the component for the section you want (e.g. `src/components/Hero.astro`)
  and change the words between the tags. Everything below the `---` lines is HTML.
- The 6 "What we do" cards and the 3 "How it works" steps are simple lists at the
  top of `Services.astro` and `Process.astro` — edit, add or remove an entry there.
- Page title / description: `src/layouts/BaseLayout.astro`.
- Colours and styling: `src/styles/global.css`.
- New images: put them in `public/images/` and use `asset('images/your-file.jpg')`
  (see `Hero.astro` for an example).

You can edit files right on github.com (open the file → pencil icon → "Commit changes").

## How deploying works
Every time something is committed to the `main` branch, GitHub Actions runs
`.github/workflows/deploy.yml`, which installs Astro, builds the site and publishes
it to GitHub Pages. Watch progress in the repo's **Actions** tab (takes ~1 minute).
One-time setup: repo **Settings → Pages → Source = "GitHub Actions"**.

## Running it on your own computer (optional)
1. Install [Node.js](https://nodejs.org) (version 22.12 or newer; the "LTS" download is fine).
2. In a terminal, inside this folder, run:
   ```
   npm install
   npm run dev
   ```
3. Open the address it prints (http://localhost:4321/tt8concepts-github/). The page
   updates live as you save files.

Other commands: `npm run build` (makes the final site in `dist/`) and
`npm run preview` (shows that built site locally).
