import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTranslations } from "@/lib/translations"
import type { Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nossa Equipe - CorpSolutions",
  description: "Conheça os profissionais que fazem a diferença na CorpSolutions",
}

const teamMembers = [
  {
    name: "Carlos Mendes",
    role: "CEO & Fundador",
    image: "/team-ceo-carlos.jpg",
    bio: "Mais de 20 anos de experiência em gestão empresarial e transformação digital.",
    linkedin: "#",
    email: "carlos@corpsolutions.com",
  },
  {
    name: "Patricia Oliveira",
    role: "CTO",
    image: "/team-cto-patricia.jpg",
    bio: "Especialista em arquitetura de software e liderança de equipes técnicas.",
    linkedin: "#",
    email: "patricia@corpsolutions.com",
  },
  {
    name: "Roberto Lima",
    role: "Diretor de Consultoria",
    image: "/team-director-roberto.jpg",
    bio: "MBA em Estratégia Empresarial com foco em transformação organizacional.",
    linkedin: "#",
    email: "roberto@corpsolutions.com",
  },
  {
    name: "Juliana Ferreira",
    role: "Diretora de Operações",
    image: "/team-operations-juliana.jpg",
    bio: "Especialista em otimização de processos e gestão de projetos complexos.",
    linkedin: "#",
    email: "juliana@corpsolutions.com",
  },
  {
    name: "Fernando Costa",
    role: "Head de Desenvolvimento",
    image: "/team-dev-fernando.jpg",
    bio: "Líder técnico com expertise em soluções escaláveis e arquitetura cloud.",
    linkedin: "#",
    email: "fernando@corpsolutions.com",
  },
  {
    name: "Mariana Santos",
    role: "Head de Segurança",
    image: "/team-security-mariana.jpg",
    bio: "Certificações internacionais em segurança da informação e compliance.",
    linkedin: "#",
    email: "mariana@corpsolutions.com",
  },
]

export default function TeamPage({ params }: { params: { locale: Locale } }) {
  const translations = getTranslations(params.locale)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              {translations.team.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">{translations.team.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-32 w-32 mb-4">
                      <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className="text-2xl">{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mt-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{member.bio}</p>
                    <div className="flex gap-2 mt-6">
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground text-balance">Faça Parte do Nosso Time</h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Estamos sempre em busca de talentos excepcionais para se juntar à nossa equipe.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={`/${params.locale}/contact`}>Ver Oportunidades</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
