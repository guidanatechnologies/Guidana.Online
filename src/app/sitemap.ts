import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/process",
    "/contact",
    "/get-started",
    "/book-a-meeting",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path.startsWith("/services") ? "monthly" : "weekly",
    priority: path === "" ? 1 : path === "/services" || path === "/contact" ? 0.9 : 0.7,
  }));
}
