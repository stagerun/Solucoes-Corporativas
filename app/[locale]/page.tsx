import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { StatsSection } from "@/components/stats-section"
import { getTranslations } from "@/lib/translations"
import { generateSEO } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale)

  return generateSEO({
    title: translations.hero.title,
    description: translations.hero.subtitle,
    locale: params.locale,
    path: "",
  })
}

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale)

  return (
    <>
      <HeroSection locale={params.locale} translations={translations} />
      <StatsSection />
      <ServicesSection translations={translations} />
      <TestimonialsSection translations={translations} />
      <CtaSection locale={params.locale} translations={translations} />
    </>
  )
}
