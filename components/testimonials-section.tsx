import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialsSectionProps {
  translations: {
    testimonials: {
      title: string
      subtitle: string
    }
  }
}

const testimonials = [
  {
    name: "Maria Silva",
    role: "CEO, TechCorp",
    image: "/professional-woman-executive.png",
    content:
      "A CorpSolutions transformou completamente nossa operação. A consultoria estratégica nos ajudou a crescer 150% em apenas um ano.",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "CTO, InnovaTech",
    image: "/professional-man-technology.png",
    content:
      "Profissionalismo excepcional. A equipe entregou um sistema robusto e escalável que superou todas as nossas expectativas.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Diretora de TI, GlobalSolutions",
    image: "/professional-woman-it-director.jpg",
    content:
      "Parceria de longo prazo que vale cada investimento. Suporte técnico impecável e soluções sempre inovadoras.",
    rating: 5,
  },
]

export function TestimonialsSection({ translations }: TestimonialsSectionProps) {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {translations.testimonials.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">{translations.testimonials.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
