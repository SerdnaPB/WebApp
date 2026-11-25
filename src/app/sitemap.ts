import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/servicios`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/proceso`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site.url}/contacto`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
