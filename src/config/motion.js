// ============================================================
// CONFIGURAÇÃO GLOBAL DAS ANIMAÇÕES
// Altere aqui para deixar tudo mais rápido, mais lento ou mais sutil.
// ============================================================

// Curva de aceleração usada em todo o site (entrada rápida, saída longa e suave)
export const EASE = [0.16, 0.8, 0.2, 1];

export const reveal = {
  duration: 1.1,        // duração dos textos que surgem (segundos)
  distance: 44,         // quanto o texto sobe ao aparecer (px)
  sideDistance: '9vw',  // quanto os títulos entram pela lateral
  stagger: 0.08,        // atraso entre itens de listas (segundos)
  viewportMargin: '0px 0px -10% 0px', // quando a animação começa
};

export const clipReveal = {
  duration: 1.3,               // duração da revelação das imagens
  ease: [0.7, 0, 0.2, 1],
};

// Parallax das imagens: porcentagem de deslocamento vertical (0 = desliga)
export const PARALLAX_STRENGTH = 6;

// Deslocamento horizontal dos títulos gigantes durante o scroll (em %)
export const TITLE_SHIFT = 8;

// Velocidade da faixa de tecnologias abaixo do hero (em %)
export const MARQUEE_SHIFT = 30;
