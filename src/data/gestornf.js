// ============================================================
// GESTORNF — todo o conteúdo do case study
// Screenshots ficam em: public/assets/gestornf/
// Para trocar uma imagem, substitua o arquivo mantendo o MESMO NOME.
// ============================================================

export const gestornf = {
  number: '01.',
  kicker: 'Projeto em destaque — Full Stack',
  badge: 'Aplicação em uso real',
  subtitle: 'Sistema Full Stack para gestão de notas fiscais, vendas, clientes e comissões.',
  statement: 'O GestorNF nasceu de uma necessidade real de organização de uma operação comercial.',
  paragraphs: [
    'A aplicação centraliza o gerenciamento de notas fiscais, clientes, vendedores, vendas e comissões, substituindo processos manuais e facilitando consultas e acompanhamento dos resultados.',
    'O sistema foi desenvolvido e implantado para utilização em uma operação real e continua sendo evoluído a partir das necessidades e do feedback dos usuários.',
  ],
  // IMAGEM DE ABERTURA (largura total) — public/assets/gestornf/login.png
  cover: {
    src: '/assets/gestornf/login.png',
    alt: 'Tela de login do GestorNF com a mensagem: gerencie vendedores e notas fiscais em um só lugar',
    width: 1797,
    height: 800,
    caption: ['GestorNF — Acesso', 'React · Spring Boot · PostgreSQL'],
  },
};

export const role = {
  title: ['Do problema', 'à produção.'],
  text: 'Fui responsável pelo desenvolvimento e pelas decisões técnicas do sistema. O backend foi desenvolvido principalmente por mim utilizando Java e Spring Boot, e trabalhei diretamente na integração e adaptação do frontend em React.',
  toolsNote:
    'Para partes da implementação visual do frontend, utilizei ferramentas de IA como apoio de produtividade, da mesma forma que uso outras ferramentas no fluxo de desenvolvimento — especialmente por não ser essa a minha principal área de especialização. Regras de negócio, arquitetura, backend, integrações, validação, deploy e evolução do sistema foram conduzidos por mim.',
  responsibilities: [
    'Levantamento das necessidades',
    'Definição das regras de negócio',
    'Modelagem dos dados',
    'Arquitetura do backend',
    'Desenvolvimento das APIs',
    'Autenticação e autorização',
    'Integração com banco de dados',
    'Desenvolvimento das funcionalidades',
    'Integração frontend e backend',
    'Deploy',
    'Manutenção',
    'Correção de problemas',
    'Evolução baseada no feedback dos usuários',
  ],
};

export const architecture = {
  layers: [
    { id: 'frontend', label: 'Frontend', main: ['React', 'Vite'] },
    { id: 'backend', label: 'Backend', main: ['Java', 'Spring Boot'], sub: 'Spring Security · Spring Data JPA', highlight: true },
    { id: 'database', label: 'Database', main: ['PostgreSQL'] },
  ],
  connectors: ['API REST — JSON / JWT ↓', 'Persistência ↓'],
  aside: [
    { label: 'Segurança', items: ['JWT Authentication'] },
    { label: 'Documentação', items: ['Swagger / OpenAPI'] },
    { label: 'Infra & deploy', items: ['Docker', 'Render', 'Vercel'] },
  ],
};

export const features = [
  { name: 'Gestão de usuários' },
  { name: 'Gestão de vendedores' },
  { name: 'Gestão de clientes' },
  { name: 'Gestão de notas fiscais' },
  { name: 'Controle de vendas' },
  { name: 'Cálculo e acompanhamento de comissões', highlight: true },
  { name: 'Autenticação JWT' },
  { name: 'Controle de acesso' },
  { name: 'Importação de notas fiscais por PDF', highlight: true },
  { name: 'Filtros e buscas' },
  { name: 'Dashboard financeiro' },
  { name: 'Relatórios' },
  { name: 'Deploy em produção' },
];

// ============================================================
// SHOWCASE — cada item é uma "cena" do case study.
// images[0] é a imagem principal. Para composição com 2 telas,
// use layout: 'overlay' (a segunda imagem fica sobreposta no canto).
// fit: 'contain' (mostra a tela inteira) ou 'cover' (recorte, usa position).
// ============================================================
export const showcase = [
  {
    id: 'dashboard',
    number: '01',
    title: 'Visão geral',
    text: 'Painel com o volume de vendas mês a mês ao longo do ano, o progresso da meta mensal e a participação de cada vendedor no total vendido. O período é escolhido pelo seletor de mês.',
    images: [
      // SUBSTITUIR: public/assets/gestornf/dashboard.png
      { src: '/assets/gestornf/dashboard.png', alt: 'Dashboard do GestorNF com gráfico de vendas por mês, meta mensal e vendas por vendedor', width: 1414, height: 813, fit: 'contain' },
    ],
  },
  {
    id: 'notas',
    number: '02',
    title: 'Notas fiscais',
    text: 'Notas organizadas por vendedor e por mês, com número da nota, código do cliente, empresa, valor e data. A tela permite buscar por código do cliente, adicionar novas notas e exportar o período em PDF.',
    images: [
      // SUBSTITUIR: public/assets/gestornf/notas.png
      { src: '/assets/gestornf/notas.png', alt: 'Lista de notas fiscais de um vendedor com número, código do cliente, empresa, valor e data', width: 1896, height: 960, fit: 'contain' },
    ],
  },
  {
    id: 'clientes',
    number: '03',
    title: 'Clientes',
    text: 'Clientes cadastrados por vendedor, com busca por nome, código, CNPJ ou município. Cada cliente pode ser ativado ou desativado, e os detalhes — CNPJ, telefone, município, transportadora e vendedor responsável — ficam disponíveis para consulta e edição.',
    layout: 'overlay',
    images: [
      // SUBSTITUIR: public/assets/gestornf/clientes.png
      { src: '/assets/gestornf/clientes.png', alt: 'Tabela de clientes com código, nome, município, transportadora e status ativo', width: 1414, height: 677 },
      // SUBSTITUIR: public/assets/gestornf/cliente-detalhes.png
      { src: '/assets/gestornf/cliente-detalhes.png', alt: 'Janela de detalhes do cliente com CNPJ, telefone, município, transportadora, vendedor e status', width: 1284, height: 856 },
    ],
  },
  {
    id: 'vendedores',
    number: '04',
    title: 'Vendedores',
    text: 'Cada vendedor tem seu próprio percentual de comissão. Ao selecionar um vendedor, o sistema reúne as vendas do mês, a comissão calculada sobre elas e o andamento da meta mensal.',
    images: [
      // SUBSTITUIR: public/assets/gestornf/vendedores.png
      { src: '/assets/gestornf/vendedores.png', alt: 'Painel de vendedor com lista de vendedores e percentuais de comissão, vendas no mês, comissão e meta mensal', width: 1896, height: 960, fit: 'cover', position: '0% 0%' },
    ],
  },
  {
    id: 'importacao',
    number: '05',
    title: 'Importação',
    text: 'Uma nota fiscal pode ser cadastrada de duas formas: digitada manualmente ou importada a partir do PDF da nota, com os dados extraídos e processados pelo backend.',
    images: [
      // SUBSTITUIR: public/assets/gestornf/importacao.png
      { src: '/assets/gestornf/importacao.png', alt: 'Janela para adicionar nota fiscal com as opções digitar manualmente ou importar PDF', width: 879, height: 648, fit: 'contain', background: '#808183' },
    ],
  },
  {
    id: 'configuracoes',
    number: '06',
    title: 'Gestão / Configurações',
    text: 'Área administrativa para definir a comissão geral e a comissão por vendedor, remover vendedores e usuários e consultar a Política de Privacidade e os Termos de Uso.',
    images: [
      // SUBSTITUIR: public/assets/gestornf/configuracoes.png
      { src: '/assets/gestornf/configuracoes.png', alt: 'Janela de configurações com comissão geral, comissão por vendedor, exclusão de vendedor e usuário e privacidade', width: 1414, height: 813, fit: 'contain' },
    ],
  },
];

export const challenges = {
  intro: 'O que não aparece nas telas: as decisões de backend que sustentam o GestorNF em uso.',
  items: [
    { title: 'Autenticação e autorização', text: 'Implementação de JWT e Spring Security.' },
    { title: 'Regras de negócio', text: 'Modelagem das relações entre usuários, vendedores, clientes, notas e comissões.' },
    { title: 'Importação de NF', text: 'Extração e processamento de informações provenientes de PDFs.' },
    { title: 'Persistência', text: 'Modelagem e persistência dos dados utilizando PostgreSQL e Spring Data JPA.' },
    { title: 'Produção', text: 'Deploy separado de frontend, backend e banco de dados.' },
    { title: 'Evolução', text: 'Ajustes realizados a partir do uso e feedback dos usuários reais.' },
  ],
};
