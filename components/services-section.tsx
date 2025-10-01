import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Code, Headphones, LineChart, Shield, Zap } from "lucide-react"

interface ServicesSectionProps {
  translations: {
    services: {
      title: string
      subtitle: string
    }
  }
}

const services = [
  {
    icon: Briefcase,
    titlePt: "Consultoria Estratégica",
    titleEn: "Strategic Consulting",
    titleEs: "Consultoría Estratégica",
    descriptionPt: "Análise profunda e planejamento estratégico para impulsionar seu negócio",
    descriptionEn: "Deep analysis and strategic planning to boost your business",
    descriptionEs: "Análisis profundo y planificación estratégica para impulsar su negocio",
  },
  {
    icon: Code,
    titlePt: "Desenvolvimento de Software",
    titleEn: "Software Development",
    titleEs: "Desarrollo de Software",
    descriptionPt: "Soluções customizadas com as mais modernas tecnologias do mercado",
    descriptionEn: "Custom solutions with the most modern market technologies",
    descriptionEs: "Soluciones personalizadas con las tecnologías más modernas del mercado",
  },
  {
    icon: Shield,
    titlePt: "Segurança da Informação",
    titleEn: "Information Security",
    titleEs: "Seguridad de la Información",
    descriptionPt: "Proteção completa dos seus dados e sistemas críticos",
    descriptionEn: "Complete protection of your data and critical systems",
    descriptionEs: "Protección completa de sus datos y sistemas críticos",
  },
  {
    icon: LineChart,
    titlePt: "Análise de Dados",
    titleEn: "Data Analysis",
    titleEs: "Análisis de Datos",
    descriptionPt: "Transforme dados em insights acionáveis para decisões estratégicas",
    descriptionEn: "Transform data into actionable insights for strategic decisions",
    descriptionEs: "Transforme datos en insights accionables para decisiones estratégicas",
  },
  {
    icon: Zap,
    titlePt: "Automação de Processos",
    titleEn: "Process Automation",
    titleEs: "Automatización de Procesos",
    descriptionPt: "Otimize operações e aumente a eficiência com automação inteligente",
    descriptionEn: "Optimize operations and increase efficiency with intelligent automation",
    descriptionEs: "Optimice operaciones y aumente la eficiencia con automatización inteligente",
  },
  {
    icon: Headphones,
    titlePt: "Suporte Técnico",
    titleEn: "Technical Support",
    titleEs: "Soporte Técnico",
    descriptionPt: "Atendimento especializado 24/7 para garantir continuidade do negócio",
    descriptionEn: "Specialized 24/7 service to ensure business continuity",
    descriptionEs: "Atención especializada 24/7 para garantizar continuidad del negocio",
  },
]

export function ServicesSection({ translations }: ServicesSectionProps) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {translations.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{translations.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.titlePt}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.descriptionPt}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
