// ============================================================
// TECH STACK
// layout: 'hero'  -> palavra gigante (usado só para a linguagem principal)
//         'list'  -> lista grande separada por barras
//         'column'-> coluna (grupos lado a lado)
// focus: true     -> mostra o selo "Foco principal"
// ============================================================

export const stackIntro =
  'O núcleo é Java e o ecossistema Spring. O restante existe para que o backend chegue a produção com segurança, dados consistentes e documentação.';

export const skillGroups = [
  { id: 'linguagem', label: 'Linguagem', layout: 'hero', items: ['Java'] },
  {
    id: 'backend',
    label: 'Backend',
    layout: 'list',
    focus: true,
    items: [
      'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'APIs REST',
      'Microsserviços', 'POO', 'Collections', 'Stream API', 'Lambda', 'Tratamento de Exceções',
    ],
  },
  { id: 'database', label: 'Database', layout: 'column', items: ['PostgreSQL', 'SQL', 'MongoDB'] },
  { id: 'security', label: 'Security', layout: 'column', items: ['JWT', 'Spring Security'] },
  { id: 'testes', label: 'Testes e documentação', layout: 'column', items: ['Postman', 'Swagger / OpenAPI'] },
  {
    id: 'tools',
    label: 'Tools / DevOps',
    layout: 'list',
    small: true,
    items: ['Git', 'GitHub', 'Gitflow', 'Docker', 'Maven', 'Gradle', 'Linux', 'IntelliJ IDEA'],
  },
  { id: 'metodologias', label: 'Metodologias', layout: 'list', small: true, items: ['Scrum', 'Kanban'] },
];

// Tecnologias de apoio (fora do foco principal)
export const supportSkills = {
  label: 'Apoio — Full Stack',
  text: 'React, utilizado na integração do frontend em projetos Full Stack como o GestorNF.',
};
