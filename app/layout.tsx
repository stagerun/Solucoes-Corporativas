import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CorpSolutions',
  description: 'Soluções Corporativas de Excelência',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
