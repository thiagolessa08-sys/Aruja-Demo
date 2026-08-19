// Dados do mockup do painel exibido na landing page.
// Portado do export original (Prefeitura Analytics App) — números ilustrativos.

export type Tab =
  | 'orcamento'
  | 'contribuintes'
  | 'imobiliario'
  | 'mobiliario'
  | 'outros'
  | 'divida'
  | 'reforma'
  | 'chat'

const pct = (v: number, max: number) => ((v / max) * 100).toFixed(1) + '%'

const br = (v: number) => v.toFixed(1).replace('.', ',')

// Separador de milhar manual: evita divergência de ICU entre servidor e navegador
// (toLocaleString causaria erro de hidratação).
const milhar = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.')

const anosRaw = [
  { year: '2023', v: 612.4 },
  { year: '2024', v: 668.9 },
  { year: '2025', v: 741.2 },
  { year: '2026', v: 829.7 },
]

const mesesRaw: [string, number, number][] = [
  ['Jan', 67.3, 79.9], ['Fev', 65.3, 66.3], ['Mar', 51.9, 68.5], ['Abr', 65.4, 61.0],
  ['Mai', 50.9, 67.3], ['Jun', 53.1, 71.1], ['Jul', 66.5, 54.2], ['Ago', 50.3, 33.4],
  ['Set', 60.8, 0], ['Out', 55.5, 0], ['Nov', 53.8, 0], ['Dez', 98.5, 0],
]

const novosRaw: [string, number, number][] = [
  ['2018', 1113, 0.78], ['2019', 2612, 0.75], ['2020', 4928, 0.72], ['2021', 5167, 0.71],
  ['2022', 12702, 0.66], ['2023', 8304, 0.7], ['2024', 10575, 0.68], ['2025', 19401, 0.62],
  ['2026', 20636, 0.6],
]

const iptuRaw: [string, string, number, number, number, number][] = [
  ['2022', 'Arr 86% · Inad 10%', 50, 43, 5, 4.9],
  ['2023', 'Arr 85% · Inad 10%', 54.3, 46.4, 5.7, 5.7],
  ['2024', 'Arr 84% · Inad 12%', 57.8, 48.8, 6.8, 6.7],
  ['2025', 'Arr 83% · Inad 13%', 62.7, 51.8, 8.3, 8.2],
  ['2026', 'Arr 64% · Inad 12%', 67.6, 43.5, 21.6, 8.2],
  ['2027 · prev', 'Arr 68% · Inad 13%', 71.6, 48.6, 20.2, 9.5],
]

const issRaw: [string, number, number][] = [
  ['2018', 41.4, 40.1], ['2019', 42.0, 40.1], ['2020', 35.5, 33.7], ['2021', 41.4, 40.1],
  ['2022', 44.8, 44.0], ['2023', 53.3, 52.0], ['2024', 63.1, 56.1], ['2025', 73.5, 66.6],
  ['2026', 83.5, 38.7],
]

const outrosRaw: [string, number, number][] = [
  ['2018', 15.2, 5.9], ['2019', 19.0, 6.9], ['2020', 19.0, 6.9], ['2021', 30.6, 8.8],
  ['2022', 98.0, 10.7], ['2023', 73.9, 13.7], ['2024', 110.0, 14.0], ['2025', 22.3, 10.5],
  ['2026', 24.4, 10.0],
]

const recRaw: [string, number, number][] = [
  ['2017', 4.2, 0.6], ['2018', 1.1, 0.4], ['2019', 8.9, 1.2], ['2020', 7.6, 1.4],
  ['2021', 3.1, 2.6], ['2022', 6.4, 3.1], ['2023', 8.2, 3.4], ['2024', 18.4, 4.2],
  ['2025', 26.0, 5.1], ['2026', 22.1, 4.6],
]

const transRaw: [string, string, number, number][] = [
  ['2026', 'pré-reforma', 83.5, 0], ['2027', 'CBS integral', 83.5, 0], ['2028', 'teste IBS', 83.5, 0.9],
  ['2029', '-10% ISS', 75.1, 9.2], ['2030', '-20% ISS', 66.8, 18.4], ['2031', '-30% ISS', 58.5, 27.6],
  ['2032', '-40% ISS', 50.1, 36.8], ['2033', 'IBS integral', 0, 77.1],
]

const MENSAGEM_INICIAL =
  'Olá, Administrador. Pergunte em linguagem natural — por exemplo: "quanto arrecadamos de IPTU até agosto?" ou "quais bairros concentram inadimplência?".'

export function dadosMockup(tab: Tab) {
  const t = tab
  const bg = (k: Tab) => (t === k ? '#1F2B6C' : 'transparent')
  const fg = (k: Tab) => (t === k ? '#FFFFFF' : '#4B5580')

  return {
    tabHighlighter: t,

    bgOrcamento: bg('orcamento'), fgOrcamento: fg('orcamento'),
    bgContribuintes: bg('contribuintes'), fgContribuintes: fg('contribuintes'),
    bgImobiliario: bg('imobiliario'), fgImobiliario: fg('imobiliario'),
    bgMobiliario: bg('mobiliario'), fgMobiliario: fg('mobiliario'),
    bgOutros: bg('outros'), fgOutros: fg('outros'),
    bgDivida: bg('divida'), fgDivida: fg('divida'),
    bgReforma: bg('reforma'), fgReforma: fg('reforma'),
    bgChat: bg('chat'), fgChat: fg('chat'),

    isOrcamento: t === 'orcamento',
    isContribuintes: t === 'contribuintes',
    isImobiliario: t === 'imobiliario',
    isMobiliario: t === 'mobiliario',
    isOutros: t === 'outros',
    isDivida: t === 'divida',
    isReforma: t === 'reforma',
    isChat: t === 'chat',

    anos: anosRaw.map((a) => ({ year: a.year, label: br(a.v) + ' mi', h: pct(a.v, 900) })),

    meses: mesesRaw.map(([name, v1, v2]) => ({
      name,
      v1: br(v1),
      v2: v2 ? br(v2) : '',
      h1: pct(v1, 110),
      h2: pct(v2, 110),
    })),

    novosContrib: novosRaw.map(([year, total, sharePf]) => ({
      year,
      label: milhar(total),
      hpf: pct(total * sharePf, 22000),
      hpj: pct(total * (1 - sharePf), 22000),
    })),

    tributosLancados: [
      { name: 'IPTU', h1: '92%', h2: '26%' },
      { name: 'ISS / ISSQN', h1: '58%', h2: '8%' },
      { name: 'ITBI', h1: '21%', h2: '4%' },
      { name: 'Outros', h1: '17%', h2: '5%' },
      { name: 'TFE', h1: '13%', h2: '7%' },
      { name: 'TFHS', h1: '5%', h2: '4%' },
      { name: 'ISS CC', h1: '4%', h2: '3%' },
    ],

    pendencias: [
      { name: 'Cobrança Acumulada', value: '42.202', w: '100%' },
      { name: 'Mobiliário (ISS)', value: '31.867', w: '76%' },
      { name: 'Imobiliário (IPTU)', value: '24.108', w: '57%' },
      { name: 'Dívida Ativa', value: '18.442', w: '44%' },
      { name: 'Taxas diversas', value: '9.310', w: '22%' },
    ],

    iptuEvolucao: iptuRaw.map(([year, sub, l, a, b, i]) => ({
      year, sub,
      l: br(l) + ' mi',
      a: br(a) + ' mi',
      hl: pct(l, 80), ha: pct(a, 80), hb: pct(b, 80), hi: pct(i, 80),
    })),

    bairros: [
      { name: 'PARQUE RODRIGO BARRETO · 4.459 im.', value: '4,1 mi', w: '100%' },
      { name: 'CENTRO INDUSTRIAL DE ARUJÁ · 138 im.', value: '3,5 mi', w: '85%' },
      { name: 'ARUJÁ 5 · 1.065 im.', value: '3,3 mi', w: '80%' },
      { name: 'CONDOMÍNIO ARUJAZINHO IV · 857 im.', value: '3,2 mi', w: '78%' },
      { name: 'CONDOMÍNIO ARUJAZINHO III · 532 im.', value: '2,7 mi', w: '66%' },
      { name: 'JARDIM SÃO LUIZ · 1.371 im.', value: '2,4 mi', w: '58%' },
    ],

    issSeries: issRaw.map(([year, l, a]) => ({ year, h1: pct(l, 90), h2: pct(a, 90) })),

    issTabela: [
      { ex: '2026', lanc: 'R$ 83.465.535,47', arr: 'R$ 38.707.967,33', inad: 'R$ 8.439.297,07', pct: '46,4%' },
      { ex: '2025', lanc: 'R$ 73.500.025,84', arr: 'R$ 66.615.722,48', inad: 'R$ 4.967.926,23', pct: '90,6%' },
      { ex: '2024', lanc: 'R$ 63.139.982,27', arr: 'R$ 56.128.055,76', inad: 'R$ 3.017.904,59', pct: '88,9%' },
      { ex: '2023', lanc: 'R$ 53.286.049,48', arr: 'R$ 51.996.737,22', inad: 'R$ 1.887.656,23', pct: '97,6%' },
      { ex: '2022', lanc: 'R$ 44.837.943,01', arr: 'R$ 43.996.977,89', inad: 'R$ 1.666.339,22', pct: '98,1%' },
      { ex: '2021', lanc: 'R$ 41.422.278,97', arr: 'R$ 40.075.638,40', inad: 'R$ 1.061.431,60', pct: '96,7%' },
      { ex: '2020', lanc: 'R$ 35.509.209,01', arr: 'R$ 33.678.661,68', inad: 'R$ 704.019,90', pct: '94,8%' },
    ],

    outrosSeries: outrosRaw.map(([year, l, a]) => ({ year, h1: pct(l, 115), h2: pct(a, 115) })),

    outrosTabela: [
      { ex: '2026', lanc: 'R$ 24.399.244,45', arr: 'R$ 10.047.805,04', inad: 'R$ 6.844.709,15', pct: '41,2%' },
      { ex: '2025', lanc: 'R$ 22.345.530,46', arr: 'R$ 10.508.193,37', inad: 'R$ 8.165.758,32', pct: '47,0%' },
      { ex: '2024', lanc: 'R$ 110.008.427,32', arr: 'R$ 14.018.619,62', inad: 'R$ 10.896.471,48', pct: '12,7%' },
      { ex: '2023', lanc: 'R$ 73.916.702,46', arr: 'R$ 13.718.428,43', inad: 'R$ 10.177.436,72', pct: '18,6%' },
      { ex: '2022', lanc: 'R$ 98.043.103,80', arr: 'R$ 10.704.947,98', inad: 'R$ 10.102.607,26', pct: '10,9%' },
      { ex: '2021', lanc: 'R$ 30.598.085,35', arr: 'R$ 8.773.369,75', inad: 'R$ 7.849.181,78', pct: '28,7%' },
      { ex: '2020', lanc: 'R$ 19.008.208,25', arr: 'R$ 6.888.897,11', inad: 'R$ 6.382.992,73', pct: '36,2%' },
    ],

    dividaTributos: [
      { name: 'IPTU', value: '71,4 mi', w: '100%' },
      { name: 'Taxas de Licença p/ Localização', value: '24 mi', w: '34%' },
      { name: 'I.S.S.Q.N.', value: '12,4 mi', w: '17%' },
      { name: 'ITBI', value: '11,1 mi', w: '16%' },
      { name: 'Outras Restituições', value: '6,1 mi', w: '9%' },
      { name: 'ISS Construção Civil', value: '5,2 mi', w: '7%' },
      { name: 'Auto de Infração', value: '3,3 mi', w: '5%' },
      { name: 'Taxa de Fiscalização de Estabelecimento', value: '2,7 mi', w: '4%' },
      { name: 'Taxa de Fiscalização de Higiene e Saúde', value: '2,7 mi', w: '4%' },
    ],

    recuperacao: recRaw.map(([year, l, p]) => ({ year, h1: pct(l, 31), h2: pct(p, 31) })),

    transicao: transRaw.map(([year, sub, iss, ibs]) => ({
      year, sub, hIss: pct(iss, 90), hIbs: pct(ibs, 90),
    })),

    marcos: [
      { year: '2026', title: 'Ano-base de referência', desc: 'A arrecadação de ISS de 2024-2028 define a participação do município no IBS. Perder eficiência agora reduz a cota permanente.' },
      { year: '2027', title: 'CBS integral, PIS/Cofins extintos', desc: 'Sem efeito direto na receita municipal, mas altera a nota fiscal e a base de cruzamento com os prestadores.' },
      { year: '2028', title: 'IBS em teste (0,1%)', desc: 'Início da apuração paralela — momento de validar cadastro mobiliário e CNAE dos prestadores.' },
      { year: '2029', title: 'ISS começa a cair (-10% a.a.)', desc: 'Primeiro ano de redução escalonada; a compensação passa a depender do Fundo de Participação.' },
      { year: '2033', title: 'ISS extinto, IBS integral', desc: 'Receita própria passa a ser IPTU, ITBI, taxas e a cota do IBS. Necessário rever a política de cobrança.' },
    ],

    riscos: [
      { name: 'Eficiência de arrecadação do ISS', level: 'Crítico', w: '88%', color: '#E2564D', desc: '46,4% do lançado arrecadado em 2026 — define a base de compensação até 2033.' },
      { name: 'Qualidade do cadastro mobiliário', level: 'Alto', w: '70%', color: '#E9A13B', desc: '6.848 imóveis com empresa no endereço; divergências de CNAE afetam a apuração do IBS.' },
      { name: 'Dependência de transferências', level: 'Alto', w: '66%', color: '#E9A13B', desc: '63,6% da receita vem de repasses e impostos — baixa autonomia para absorver perdas.' },
      { name: 'Receita imobiliária (IPTU/ITBI)', level: 'Baixo', w: '28%', color: '#1B9E6E', desc: 'Fora da transição; 92 mi de receita própria preservada.' },
    ],

    // O painel na landing é só ilustrativo (pointer-events:none), então o chat
    // aparece no estado inicial e nenhum handler é emitido.
    pensando: false,
    rascunho: '',

    sugestoes: [
      { label: 'Arrecadação até agosto' },
      { label: 'Bairros com IPTU em aberto' },
      { label: 'Eficiência do ISS' },
      { label: 'Estoque de dívida ativa' },
      { label: 'Impacto da reforma' },
    ],

    mensagens: [
      { text: MENSAGEM_INICIAL, align: 'flex-start', bg: '#FFFFFF', fg: '#16204A', border: '#E6EBF7' },
    ],
  }
}
