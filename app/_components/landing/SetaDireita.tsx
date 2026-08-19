type Props = {
  /** Lado do ícone em px. */
  tamanho?: number
  /** Espessura do traço. */
  espessura?: number
}

/**
 * Seta para a direita.
 *
 * O export usava o caractere "→" (U+2192), que não existe no subset latino da
 * Plus Jakarta Sans e acabava desenhado por uma fonte de fallback — traço fino
 * e alinhamento irregular entre navegadores. Em SVG a espessura é controlada e
 * a cor acompanha o texto (currentColor).
 */
export default function SetaDireita({ tamanho = 16, espessura = 2.4 }: Props) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={espessura}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ display: 'block', flex: 'none' }}
    >
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}
