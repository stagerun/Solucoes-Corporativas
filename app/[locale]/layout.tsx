import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import "@/app/globals.css"
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
  return (
    <html lang={params.locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-background">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
              <div className="flex lg:flex-1">
                <a href={`/${params.locale}`} className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-primary">CorpSolutions</span>
                </a>
              </div>
              <div className="hidden lg:flex lg:gap-x-8">
                <a href={`/${params.locale}`} className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors">
                  Início
                </a>
                <a href={`/${params.locale}/about`} className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors">
                  Sobre
                </a>
                <a href={`/${params.locale}/services`} className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors">
                  Serviços
                </a>
                <a href={`/${params.locale}/team`} className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors">
                  Equipe
                </a>
                <a href={`/${params.locale}/blog`} className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors">
                  Blog
                </a>
                <a href={`/${params.locale}/contact`} className="text-sm font-medium leading-6 text-foreground hover:text-primary transition-colors">
                  Contato
                </a>
              </div>
            </nav>
          </header>
          <main className="min-h-screen">{children}</main>
          <footer className="bg-muted border-t">
            <div className="container mx-auto px-4 py-12 lg:px-8">
              <div className="text-center text-sm text-muted-foreground">
                <p>© 2024 CorpSolutions. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
