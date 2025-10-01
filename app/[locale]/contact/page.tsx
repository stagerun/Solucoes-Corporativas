import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { generateSEO } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  return generateSEO({
    title: "Contato",
    description: "Entre em contato conosco. Estamos prontos para ajudar sua empresa a crescer.",
    locale: params.locale,
    path: "/contact",
  })
}

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@corpsolutions.com",
    link: "mailto:contato@corpsolutions.com",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "+55 (11) 1234-5678",
    link: "tel:+551112345678",
  },
  {
    icon: MapPin,
    title: "Endereço",
    content: "Av. Paulista, 1000 - São Paulo, SP",
    link: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sex: 9h às 18h",
    link: null,
  },
]

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Entre em Contato
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Estamos prontos para ajudar sua empresa a alcançar novos patamares. Fale conosco!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              const content = info.link ? (
                <a
                  href={info.link}
                  className="text-primary hover:underline"
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {info.content}
                </a>
              ) : (
                <span className="text-foreground">{info.content}</span>
              )

              return (
                <Card key={index} className="border-border text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <div className="text-sm">{content}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-6">
              <Card className="border-border overflow-hidden">
                <div className="relative h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975359085253!2d-46.65644!3d-23.561414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização CorpSolutions"
                  />
                </div>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Por Que Escolher a CorpSolutions?</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Mais de 15 anos de experiência no mercado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Equipe altamente qualificada e certificada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Soluções personalizadas para seu negócio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Suporte técnico 24/7 disponível</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>98% de satisfação dos clientes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-primary text-primary-foreground">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">Atendimento Prioritário</h3>
                  <p className="text-sm text-primary-foreground/90 mb-4">
                    Para clientes corporativos, oferecemos atendimento prioritário e consultoria personalizada.
                  </p>
                  <a
                    href="tel:+551112345678"
                    className="text-sm font-semibold hover:underline inline-flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Ligue agora: (11) 1234-5678
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Qual o prazo de resposta?</h3>
                  <p className="text-sm text-muted-foreground">
                    Respondemos todas as solicitações em até 24 horas úteis. Para casos urgentes, entre em contato por
                    telefone.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Como funciona o processo de consultoria?</h3>
                  <p className="text-sm text-muted-foreground">
                    Iniciamos com uma reunião de diagnóstico gratuita, seguida de proposta personalizada e implementação
                    com acompanhamento contínuo.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">Atendem empresas de que porte?</h3>
                  <p className="text-sm text-muted-foreground">
                    Atendemos empresas de médio e grande porte de todos os setores, com soluções escaláveis e
                    personalizadas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CorpSolutions",
            url: "https://corpsolutions.com",
            logo: "https://corpsolutions.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55-11-1234-5678",
              contactType: "customer service",
              email: "contato@corpsolutions.com",
              availableLanguage: ["Portuguese", "English", "Spanish"],
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "Av. Paulista, 1000",
              addressLocality: "São Paulo",
              addressRegion: "SP",
              addressCountry: "BR",
            },
            sameAs: [
              "https://www.facebook.com/corpsolutions",
              "https://www.linkedin.com/company/corpsolutions",
              "https://twitter.com/corpsolutions",
            ],
          }),
        }}
      />
    </div>
  )
}
