export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  authorImage: string
  publishedAt: string
  category: string
  image: string
  readTime: string
}

// Mock data - In production, this would come from a CMS
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "transformacao-digital-2024",
    title: "Transformação Digital em 2024: Tendências e Oportunidades",
    excerpt:
      "Descubra as principais tendências de transformação digital que estão moldando o futuro dos negócios corporativos.",
    content: `
      <p>A transformação digital continua sendo uma prioridade estratégica para empresas de todos os portes. Em 2024, observamos uma aceleração ainda maior na adoção de tecnologias emergentes.</p>
      
      <h2>Principais Tendências</h2>
      <p>Inteligência Artificial, Cloud Computing e Automação estão no centro das estratégias de transformação digital. Empresas que investem nessas áreas estão obtendo vantagens competitivas significativas.</p>
      
      <h2>Desafios e Oportunidades</h2>
      <p>Apesar dos desafios de implementação, as oportunidades são imensas. A chave está em ter uma estratégia clara e parceiros experientes para guiar o processo.</p>
    `,
    author: "Carlos Mendes",
    authorRole: "CEO & Fundador",
    authorImage: "/team-ceo-carlos.jpg",
    publishedAt: "2024-01-15",
    category: "Tecnologia",
    image: "/digital-transformation-technology-business-modern-.jpg",
    readTime: "5 min",
  },
  {
    id: "2",
    slug: "seguranca-informacao-empresas",
    title: "Segurança da Informação: Protegendo Ativos Críticos",
    excerpt: "Como implementar uma estratégia robusta de segurança da informação em ambientes corporativos complexos.",
    content: `
      <p>A segurança da informação nunca foi tão crítica. Com o aumento de ataques cibernéticos, empresas precisam adotar uma postura proativa.</p>
      
      <h2>Estratégias Essenciais</h2>
      <p>Implementação de políticas de segurança, treinamento de equipes e uso de tecnologias avançadas de proteção são fundamentais.</p>
      
      <h2>Compliance e Certificações</h2>
      <p>Estar em conformidade com regulamentações como LGPD e obter certificações internacionais demonstra compromisso com a segurança.</p>
    `,
    author: "Mariana Santos",
    authorRole: "Head de Segurança",
    authorImage: "/team-security-mariana.jpg",
    publishedAt: "2024-01-10",
    category: "Segurança",
    image: "/cybersecurity-data-protection-network-security-shi.jpg",
    readTime: "7 min",
  },
  {
    id: "3",
    slug: "inteligencia-artificial-negocios",
    title: "IA nos Negócios: Além do Hype",
    excerpt: "Aplicações práticas de inteligência artificial que estão gerando resultados reais para empresas.",
    content: `
      <p>A inteligência artificial deixou de ser apenas uma promessa futurista para se tornar uma realidade presente em diversos setores.</p>
      
      <h2>Casos de Uso Práticos</h2>
      <p>Desde automação de atendimento até análise preditiva, a IA está transformando processos e gerando eficiência operacional.</p>
      
      <h2>ROI e Implementação</h2>
      <p>Empresas que implementam IA de forma estratégica estão vendo retornos significativos em produtividade e redução de custos.</p>
    `,
    author: "Patricia Oliveira",
    authorRole: "CTO",
    authorImage: "/team-cto-patricia.jpg",
    publishedAt: "2024-01-05",
    category: "Inovação",
    image: "/artificial-intelligence-ai-machine-learning-neural.jpg",
    readTime: "6 min",
  },
  {
    id: "4",
    slug: "cloud-computing-escalabilidade",
    title: "Cloud Computing: Escalabilidade e Eficiência",
    excerpt: "Como a computação em nuvem está permitindo que empresas cresçam de forma ágil e sustentável.",
    content: `
      <p>A migração para a nuvem não é mais uma questão de "se", mas de "quando" e "como". Empresas modernas estão aproveitando os benefícios da cloud.</p>
      
      <h2>Benefícios da Cloud</h2>
      <p>Escalabilidade sob demanda, redução de custos de infraestrutura e maior flexibilidade operacional são apenas alguns dos benefícios.</p>
      
      <h2>Estratégias de Migração</h2>
      <p>Uma migração bem-sucedida requer planejamento cuidadoso, escolha adequada de provedores e gestão de mudanças eficaz.</p>
    `,
    author: "Fernando Costa",
    authorRole: "Head de Desenvolvimento",
    authorImage: "/team-dev-fernando.jpg",
    publishedAt: "2023-12-28",
    category: "Cloud",
    image: "/cloud-computing-server-data-center-technology-infr.jpg",
    readTime: "5 min",
  },
  {
    id: "5",
    slug: "gestao-projetos-ageis",
    title: "Metodologias Ágeis: Acelerando Entregas",
    excerpt: "Como metodologias ágeis estão revolucionando a gestão de projetos em ambientes corporativos.",
    content: `
      <p>Metodologias ágeis como Scrum e Kanban estão se tornando padrão em empresas que buscam maior velocidade e adaptabilidade.</p>
      
      <h2>Princípios Ágeis</h2>
      <p>Entregas incrementais, feedback contínuo e colaboração entre equipes são pilares fundamentais das metodologias ágeis.</p>
      
      <h2>Implementação Prática</h2>
      <p>A transição para metodologias ágeis requer mudança cultural e treinamento adequado das equipes envolvidas.</p>
    `,
    author: "Juliana Ferreira",
    authorRole: "Diretora de Operações",
    authorImage: "/team-operations-juliana.jpg",
    publishedAt: "2023-12-20",
    category: "Gestão",
    image: "/agile-methodology-scrum-kanban-team-collaboration-.jpg",
    readTime: "4 min",
  },
  {
    id: "6",
    slug: "analytics-decisoes-estrategicas",
    title: "Analytics: Dados Impulsionando Decisões",
    excerpt: "Como transformar grandes volumes de dados em insights estratégicos que geram valor para o negócio.",
    content: `
      <p>Em um mundo orientado por dados, a capacidade de extrair insights acionáveis é um diferencial competitivo crucial.</p>
      
      <h2>Business Intelligence</h2>
      <p>Ferramentas de BI permitem visualizar dados complexos de forma intuitiva, facilitando a tomada de decisões informadas.</p>
      
      <h2>Cultura Data-Driven</h2>
      <p>Criar uma cultura orientada por dados requer investimento em tecnologia, processos e capacitação de equipes.</p>
    `,
    author: "Roberto Lima",
    authorRole: "Diretor de Consultoria",
    authorImage: "/team-director-roberto.jpg",
    publishedAt: "2023-12-15",
    category: "Analytics",
    image: "/data-analytics-business-intelligence-charts-graphs.jpg",
    readTime: "6 min",
  },
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(currentPostId: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.id !== currentPostId).slice(0, limit)
}
