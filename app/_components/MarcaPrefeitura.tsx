/**
 * Marca do produto: ícone de barras + assinatura "PREFEITURA".
 * Mesma identidade usada no cabeçalho do painel e na landing page.
 */

// Proporções de referência vêm do cabeçalho do painel, cujo ícone tem 42px.
const BASE = 42

type IconeProps = {
  /** Lado do quadrado em px. As barras escalam proporcionalmente. */
  tamanho?: number
  gradiente?: string
  sombra?: boolean
}

/** Só o ícone: quadrado com gradiente e as três barras. */
export function IconeMarca({
  tamanho = BASE,
  gradiente = 'linear-gradient(150deg,#2E3E9E,#1B2668)',
  sombra = true,
}: IconeProps) {
  const px = (v: number) => Math.round((v * tamanho) / BASE) + 'px'

  const barra = (altura: number, cor: string) => ({
    width: px(6),
    height: px(altura),
    borderRadius: `${px(2)} ${px(2)} 0 0`,
    background: cor,
  })

  return (
    <div
      style={{
        width: tamanho,
        height: tamanho,
        borderRadius: px(12),
        background: gradiente,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        gap: px(3),
        padding: `${px(9)} ${px(8)}`,
        boxShadow: sombra ? '0 10px 20px -12px rgba(31,43,108,0.8)' : undefined,
        flex: 'none',
      }}
    >
      <span style={barra(12, 'rgba(255,255,255,0.55)')} />
      <span style={barra(20, 'rgba(255,255,255,0.8)')} />
      <span style={barra(16, '#E9A13B')} />
    </div>
  )
}

type Props = {
  /** Lado do ícone em px. O restante da assinatura escala junto. */
  tamanho?: number
  direcao?: 'vertical' | 'horizontal'
}

export default function MarcaPrefeitura({ tamanho = 56, direcao = 'vertical' }: Props) {
  const px = (v: number) => Math.round((v * tamanho) / BASE) + 'px'
  const vertical = direcao === 'vertical'

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        alignItems: 'center',
        gap: px(12),
      }}
    >
      <IconeMarca tamanho={tamanho} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 1.1,
          alignItems: vertical ? 'center' : 'flex-start',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: px(8),
            letterSpacing: '0.16em',
            color: '#8791B4',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          Prefeitura Municipal
        </span>
        <span
          style={{
            fontSize: px(22),
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#1F2B6C',
            whiteSpace: 'nowrap',
          }}
        >
          PREFEITURA
        </span>
        <span
          style={{
            fontFamily: 'var(--font-ibm-plex-mono), monospace',
            fontSize: px(7),
            letterSpacing: '0.14em',
            color: '#A4AECB',
            textTransform: 'uppercase',
          }}
        >
          analytics tributário
        </span>
      </div>
    </div>
  )
}
