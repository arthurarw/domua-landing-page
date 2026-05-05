import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/preview",
      },
    ],
    sitemap: "https://domua.com.br/sitemap.xml",
  };
}
