# Resilient Societies of Zimbabwe — Website

Public-facing site for **Resilient Societies of Zimbabwe (RSZ)**: mission, programs, team, and contact information.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and production builds
- [React Router](https://reactrouter.com/) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn-style UI](https://ui.shadcn.com/) components

## Prerequisites

- **Node.js** 20 or 22 (LTS recommended)
- **npm** (comes with Node)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output is in `dist/`. Preview locally:

```bash
npm run preview
```

## Docker (optional)

```bash
docker compose up --build
```

Site on **http://localhost:8080** (maps host `8080` → container `80`). The image builds the Vite app and serves static files with nginx, including SPA fallback for React Router.

## Deploying (Netlify)

The repo includes **`netlify.toml`**: build command `npm run build`, publish directory `dist`, and redirects so deep links work with React Router.

1. Push the repo to GitHub (or GitLab / Bitbucket).
2. In [Netlify](https://app.netlify.com), import the repo and deploy with the settings from `netlify.toml`.
3. Add a custom domain later under **Domain management** in the Netlify UI.

### Search engine optimization (SEO)

The site includes **per-page titles and descriptions**, **Open Graph / Twitter** meta tags, **canonical URLs**, **Organization [JSON-LD](https://developers.google.com/search/docs/appearance/structured-data/organization)** in `OrganizationJsonLd`, and a **`robots.txt`** plus **`sitemap.xml`** generated at build time when the site URL is known.

**Configure the public URL** (no trailing slash) so social previews and Google get correct links:

- **Netlify:** Either set **`VITE_SITE_URL`** under **Site configuration → Environment variables** to your canonical address (e.g. `https://www.yourdomain.co.zw`), or rely on Netlify’s automatic **`URL`** / **`DEPLOY_PRIME_URL`** during builds (the Vite config passes these through for client-side meta tags when `VITE_SITE_URL` is unset).
- Copy **`.env.example`** to **`.env`** locally if you want to test OG URLs in dev.

After launch, register the site in **[Google Search Console](https://search.google.com/search-console)** and submit the sitemap URL: `https://your-domain/sitemap.xml`. Ranking for your name still depends on relevance, backlinks, and time; technical SEO makes the site *eligible* to be understood and indexed correctly.

## Brand assets

Place the header / favicon image at:

**`public/logo.png`**

Files in `public/` are served from the site root (e.g. `/logo.png`).

## Project layout

| Path        | Role                                      |
| ----------- | ----------------------------------------- |
| `app/`      | Pages, routes, layout, and UI components  |
| `styles/`   | Global CSS, Tailwind entry, theme tokens  |
| `public/`   | Static assets (logo, etc.)                |
| `main.tsx`  | App entry                                 |
| `index.html`| HTML shell                                |
| `scripts/`  | Build helpers (e.g. SEO files)          |

## License

Content belongs to Resilient Societies of Zimbabwe unless otherwise noted. Code is for the organization’s website use unless you specify another license.
