import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import type { Locale } from "@/lib/i18n"

interface FooterProps {
  locale: Locale
  translations: {
    footer: {
      company: string
      about: string
      services: string
      contact: string
      rights: string
    }
  }
}

export function Footer({ locale, translations }: FooterProps) {
  // Usar um valor fixo para evitar problemas de hidratação
  const currentYear = 2024

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">CorpSolutions</h3>
            <p className="text-sm text-muted-foreground">
              Transformando desafios em oportunidades através da inovação.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{translations.footer.company}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/about`} className="text-muted-foreground hover:text-primary transition-colors">
                  {translations.footer.about}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/team`} className="text-muted-foreground hover:text-primary transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{translations.footer.services}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Consultoria
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Desenvolvimento
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{translations.footer.contact}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@corpsolutions.com</li>
              <li>+55 (11) 1234-5678</li>
              <li>São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} CorpSolutions. {translations.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
