import Link from 'next/link'

import { IconeMarca } from '../MarcaPrefeitura'
import AppMockup from './AppMockup'
import ScaledFrame from './ScaledFrame'
import SetaDireita from './SetaDireita'

import './landing.css'

/** Landing page institucional do Prefeitura Analytics. */
export default function LandingPage() {
  return (
    <div className="lp-root">
      <div style={{ 'width': '100%', 'overflow': 'hidden' }}>
        <header style={{ 'position': 'sticky', 'top': '0', 'zIndex': '50', 'background': 'rgba(255,255,255,0.88)', 'backdropFilter': 'blur(14px)', 'borderBottom': '1px solid #EAEEF8' }}>
          <div style={{ 'maxWidth': '1220px', 'margin': '0 auto', 'padding': '16px 32px', 'display': 'flex', 'alignItems': 'center', 'flexWrap': 'wrap', 'rowGap': '12px', 'columnGap': '32px' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px' }}>
              <IconeMarca tamanho={34} gradiente='linear-gradient(140deg,#2E3E9E,#1F2B6C)' sombra={false} />
              <div style={{ 'display': 'flex', 'flexDirection': 'column', 'lineHeight': '1.05' }}>
                <span style={{ 'fontSize': '17px', 'fontWeight': '800', 'letterSpacing': '-0.02em', 'whiteSpace': 'nowrap' }}>
                  Prefeitura Analytics
                </span>
                <span style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '9px', 'letterSpacing': '0.18em', 'color': '#8791B4', 'textTransform': 'uppercase' }}>
                  gestão fiscal municipal
                </span>
              </div>
            </div>
            <nav className='lp-nav' style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'gap': '22px', 'fontSize': '14px', 'fontWeight': '500', 'color': '#4B5580', 'marginLeft': 'auto', 'flex': '1 1 380px', 'flexWrap': 'nowrap', 'whiteSpace': 'nowrap' }}>
              <a href='#modulos' style={{ 'color': '#4B5580' }}>
                Módulos
              </a>
              <a href='#recursos' style={{ 'color': '#4B5580' }}>
                Recursos
              </a>
              <a href='#telas' style={{ 'color': '#4B5580' }}>
                Telas
              </a>
              <a href='#inteligencia' style={{ 'color': '#4B5580' }}>
                Inteligência
              </a>
              <a href='#resultados' style={{ 'color': '#4B5580' }}>
                Resultados
              </a>
            </nav>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '20px', 'flex': 'none' }}>
              <Link href='/login' style={{ 'fontSize': '14px', 'fontWeight': '600', 'color': '#1F2B6C', 'whiteSpace': 'nowrap' }}>
                Acessar painel
              </Link>
              <a className='lp-hover-5' href='#demo' style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px', 'background': '#2E3E9E', 'color': '#fff', 'padding': '12px 20px', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '700', 'whiteSpace': 'nowrap', 'boxShadow': '0 10px 24px -10px rgba(46,62,158,0.7)' }}>
                Agendar demonstração{' '}
                <SetaDireita tamanho={16} espessura={2.6} />
              </a>
            </div>
          </div>
        </header>
        <section style={{ 'position': 'relative', 'background': 'linear-gradient(180deg,#F6F8FE 0%,#EEF2FC 60%,#FFFFFF 100%)', 'padding': '84px 32px 96px' }}>
          <div style={{ 'position': 'absolute', 'inset': '0', 'backgroundImage': 'linear-gradient(#DDE4F6 1px, transparent 1px), linear-gradient(90deg,#DDE4F6 1px, transparent 1px)', 'backgroundSize': '64px 64px', 'opacity': '0.5', 'maskImage': 'radial-gradient(ellipse 80% 60% at 50% 30%, #000, transparent)' }} />
          <div className='lp-hero-grid' style={{ 'position': 'relative', 'maxWidth': '1340px', 'margin': '0 auto' }}>
            <div>
              <div style={{ 'display': 'inline-flex', 'alignItems': 'center', 'gap': '10px', 'background': '#fff', 'border': '1px solid #E2E8F7', 'padding': '6px 14px 6px 6px', 'borderRadius': '999px', 'boxShadow': '0 6px 18px -12px rgba(31,43,108,0.4)' }}>
                <span style={{ 'background': '#F0A437', 'color': '#3B2405', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'fontWeight': '600', 'letterSpacing': '0.1em', 'padding': '4px 8px', 'borderRadius': '999px' }}>
                  NOVO
                </span>
                <span style={{ 'fontSize': '13px', 'fontWeight': '600', 'color': '#3B4573' }}>
                  IA que encontra receita parada
                </span>
                <span style={{ 'color': '#8791B4', 'display': 'flex' }}>
                  <SetaDireita tamanho={14} espessura={2.4} />
                </span>
              </div>
              <h1 style={{ 'margin': '24px 0 0', 'fontSize': 'clamp(38px, 4.4vw, 56px)', 'lineHeight': '1.04', 'letterSpacing': '-0.035em', 'fontWeight': '800' }}>
                Mais receita
                <br />
                para o município
                <br />
                <span style={{ 'color': '#2E3E9E' }}>
                  sem criar imposto
                </span>
              </h1>
              <p style={{ 'margin': '22px 0 0', 'fontSize': '17px', 'lineHeight': '1.6', 'color': '#4B5580', 'maxWidth': '420px', 'textWrap': 'pretty' }}>
                A IA lê o dado tributário todo dia e mostra onde o dinheiro já lançado não entrou: inadimplência vencida, base fora do cadastro e dívida ativa perto de prescrever.
              </p>
              <div style={{ 'display': 'flex', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '24px', 'marginTop': '34px' }}>
                <a className='lp-hover-5' href='#demo' style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'whiteSpace': 'nowrap', 'flex': 'none', 'background': '#2E3E9E', 'color': '#fff', 'padding': '17px 28px', 'borderRadius': '999px', 'fontSize': '15px', 'fontWeight': '700', 'boxShadow': '0 18px 34px -16px rgba(46,62,158,0.8)' }}>
                  Solicitar demonstração{' '}
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'width': '24px', 'height': '24px', 'borderRadius': '999px', 'background': 'rgba(255,255,255,0.18)' }}>
                    <SetaDireita tamanho={14} espessura={2.8} />
                  </span>
                </a>
                <a href='#tour' style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px', 'whiteSpace': 'nowrap', 'flex': 'none', 'fontSize': '15px', 'fontWeight': '700', 'color': '#1F2B6C' }}>
                  Ver tour do painel{' '}
                  <span style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'width': '26px', 'height': '26px', 'borderRadius': '999px', 'border': '1.5px solid #C6D0EC', 'fontSize': '11px' }}>
                    ▶
                  </span>
                </a>
              </div>
              <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'gap': '22px', 'marginTop': '34px', 'fontSize': '13px', 'fontWeight': '600', 'color': '#4B5580' }}>
                <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                  <span style={{ 'color': '#2E3E9E' }}>
                    ✓
                  </span>
                  {' '}Lê direto do seu sistema tributário
                </span>
                <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                  <span style={{ 'color': '#2E3E9E' }}>
                    ✓
                  </span>
                  {' '}LGPD e trilha de auditoria
                </span>
                <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '8px' }}>
                  <span style={{ 'color': '#2E3E9E' }}>
                    ✓
                  </span>
                  {' '}Implantação em 30 dias
                </span>
              </div>
            </div>
            <div style={{ 'position': 'relative' }}>
              <div style={{ 'position': 'absolute', 'right': '-40px', 'top': '-70px', 'width': '230px', 'height': '230px', 'borderRadius': '999px', 'background': 'radial-gradient(circle at 35% 30%, #4A5CD0, #1B2668 70%)', 'filter': 'blur(2px)', 'opacity': '0.9' }} />
              <div style={{ 'position': 'relative', 'borderRadius': '18px', 'overflow': 'hidden', 'border': '1px solid #E2E8F7', 'boxShadow': '0 50px 80px -40px rgba(19,29,80,0.55), 0 12px 30px -20px rgba(19,29,80,0.4)', 'transform': 'perspective(1600px) rotateY(-7deg) rotateX(2deg)' }}>
                <ScaledFrame contentHeight={1010} style={{ 'background': '#F1F5FC' }}>
                  <AppMockup tab='orcamento' />
                </ScaledFrame>
              </div>
            </div>
          </div>
        </section>
        <section id='modulos' style={{ 'padding': '56px 32px 8px', 'background': '#fff' }}>
          <div style={{ 'maxWidth': '1120px', 'margin': '0 auto', 'textAlign': 'center' }}>
            <div style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '11px', 'letterSpacing': '0.22em', 'color': '#98A1C0', 'textTransform': 'uppercase' }}>
              Todas as frentes de receita na mesma base
            </div>
            <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center', 'gap': '14px', 'marginTop': '26px' }}>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Orçamento
              </span>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Contribuintes
              </span>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Imobiliário
              </span>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Mobiliário
              </span>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Outros tributos
              </span>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Dívida ativa
              </span>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Cobrança
              </span>
              <span style={{ 'padding': '10px 20px', 'border': '1px solid #E6EAF6', 'borderRadius': '999px', 'fontSize': '14px', 'fontWeight': '600', 'color': '#3B4573' }}>
                Reforma tributária
              </span>
            </div>
          </div>
        </section>
        <section id='recursos' style={{ 'padding': '88px 32px', 'background': '#fff' }}>
          <div style={{ 'maxWidth': '1220px', 'margin': '0 auto' }}>
            <div style={{ 'textAlign': 'center', 'maxWidth': '640px', 'margin': '0 auto 52px' }}>
              <span style={{ 'display': 'inline-block', 'background': '#EDF1FD', 'color': '#2E3E9E', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                Recursos
              </span>
              <h2 style={{ 'margin': '18px 0 12px', 'fontSize': '40px', 'lineHeight': '1.1', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                Seis frentes para arrecadar mais{' '}
                <span style={{ 'color': '#2E3E9E' }}>
                  sem tocar na alíquota
                </span>
              </h2>
              <p style={{ 'margin': '0', 'fontSize': '16px', 'color': '#4B5580', 'lineHeight': '1.6' }}>
                Todas partem do mesmo ponto: o tributo já foi lançado. O que a plataforma mostra é quanto disso virou caixa e por onde o resto escapou.
              </p>
            </div>
            <div className='lp-grid-recursos' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(3,1fr)', 'gap': '22px' }}>
              <div className='lp-hover-6' style={{ 'border': '1px solid #E9EDF8', 'borderRadius': '16px', 'padding': '28px', 'background': '#fff' }}>
                <div style={{ 'width': '46px', 'height': '46px', 'borderRadius': '12px', 'background': '#EDF1FD', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#2E3E9E', 'fontSize': '19px' }}>
                  ▤
                </div>
                <h3 style={{ 'margin': '18px 0 8px', 'fontSize': '18px', 'fontWeight': '700' }}>
                  Eficiência de arrecadação
                </h3>
                <p style={{ 'margin': '0', 'fontSize': '14.5px', 'lineHeight': '1.6', 'color': '#5A6488' }}>
                  O percentual do lançado que virou caixa, tributo por tributo. A queda aparece durante o exercício, não no fechamento.
                </p>
              </div>
              <div className='lp-hover-6' style={{ 'border': '1px solid #E9EDF8', 'borderRadius': '16px', 'padding': '28px', 'background': '#fff' }}>
                <div style={{ 'width': '46px', 'height': '46px', 'borderRadius': '12px', 'background': '#EDF1FD', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#2E3E9E', 'fontSize': '19px' }}>
                  ◲
                </div>
                <h3 style={{ 'margin': '18px 0 8px', 'fontSize': '18px', 'fontWeight': '700' }}>
                  Inadimplência que dá para cobrar
                </h3>
                <p style={{ 'margin': '0', 'fontSize': '14.5px', 'lineHeight': '1.6', 'color': '#5A6488' }}>
                  O saldo devedor separado pela data de vencimento: o que já venceu e pode ir para cobrança hoje, e o que ainda está no prazo.
                </p>
              </div>
              <div className='lp-hover-6' style={{ 'border': '1px solid #E9EDF8', 'borderRadius': '16px', 'padding': '28px', 'background': '#fff' }}>
                <div style={{ 'width': '46px', 'height': '46px', 'borderRadius': '12px', 'background': '#EDF1FD', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#2E3E9E', 'fontSize': '19px' }}>
                  ◕
                </div>
                <h3 style={{ 'margin': '18px 0 8px', 'fontSize': '18px', 'fontWeight': '700' }}>
                  Dívida ativa e recuperação
                </h3>
                <p style={{ 'margin': '0', 'fontSize': '14.5px', 'lineHeight': '1.6', 'color': '#5A6488' }}>
                  Estoque por tributo, divisão entre administrativa e ajuizada, e o que está perto de prescrever enquanto ainda dá tempo de agir.
                </p>
              </div>
              <div className='lp-hover-6' style={{ 'border': '1px solid #E9EDF8', 'borderRadius': '16px', 'padding': '28px', 'background': '#fff' }}>
                <div style={{ 'width': '46px', 'height': '46px', 'borderRadius': '12px', 'background': '#EDF1FD', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#2E3E9E', 'fontSize': '19px' }}>
                  ◈
                </div>
                <h3 style={{ 'margin': '18px 0 8px', 'fontSize': '18px', 'fontWeight': '700' }}>
                  Base fora do cadastro
                </h3>
                <p style={{ 'margin': '0', 'fontSize': '14.5px', 'lineHeight': '1.6', 'color': '#5A6488' }}>
                  Cruzamento entre cadastro imobiliário, mobiliário e nota fiscal para achar imóvel e prestador que ainda não são base tributável.
                </p>
              </div>
              <div className='lp-hover-6' style={{ 'border': '1px solid #E9EDF8', 'borderRadius': '16px', 'padding': '28px', 'background': '#fff' }}>
                <div style={{ 'width': '46px', 'height': '46px', 'borderRadius': '12px', 'background': '#EDF1FD', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#2E3E9E', 'fontSize': '19px' }}>
                  ⚡
                </div>
                <h3 style={{ 'margin': '18px 0 8px', 'fontSize': '18px', 'fontWeight': '700' }}>
                  Análise escrita por IA
                </h3>
                <p style={{ 'margin': '0', 'fontSize': '14.5px', 'lineHeight': '1.6', 'color': '#5A6488' }}>
                  A cada fechamento a IA lê os números do módulo e escreve o que mudou, quanto e contra qual período.
                </p>
              </div>
              <div className='lp-hover-6' style={{ 'border': '1px solid #E9EDF8', 'borderRadius': '16px', 'padding': '28px', 'background': '#fff' }}>
                <div style={{ 'width': '46px', 'height': '46px', 'borderRadius': '12px', 'background': '#EDF1FD', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'color': '#2E3E9E', 'fontSize': '19px' }}>
                  ◱
                </div>
                <h3 style={{ 'margin': '18px 0 8px', 'fontSize': '18px', 'fontWeight': '700' }}>
                  Reforma tributária
                </h3>
                <p style={{ 'margin': '0', 'fontSize': '14.5px', 'lineHeight': '1.6', 'color': '#5A6488' }}>
                  A eficiência do ISS entre 2024 e 2028 fixa a cota do município no IBS. Perder arrecadação agora custa receita até 2033.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id='telas' style={{ 'padding': '40px 32px 96px', 'background': '#F8FAFE', 'borderTop': '1px solid #E9EDF8' }}>
          <div style={{ 'maxWidth': '1240px', 'margin': '0 auto' }}>
            <div style={{ 'textAlign': 'center', 'maxWidth': '680px', 'margin': '0 auto 64px' }}>
              <span style={{ 'display': 'inline-block', 'background': '#EDF1FD', 'color': '#2E3E9E', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                As telas
              </span>
              <h2 style={{ 'margin': '18px 0 12px', 'fontSize': '40px', 'lineHeight': '1.1', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                Sete painéis,{' '}
                <span style={{ 'color': '#2E3E9E' }}>
                  uma única base
                </span>
              </h2>
              <p style={{ 'margin': '0', 'fontSize': '16px', 'color': '#4B5580', 'lineHeight': '1.6' }}>
                Cada módulo já vem com o indicador calculado, o comparativo do exercício anterior e a leitura escrita pela IA.
              </p>
            </div>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '88px' }}>
              <div className='lp-grid-tela' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(420px,1fr))', 'gap': '56px', 'alignItems': 'center' }}>
                <ScaledFrame contentHeight={1500} height='440px' style={{ 'borderRadius': '16px', 'border': '1px solid #E2E8F7', 'background': '#F1F5FC', 'boxShadow': '0 40px 70px -46px rgba(19,29,80,0.6)' }}>
                  <AppMockup tab='orcamento' />
                </ScaledFrame>
                <div>
                  <span style={{ 'display': 'inline-block', 'background': '#EDF1FD', 'color': '#2E3E9E', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                    Orçamento
                  </span>
                  <h3 style={{ 'margin': '18px 0 12px', 'fontSize': '32px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                    Quanto entrou
                    <br />
                    <span style={{ 'color': '#2E3E9E' }}>
                      e quanto ainda falta
                    </span>
                  </h3>
                  <p style={{ 'margin': '0 0 22px', 'fontSize': '15.5px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '430px', 'textWrap': 'pretty' }}>
                    Orçado, atualizado e arrecadado na mesma linha. O comparativo com o exercício anterior sai calculado, sem ninguém abrir planilha.
                  </p>
                  <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '14.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Receita e despesa lado a lado
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Arrecadação por ano e por mês
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Categorias e origem da receita
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Dívida ativa arrecadada no mês
                    </span>
                  </div>
                </div>
              </div>
              <div className='lp-grid-tela' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(420px,1fr))', 'gap': '56px', 'alignItems': 'center' }}>
                <div>
                  <span style={{ 'display': 'inline-block', 'background': '#EDF1FD', 'color': '#2E3E9E', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                    Contribuintes
                  </span>
                  <h3 style={{ 'margin': '18px 0 12px', 'fontSize': '32px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                    Quem é a base
                    <br />
                    <span style={{ 'color': '#2E3E9E' }}>
                      e quem está devendo
                    </span>
                  </h3>
                  <p style={{ 'margin': '0 0 22px', 'fontSize': '15.5px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '430px', 'textWrap': 'pretty' }}>
                    A base inteira separada por pessoa física e jurídica, situação cadastral e pendência por setor, para a cobrança começar por quem realmente deve.
                  </p>
                  <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '14.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}PF × PJ e novos cadastros por ano
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Tributos lançados × débitos em aberto
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Pendência por setor
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Situação cadastral: ativos, suspensos, baixados
                    </span>
                  </div>
                </div>
                <ScaledFrame contentHeight={1500} height='440px' style={{ 'borderRadius': '16px', 'border': '1px solid #E2E8F7', 'background': '#F1F5FC', 'boxShadow': '0 40px 70px -46px rgba(19,29,80,0.6)' }}>
                  <AppMockup tab='contribuintes' />
                </ScaledFrame>
              </div>
              <div className='lp-grid-tela' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(420px,1fr))', 'gap': '56px', 'alignItems': 'center' }}>
                <ScaledFrame contentHeight={1500} height='440px' style={{ 'borderRadius': '16px', 'border': '1px solid #E2E8F7', 'background': '#F1F5FC', 'boxShadow': '0 40px 70px -46px rgba(19,29,80,0.6)' }}>
                  <AppMockup tab='imobiliario' />
                </ScaledFrame>
                <div>
                  <span style={{ 'display': 'inline-block', 'background': '#EDF1FD', 'color': '#2E3E9E', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                    Imobiliário
                  </span>
                  <h3 style={{ 'margin': '18px 0 12px', 'fontSize': '32px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                    IPTU imóvel
                    <br />
                    <span style={{ 'color': '#2E3E9E' }}>
                      por imóvel, bairro por bairro
                    </span>
                  </h3>
                  <p style={{ 'margin': '0 0 22px', 'fontSize': '15.5px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '430px', 'textWrap': 'pretty' }}>
                    Lançado, arrecadado, em aberto, isento e suspenso, com cinco anos de histórico e projeção do exercício seguinte.
                  </p>
                  <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '14.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Visão geral do IPTU 2026
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Evolução 5 anos + previsão 2027
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Resumo de imóveis e cruzamentos de cadastro
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Ranking por bairro
                    </span>
                  </div>
                </div>
              </div>
              <div className='lp-grid-tela' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(420px,1fr))', 'gap': '56px', 'alignItems': 'center' }}>
                <div>
                  <span style={{ 'display': 'inline-block', 'background': '#EDF1FD', 'color': '#2E3E9E', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                    Mobiliário e outros tributos
                  </span>
                  <h3 style={{ 'margin': '18px 0 12px', 'fontSize': '32px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                    ISS, taxas e o que
                    <br />
                    <span style={{ 'color': '#2E3E9E' }}>
                      de fato entra no caixa
                    </span>
                  </h3>
                  <p style={{ 'margin': '0 0 22px', 'fontSize': '15.5px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '430px', 'textWrap': 'pretty' }}>
                    O percentual do lançado que virou receita, grupo por grupo. Quando a eficiência cai, aparece a tempo de corrigir dentro do exercício.
                  </p>
                  <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '14.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Lançado × arrecadado por ano
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Medidor de eficiência de arrecadação
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Composição do lançado
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Tabela completa de exercícios
                    </span>
                  </div>
                </div>
                <ScaledFrame contentHeight={1500} height='440px' style={{ 'borderRadius': '16px', 'border': '1px solid #E2E8F7', 'background': '#F1F5FC', 'boxShadow': '0 40px 70px -46px rgba(19,29,80,0.6)' }}>
                  <AppMockup tab='mobiliario' />
                </ScaledFrame>
              </div>
              <div className='lp-grid-tela' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(420px,1fr))', 'gap': '56px', 'alignItems': 'center' }}>
                <ScaledFrame contentHeight={1500} height='440px' style={{ 'borderRadius': '16px', 'border': '1px solid #E2E8F7', 'background': '#F1F5FC', 'boxShadow': '0 40px 70px -46px rgba(19,29,80,0.6)' }}>
                  <AppMockup tab='divida' />
                </ScaledFrame>
                <div>
                  <span style={{ 'display': 'inline-block', 'background': '#EDF1FD', 'color': '#2E3E9E', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                    Dívida ativa
                  </span>
                  <h3 style={{ 'margin': '18px 0 12px', 'fontSize': '32px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                    Quanto está inscrito
                    <br />
                    <span style={{ 'color': '#2E3E9E' }}>
                      e quanto volta ao caixa
                    </span>
                  </h3>
                  <p style={{ 'margin': '0 0 22px', 'fontSize': '15.5px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '430px', 'textWrap': 'pretty' }}>
                    Estoque por tributo, divisão entre administrativa e ajuizada, e a taxa histórica de recuperação por exercício de origem.
                  </p>
                  <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '14.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Estoque por tributo
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Administrativa × judicial
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Taxa de recuperação por exercício
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Prescrição próxima em destaque
                    </span>
                  </div>
                </div>
              </div>
              <div className='lp-grid-tela' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(420px,1fr))', 'gap': '56px', 'alignItems': 'center' }}>
                <div>
                  <span style={{ 'display': 'inline-block', 'background': '#FDF2DF', 'color': '#8A5B08', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                    Reforma tributária · novo
                  </span>
                  <h3 style={{ 'margin': '18px 0 12px', 'fontSize': '32px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                    O que o IBS faz
                    <br />
                    <span style={{ 'color': '#2E3E9E' }}>
                      com a receita própria
                    </span>
                  </h3>
                  <p style={{ 'margin': '0 0 22px', 'fontSize': '15.5px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '430px', 'textWrap': 'pretty' }}>
                    A base exposta à transição, a curva de substituição do ISS até 2033 e as frentes que precisam de preparo antes de 2029, quando a redução começa.
                  </p>
                  <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '14.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Base exposta ao IBS
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Transição 2026 → 2033 em cenários
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Cronograma de marcos legais
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Riscos por frente e recomendações
                    </span>
                  </div>
                </div>
                <ScaledFrame contentHeight={1500} height='440px' style={{ 'borderRadius': '16px', 'border': '1px solid #E2E8F7', 'background': '#F1F5FC', 'boxShadow': '0 40px 70px -46px rgba(19,29,80,0.6)' }}>
                  <AppMockup tab='reforma' />
                </ScaledFrame>
              </div>
              <div className='lp-grid-tela' style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit,minmax(420px,1fr))', 'gap': '56px', 'alignItems': 'center' }}>
                <ScaledFrame contentHeight={1500} height='440px' style={{ 'borderRadius': '16px', 'border': '1px solid #E2E8F7', 'background': '#F1F5FC', 'boxShadow': '0 40px 70px -46px rgba(19,29,80,0.6)' }}>
                  <AppMockup tab='chat' />
                </ScaledFrame>
                <div>
                  <span style={{ 'display': 'inline-block', 'background': '#FDF2DF', 'color': '#8A5B08', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                    Chat analítico · novo
                  </span>
                  <h3 style={{ 'margin': '18px 0 12px', 'fontSize': '32px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                    Pergunte aos seus dados
                    <br />
                    <span style={{ 'color': '#2E3E9E' }}>
                      e receba o número com a fonte
                    </span>
                  </h3>
                  <p style={{ 'margin': '0 0 22px', 'fontSize': '15.5px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '430px', 'textWrap': 'pretty' }}>
                    “Quais bairros têm mais IPTU em aberto?” A resposta vem com o valor, a comparação e o painel de onde o dado saiu.
                  </p>
                  <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '12px', 'fontSize': '14.5px', 'fontWeight': '600', 'color': '#3B4573' }}>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Pergunta em português, sem filtro nem menu
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Toda resposta cita a fonte do dado
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Sugestões prontas para o gabinete
                    </span>
                    <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                      <span style={{ 'color': '#2E3E9E' }}>
                        ✓
                      </span>
                      {' '}Trilha de auditoria, sem expor dado pessoal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='inteligencia' style={{ 'padding': '24px 32px 96px', 'background': '#fff' }}>
          <div className='lp-grid-inteligencia' style={{ 'maxWidth': '1220px', 'margin': '0 auto', 'display': 'grid', 'gridTemplateColumns': '1.05fr 0.95fr', 'gap': '64px', 'alignItems': 'center' }}>
            <div style={{ 'background': 'linear-gradient(150deg,#2E3E9E,#1B2668)', 'borderRadius': '20px', 'padding': '34px', 'color': '#fff', 'boxShadow': '0 40px 70px -40px rgba(19,29,80,0.7)' }}>
              <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between' }}>
                <div style={{ 'width': '38px', 'height': '38px', 'borderRadius': '999px', 'border': '2px solid rgba(255,255,255,0.35)', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }}>
                  ◉
                </div>
                <span style={{ 'background': 'rgba(255,255,255,0.14)', 'padding': '6px 14px', 'borderRadius': '999px', 'fontSize': '12px', 'fontWeight': '600' }}>
                  Receita
                </span>
              </div>
              <h3 style={{ 'margin': '22px 0 18px', 'fontSize': '22px', 'fontWeight': '700' }}>
                Insights de Receita
              </h3>
              <ul style={{ 'margin': '0', 'paddingLeft': '18px', 'display': 'flex', 'flexDirection': 'column', 'gap': '16px', 'fontSize': '14.5px', 'lineHeight': '1.6', 'color': '#DCE2FA' }}>
                <li>
                  O município cresceu{' '}
                  <strong style={{ 'color': '#fff' }}>
                    11,13%
                  </strong>
                  {' '}na arrecadação até julho (467,3 mi vs 420,5 mi), mesmo com queda pontual no mês.
                </li>
                <li>
                  Transferências estaduais e impostos respondem por{' '}
                  <strong style={{ 'color': '#fff' }}>
                    63,6%
                  </strong>
                  {' '}da receita, o que deixa o caixa exposto a repasse que atrasa.
                </li>
                <li>
                  Julho caiu{' '}
                  <strong style={{ 'color': '#fff' }}>
                    23,8%
                  </strong>
                  {' '}vs junho, indício de sazonalidade ou atraso em transferências.
                </li>
              </ul>
              <div style={{ 'marginTop': '26px', 'paddingTop': '20px', 'borderTop': '1px solid rgba(255,255,255,0.16)', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.14em', 'color': '#A9B4E8', 'textTransform': 'uppercase' }}>
                Gerado automaticamente · atualizado hoje
              </div>
            </div>
            <div>
              <span style={{ 'display': 'inline-block', 'background': '#FDF2DF', 'color': '#8A5B08', 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '10px', 'letterSpacing': '0.18em', 'padding': '6px 12px', 'borderRadius': '6px', 'textTransform': 'uppercase' }}>
                Inteligência
              </span>
              <h2 style={{ 'margin': '18px 0 14px', 'fontSize': '38px', 'lineHeight': '1.1', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                Insights escritos pela IA
                <br />
                <span style={{ 'color': '#2E3E9E' }}>
                  a cada fechamento
                </span>
              </h2>
              <p style={{ 'margin': '0 0 26px', 'fontSize': '16px', 'lineHeight': '1.65', 'color': '#4B5580', 'maxWidth': '440px', 'textWrap': 'pretty' }}>
                Ninguém precisa pedir. A cada fechamento a IA lê os números do município e escreve o insight: o que mudou, contra qual período e onde a receita corre risco. O gestor abre o painel e a leitura já está lá.
              </p>
              <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '14px', 'fontSize': '15px', 'fontWeight': '600', 'color': '#3B4573' }}>
                <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                  <span style={{ 'color': '#2E3E9E' }}>
                    ✓
                  </span>
                  {' '}Insight escrito a cada fechamento
                </span>
                <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                  <span style={{ 'color': '#2E3E9E' }}>
                    ✓
                  </span>
                  {' '}Comparação automática com o exercício anterior
                </span>
                <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                  <span style={{ 'color': '#2E3E9E' }}>
                    ✓
                  </span>
                  {' '}Aponta queda e sazonalidade atípica
                </span>
                <span style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '10px' }}>
                  <span style={{ 'color': '#2E3E9E' }}>
                    ✓
                  </span>
                  {' '}Resumo pronto para a reunião de gabinete
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id='resultados' style={{ 'padding': '76px 32px', 'background': '#F6F8FE', 'borderTop': '1px solid #E9EDF8', 'borderBottom': '1px solid #E9EDF8' }}>
          <div className='lp-grid-resultados' style={{ 'maxWidth': '1120px', 'margin': '0 auto', 'display': 'grid', 'gridTemplateColumns': 'repeat(4,1fr)', 'gap': '32px' }}>
            <div>
              <div style={{ 'fontSize': '38px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Mais caixa
              </div>
              <div style={{ 'marginTop': '6px', 'fontSize': '14px', 'color': '#5A6488', 'lineHeight': '1.5' }}>
                da receita que já foi lançada e ainda não entrou
              </div>
            </div>
            <div>
              <div style={{ 'fontSize': '38px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                Menos perda
              </div>
              <div style={{ 'marginTop': '6px', 'fontSize': '14px', 'color': '#5A6488', 'lineHeight': '1.5' }}>
                na dívida que caminha para a prescrição
              </div>
            </div>
            <div>
              <div style={{ 'fontSize': '38px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                9 módulos
              </div>
              <div style={{ 'marginTop': '6px', 'fontSize': '14px', 'color': '#5A6488', 'lineHeight': '1.5' }}>
                na mesma base, sem planilha paralela
              </div>
            </div>
            <div>
              <div style={{ 'fontSize': '38px', 'fontWeight': '800', 'letterSpacing': '-0.03em', 'color': '#1F2B6C' }}>
                30 dias
              </div>
              <div style={{ 'marginTop': '6px', 'fontSize': '14px', 'color': '#5A6488', 'lineHeight': '1.5' }}>
                da integração ao painel em produção
              </div>
            </div>
          </div>
        </section>
        <section id='demo' style={{ 'padding': '96px 32px', 'background': '#fff' }}>
          <div style={{ 'maxWidth': '1000px', 'margin': '0 auto', 'background': 'linear-gradient(140deg,#1F2B6C,#2E3E9E 65%,#3D4FC0)', 'borderRadius': '24px', 'padding': '64px 56px', 'color': '#fff', 'position': 'relative', 'overflow': 'hidden', 'boxShadow': '0 50px 80px -50px rgba(19,29,80,0.8)' }}>
            <div style={{ 'position': 'absolute', 'right': '-70px', 'top': '-80px', 'width': '280px', 'height': '280px', 'borderRadius': '999px', 'background': 'rgba(255,255,255,0.07)' }} />
            <div style={{ 'position': 'relative', 'maxWidth': '560px' }}>
              <h2 style={{ 'margin': '0 0 16px', 'fontSize': '38px', 'lineHeight': '1.12', 'letterSpacing': '-0.03em', 'fontWeight': '800' }}>
                Veja quanto da sua receita está parada
              </h2>
              <p style={{ 'margin': '0 0 32px', 'fontSize': '16.5px', 'lineHeight': '1.6', 'color': '#DCE2FA' }}>
                Uma demonstração de 30 minutos com o time técnico. Conectamos uma amostra da sua base e mostramos, com os seus números, onde há receita a recuperar.
              </p>
              <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '20px', 'flexWrap': 'wrap' }}>
                <a className='lp-hover-7' href='#acesso' style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px', 'background': '#fff', 'color': '#1F2B6C', 'padding': '17px 28px', 'borderRadius': '999px', 'fontSize': '15px', 'fontWeight': '700' }}>
                  Agendar demonstração{' '}
                  <SetaDireita tamanho={16} espessura={2.6} />
                </a>
                <a href='#acesso' style={{ 'color': '#DCE2FA', 'fontSize': '14.5px', 'fontWeight': '600' }}>
                  ou falar com um especialista
                </a>
              </div>
            </div>
          </div>
        </section>
        <footer id='acesso' style={{ 'borderTop': '1px solid #E9EDF8', 'padding': '48px 32px', 'background': '#fff' }}>
          <div style={{ 'maxWidth': '1220px', 'margin': '0 auto', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'gap': '32px', 'flexWrap': 'wrap' }}>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '12px' }}>
              <IconeMarca tamanho={30} gradiente='linear-gradient(140deg,#2E3E9E,#1F2B6C)' sombra={false} />
              <span style={{ 'fontSize': '15px', 'fontWeight': '700' }}>
                Prefeitura Analytics
              </span>
            </div>
            <nav className='lp-nav' style={{ 'display': 'flex', 'gap': '26px', 'fontSize': '14px', 'color': '#5A6488' }}>
              <a href='#modulos' style={{ 'color': '#5A6488' }}>
                Módulos
              </a>
              <a href='#recursos' style={{ 'color': '#5A6488' }}>
                Recursos
              </a>
              <a href='#inteligencia' style={{ 'color': '#5A6488' }}>
                Inteligência
              </a>
              <a href='#demo' style={{ 'color': '#5A6488' }}>
                Demonstração
              </a>
              <a href='#acesso' style={{ 'color': '#5A6488' }}>
                Suporte
              </a>
            </nav>
            <div style={{ 'fontFamily': 'var(--font-ibm-plex-mono),monospace', 'fontSize': '11px', 'color': '#98A1C0' }}>
              © 2026 · dados sob LGPD
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
