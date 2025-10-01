import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n"
import { getBlogPosts } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://corpsolutions.com"

  // Static pages
  const staticPages = ["", "/about", "/services", "/team", "/blog", "/contact"]

  // Generate URLs for all locales and static pages
  const staticUrls = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1 : 0.8,
    })),
  )

  // Generate URLs for blog posts
  const blogPosts = getBlogPosts()
  const blogUrls = locales.flatMap((locale) =>
    blogPosts.map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  )

  return [...staticUrls, ...blogUrls]
}
