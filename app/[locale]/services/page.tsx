import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Code, Headphones, LineChart, Shield, Zap, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nossos Serviços - CorpSolutions",
  description: "Conheça todas as soluções e serviços oferecidos pela CorpSolutions",
}

const services = [
  {
    icon: Briefcase,
    title: "Consultoria Estratégica",
    description: "Análise profunda e planejamento estratégico para impulsionar seu negócio",
    features: [
      "Diagnóstico organizacional completo",
      "Planejamento estratégico de TI",
      "Gestão de mudanças",
      "Otimização de processos",
    ],
  },
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description: "Soluções customizadas com as mais modernas tecnologias do mercado",
    features: [
      "Aplicações web e mobile",
      "Sistemas corporativos",
      "Integração de sistemas",
      "Arquitetura de microsserviços",
    ],
  },
  {
    icon: Shield,
    title: "Segurança da Informação",
    description: "Proteção completa dos seus dados e sistemas críticos",
    features: [
      "Auditoria de segurança",
      "Implementação de políticas",
      "Monitoramento 24/7",
      "Compliance e certificações",
    ],
  },
  {
    icon: LineChart,
    title: "Análise de Dados",
    description: "Transforme dados em insights acionáveis para decisões estratégicas",
    features: ["Business Intelligence", "Data Analytics", "Machine Learning", "Dashboards executivos"],
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Otimize operações e aumente a eficiência com automação inteligente",
    features: [
      "RPA (Robotic Process Automation)",
      "Workflows automatizados",
      "Integração de APIs",
      "Otimização de custos",
    ],
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    description: "Atendimento especializado 24/7 para garantir continuidade do negócio",
    features: ["Suporte multinível", "SLA personalizado", "Monitoramento proativo", "Gestão de incidentes"],
  },
]

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Nossos Serviços
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Soluções completas e personalizadas para transformar seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-balance">Pronto para Começar?</h2>
            <p className="mt-4 text-lg text-primary-foreground/90 text-pretty">
              Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos patamares.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-8 gap-2">
              <Link href={`/${params.locale}/contact`}>
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
