// ============================================================
// DADOS PESSOAIS, TEXTOS DA HOME/SOBRE E LINKS
// Tudo que aparece sobre a Beatriz é editado aqui.
// ============================================================

export const profile = {
  name: 'Beatriz Rodrigues Martins',
  firstName: 'Beatriz',
  lastName: 'Rodrigues',
  title: 'Desenvolvedora de Software',
  specialty: 'Backend Java | Spring Boot',
  location: 'Contagem — MG, Brasil',
  year: 2026,

  // Texto grande ao lado da foto no Hero. Troque para ['Backend', 'Developer'] se preferir.
  heroRole: ['Software', 'Developer'],
  heroTagline: 'Construindo sistemas que resolvem problemas reais.',
  heroStack: ['Java', 'Spring Boot', 'APIs REST', 'PostgreSQL'],
  heroBlurb:
    'Desenvolvedora de Software com foco em Backend Java e Spring Boot. Formada em ADS pela PUC Minas.',

  // ==========================================================
  // SUBSTITUIR PELA FOTO DA BEATRIZ
  // Coloque a nova foto em: public/assets/beatriz/foto.jpg
  // (mesmo nome = não precisa mexer em código)
  // Proporção ideal: retrato 4:5. Atualize width/height se mudar a proporção.
  // ==========================================================
  photo: {
    src: '/assets/beatriz/foto.jpg',
    alt: 'Retrato de Beatriz Rodrigues Martins',
    width: 1086,
    height: 1448,
    position: '50% 20%', // enquadramento: horizontal vertical
    grayscale: false,    // true = foto em preto e branco
  },

  about: {
    lead:
      'Desenvolvedora de Software formada em Análise e Desenvolvimento de Sistemas pela PUC Minas, com foco em Backend Java e Spring Boot.',
    paragraphs: [
      'Tenho experiência prática construindo APIs REST, implementando regras de negócio, autenticação e autorização, integração com bancos de dados e desenvolvimento de aplicações utilizadas em cenários reais.',
      'Gosto especialmente de entender um problema, modelar a solução e transformar regras de negócio em sistemas organizados, seguros e manuteníveis.',
    ],
    facts: [
      { label: 'Formação', title: 'PUC Minas', sub: '2024 — 2026' },
      { label: 'Base', title: 'Contagem — MG', sub: 'Brasil' },
      { label: 'Foco', title: 'Backend', sub: 'Java / Spring' },
    ],
  },
};

// ============================================================
// LINKS — deixe string vazia '' para esconder/usar placeholder.
// ============================================================
export const links = {
  github: 'https://github.com/beatxz',
  linkedin: 'https://www.linkedin.com/in/beatriz-rodrigues-086a65275/',
  email: 'Beamartins146@gmail.com',
  whatsapp: '5531994018100', // DDI + DDD + número, só dígitos
  resume: '',   // TODO: adicionar informação — ex.: '/curriculo-beatriz-rodrigues.pdf' (arquivo em public/)
};
