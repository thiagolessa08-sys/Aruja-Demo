'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

const LARGURA_BASE = 1440

type Props = {
  /** Altura do conteúdo em escala 1:1 (1010 no hero, 1500 nos painéis). */
  contentHeight: number
  /** Altura fixa da moldura. Se ausente, acompanha o conteúdo escalado. */
  height?: string
  style?: CSSProperties
  children: ReactNode
}

/**
 * Moldura que renderiza o painel em 1440px e o reduz proporcionalmente à
 * largura disponível — mesma mecânica do export original (ResizeObserver +
 * transform: scale, com origem no canto superior esquerdo).
 */
export default function ScaledFrame({ contentHeight, height, style, children }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(height ? 0.42 : 0.4)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const medir = () => {
      if (el.clientWidth) setScale(Math.min(el.clientWidth / LARGURA_BASE, 1))
    }

    medir()
    const raf = requestAnimationFrame(medir)
    const ro = new ResizeObserver(medir)
    ro.observe(el)
    window.addEventListener('resize', medir)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', medir)
    }
  }, [])

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: height ?? Math.round(contentHeight * scale) + 'px',
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: LARGURA_BASE + 'px',
          height: contentHeight + 'px',
          transform: `scale(${scale.toFixed(4)})`,
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }}
      >
        {children}
      </div>
    </div>
  )
}
