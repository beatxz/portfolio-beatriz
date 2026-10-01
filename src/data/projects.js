// ============================================================
// PROJETOS
// ------------------------------------------------------------
// microservicesProject -> seção "02. Task Scheduler"
// selectedWork         -> seção "03. Selected Work" (lista de cards)
//
// ADICIONAR PROJETO: copie um objeto de selectedWork, cole no fim da lista e edite.
// REMOVER PROJETO:   apague o objeto correspondente.
// variant: 'split'  -> texto à esquerda, imagem à direita
//          'wide'   -> imagem larga em cima, texto embaixo em colunas
//          'accent' -> bloco em cor de destaque, sem imagem grande
// Campos vazios ('') aparecem como "TODO: adicionar informação".
// ============================================================

export const microservicesProject = {
  number: '02.',
  title: ['Task', 'Scheduler'],
  kicker: 'Backend — Microsserviços',
  description:
    'Projeto backend baseado em arquitetura de microsserviços, com comunicação entre serviços via OpenFeign e envio automático de notificações por e-mail.',
  github: 'https://github.com/beatxz', // TODO: trocar pelo link do repositório
  gateway: {
    name: 'BFF',
    text: 'Camada intermediária responsável por organizar a comunicação entre cliente e serviços.',
  },
  services: [
    { name: ['User', 'Service'], text: 'Responsável pelo gerenciamento e autenticação dos usuários.', tags: 'JWT · Spring Security' },
    { name: ['Task Scheduler', 'Service'], text: 'Responsável pela criação e gerenciamento das tarefas.', tags: 'MongoDB · MapStruct · DTOs' },
    { name: ['Notification', 'Service'], text: 'Responsável pelo envio automático das notificações por e-mail.', tags: 'E-mail automático' },
  ],
  connectorLabel: 'OpenFeign ⇅',
  highlights: [
    'Comunicação entre microsserviços utilizando OpenFeign',
    'Autenticação com JWT',
    'Arquitetura em camadas',
    'Envio automático de e-mails',
    'Documentação das APIs',
    'Tratamento de exceções',
    'Conteinerização',
  ],
  tech: [
    'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MongoDB', 'OpenFeign',
    'MapStruct', 'DTOs', 'Swagger / OpenAPI', 'Docker', 'Git / GitHub',
  ],
};

export const selectedWork = [
  {
    id: 'operadora-cartao',
    variant: 'split',
    name: ['Operadora de', 'cartão de crédito'],
    category: 'Backend — Arquitetura hexagonal',
    description: 'Backend desenvolvido utilizando arquitetura hexagonal.',
    problem:
      'Backend desenvolvido com Java e Spring Boot para gerenciamento de operações de cartão de crédito, estruturado com Arquitetura Hexagonal para separar regras de negócio da infraestrutura.',
    // tech aceita lista (['Java', 'Spring Boot']) ou texto livre
    tech: 'PostgreSQL, Spring Data JPA e MapStruct, com foco em boas práticas de arquitetura, desacoplamento e evolução da aplicação.',
    github: 'https://github.com/beatxz', // TODO: trocar pelo link do repositório
    year: '',    // opcional — vazio = não aparece
    image: null, // null = card sem imagem. ex.: { src: '/assets/projects/operadora.png', alt: '...', width: 1600, height: 1000 }
  },
  // Exemplo para um novo projeto (descomente e edite):
  // {
  //   id: 'meu-projeto',
  //   variant: 'wide',
  //   name: ['Nome do', 'projeto'],
  //   category: 'Backend',
  //   description: 'Descrição curta.',
  //   problem: 'Qual problema o projeto resolve.',
  //   tech: ['Java', 'Spring Boot'],
  //   github: 'https://github.com/beatxz/meu-projeto',
  //   year: '2026',
  //   image: { src: '/assets/projects/meu-projeto.png', alt: 'Tela do projeto', width: 1600, height: 1000 },
  // },
];
