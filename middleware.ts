import { NextRequest, NextResponse } from 'next/server'
import { acessoPermitido, homeDoPerfil, type Perfil } from '@/lib/perfil'

const PUBLIC_PATHS = ['/login', '/api/auth/login', '/api/health']

// Lê o perfil do payload do JWT (sem verificar assinatura — só para roteamento).
// A autenticidade é garantida no servidor por getSession() (que verifica a assinatura):
// um cookie forjado com outro perfil quebra a assinatura e é rejeitado nas rotas/APIs.
function lerPerfil(token: string): Perfil {
  try {
    const seg = token.split('.')[1]
    const b64 = seg.replace(/-/g, '+').replace(/_/g, '/').padEnd(seg.length + (4 - (seg.length % 4)) % 4, '=')
    const role = JSON.parse(atob(b64)).role
    return role === 'orcamentario' || role === 'tributario' || role === 'admin' ? role : 'admin'
  } catch {
    return 'admin'
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (PUBLIC_PATHS.some(p => pathname.startsWith(p))) {
    return NextResponse.next()
  }

  // A raiz é pública: serve a landing page para visitantes. Quem já tem sessão
  // é redirecionado ao painel pela própria página (que verifica a assinatura do
  // cookie) — por isso não entra em PUBLIC_PATHS, que usa startsWith.
  if (pathname === '/') {
    return NextResponse.next()
  }

  const token = req.cookies.get('auth_token')?.value
  if (!token) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Não autenticado' }, { status: 401 })
    }
    return NextResponse.redirect(new URL('/login', req.url))
  }

  const perfil = lerPerfil(token)

  if (!acessoPermitido(perfil, pathname)) {
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'Sem permissão para este perfil' }, { status: 403 })
    }
    return NextResponse.redirect(new URL(homeDoPerfil(perfil), req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|webp|ico|gif)$).*)'],
}
