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

## License

Content belongs to Resilient Societies of Zimbabwe unless otherwise noted. Code is for the organization’s website use unless you specify another license.
