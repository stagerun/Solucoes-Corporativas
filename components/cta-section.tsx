import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"

interface CtaSectionProps {
  locale: Locale
  translations: {
    cta: {
      title: string
      subtitle: string
      button: string
    }
  }
}

export function CtaSection({ locale, translations }: CtaSectionProps) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">{translations.cta.title}</h2>
          <p className="mt-4 text-lg text-primary-foreground/90 text-pretty">{translations.cta.subtitle}</p>
          <div className="mt-10">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link href={`/${locale}/contact`}>
                {translations.cta.button}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
