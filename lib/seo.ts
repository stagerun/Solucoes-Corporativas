import type { Metadata } from "next"
import type { Locale } from "./i18n"

interface SEOProps {
  title: string
  description: string
  locale: Locale
  path?: string
  image?: string
  type?: "website" | "article"
  publishedTime?: string
  author?: string
}

export function generateSEO({
  title,
  description,
  locale,
  path = "",
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  author,
}: SEOProps): Metadata {
  const baseUrl = "https://corpsolutions.com"
  const url = `${baseUrl}/${locale}${path}`
  const fullTitle = `${title} | CorpSolutions`

  return {
    title: fullTitle,
    description,
    keywords:
      "consultoria empresarial, transformação digital, desenvolvimento software, segurança informação, análise dados, automação processos, soluções corporativas",
    authors: author ? [{ name: author }] : [{ name: "CorpSolutions" }],
    creator: "CorpSolutions",
    publisher: "CorpSolutions",
    alternates: {
      canonical: url,
      languages: {
        pt: `${baseUrl}/pt${path}`,
        en: `${baseUrl}/en${path}`,
        es: `${baseUrl}/es${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "CorpSolutions",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "pt" ? "pt_BR" : locale === "en" ? "en_US" : "es_ES",
      type,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${baseUrl}${image}`],
      creator: "@corpsolutions",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}
