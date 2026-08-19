import { Fragment } from 'react'

import { dadosMockup, type Tab } from './mockup-dados'

/**
 * Réplica estática do painel Prefeitura Analytics, usada como preview dentro da
 * landing page. As molduras aplicam pointer-events:none, então nada aqui é
 * interativo: os handlers do export original foram omitidos de propósito.
 */
export default function AppMockup({ tab }: { tab: Tab }) {
  const {
    tabHighlighter, bgOrcamento, fgOrcamento, bgContribuintes,
    fgContribuintes, bgImobiliario, fgImobiliario, bgMobiliario,
    fgMobiliario, bgOutros, fgOutros, bgDivida,
    fgDivida, bgReforma, fgReforma, bgChat,
    fgChat, isOrcamento, isContribuintes, isImobiliario,
    isMobiliario, isOutros, isDivida, isReforma,
    isChat, anos, meses, novosContrib,
    tributosLancados, pendencias, iptuEvolucao, bairros,
    issSeries, issTabela, outrosSeries, outrosTabela,
    dividaTributos, recuperacao, transicao, marcos,
    riscos, pensando, rascunho, sugestoes,
    mensagens,
  } = dadosMockup(tab)

  return (
      <div style={{ 'minHeight': '100vh', 'padding': '20px 24px 40px', 'display': 'flex', 'flexDirection': 'column', 'gap': '20px' }}>
        <header style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '12px 18px', 'display': 'flex', 'alignItems': 'center', 'flexWrap': 'wrap', 'rowGap': '12px', 'columnGap': '20px', 'boxShadow': '0 12px 28px -26px rgba(19,29,80,0.7)' }}>
          <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'flex': 'none' }}>
            <div style={{ 'width': '42px', 'height': '42px', 'borderRadius': '12px', 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'display': 'flex', 'alignItems': 'flex-end', 'justifyContent': 'center', 'gap': '3px', 'padding': '9px 8px', 'boxShadow': '0 10px 20px -12px rgba(31,43,108,0.8)' }}>
              <span style={{ 'width': '6px', 'height': '12px', 'borderRadius': '2px 2px 0 0', 'background': 'rgba(255,255,255,0.55)' }} />
              <span style={{ 'width': '6px', 'height': '20px', 'borderRadius': '2px 2px 0 0', 'background': 'rgba(255,255,255,0.8)' }} />
              <span style={{ 'width': '6px', 'height': '16px', 'borderRadius': '2px 2px 0 0', 'background': '#E9A13B' }} />
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'lineHeight': '1.1' }}>
              <span style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '8px', 'letterSpacing': '0.16em', 'color': '#8791B4', 'textTransform': 'uppercase', 'whiteSpace': 'nowrap' }}>
                Prefeitura Municipal
              </span>
              <span style={{ 'fontSize': '22px', 'fontWeight': '800', 'letterSpacing': '-0.02em', 'color': '#1F2B6C', 'whiteSpace': 'nowrap' }}>
                PREFEITURA
              </span>
              <span style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '7px', 'letterSpacing': '0.14em', 'color': '#A4AECB', 'textTransform': 'uppercase' }}>
                analytics tributário
              </span>
            </div>
          </div>
          <nav style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '4px', 'flex': '1 1 520px', 'flexWrap': 'wrap', 'justifyContent': 'center', 'minWidth': '0' }}>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgOrcamento, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgOrcamento, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Orçamento
            </button>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgContribuintes, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgContribuintes, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Contribuintes
            </button>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgImobiliario, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgImobiliario, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Imobiliário
            </button>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgMobiliario, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgMobiliario, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Mobiliário
            </button>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgOutros, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgOutros, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Outros Tributos
            </button>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgDivida, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgDivida, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Dívida Ativa
            </button>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgReforma, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgReforma, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Reforma Tributária
            </button>
            <button className='mk-hover-1' type='button' style={{ 'border': 'none', 'cursor': 'pointer', 'background': bgChat, 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '600', 'color': fgChat, 'padding': '9px 15px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
              Chat
            </button>
          </nav>
          <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px', 'flex': 'none' }}>
            <div style={{ 'width': '38px', 'height': '38px', 'borderRadius': '999px', 'border': '1px solid #E6EBF7', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#6B76A0', 'fontSize': '15px' }}>
              ⚙
            </div>
            <div style={{ 'width': '38px', 'height': '38px', 'borderRadius': '999px', 'border': '1px solid #E6EBF7', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#6B76A0', 'fontSize': '15px' }}>
              🔔
            </div>
            <div style={{ 'width': '38px', 'height': '38px', 'borderRadius': '999px', 'background': '#E7ECFA', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#6B76A0', 'fontSize': '15px' }}>
              ◍
            </div>
          </div>
        </header>
        <div style={{ 'position': 'absolute', 'left': '-9999px', 'top': '0' }}>
          {tabHighlighter}
        </div>
        {isOrcamento && (<>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '16px' }}>
              <h1 style={{ 'margin': '0', 'fontSize': '30px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Boa tarde,{' '}
                <span style={{ 'color': '#A4AECB' }}>
                  Administrador!
                </span>
              </h1>
              <div style={{ 'display': 'flex', 'background': '#E7ECFA', 'padding': '4px', 'borderRadius': '999px' }}>
                <span style={{ 'background': '#1F2B6C', 'color': '#fff', 'padding': '9px 22px', 'borderRadius': '999px', 'fontSize': '13.5px', 'fontWeight': '700' }}>
                  Receita
                </span>
                <span style={{ 'color': '#5A6488', 'padding': '9px 22px', 'borderRadius': '999px', 'fontSize': '13.5px', 'fontWeight': '600' }}>
                  Despesa
                </span>
              </div>
            </div>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px', 'flexWrap': 'wrap' }}>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '9px 16px', 'borderRadius': '999px', 'fontSize': '13px', 'fontWeight': '600', 'color': '#3B4573' }}>
                2026 ▾
              </span>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '9px 16px', 'borderRadius': '999px', 'fontSize': '13px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Agosto ▾
              </span>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '9px 16px', 'borderRadius': '999px', 'fontSize': '13px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Impostos e Taxas: Todos ▾
              </span>
              <span style={{ 'marginLeft': 'auto', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '11px', 'color': '#98A1C0' }}>
                ↻ atualizado em 19/08/2026
              </span>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(210px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Orçado
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': '8px' }}>
                  <span style={{ 'fontSize': '24px', 'fontWeight': '800', 'letterSpacing': '-0.02em' }}>
                    829,72 mi
                  </span>
                  <span style={{ 'color': '#1B9E6E', 'fontSize': '17px' }}>
                    ↗
                  </span>
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    Ano anterior{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      761,14 mi
                    </strong>
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    9,01%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'border': '1px solid #1B2668', 'borderRadius': '14px', 'padding': '16px 18px', 'color': '#fff', 'boxShadow': '0 20px 34px -24px rgba(19,29,80,0.8)' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#C3CCF4' }}>
                  Orçado Atualizado
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': '8px' }}>
                  <span style={{ 'fontSize': '24px', 'fontWeight': '800', 'letterSpacing': '-0.02em' }}>
                    905,52 mi
                  </span>
                  <span style={{ 'color': '#7EE0B4', 'fontSize': '17px' }}>
                    ↗
                  </span>
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#A9B4E8' }}>
                  <span>
                    Ano anterior{' '}
                    <strong style={{ 'color': '#fff' }}>
                      816,64 mi
                    </strong>
                  </span>
                  <strong style={{ 'color': '#7EE0B4' }}>
                    10,88%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Arrecadação Mês
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': '8px' }}>
                  <span style={{ 'fontSize': '24px', 'fontWeight': '800', 'letterSpacing': '-0.02em' }}>
                    33,44 mi
                  </span>
                  <span style={{ 'color': '#E2564D', 'fontSize': '17px' }}>
                    ↘
                  </span>
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    Agosto/25{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      50,31 mi
                    </strong>
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    -33,54%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Arrecadação até o Mês
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': '8px' }}>
                  <span style={{ 'fontSize': '24px', 'fontWeight': '800', 'letterSpacing': '-0.02em' }}>
                    500,74 mi
                  </span>
                  <span style={{ 'color': '#1B9E6E', 'fontSize': '17px' }}>
                    ↗
                  </span>
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    Ano anterior{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      470,82 mi
                    </strong>
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    6,35%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Arrecadação Mês Anterior
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': '8px' }}>
                  <span style={{ 'fontSize': '24px', 'fontWeight': '800', 'letterSpacing': '-0.02em' }}>
                    54,22 mi
                  </span>
                  <span style={{ 'color': '#E2564D', 'fontSize': '17px' }}>
                    ↘
                  </span>
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    Julho/26{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      71,10 mi
                    </strong>
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    -23,80%
                  </strong>
                </div>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(300px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Arrecadação por Ano
                  </h3>
                  <span style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '999px', 'padding': '6px 14px', 'fontSize': '12px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    Anual
                  </span>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '10px', 'height': '170px', 'marginTop': '22px' }}>
                  {anos.map((a, i) => (
                    <Fragment key={i}>
                    <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'gap': '8px', 'height': '100%', 'justifyContent': 'flex-end' }}>
                      <span style={{ 'fontSize': '11px', 'fontWeight': '700', 'color': '#3B4573' }}>
                        {a.label}
                      </span>
                      <div style={{ 'width': '100%', 'maxWidth': '52px', 'borderRadius': '6px 6px 0 0', 'background': 'linear-gradient(180deg,#2E3E9E,#8B97D6)', 'height': a.h }} />
                      <span style={{ 'fontSize': '11px', 'color': '#8791B4' }}>
                        {a.year}
                      </span>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '16px', 'padding': '20px', 'color': '#fff', 'boxShadow': '0 24px 40px -30px rgba(19,29,80,0.8)' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '999px', 'border': '2px solid rgba(255,255,255,0.35)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    ◉
                  </div>
                  <span style={{ 'background': '#fff', 'color': '#1F2B6C', 'padding': '5px 14px', 'borderRadius': '999px', 'fontSize': '11.5px', 'fontWeight': '700' }}>
                    Receita
                  </span>
                </div>
                <h3 style={{ 'margin': '18px 0 14px', 'fontSize': '17px', 'fontWeight': '700' }}>
                  Insights de Receita
                </h3>
                <ul style={{ 'margin': '0', 'paddingLeft': '16px', 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '13px', 'lineHeight': '1.55', 'color': '#DCE2FA' }}>
                  <li>
                    O município cresceu{' '}
                    <strong style={{ 'color': '#fff' }}>
                      11,13%
                    </strong>
                    {' '}na arrecadação até julho/2026 (467,3 mi vs 420,5 mi em 2025).
                  </li>
                  <li>
                    Transferências estaduais (162,6 mi) e impostos (134,7 mi) respondem por{' '}
                    <strong style={{ 'color': '#fff' }}>
                      63,6%
                    </strong>
                    {' '}da receita.
                  </li>
                  <li>
                    Julho caiu{' '}
                    <strong style={{ 'color': '#fff' }}>
                      23,8%
                    </strong>
                    {' '}vs junho — possível sazonalidade ou atraso de repasses.
                  </li>
                </ul>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0 0 4px', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Arrecadação por Categoria / Origem
                </h3>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#2E3E9E' }}>
                  Todas
                </div>
                <div style={{ 'marginTop': '22px', 'display': 'flex', 'flexDirection': 'column', 'gap': '14px' }}>
                  <div>
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '11px', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'letterSpacing': '0.1em', 'color': '#8791B4', 'textTransform': 'uppercase' }}>
                      <span>
                        Receitas correntes
                      </span>
                      <strong style={{ 'color': '#1F2B6C', 'fontFamily': 'var(--font-plus-jakarta),sans-serif', 'fontSize': '13px', 'letterSpacing': '0' }}>
                        33,4 mi
                      </strong>
                    </div>
                    <div style={{ 'height': '26px', 'borderRadius': '8px', 'marginTop': '8px', 'background': 'linear-gradient(90deg,#1F2B6C,#6D7BD1)' }} />
                  </div>
                  <div>
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '11px', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'letterSpacing': '0.1em', 'color': '#8791B4', 'textTransform': 'uppercase' }}>
                      <span>
                        Transferências
                      </span>
                      <strong style={{ 'color': '#1F2B6C', 'fontFamily': 'var(--font-plus-jakarta),sans-serif', 'fontSize': '13px', 'letterSpacing': '0' }}>
                        18,2 mi
                      </strong>
                    </div>
                    <div style={{ 'height': '26px', 'width': '58%', 'borderRadius': '8px', 'marginTop': '8px', 'background': 'linear-gradient(90deg,#2E3E9E,#8B97D6)' }} />
                  </div>
                  <div>
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '11px', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'letterSpacing': '0.1em', 'color': '#8791B4', 'textTransform': 'uppercase' }}>
                      <span>
                        Receitas de capital
                      </span>
                      <strong style={{ 'color': '#1F2B6C', 'fontFamily': 'var(--font-plus-jakarta),sans-serif', 'fontSize': '13px', 'letterSpacing': '0' }}>
                        2,1 mi
                      </strong>
                    </div>
                    <div style={{ 'height': '26px', 'width': '14%', 'borderRadius': '8px', 'marginTop': '8px', 'background': 'linear-gradient(90deg,#E9A13B,#F6D9A8)' }} />
                  </div>
                  <span style={{ 'fontSize': '11.5px', 'color': '#A4AECB' }}>
                    Clique numa barra para detalhar
                  </span>
                </div>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'minmax(420px,2.1fr) minmax(280px,1fr)', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Arrecadação por Mês
                  </h3>
                  <div style={{ 'display': 'flex', 'gap': '16px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                      Ano anterior
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                      Ano atual
                    </span>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '8px', 'height': '210px', 'marginTop': '24px' }}>
                  {meses.map((m, i) => (
                    <Fragment key={i}>
                    <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '8px', 'height': '100%' }}>
                      <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '3px', 'width': '100%', 'height': '100%' }}>
                        <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '4px', 'height': '100%' }}>
                          <span style={{ 'fontSize': '9.5px', 'fontWeight': '700', 'color': '#3B4573' }}>
                            {m.v1}
                          </span>
                          <div style={{ 'width': '100%', 'borderRadius': '4px 4px 0 0', 'background': 'linear-gradient(180deg,#2E3E9E,#8B97D6)', 'height': m.h1 }} />
                        </div>
                        <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '4px', 'height': '100%' }}>
                          <span style={{ 'fontSize': '9.5px', 'fontWeight': '700', 'color': '#B5761C' }}>
                            {m.v2}
                          </span>
                          <div style={{ 'width': '100%', 'borderRadius': '4px 4px 0 0', 'background': 'linear-gradient(180deg,#E9A13B,#F6D9A8)', 'height': m.h2 }} />
                        </div>
                      </div>
                      <span style={{ 'fontSize': '10px', 'color': '#8791B4' }}>
                        {m.name}
                      </span>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Arrecadação Dívida Ativa
                </h3>
                <div style={{ 'fontSize': '22px', 'fontWeight': '800', 'color': '#2E3E9E', 'marginTop': '6px' }}>
                  R$ 674.058,56
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'center', 'margin': '22px 0' }}>
                  <div style={{ 'width': '190px', 'height': '190px', 'borderRadius': '999px', 'background': 'conic-gradient(#1F2B6C 0 81.67%, #E9A13B 81.67% 100%)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    <div style={{ 'width': '112px', 'height': '112px', 'borderRadius': '999px', 'background': '#fff' }} />
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '10px', 'fontSize': '12px' }}>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#1F2B6C' }} />
                    <span style={{ 'fontWeight': '600', 'color': '#3B4573' }}>
                      IMPOSTOS
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      550 k
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (81,67%)
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                    <span style={{ 'fontWeight': '600', 'color': '#3B4573' }}>
                      TAXAS
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      124 k
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (18,33%)
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#C3CCF4' }} />
                    <span style={{ 'fontWeight': '600', 'color': '#3B4573' }}>
                      DEMAIS RECEITAS
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      0
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (0,00%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>)}
        {isContribuintes && (<>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
              <h1 style={{ 'margin': '0', 'fontSize': '26px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Contribuintes · 2026
              </h1>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                Dados atualizados em 17/08/2026
              </span>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(200px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '14px', 'padding': '16px 18px', 'color': '#fff' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#C3CCF4' }}>
                  Total Contribuintes
                </div>
                <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  188.561
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#A9B4E8' }}>
                  <span>
                    Novos 2026{' '}
                    <strong style={{ 'color': '#fff' }}>
                      20.636
                    </strong>
                  </span>
                  <strong style={{ 'color': '#7EE0B4' }}>
                    6,37%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Pessoa Física
                </div>
                <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  136.019
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    até 2026{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      72,1%
                    </strong>
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    72,1%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Pessoa Jurídica
                </div>
                <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  52.542
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    até 2026{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      27,9%
                    </strong>
                  </span>
                  <strong style={{ 'color': '#3B4573' }}>
                    27,9%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Cadastros Ativos
                </div>
                <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  182.572
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do total{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      96,8%
                    </strong>
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    96,8%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Em Cobrança
                </div>
                <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  42.202
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do total{' '}
                    <strong style={{ 'color': '#3B4573' }}>
                      22,4%
                    </strong>
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    22,4%
                  </strong>
                </div>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(300px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Novos Contribuintes por Ano
                  </h3>
                  <div style={{ 'display': 'flex', 'gap': '12px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                      PF
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#8B97D6' }} />
                      PJ
                    </span>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '8px', 'height': '200px', 'marginTop': '24px' }}>
                  {novosContrib.map((c, i) => (
                    <Fragment key={i}>
                    <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '6px', 'height': '100%' }}>
                      <span style={{ 'fontSize': '9.5px', 'fontWeight': '700', 'color': '#3B4573' }}>
                        {c.label}
                      </span>
                      <div style={{ 'width': '100%', 'maxWidth': '40px', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'height': '100%' }}>
                        <div style={{ 'borderRadius': '4px 4px 0 0', 'background': '#8B97D6', 'height': c.hpj }} />
                        <div style={{ 'background': '#2E3E9E', 'height': c.hpf }} />
                      </div>
                      <span style={{ 'fontSize': '10px', 'color': '#8791B4' }}>
                        {c.year}
                      </span>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '16px', 'padding': '20px', 'color': '#fff' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '999px', 'border': '2px solid rgba(255,255,255,0.35)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    ◉
                  </div>
                  <span style={{ 'background': '#fff', 'color': '#1F2B6C', 'padding': '5px 14px', 'borderRadius': '999px', 'fontSize': '11.5px', 'fontWeight': '700' }}>
                    Contribuinte
                  </span>
                </div>
                <h3 style={{ 'margin': '18px 0 14px', 'fontSize': '17px', 'fontWeight': '700' }}>
                  Insights de Contribuinte
                </h3>
                <ul style={{ 'margin': '0', 'paddingLeft': '16px', 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '13px', 'lineHeight': '1.55', 'color': '#DCE2FA' }}>
                  <li>
                    A base reúne{' '}
                    <strong style={{ 'color': '#fff' }}>
                      188.561
                    </strong>
                    {' '}contribuintes — 136.019 PF (72,1%) e 52.542 PJ (27,9%).
                  </li>
                  <li>
                    <strong style={{ 'color': '#fff' }}>
                      20.636
                    </strong>
                    {' '}novos cadastros em 2026 (+6,4% vs 2025).
                  </li>
                  <li>
                    42.202 contribuintes (
                    <strong style={{ 'color': '#fff' }}>
                      22,4%
                    </strong>
                    {' '}da base) constam em cobrança acumulada.
                  </li>
                </ul>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Pessoa Física × Jurídica
                </h3>
                <div style={{ 'fontSize': '12.5px', 'color': '#8791B4', 'marginTop': '4px' }}>
                  distribuição da base
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'center', 'margin': '20px 0' }}>
                  <div style={{ 'width': '180px', 'height': '180px', 'borderRadius': '999px', 'background': 'conic-gradient(#1F2B6C 0 72.1%, #8B97D6 72.1% 100%)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    <div style={{ 'width': '110px', 'height': '110px', 'borderRadius': '999px', 'background': '#fff', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center' }}>
                      <strong style={{ 'fontSize': '20px' }}>
                        72,1%
                      </strong>
                      <span style={{ 'fontSize': '11px', 'color': '#8791B4' }}>
                        são PF
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '10px', 'fontSize': '12.5px' }}>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#1F2B6C' }} />
                    <span style={{ 'fontWeight': '600', 'color': '#3B4573' }}>
                      Pessoa Física
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      136.019
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (72,1%)
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#8B97D6' }} />
                    <span style={{ 'fontWeight': '600', 'color': '#3B4573' }}>
                      Pessoa Jurídica
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      52.542
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (27,9%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
              <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '10px' }}>
                <div>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Tributos Lançados
                  </h3>
                  <div style={{ 'fontSize': '12px', 'color': '#8791B4', 'marginTop': '4px' }}>
                    lançado × débitos em aberto por grupo de tributo — exercício 2026
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'gap': '16px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                    Lançado
                  </span>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E2564D' }} />
                    Débitos
                  </span>
                </div>
              </div>
              <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '14px', 'height': '210px', 'marginTop': '24px' }}>
                {tributosLancados.map((t, i) => (
                  <Fragment key={i}>
                  <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '8px', 'height': '100%' }}>
                    <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '4px', 'width': '100%', 'maxWidth': '74px', 'height': '100%' }}>
                      <div style={{ 'flex': '1', 'borderRadius': '4px 4px 0 0', 'background': 'linear-gradient(180deg,#2E3E9E,#8B97D6)', 'height': t.h1 }} />
                      <div style={{ 'flex': '1', 'borderRadius': '4px 4px 0 0', 'background': '#E2564D', 'height': t.h2 }} />
                    </div>
                    <span style={{ 'fontSize': '11px', 'fontWeight': '600', 'color': '#3B4573' }}>
                      {t.name}
                    </span>
                  </div>
                  </Fragment>
                ))}
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(320px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <div>
                    <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                      Contribuintes com Pendência por Setor
                    </h3>
                    <div style={{ 'fontSize': '12px', 'color': '#8791B4', 'marginTop': '4px' }}>
                      contribuintes distintos em cobrança — 2026
                    </div>
                  </div>
                  <span style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '999px', 'padding': '6px 14px', 'fontSize': '12px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    Devedores
                  </span>
                </div>
                <div style={{ 'marginTop': '20px', 'display': 'flex', 'flexDirection': 'column', 'gap': '16px' }}>
                  {pendencias.map((p, i) => (
                    <Fragment key={i}>
                    <div style={{ 'display': 'grid', 'gridTemplateColumns': '130px 1fr 66px', 'alignItems': 'center', 'gap': '12px' }}>
                      <span style={{ 'fontSize': '12px', 'fontWeight': '600', 'color': '#3B4573', 'textAlign': 'right' }}>
                        {p.name}
                      </span>
                      <div style={{ 'height': '8px', 'borderRadius': '999px', 'background': '#EEF2FC' }}>
                        <div style={{ 'height': '8px', 'borderRadius': '999px', 'background': '#2E3E9E', 'width': p.w }} />
                      </div>
                      <strong style={{ 'fontSize': '12.5px', 'textAlign': 'right' }}>
                        {p.value}
                      </strong>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Situação Cadastral
                </h3>
                <div style={{ 'fontSize': '12.5px', 'color': '#8791B4', 'marginTop': '4px' }}>
                  188.561 contribuintes
                </div>
                <div style={{ 'marginTop': '20px', 'display': 'flex', 'flexDirection': 'column', 'gap': '14px' }}>
                  <div>
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                      <span>
                        Ativos
                      </span>
                      <span>
                        182.572 · 96,8%
                      </span>
                    </div>
                    <div style={{ 'height': '22px', 'borderRadius': '8px', 'marginTop': '6px', 'background': 'linear-gradient(90deg,#1B9E6E,#7EE0B4)' }} />
                  </div>
                  <div>
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                      <span>
                        Suspensos
                      </span>
                      <span>
                        4.211 · 2,2%
                      </span>
                    </div>
                    <div style={{ 'height': '22px', 'width': '22%', 'borderRadius': '8px', 'marginTop': '6px', 'background': 'linear-gradient(90deg,#E9A13B,#F6D9A8)' }} />
                  </div>
                  <div>
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                      <span>
                        Baixados
                      </span>
                      <span>
                        1.778 · 1,0%
                      </span>
                    </div>
                    <div style={{ 'height': '22px', 'width': '11%', 'borderRadius': '8px', 'marginTop': '6px', 'background': 'linear-gradient(90deg,#E2564D,#F5B0AA)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>)}
        {isImobiliario && (<>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
              <h1 style={{ 'margin': '0', 'fontSize': '26px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Visão Geral do IPTU · 2026
              </h1>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                Dados atualizados em 17/08/2026
              </span>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(180px,1fr))', 'gap': '14px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Total Lançado
                </div>
                <div style={{ 'fontSize': '23px', 'fontWeight': '800', 'color': '#1F2B6C', 'marginTop': '8px' }}>
                  67,6 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    2025 62,7 mi
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    +7,84%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Total Arrecadado
                </div>
                <div style={{ 'fontSize': '23px', 'fontWeight': '800', 'color': '#1B9E6E', 'marginTop': '8px' }}>
                  43,5 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    2025 51,8 mi
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    -16,15%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Total em Aberto
                </div>
                <div style={{ 'fontSize': '23px', 'fontWeight': '800', 'color': '#E9A13B', 'marginTop': '8px' }}>
                  21,6 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    2025 8,3 mi
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    +160,21%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Total Inadimplência
                </div>
                <div style={{ 'fontSize': '23px', 'fontWeight': '800', 'color': '#E2564D', 'marginTop': '8px' }}>
                  8,2 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    2025 8,2 mi
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    -0,88%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Total Isento
                </div>
                <div style={{ 'fontSize': '23px', 'fontWeight': '800', 'color': '#8B97D6', 'marginTop': '8px' }}>
                  493 k
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    2025 33 k
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    +1.391%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px' }}>
                <div style={{ 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Total Suspenso
                </div>
                <div style={{ 'fontSize': '23px', 'fontWeight': '800', 'color': '#5A6488', 'marginTop': '8px' }}>
                  1,4 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    2025 1,6 mi
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    -17,11%
                  </strong>
                </div>
              </div>
            </div>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
              <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Evolução (5 anos)
                </h3>
                <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'gap': '14px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                    Lançado
                  </span>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#1B9E6E' }} />
                    Arrecadado
                  </span>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                    Em aberto
                  </span>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E2564D' }} />
                    Inadimplência
                  </span>
                </div>
              </div>
              <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '22px', 'height': '230px', 'marginTop': '24px' }}>
                {iptuEvolucao.map((e, i) => (
                  <Fragment key={i}>
                  <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '8px', 'height': '100%' }}>
                    <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '3px', 'width': '100%', 'height': '100%' }}>
                      <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '3px', 'height': '100%' }}>
                        <span style={{ 'fontSize': '9px', 'fontWeight': '700', 'color': '#3B4573' }}>
                          {e.l}
                        </span>
                        <div style={{ 'width': '100%', 'borderRadius': '3px 3px 0 0', 'background': '#2E3E9E', 'height': e.hl }} />
                      </div>
                      <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '3px', 'height': '100%' }}>
                        <span style={{ 'fontSize': '9px', 'fontWeight': '700', 'color': '#127A55' }}>
                          {e.a}
                        </span>
                        <div style={{ 'width': '100%', 'borderRadius': '3px 3px 0 0', 'background': '#1B9E6E', 'height': e.ha }} />
                      </div>
                      <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'height': '100%' }}>
                        <div style={{ 'width': '100%', 'borderRadius': '3px 3px 0 0', 'background': '#E9A13B', 'height': e.hb }} />
                      </div>
                      <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'height': '100%' }}>
                        <div style={{ 'width': '100%', 'borderRadius': '3px 3px 0 0', 'background': '#E2564D', 'height': e.hi }} />
                      </div>
                    </div>
                    <span style={{ 'fontSize': '11px', 'fontWeight': '700', 'color': '#3B4573' }}>
                      {e.year}
                    </span>
                    <span style={{ 'fontSize': '9.5px', 'color': '#A4AECB' }}>
                      {e.sub}
                    </span>
                  </div>
                  </Fragment>
                ))}
              </div>
              <div style={{ 'fontSize': '11.5px', 'color': '#A4AECB', 'marginTop': '14px' }}>
                Clique num ano para detalhar por mês · barras claras de 2027 = previsão (regressão linear dos últimos 5 anos)
              </div>
            </div>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
              <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                Resumo de Imóveis · 2026
              </h3>
              <div style={{ 'fontSize': '12px', 'color': '#8791B4', 'marginTop': '4px' }}>
                Base: imóveis com IPTU lançado. As demais contagens são a interseção com essa base.
              </div>
              <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(170px,1fr))', 'gap': '14px', 'marginTop': '18px' }}>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontSize': '24px', 'fontWeight': '800' }}>
                    37.136
                  </div>
                  <div style={{ 'fontSize': '12px', 'color': '#5A6488', 'marginTop': '6px' }}>
                    Total de imóveis (cadastro)
                  </div>
                </div>
                <div style={{ 'background': '#1F2B6C', 'borderRadius': '12px', 'padding': '16px', 'color': '#fff' }}>
                  <div style={{ 'fontSize': '24px', 'fontWeight': '800' }}>
                    31.199
                  </div>
                  <div style={{ 'fontSize': '12px', 'color': '#C3CCF4', 'marginTop': '6px' }}>
                    Imóveis com IPTU (base)
                  </div>
                </div>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontSize': '24px', 'fontWeight': '800', 'color': '#1B9E6E' }}>
                    648
                  </div>
                  <div style={{ 'fontSize': '12px', 'color': '#5A6488', 'marginTop': '6px' }}>
                    Com ITBI · 2,1% da base
                  </div>
                </div>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontSize': '24px', 'fontWeight': '800', 'color': '#8B97D6' }}>
                    31.026
                  </div>
                  <div style={{ 'fontSize': '12px', 'color': '#5A6488', 'marginTop': '6px' }}>
                    Com TCA · 99,4% da base
                  </div>
                </div>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontSize': '24px', 'fontWeight': '800', 'color': '#E9A13B' }}>
                    6.848
                  </div>
                  <div style={{ 'fontSize': '12px', 'color': '#5A6488', 'marginTop': '6px' }}>
                    Com empresa no endereço · 21,9%
                  </div>
                </div>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontSize': '24px', 'fontWeight': '800', 'color': '#E2564D' }}>
                    173
                  </div>
                  <div style={{ 'fontSize': '12px', 'color': '#5A6488', 'marginTop': '6px' }}>
                    IPTU sem lançamento de TCA · 0,6%
                  </div>
                </div>
              </div>
            </div>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
              <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  IPTU por Bairro
                </h3>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px', 'flexWrap': 'wrap' }}>
                  <span style={{ 'background': '#1F2B6C', 'color': '#fff', 'padding': '6px 14px', 'borderRadius': '999px', 'fontSize': '12px', 'fontWeight': '700' }}>
                    Todas
                  </span>
                  <span style={{ 'color': '#5A6488', 'padding': '6px 12px', 'fontSize': '12px', 'fontWeight': '600' }}>
                    Lançado
                  </span>
                  <span style={{ 'color': '#5A6488', 'padding': '6px 12px', 'fontSize': '12px', 'fontWeight': '600' }}>
                    Arrecadado
                  </span>
                  <span style={{ 'color': '#5A6488', 'padding': '6px 12px', 'fontSize': '12px', 'fontWeight': '600' }}>
                    Em aberto
                  </span>
                  <span style={{ 'color': '#5A6488', 'padding': '6px 12px', 'fontSize': '12px', 'fontWeight': '600' }}>
                    Inadimplência
                  </span>
                  <span style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '999px', 'padding': '6px 14px', 'fontSize': '12px', 'color': '#98A1C0' }}>
                    ⌕ Buscar bairro…
                  </span>
                </div>
              </div>
              <div style={{ 'marginTop': '20px', 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
                {bairros.map((b, i) => (
                  <Fragment key={i}>
                  <div>
                    <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '12px' }}>
                      <span style={{ 'fontWeight': '700', 'color': '#1F2B6C' }}>
                        {b.name}
                      </span>
                      <strong style={{ 'color': '#3B4573' }}>
                        {b.value}
                      </strong>
                    </div>
                    <div style={{ 'height': '10px', 'borderRadius': '999px', 'background': '#EEF2FC', 'marginTop': '7px' }}>
                      <div style={{ 'height': '10px', 'borderRadius': '999px', 'background': 'linear-gradient(90deg,#1F2B6C,#4A5CD0)', 'width': b.w }} />
                    </div>
                  </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </>)}
        {isMobiliario && (<>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
              <h1 style={{ 'margin': '0', 'fontSize': '26px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Mobiliário · ISS / ISSQN
              </h1>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                Exercício 2026
              </span>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(200px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '14px', 'padding': '16px 18px', 'color': '#fff' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#C3CCF4', 'fontWeight': '600' }}>
                  Lançado 2026
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  83,47 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#A9B4E8' }}>
                  <span>
                    2025 73,50 mi
                  </span>
                  <strong style={{ 'color': '#7EE0B4' }}>
                    +13,6%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Arrecadado
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#1B9E6E' }}>
                  38,71 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do lançado 46,4%
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    46,4%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Inadimplência
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#E2564D' }}>
                  8,44 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do lançado 10,1%
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    10,1%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Isenção
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#8B97D6' }}>
                  0,00 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do lançado 0,0%
                  </span>
                  <strong style={{ 'color': '#3B4573' }}>
                    0,0%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Arrecadado (período)
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  396,58 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    lançado 461,03 mi
                  </span>
                  <strong style={{ 'color': '#1B9E6E' }}>
                    86,0%
                  </strong>
                </div>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(300px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Lançado × Arrecadado
                  </h3>
                  <div style={{ 'display': 'flex', 'gap': '12px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                      Lançado
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                      Arrecadado
                    </span>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '8px', 'height': '200px', 'marginTop': '24px' }}>
                  {issSeries.map((s, i) => (
                    <Fragment key={i}>
                    <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '8px', 'height': '100%' }}>
                      <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '3px', 'width': '100%', 'height': '100%' }}>
                        <div style={{ 'flex': '1', 'borderRadius': '4px 4px 0 0', 'background': 'linear-gradient(180deg,#2E3E9E,#8B97D6)', 'height': s.h1 }} />
                        <div style={{ 'flex': '1', 'borderRadius': '4px 4px 0 0', 'background': 'linear-gradient(180deg,#E9A13B,#F6D9A8)', 'height': s.h2 }} />
                      </div>
                      <span style={{ 'fontSize': '10px', 'color': '#8791B4' }}>
                        {s.year}
                      </span>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '16px', 'padding': '20px', 'color': '#fff' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '999px', 'border': '2px solid rgba(255,255,255,0.35)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    ◉
                  </div>
                  <span style={{ 'background': '#fff', 'color': '#1F2B6C', 'padding': '5px 14px', 'borderRadius': '999px', 'fontSize': '11.5px', 'fontWeight': '700' }}>
                    ISS / ISSQN
                  </span>
                </div>
                <h3 style={{ 'margin': '18px 0 14px', 'fontSize': '17px', 'fontWeight': '700' }}>
                  Insights de ISS / ISSQN
                </h3>
                <ul style={{ 'margin': '0', 'paddingLeft': '16px', 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '13px', 'lineHeight': '1.55', 'color': '#DCE2FA' }}>
                  <li>
                    Em 2026, ISS lançou{' '}
                    <strong style={{ 'color': '#fff' }}>
                      R$ 83.465.535,47
                    </strong>
                    {' '}e arrecadou R$ 38.707.967,33 (46,4% do lançado).
                  </li>
                  <li>
                    Inadimplência de{' '}
                    <strong style={{ 'color': '#fff' }}>
                      R$ 8.439.297,07
                    </strong>
                    {' '}— 10,1% do lançado.
                  </li>
                  <li>
                    Arrecadação caiu{' '}
                    <strong style={{ 'color': '#fff' }}>
                      -41,9%
                    </strong>
                    {' '}vs 2025; acumulado de R$ 396,6 mi no período.
                  </li>
                </ul>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Eficiência de Arrecadação
                </h3>
                <div style={{ 'fontSize': '12.5px', 'color': '#8791B4', 'marginTop': '4px' }}>
                  % do lançado arrecadado em 2026
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'center', 'margin': '24px 0 8px' }}>
                  <div style={{ 'position': 'relative', 'width': '210px', 'height': '105px', 'borderRadius': '210px 210px 0 0', 'background': 'conic-gradient(from 270deg, #E9A13B 0 23.2%, #E7ECFA 23.2% 50%, transparent 50%)' }}>
                    <div style={{ 'position': 'absolute', 'left': '35px', 'top': '35px', 'width': '140px', 'height': '70px', 'borderRadius': '140px 140px 0 0', 'background': '#fff' }} />
                    <div style={{ 'position': 'absolute', 'left': '0', 'right': '0', 'bottom': '-28px', 'textAlign': 'center' }}>
                      <div style={{ 'fontSize': '22px', 'fontWeight': '800' }}>
                        46,4%
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'center', 'gap': '28px', 'marginTop': '34px', 'fontSize': '12px' }}>
                  <div style={{ 'textAlign': 'center' }}>
                    <strong style={{ 'display': 'block', 'fontSize': '15px', 'color': '#1B9E6E' }}>
                      38,7 mi
                    </strong>
                    <span style={{ 'color': '#8791B4' }}>
                      Arrecadado
                    </span>
                  </div>
                  <div style={{ 'textAlign': 'center' }}>
                    <strong style={{ 'display': 'block', 'fontSize': '15px', 'color': '#E2564D' }}>
                      8,4 mi
                    </strong>
                    <span style={{ 'color': '#8791B4' }}>
                      Inadimplência
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px', 'overflow': 'auto' }}>
              <h3 style={{ 'margin': '0 0 18px', 'fontSize': '16px', 'fontWeight': '700' }}>
                Exercícios de ISS / ISSQN
              </h3>
              <table style={{ 'width': '100%', 'borderCollapse': 'separate', 'borderSpacing': '0', 'fontSize': '13px', 'minWidth': '620px' }}>
                <thead>
                  <tr style={{ 'background': '#1F2B6C', 'color': '#fff', 'textAlign': 'left' }}>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'borderRadius': '8px 0 0 0' }}>
                      Exercício
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right' }}>
                      Lançado
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right' }}>
                      Arrecadado
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right' }}>
                      Inadimplência
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right', 'borderRadius': '0 8px 0 0' }}>
                      % Arrec.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {issTabela.map((r, i) => (
                    <Fragment key={i}>
                    <tr style={{ 'borderBottom': '1px solid #EEF2FC' }}>
                      <td style={{ 'padding': '13px 16px', 'fontWeight': '700', 'color': '#1F2B6C' }}>
                        {r.ex}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'color': '#3B4573' }}>
                        {r.lanc}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'color': '#1B9E6E' }}>
                        {r.arr}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'color': '#E2564D' }}>
                        {r.inad}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'fontWeight': '700' }}>
                        {r.pct}
                      </td>
                    </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>)}
        {isOutros && (<>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
              <h1 style={{ 'margin': '0', 'fontSize': '26px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Outros Tributos · 2026
              </h1>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                Taxas, TFE, TFHS e contribuições
              </span>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(200px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '14px', 'padding': '16px 18px', 'color': '#fff' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#C3CCF4', 'fontWeight': '600' }}>
                  Lançado 2026
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  24,40 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#A9B4E8' }}>
                  <span>
                    2025 22,35 mi
                  </span>
                  <strong style={{ 'color': '#7EE0B4' }}>
                    +9,2%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Arrecadado
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#1B9E6E' }}>
                  10,05 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do lançado 41,2%
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    41,2%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Inadimplência
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#E2564D' }}>
                  6,84 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do lançado 28,1%
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    28,1%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Isenção
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#E9A13B' }}>
                  0,34 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do lançado 1,4%
                  </span>
                  <strong style={{ 'color': '#3B4573' }}>
                    1,4%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Arrecadado (período)
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  87,99 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    lançado 410,73 mi
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    21,4%
                  </strong>
                </div>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(300px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Lançado × Arrecadado
                  </h3>
                  <div style={{ 'display': 'flex', 'gap': '12px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                      Lançado
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                      Arrecadado
                    </span>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '8px', 'height': '200px', 'marginTop': '24px' }}>
                  {outrosSeries.map((s, i) => (
                    <Fragment key={i}>
                    <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '8px', 'height': '100%' }}>
                      <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '3px', 'width': '100%', 'height': '100%' }}>
                        <div style={{ 'flex': '1', 'borderRadius': '4px 4px 0 0', 'background': 'linear-gradient(180deg,#2E3E9E,#8B97D6)', 'height': s.h1 }} />
                        <div style={{ 'flex': '1', 'borderRadius': '4px 4px 0 0', 'background': 'linear-gradient(180deg,#E9A13B,#F6D9A8)', 'height': s.h2 }} />
                      </div>
                      <span style={{ 'fontSize': '10px', 'color': '#8791B4' }}>
                        {s.year}
                      </span>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '16px', 'padding': '20px', 'color': '#fff' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '999px', 'border': '2px solid rgba(255,255,255,0.35)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    ◉
                  </div>
                  <span style={{ 'background': '#fff', 'color': '#1F2B6C', 'padding': '5px 14px', 'borderRadius': '999px', 'fontSize': '11.5px', 'fontWeight': '700' }}>
                    Outros Tributos
                  </span>
                </div>
                <h3 style={{ 'margin': '18px 0 14px', 'fontSize': '17px', 'fontWeight': '700' }}>
                  Insights de Outros Tributos
                </h3>
                <ul style={{ 'margin': '0', 'paddingLeft': '16px', 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '13px', 'lineHeight': '1.55', 'color': '#DCE2FA' }}>
                  <li>
                    Em 2026 lançou{' '}
                    <strong style={{ 'color': '#fff' }}>
                      R$ 24.399.244,45
                    </strong>
                    {' '}e arrecadou R$ 10.047.805,04 (41,2%).
                  </li>
                  <li>
                    Inadimplência de{' '}
                    <strong style={{ 'color': '#fff' }}>
                      R$ 6.844.709,15
                    </strong>
                    {' '}— 28,1% do lançado, a maior entre os grupos.
                  </li>
                  <li>
                    Arrecadação caiu{' '}
                    <strong style={{ 'color': '#fff' }}>
                      -4,4%
                    </strong>
                    {' '}vs 2025; acumulado de R$ 87,99 mi no período.
                  </li>
                </ul>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Composição do Lançado 2026
                </h3>
                <div style={{ 'display': 'flex', 'justifyContent': 'center', 'margin': '22px 0' }}>
                  <div style={{ 'width': '180px', 'height': '180px', 'borderRadius': '999px', 'background': 'conic-gradient(#1B9E6E 0 41.2%, #E2564D 41.2% 69.3%, #E9A13B 69.3% 70.7%, #C3CCF4 70.7% 100%)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    <div style={{ 'width': '106px', 'height': '106px', 'borderRadius': '999px', 'background': '#fff', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center' }}>
                      <strong style={{ 'fontSize': '19px' }}>
                        24,4 mi
                      </strong>
                      <span style={{ 'fontSize': '11px', 'color': '#8791B4' }}>
                        lançado
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '10px', 'fontSize': '12.5px' }}>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#1B9E6E' }} />
                    <span style={{ 'color': '#3B4573', 'fontWeight': '600' }}>
                      Arrecadado
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      10 mi
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (41,2%)
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E2564D' }} />
                    <span style={{ 'color': '#3B4573', 'fontWeight': '600' }}>
                      Inadimplência
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      6,8 mi
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (28,1%)
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                    <span style={{ 'color': '#3B4573', 'fontWeight': '600' }}>
                      Isenção
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      339 k
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (1,4%)
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#C3CCF4' }} />
                    <span style={{ 'color': '#3B4573', 'fontWeight': '600' }}>
                      Suspenso/Outros
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      7,2 mi
                    </span>
                    <span style={{ 'color': '#8791B4' }}>
                      (29,4%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px', 'overflow': 'auto' }}>
              <h3 style={{ 'margin': '0 0 18px', 'fontSize': '16px', 'fontWeight': '700' }}>
                Exercícios de Outros Tributos
              </h3>
              <table style={{ 'width': '100%', 'borderCollapse': 'separate', 'borderSpacing': '0', 'fontSize': '13px', 'minWidth': '620px' }}>
                <thead>
                  <tr style={{ 'background': '#1F2B6C', 'color': '#fff', 'textAlign': 'left' }}>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'borderRadius': '8px 0 0 0' }}>
                      Exercício
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right' }}>
                      Lançado
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right' }}>
                      Arrecadado
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right' }}>
                      Inadimplência
                    </th>
                    <th style={{ 'padding': '13px 16px', 'fontWeight': '700', 'textAlign': 'right', 'borderRadius': '0 8px 0 0' }}>
                      % Arrec.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {outrosTabela.map((r, i) => (
                    <Fragment key={i}>
                    <tr style={{ 'borderBottom': '1px solid #EEF2FC' }}>
                      <td style={{ 'padding': '13px 16px', 'fontWeight': '700', 'color': '#1F2B6C' }}>
                        {r.ex}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'color': '#3B4573' }}>
                        {r.lanc}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'color': '#1B9E6E' }}>
                        {r.arr}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'color': '#E2564D' }}>
                        {r.inad}
                      </td>
                      <td style={{ 'padding': '13px 16px', 'textAlign': 'right', 'fontWeight': '700' }}>
                        {r.pct}
                      </td>
                    </tr>
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>)}
        {isDivida && (<>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
              <h1 style={{ 'margin': '0', 'fontSize': '26px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Dívida Ativa · estoque inscrito
              </h1>
              <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                Posição de 17/08/2026
              </span>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(200px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '14px', 'padding': '16px 18px', 'color': '#fff' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#C3CCF4', 'fontWeight': '600' }}>
                  Dívida Ativa Total
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  151,87 mi
                </div>
                <div style={{ 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#A9B4E8' }}>
                  estoque inscrito
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Administrativa
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  80,67 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do total 53,1%
                  </span>
                  <strong style={{ 'color': '#3B4573' }}>
                    53,1%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Judicial (ajuizada)
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  70,87 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do total 46,7%
                  </span>
                  <strong style={{ 'color': '#E2564D' }}>
                    46,7%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Em Ajuizamento
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  0,32 mi
                </div>
                <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  <span>
                    do total 0,2%
                  </span>
                  <strong style={{ 'color': '#3B4573' }}>
                    0,2%
                  </strong>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Maior Tributo
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  71,39 mi
                </div>
                <div style={{ 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  IPTU
                </div>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(300px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Dívida Ativa por Tributo
                  </h3>
                  <span style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '999px', 'padding': '6px 14px', 'fontSize': '12px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    Estoque
                  </span>
                </div>
                <div style={{ 'marginTop': '20px', 'display': 'flex', 'flexDirection': 'column', 'gap': '14px' }}>
                  {dividaTributos.map((d, i) => (
                    <Fragment key={i}>
                    <div>
                      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '12px' }}>
                        <span style={{ 'fontWeight': '600', 'color': '#3B4573' }}>
                          {d.name}
                        </span>
                        <strong>
                          {d.value}
                        </strong>
                      </div>
                      <div style={{ 'height': '8px', 'borderRadius': '999px', 'background': '#EEF2FC', 'marginTop': '6px' }}>
                        <div style={{ 'height': '8px', 'borderRadius': '999px', 'background': 'linear-gradient(90deg,#1F2B6C,#6D7BD1)', 'width': d.w }} />
                      </div>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '16px', 'padding': '20px', 'color': '#fff' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '999px', 'border': '2px solid rgba(255,255,255,0.35)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    ◉
                  </div>
                  <span style={{ 'background': '#fff', 'color': '#1F2B6C', 'padding': '5px 14px', 'borderRadius': '999px', 'fontSize': '11.5px', 'fontWeight': '700' }}>
                    Dívida Ativa
                  </span>
                </div>
                <h3 style={{ 'margin': '18px 0 14px', 'fontSize': '17px', 'fontWeight': '700' }}>
                  Insights da Dívida Ativa
                </h3>
                <ul style={{ 'margin': '0', 'paddingLeft': '16px', 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '13px', 'lineHeight': '1.55', 'color': '#DCE2FA' }}>
                  <li>
                    Dívida ativa de{' '}
                    <strong style={{ 'color': '#fff' }}>
                      R$ 151.888.630,45
                    </strong>
                    {' '}— 80,67 mi administrativa (53,1%) e 70,87 mi ajuizada (46,7%).
                  </li>
                  <li>
                    IPTU concentra{' '}
                    <strong style={{ 'color': '#fff' }}>
                      71,39 mi
                    </strong>
                    {' '}(47,0%) do estoque inscrito.
                  </li>
                  <li>
                    Os débitos de 2025 são os mais pesados do estoque, com{' '}
                    <strong style={{ 'color': '#fff' }}>
                      26,01 mi
                    </strong>
                    .
                  </li>
                </ul>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Administrativa × Judicial
                </h3>
                <div style={{ 'display': 'flex', 'justifyContent': 'center', 'margin': '22px 0' }}>
                  <div style={{ 'width': '180px', 'height': '180px', 'borderRadius': '999px', 'background': 'conic-gradient(#1F2B6C 0 53.1%, #E9A13B 53.1% 99.8%, #C3CCF4 99.8% 100%)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    <div style={{ 'width': '106px', 'height': '106px', 'borderRadius': '999px', 'background': '#fff', 'display': 'flex', 'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center' }}>
                      <strong style={{ 'fontSize': '19px' }}>
                        151,9 mi
                      </strong>
                      <span style={{ 'fontSize': '11px', 'color': '#8791B4' }}>
                        total
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '10px', 'fontSize': '12.5px' }}>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#1F2B6C' }} />
                    <span style={{ 'color': '#3B4573', 'fontWeight': '600' }}>
                      Administrativa
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      53,1%
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                    <span style={{ 'color': '#3B4573', 'fontWeight': '600' }}>
                      Judicial (ajuizada)
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      46,7%
                    </span>
                  </div>
                  <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#C3CCF4' }} />
                    <span style={{ 'color': '#3B4573', 'fontWeight': '600' }}>
                      Em ajuizamento
                    </span>
                    <span style={{ 'marginLeft': 'auto', 'fontWeight': '700' }}>
                      0,2%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
              <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
                <div>
                  <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                    Taxa de Recuperação da Dívida Ativa
                  </h3>
                  <div style={{ 'fontSize': '12px', 'color': '#8791B4', 'marginTop': '4px' }}>
                    Do que foi inscrito em dívida ativa, quanto já foi pago — por exercício de origem
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'gap': '16px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                    Lançado
                  </span>
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '6px' }}>
                    <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#1B9E6E' }} />
                    Pago (recuperado)
                  </span>
                </div>
              </div>
              <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(220px,1fr))', 'gap': '14px', 'marginTop': '18px' }}>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.14em', 'color': '#98A1C0', 'textTransform': 'uppercase' }}>
                    Taxa de recuperação
                  </div>
                  <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'color': '#1B9E6E', 'marginTop': '8px' }}>
                    53,1%
                  </div>
                </div>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.14em', 'color': '#98A1C0', 'textTransform': 'uppercase' }}>
                    Total inscrito (lançado)
                  </div>
                  <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'marginTop': '8px' }}>
                    379,2 mi
                  </div>
                </div>
                <div style={{ 'border': '1px solid #E6EBF7', 'borderRadius': '12px', 'padding': '16px' }}>
                  <div style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.14em', 'color': '#98A1C0', 'textTransform': 'uppercase' }}>
                    Total recuperado (pago)
                  </div>
                  <div style={{ 'fontSize': '26px', 'fontWeight': '800', 'color': '#1B9E6E', 'marginTop': '8px' }}>
                    201,2 mi
                  </div>
                </div>
              </div>
              <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '10px', 'height': '190px', 'marginTop': '24px' }}>
                {recuperacao.map((r, i) => (
                  <Fragment key={i}>
                  <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '8px', 'height': '100%' }}>
                    <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '3px', 'width': '100%', 'height': '100%' }}>
                      <div style={{ 'flex': '1', 'borderRadius': '3px 3px 0 0', 'background': 'linear-gradient(180deg,#2E3E9E,#8B97D6)', 'height': r.h1 }} />
                      <div style={{ 'flex': '1', 'borderRadius': '3px 3px 0 0', 'background': '#1B9E6E', 'height': r.h2 }} />
                    </div>
                    <span style={{ 'fontSize': '10px', 'color': '#8791B4' }}>
                      {r.year}
                    </span>
                  </div>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </>)}
        {isReforma && (<>
          <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '18px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'baseline', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '12px' }}>
              <div>
                <h1 style={{ 'margin': '0', 'fontSize': '26px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                  Reforma Tributária · transição IBS / CBS
                </h1>
                <div style={{ 'fontSize': '12.5px', 'color': '#8791B4', 'marginTop': '6px' }}>
                  Simulação sobre a receita própria do município — EC 132/2023, cenário base
                </div>
              </div>
              <div style={{ 'display': 'flex', 'gap': '8px', 'flexWrap': 'wrap' }}>
                <span style={{ 'background': '#1F2B6C', 'color': '#fff', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '700' }}>
                  Cenário base
                </span>
                <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Conservador
                </span>
                <span style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'padding': '8px 16px', 'borderRadius': '999px', 'fontSize': '12.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                  Otimista
                </span>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(200px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '14px', 'padding': '16px 18px', 'color': '#fff' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#C3CCF4', 'fontWeight': '600' }}>
                  Receita própria exposta
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px' }}>
                  107,87 mi
                </div>
                <div style={{ 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#A9B4E8' }}>
                  ISS + taxas sobre serviços
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Substituída por IBS
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#2E3E9E' }}>
                  83,47 mi
                </div>
                <div style={{ 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  77,4% da base exposta
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Fora da transição
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#1B9E6E' }}>
                  92,00 mi
                </div>
                <div style={{ 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  IPTU, ITBI e taxas próprias
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Impacto líquido 2033
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#E2564D' }}>
                  -6,4 mi
                </div>
                <div style={{ 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  -5,9% da receita própria
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '16px 18px' }}>
                <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'fontWeight': '600' }}>
                  Trava de arrecadação
                </div>
                <div style={{ 'fontSize': '25px', 'fontWeight': '800', 'marginTop': '8px', 'color': '#E9A13B' }}>
                  2029
                </div>
                <div style={{ 'marginTop': '10px', 'fontSize': '11.5px', 'color': '#8791B4' }}>
                  1º ano de redução do ISS
                </div>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(320px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'flexWrap': 'wrap', 'gap': '10px' }}>
                  <div>
                    <h3 style={{ 'margin': '0', 'fontSize': '16px', 'fontWeight': '700' }}>
                      Composição da receita na transição
                    </h3>
                    <div style={{ 'fontSize': '12px', 'color': '#8791B4', 'marginTop': '4px' }}>
                      participação de ISS × IBS na receita própria, ano a ano
                    </div>
                  </div>
                  <div style={{ 'display': 'flex', 'gap': '14px', 'fontSize': '11.5px', 'fontWeight': '600', 'color': '#5A6488' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#2E3E9E' }} />
                      ISS municipal
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '5px' }}>
                      <span style={{ 'width': '9px', 'height': '9px', 'borderRadius': '2px', 'background': '#E9A13B' }} />
                      Cota IBS
                    </span>
                  </div>
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'gap': '10px', 'height': '220px', 'marginTop': '24px' }}>
                  {transicao.map((t, i) => (
                    <Fragment key={i}>
                    <div style={{ 'flex': '1', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'gap': '8px', 'height': '100%' }}>
                      <div style={{ 'width': '100%', 'maxWidth': '54px', 'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'height': '100%' }}>
                        <div style={{ 'borderRadius': '5px 5px 0 0', 'background': 'linear-gradient(180deg,#F0B45F,#E9A13B)', 'height': t.hIbs }} />
                        <div style={{ 'background': 'linear-gradient(180deg,#2E3E9E,#1F2B6C)', 'height': t.hIss }} />
                      </div>
                      <span style={{ 'fontSize': '11px', 'fontWeight': '700', 'color': '#3B4573' }}>
                        {t.year}
                      </span>
                      <span style={{ 'fontSize': '9.5px', 'color': '#A4AECB' }}>
                        {t.sub}
                      </span>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '16px', 'padding': '20px', 'color': '#fff' }}>
                <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                  <div style={{ 'width': '34px', 'height': '34px', 'borderRadius': '999px', 'border': '2px solid rgba(255,255,255,0.35)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                    ◉
                  </div>
                  <span style={{ 'background': '#fff', 'color': '#1F2B6C', 'padding': '5px 14px', 'borderRadius': '999px', 'fontSize': '11.5px', 'fontWeight': '700' }}>
                    Reforma
                  </span>
                </div>
                <h3 style={{ 'margin': '18px 0 14px', 'fontSize': '17px', 'fontWeight': '700' }}>
                  Insights da Reforma
                </h3>
                <ul style={{ 'margin': '0', 'paddingLeft': '16px', 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '13px', 'lineHeight': '1.55', 'color': '#DCE2FA' }}>
                  <li>
                    <strong style={{ 'color': '#fff' }}>
                      77,4%
                    </strong>
                    {' '}da receita própria exposta vem do ISS — a maior fonte a ser substituída pelo IBS.
                  </li>
                  <li>
                    Entre 2029 e 2032 o ISS cai de forma escalonada; a compensação depende do{' '}
                    <strong style={{ 'color': '#fff' }}>
                      Fundo de Participação do IBS
                    </strong>
                    .
                  </li>
                  <li>
                    Com a inadimplência atual de ISS (10,1%), o município perde base de cálculo já no período de referência{' '}
                    <strong style={{ 'color': '#fff' }}>
                      2024-2028
                    </strong>
                    .
                  </li>
                  <li>
                    Recomendação: elevar a eficiência de arrecadação do ISS acima de{' '}
                    <strong style={{ 'color': '#fff' }}>
                      70%
                    </strong>
                    {' '}antes de 2029.
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(320px,1fr))', 'gap': '16px' }}>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0 0 4px', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Cronograma da transição
                </h3>
                <div style={{ 'fontSize': '12px', 'color': '#8791B4' }}>
                  marcos que exigem preparação da administração tributária
                </div>
                <div style={{ 'marginTop': '20px', 'display': 'flex', 'flexDirection': 'column', 'gap': '0' }}>
                  {marcos.map((m, i) => (
                    <Fragment key={i}>
                    <div style={{ 'display': 'grid', 'gridTemplateColumns': '64px 1fr', 'gap': '16px', 'padding': '14px 0', 'borderBottom': '1px solid #EEF2FC' }}>
                      <strong style={{ 'fontSize': '14px', 'color': '#2E3E9E' }}>
                        {m.year}
                      </strong>
                      <div>
                        <div style={{ 'fontSize': '13.5px', 'fontWeight': '700', 'color': '#1F2B6C' }}>
                          {m.title}
                        </div>
                        <div style={{ 'fontSize': '12.5px', 'color': '#5A6488', 'marginTop': '4px', 'lineHeight': '1.5' }}>
                          {m.desc}
                        </div>
                      </div>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0 0 4px', 'fontSize': '16px', 'fontWeight': '700' }}>
                  Riscos por frente
                </h3>
                <div style={{ 'fontSize': '12px', 'color': '#8791B4' }}>
                  exposição estimada e grau de preparo atual
                </div>
                <div style={{ 'marginTop': '20px', 'display': 'flex', 'flexDirection': 'column', 'gap': '16px' }}>
                  {riscos.map((r, i) => (
                    <Fragment key={i}>
                    <div>
                      <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'fontSize': '12.5px' }}>
                        <span style={{ 'fontWeight': '700', 'color': '#1F2B6C' }}>
                          {r.name}
                        </span>
                        <span style={{ 'fontWeight': '700', 'color': '#5A6488' }}>
                          {r.level}
                        </span>
                      </div>
                      <div style={{ 'height': '10px', 'borderRadius': '999px', 'background': '#EEF2FC', 'marginTop': '7px' }}>
                        <div style={{ 'height': '10px', 'borderRadius': '999px', 'background': r.color, 'width': r.w }} />
                      </div>
                      <div style={{ 'fontSize': '12px', 'color': '#5A6488', 'marginTop': '6px', 'lineHeight': '1.5' }}>
                        {r.desc}
                      </div>
                    </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>)}
        {isChat && (<>
          <div style={{ 'display': 'grid', 'gridTemplateColumns': 'minmax(0,1fr) minmax(260px,320px)', 'gap': '16px', 'alignItems': 'start' }}>
            <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'display': 'flex', 'flexDirection': 'column', 'minHeight': '1000px', 'height': 'calc(100vh - 148px)', 'overflow': 'hidden' }}>
              <div style={{ 'padding': '18px 22px', 'borderBottom': '1px solid #EEF2FC', 'display': 'flex', 'alignItems': 'center', 'gap': '12px' }}>
                <div style={{ 'width': '38px', 'height': '38px', 'borderRadius': '999px', 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'color': '#fff', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                  ◉
                </div>
                <div>
                  <div style={{ 'fontSize': '15.5px', 'fontWeight': '700' }}>
                    Chat Analítico
                  </div>
                  <div style={{ 'fontSize': '12px', 'color': '#8791B4' }}>
                    pergunte em linguagem natural sobre a base tributária
                  </div>
                </div>
                <span style={{ 'marginLeft': 'auto', 'background': '#EAF7F1', 'color': '#127A55', 'padding': '6px 12px', 'borderRadius': '999px', 'fontSize': '11.5px', 'fontWeight': '700' }}>
                  base atualizada
                </span>
              </div>
              <div style={{ 'flex': '1', 'padding': '22px', 'display': 'flex', 'flexDirection': 'column', 'gap': '16px', 'overflow': 'auto', 'background': '#FAFBFE' }}>
                {mensagens.map((m, i) => (
                  <Fragment key={i}>
                  <div style={{ 'display': 'flex', 'justifyContent': m.align }}>
                    <div style={{ 'maxWidth': '76%', 'background': m.bg, 'color': m.fg, 'border': `1px solid ${m.border}`, 'borderRadius': '14px', 'padding': '14px 16px', 'fontSize': '13.5px', 'lineHeight': '1.6', 'whiteSpace': 'pre-wrap' }}>
                      {m.text}
                    </div>
                  </div>
                  </Fragment>
                ))}
                {pensando && (<>
                  <div style={{ 'display': 'flex', 'justifyContent': 'flex-start' }}>
                    <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '14px', 'padding': '14px 16px', 'fontSize': '13px', 'color': '#8791B4' }}>
                      analisando a base…
                    </div>
                  </div>
                </>)}
              </div>
              <div style={{ 'padding': '16px 22px 20px', 'borderTop': '1px solid #EEF2FC' }}>
                <div style={{ 'display': 'flex', 'gap': '10px', 'flexWrap': 'wrap', 'marginBottom': '12px' }}>
                  {sugestoes.map((s, i) => (
                    <Fragment key={i}>
                    <button className='mk-hover-2' type='button' style={{ 'border': '1px solid #E6EBF7', 'background': '#fff', 'cursor': 'pointer', 'fontFamily': 'inherit', 'fontSize': '12px', 'fontWeight': '600', 'color': '#3B4573', 'padding': '8px 14px', 'borderRadius': '999px' }}>
                      {s.label}
                    </button>
                    </Fragment>
                  ))}
                </div>
                <form style={{ 'display': 'flex', 'gap': '10px' }}>
                  <input className='mk-focus-3' value={rascunho} placeholder='Ex.: qual bairro tem mais IPTU em aberto?' style={{ 'flex': '1', 'border': '1px solid #E6EBF7', 'borderRadius': '999px', 'padding': '14px 18px', 'fontFamily': 'inherit', 'fontSize': '13.5px', 'color': '#16204A', 'outline': 'none', 'background': '#fff' }} readOnly />
                  <button className='mk-hover-4' type='submit' style={{ 'border': 'none', 'cursor': 'pointer', 'background': '#2E3E9E', 'color': '#fff', 'fontFamily': 'inherit', 'fontSize': '13.5px', 'fontWeight': '700', 'padding': '14px 24px', 'borderRadius': '999px', 'whiteSpace': 'nowrap' }}>
                    Perguntar
                  </button>
                </form>
              </div>
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '16px' }}>
              <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '16px', 'padding': '20px', 'color': '#fff' }}>
                <h3 style={{ 'margin': '0 0 12px', 'fontSize': '16px', 'fontWeight': '700' }}>
                  O que o chat consulta
                </h3>
                <ul style={{ 'margin': '0', 'paddingLeft': '16px', 'display': 'flex', 'flexDirection': 'column', 'gap': '10px', 'fontSize': '12.5px', 'lineHeight': '1.55', 'color': '#DCE2FA' }}>
                  <li>
                    Orçamento e arrecadação mensal
                  </li>
                  <li>
                    Base de contribuintes PF/PJ
                  </li>
                  <li>
                    IPTU por bairro e situação
                  </li>
                  <li>
                    ISS, taxas e outros tributos
                  </li>
                  <li>
                    Estoque e recuperação da dívida ativa
                  </li>
                </ul>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <h3 style={{ 'margin': '0 0 14px', 'fontSize': '15.5px', 'fontWeight': '700' }}>
                  Consultas recentes
                </h3>
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '12.5px', 'color': '#5A6488' }}>
                  <div style={{ 'paddingBottom': '12px', 'borderBottom': '1px solid #EEF2FC' }}>
                    Top 10 devedores de ISS em 2026
                  </div>
                  <div style={{ 'paddingBottom': '12px', 'borderBottom': '1px solid #EEF2FC' }}>
                    Evolução do IPTU no Parque Rodrigo Barreto
                  </div>
                  <div style={{ 'paddingBottom': '12px', 'borderBottom': '1px solid #EEF2FC' }}>
                    Comparar arrecadação de julho com 2025
                  </div>
                  <div>
                    Prescrição próxima na dívida ativa
                  </div>
                </div>
              </div>
              <div style={{ 'background': '#fff', 'border': '1px solid #E6EBF7', 'borderRadius': '16px', 'padding': '20px' }}>
                <div style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.14em', 'color': '#98A1C0', 'textTransform': 'uppercase' }}>
                  Governança
                </div>
                <p style={{ 'margin': '10px 0 0', 'fontSize': '12.5px', 'lineHeight': '1.6', 'color': '#5A6488' }}>
                  Todas as respostas citam a fonte do dado e ficam registradas em trilha de auditoria. Nenhum dado pessoal de contribuinte é exposto no chat.
                </p>
              </div>
            </div>
          </div>
        </>)}
      </div>
  )
}
