import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { generateSEO } from "@/lib/seo"
import type { Locale } from "@/lib/i18n"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { locale: Locale; slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post não encontrado",
    }
  }

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    locale: params.locale,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.publishedAt,
    author: post.author,
  })
}

export default function BlogPostPage({ params }: { params: { locale: Locale; slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.id)

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <Button variant="ghost" asChild>
          <Link href={`/${params.locale}/blog`} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="mx-auto max-w-4xl">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6 text-balance">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.authorImage || "/placeholder.svg"} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p className="text-sm text-muted-foreground">{post.authorRole}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} de leitura
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 mb-12 rounded-lg overflow-hidden">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Artigos Relacionados</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/${params.locale}/blog/${relatedPost.slug}`}>
                  <Card className="h-full border-border hover:border-primary transition-colors cursor-pointer overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2">{relatedPost.category}</Badge>
                      <CardTitle className="text-lg text-balance">{relatedPost.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            datePublished: post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author,
              jobTitle: post.authorRole,
            },
            publisher: {
              "@type": "Organization",
              name: "CorpSolutions",
              logo: {
                "@type": "ImageObject",
                url: "https://corpsolutions.com/logo.png",
              },
            },
          }),
        }}
      />
    </div>
  )
}
