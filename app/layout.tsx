import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CorpSolutions - Soluções Corporativas de Excelência',
  description: 'Transformamos desafios em oportunidades com tecnologia e inovação. Soluções corporativas para empresas de médio e grande porte.',
  keywords: 'consultoria, tecnologia, inovação, soluções corporativas, desenvolvimento',
  authors: [{ name: 'CorpSolutions' }],
  openGraph: {
    title: 'CorpSolutions - Soluções Corporativas de Excelência',
    description: 'Transformamos desafios em oportunidades com tecnologia e inovação',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body>
        {children}
      </body>
    </html>
  )
}
