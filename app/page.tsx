import { redirect } from 'next/navigation'

export default function RootPage() {
  // Redirecionar para a página em português por padrão
  redirect('/pt')
}
