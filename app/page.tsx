import { redirect } from 'next/navigation'
import { getSession } from '@/lib/auth'
import { homeDoPerfil } from '@/lib/perfil'
import LandingPage from './_components/landing/LandingPage'

// A raiz é pública: visitante vê a landing page, quem já tem sessão válida vai
// direto para o painel do seu perfil.
export default function Home() {
  const session = getSession()
  if (session) redirect(homeDoPerfil(session.role))

  return <LandingPage />
}
