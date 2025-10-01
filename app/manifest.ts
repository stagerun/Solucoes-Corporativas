import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CorpSolutions - Soluções Corporativas",
    short_name: "CorpSolutions",
    description: "Transformamos desafios em oportunidades com tecnologia e inovação",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#164e63",
    icons: [
      {
        src: "/placeholder-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/placeholder-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
