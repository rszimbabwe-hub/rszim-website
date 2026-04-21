import { useEffect } from "react";
import { useLocation } from "react-router";
import { DEFAULT_DESCRIPTION, getSiteUrl, SITE_NAME } from "../seo/site";
import { upsertCanonical, upsertMeta } from "../seo/meta";

type SeoProps = {
  title: string;
  description?: string;
  /** When true, do not index (rare). */
  noindex?: boolean;
};

export function Seo({ title, description = DEFAULT_DESCRIPTION, noindex = false }: SeoProps) {
  const { pathname } = useLocation();
  const base = getSiteUrl();
  const path = pathname === "/" ? "" : pathname;
  const canonical = base ? `${base}${path || "/"}` : "";
  const ogImage = base ? `${base}/logo.png` : "";

  useEffect(() => {
    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "application-name", SITE_NAME);
    upsertMeta("name", "author", SITE_NAME);
    upsertCanonical(canonical);

    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", "website");
    if (canonical) {
      upsertMeta("property", "og:url", canonical);
    }
    if (ogImage) {
      upsertMeta("property", "og:image", ogImage);
    }
    upsertMeta("property", "og:image:alt", `${SITE_NAME} logo`);
    upsertMeta("property", "og:locale", "en_ZW");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    if (ogImage) {
      upsertMeta("name", "twitter:image", ogImage);
    }

    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow",
    );
  }, [title, description, noindex, canonical, ogImage]);

  return null;
}
