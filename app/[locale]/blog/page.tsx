import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { getBlogPosts } from "@/lib/blog-data"
import type { Locale } from "@/lib/i18n"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - CorpSolutions",
  description: "Artigos, insights e tendências sobre tecnologia, inovação e transformação digital",
}

export default function BlogPage({ params }: { params: { locale: Locale } }) {
  const posts = getBlogPosts()
  const featuredPost = posts[0]
  const otherPosts = posts.slice(1)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
              Blog & Notícias
            </h1>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              Insights, tendências e conhecimento sobre tecnologia e inovação
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href={`/${params.locale}/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden border-border hover:border-primary transition-colors cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString("pt-BR")}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-6 pt-6 border-t">
                    <Avatar>
                      <AvatarImage src={featuredPost.authorImage || "/placeholder.svg"} alt={featuredPost.author} />
                      <AvatarFallback>{featuredPost.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{featuredPost.author}</p>
                      <p className="text-sm text-muted-foreground">{featuredPost.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* Other Posts Grid */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Mais Artigos</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post) => (
              <Link key={post.id} href={`/${params.locale}/blog/${post.slug}`}>
                <Card className="h-full border-border hover:border-primary transition-colors cursor-pointer overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-xl text-balance">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{post.author}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
