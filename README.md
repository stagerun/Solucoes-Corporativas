# CorpSolutions - Site Corporativo Profissional

Site corporativo moderno, responsivo e multilíngue desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Características

- ✅ Design minimalista e institucional
- ✅ Totalmente responsivo (mobile-first)
- ✅ Sistema multilíngue (PT, EN, ES)
- ✅ SEO otimizado com meta tags, sitemap e schema.org
- ✅ Google Analytics integrado
- ✅ Páginas: Home, Sobre, Serviços, Equipe, Blog, Contato
- ✅ Sistema de blog com posts relacionados
- ✅ Formulário de contato funcional
- ✅ Performance otimizada

## 🛠️ Tecnologias

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Componentes:** shadcn/ui
- **Ícones:** Lucide React
- **Fontes:** Geist Sans & Geist Mono

## 📁 Estrutura do Projeto

\`\`\`
├── app/
│   ├── [locale]/          # Rotas localizadas
│   │   ├── page.tsx       # Página inicial
│   │   ├── about/         # Sobre nós
│   │   ├── services/      # Serviços
│   │   ├── team/          # Equipe
│   │   ├── blog/          # Blog e artigos
│   │   └── contact/       # Contato
│   ├── sitemap.ts         # Sitemap XML
│   ├── robots.ts          # Robots.txt
│   └── manifest.ts        # PWA Manifest
├── components/            # Componentes React
├── lib/                   # Utilitários e configurações
│   ├── i18n.ts           # Sistema de internacionalização
│   ├── translations.ts   # Traduções
│   ├── seo.ts            # Helpers de SEO
│   └── blog-data.ts      # Dados do blog
└── public/               # Arquivos estáticos
\`\`\`

## 🌐 Sistema Multilíngue

O site suporta 3 idiomas:
- Português (pt) - padrão
- Inglês (en)
- Espanhol (es)

Acesse via: `/pt`, `/en` ou `/es`

## 🎨 Design System

**Cores Corporativas:**
- Primary: #164e63 (Azul corporativo)
- Accent: #6366f1 (Roxo/Azul)
- Neutrals: Branco, cinzas, preto

**Tipografia:**
- Headings: Geist Sans Bold
- Body: Geist Sans Regular

## 📊 SEO e Performance

- ✅ Meta tags otimizadas
- ✅ Open Graph e Twitter Cards
- ✅ Sitemap XML automático
- ✅ Robots.txt configurado
- ✅ Schema.org (JSON-LD)
- ✅ Imagens otimizadas
- ✅ Lazy loading
- ✅ Google Analytics

## 🔗 Integração com CMS

O site está preparado para integração com:
- WordPress (via REST API)
- Strapi
- Sanity
- Contentful

Atualmente usa dados mock em `lib/blog-data.ts`

## 📝 Próximos Passos

1. Substituir Google Analytics ID por um real
2. Conectar formulário de contato a um backend
3. Integrar com CMS de escolha
4. Adicionar mais idiomas se necessário
5. Configurar domínio e deploy

## 🚀 Deploy

Recomendado: Vercel (otimizado para Next.js)

\`\`\`bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
\`\`\`

## 📄 Licença

© 2025 CorpSolutions. Todos os direitos reservados.
# Solucoes-Corporativas
