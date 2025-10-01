import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "@/app/globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { NoSSR } from "@/components/no-ssr"
import { type Locale, locales } from "@/lib/i18n"
import { getTranslations } from "@/lib/translations"

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CorpSolutions - Soluções Corporativas de Excelência",
  description:
    "Transformamos desafios em oportunidades com tecnologia e inovação. Soluções corporativas para empresas de médio e grande porte.",
  keywords: "consultoria, tecnologia, inovação, soluções corporativas, desenvolvimento",
  authors: [{ name: "CorpSolutions" }],
  openGraph: {
    title: "CorpSolutions - Soluções Corporativas de Excelência",
    description: "Transformamos desafios em oportunidades com tecnologia e inovação",
    type: "website",
  },
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const translations = getTranslations(params.locale)

  return (
    <html lang={params.locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Header locale={params.locale} translations={translations} />
        <main className="min-h-screen">{children}</main>
        <Footer locale={params.locale} translations={translations} />
        <NoSSR>
          <Toaster />
        </NoSSR>
      </body>
    </html>
  )
}
