import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Award, Users, TrendingUp } from "lucide-react"
import { getTranslations } from "@/lib/translations"
import { generateSEO } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale)

  return generateSEO({
    title: translations.about.title,
    description: translations.about.subtitle,
    locale: params.locale,
    path: "/about",
  })
}

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale)

  const achievements = [
    { icon: Award, value: "15+", label: "Anos de Mercado" },
    { icon: Users, value: "500+", label: "Clientes Satisfeitos" },
    { icon: TrendingUp, value: "98%", label: "Taxa de Sucesso" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {translations.about.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{translations.about.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed">
                Fundada em 2009, a <strong className="text-primary">CorpSolutions</strong> nasceu com o propósito de
                revolucionar o mercado de soluções corporativas. Ao longo de mais de uma década, construímos uma
                trajetória sólida baseada em excelência técnica, inovação constante e compromisso inabalável com o
                sucesso de nossos clientes.
              </p>
              <p className="text-lg text-foreground leading-relaxed mt-4">
                Hoje, somos reconhecidos como parceiros estratégicos de empresas de médio e grande porte em diversos
                setores, oferecendo desde consultoria especializada até desenvolvimento de soluções tecnológicas
                customizadas que impulsionam resultados concretos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-primary">{achievement.value}</p>
                  <p className="mt-2 text-muted-foreground">{achievement.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{translations.about.mission}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">{translations.about.missionText}</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                  <Eye className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">{translations.about.vision}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">{translations.about.visionText}</p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{translations.about.values}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground leading-relaxed">{translations.about.valuesText}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
