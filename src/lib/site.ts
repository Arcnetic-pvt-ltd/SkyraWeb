import type { Metadata } from "next";
import { CONTACT, SOCIAL_LINKS } from "@/lib/nav";

const RAW_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

// Tolerate a missing scheme (e.g. "www.skyra.com") so `new URL()` doesn't throw.
export const SITE_URL = (
  /^https?:\/\//.test(RAW_SITE_URL) ? RAW_SITE_URL : `https://${RAW_SITE_URL}`
).replace(/\/$/, "");

export const SITE_NAME = "Skyra";
export const DEFAULT_OG_IMAGE = "/images/hero-rainfall.jpg";

/** Indexable public routes, shared by sitemap.ts. */
export const PUBLIC_ROUTES = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/rainsink", changeFrequency: "monthly", priority: 0.9 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
] as const;

type PageMeta = { title: string; description: string; path: string; keywords?: string[] };

/** Per-page metadata with canonical, Open Graph and Twitter Card fields. */
export function buildMetadata({ title, description, path, keywords }: PageMeta): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      url: path,
      title,
      description,
      images: [{ url: DEFAULT_OG_IMAGE, alt: "Rainfall over a modern building and water reservoir" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/skyra-logo.png`,
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rajagiri Road, N. Kalamassery",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed: ["Kerala", "Karnataka", "Tamil Nadu"],
  sameAs: SOCIAL_LINKS.map((s) => s.href),
};

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
