# Beatriz Rodrigues Martins — Portfólio

Portfólio profissional de **Beatriz Rodrigues Martins**, Desenvolvedora de Software com foco em **Backend Java | Spring Boot**.

Direção de arte editorial: fundo off-black, tipografia condensada gigante, um único laranja queimado como destaque e uma narrativa de scroll que conduz de quem é a Beatriz até o GestorNF — a principal evidência do trabalho — e dali aos demais projetos.

## Tecnologias

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11 (reveals, parallax, títulos com deslocamento horizontal, showcase sticky)
- Fontes: Archivo (display condensada), Instrument Sans (texto), JetBrains Mono (rótulos)

Nenhuma outra dependência. GSAP não foi necessário: tudo é feito com `useScroll`/`useTransform` do Framer Motion.

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Estrutura do projeto

```
public/
  favicon.svg
  assets/
    beatriz/foto.jpg            ← foto do Hero
    gestornf/*.png              ← screenshots do GestorNF
src/
  App.jsx                       ← ordem das seções
  main.jsx
  config/motion.js              ← velocidades e intensidade das animações
  data/
    profile.js                  ← nome, textos do Hero/Sobre, foto, LINKS
    navigation.js               ← itens do menu
    skills.js                   ← Tech Stack
    gestornf.js                 ← todo o case study do GestorNF
    projects.js                 ← Task Scheduler + Selected Work
    education.js                ← formação, cursos, soft skills
  hooks/
    useActiveSection.js         ← indicador de seção atual no menu
    useMediaQuery.js
  components/                   ← peças reutilizáveis (Navbar, Reveal, ParallaxImage…)
  sections/                     ← cada seção da página
    gestornf/                   ← sub-blocos do case study
  styles/index.css              ← Tailwind + classes tipográficas
tailwind.config.js              ← CORES e fontes
```

## Como personalizar

Quase todo o conteúdo está em `src/data/`. Componentes só precisam ser editados para mudar layout. O passo a passo detalhado está em **[GUIA-DE-PERSONALIZACAO.md](./GUIA-DE-PERSONALIZACAO.md)**.

## Como adicionar projetos

Abra `src/data/projects.js`, copie o objeto de exemplo comentado dentro de `selectedWork`, cole no fim da lista e preencha. Escolha `variant: 'split' | 'wide' | 'accent'` para dar um layout diferente a cada card. Imagens do projeto vão em `public/assets/projects/`.

## Como substituir screenshots

Substitua o arquivo em `public/assets/gestornf/` mantendo o mesmo nome:

| Arquivo | Onde aparece |
|---|---|
| `login.png` | imagem larga de abertura do GestorNF |
| `dashboard.png` | 01 Visão geral |
| `notas.png` | 02 Notas fiscais |
| `clientes.png` + `cliente-detalhes.png` | 03 Clientes (composição sobreposta) |
| `vendedores.png` | 04 Vendedores |
| `importacao.png` | 05 Importação |
| `configuracoes.png` | 06 Gestão / Configurações |

Se a nova imagem tiver outra proporção, atualize `width`/`height` do item em `src/data/gestornf.js` (evita layout shift).

## Build

```bash
npm run build     # gera dist/
npm run preview   # testa o build localmente
```

Dica de performance: exporte screenshots em `.webp` (qualidade ~80) e atualize a extensão em `src/data/gestornf.js`.

## Publicar na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em vercel.com → **Add New… → Project** → importe o repositório.
3. A Vercel detecta Vite automaticamente (Build: `npm run build`, Output: `dist`).
4. **Deploy**. Depois, atualize `og:url` em `index.html` com o domínio final.
