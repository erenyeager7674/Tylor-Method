import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thetaylormethod.vercel.app";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/shop", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/buy-now", priority: 0.8, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    images:
      route.path === ""
        ? [
            `${siteUrl}/design.png`,
            `${siteUrl}/heroimage.jpg`,
            `${siteUrl}/temp/ass.jpg`,
            `${siteUrl}/temp/thighs.jpg`,
            `${siteUrl}/temp/tits.png`,
            `${siteUrl}/temp/feet.avif`,
          ]
        : undefined,
  }));
}
