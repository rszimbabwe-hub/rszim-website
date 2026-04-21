/**
 * Writes public/robots.txt and (when the site URL is known) public/sitemap.xml.
 * Netlify sets URL during build; you can also set VITE_SITE_URL to your canonical domain.
 */
import { existsSync, unlinkSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const base = (
  process.env.VITE_SITE_URL ||
  process.env.URL ||
  process.env.DEPLOY_PRIME_URL ||
  ""
)
  .trim()
  .replace(/\/$/, "");

const routes = [
  "/",
  "/about",
  "/what-we-do",
  "/programs",
  "/team",
  "/contact",
];

const robotsMinimal = `User-agent: *
Allow: /
`;

if (base) {
  const urlEntries = routes
    .map((path) => {
      const loc = path === "/" ? `${base}/` : `${base}${path}`;
      const priority = path === "/" ? "1.0" : "0.85";
      return `  <url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

  writeFileSync(join(publicDir, "sitemap.xml"), sitemap);

  const robots = `${robotsMinimal}
Sitemap: ${base}/sitemap.xml
`;

  writeFileSync(join(publicDir, "robots.txt"), robots);
  console.log(`write-seo-files: wrote sitemap.xml and robots.txt (${base})`);
} else {
  const sitemapPath = join(publicDir, "sitemap.xml");
  if (existsSync(sitemapPath)) {
    unlinkSync(sitemapPath);
  }
  writeFileSync(join(publicDir, "robots.txt"), robotsMinimal);
  console.warn(
    "write-seo-files: no VITE_SITE_URL, URL, or DEPLOY_PRIME_URL — robots.txt only. Set VITE_SITE_URL on Netlify for sitemap.xml.",
  );
}
