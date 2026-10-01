/** @type {import('tailwindcss').Config} */
// ============================================================
// CORES DO PORTFÓLIO
// Para trocar a cor de destaque, altere apenas "accent" abaixo.
// "accent-ink" é a versão escura usada sobre o fundo claro (seção Stack).
// ============================================================
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0A',        // fundo principal (off-black)
        surface: '#141413',    // fundo de blocos secundários
        paper: '#F3F0EA',      // texto principal (off-white)
        body: '#CFCBC3',       // texto de parágrafos
        muted: '#A19D95',      // textos auxiliares
        dim: '#8C8880',        // títulos secundários
        line: 'rgba(243,240,234,0.16)',
        accent: '#F2541B',     // COR DE DESTAQUE
        'accent-ink': '#C2410C',
      },
      fontFamily: {
        display: ['Archivo', 'Arial Narrow', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      screens: {
        desk: '900px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(.16,.8,.2,1)',
      },
    },
  },
  plugins: [],
};
