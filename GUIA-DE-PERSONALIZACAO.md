# Guia de personalização — Portfólio da Beatriz

Tudo aqui considera a pasta `portfolio-beatriz/` como raiz. Depois de qualquer alteração, com `npm run dev` rodando, o navegador atualiza sozinho.

---

## ALTERAR FOTO

**Arquivo da imagem:** `public/assets/beatriz/foto.jpg`
**Configuração:** `src/data/profile.js` → objeto `profile.photo`
**Componente:** `src/components/Photo.jsx` (procure por `SUBSTITUIR PELA FOTO DA BEATRIZ`)

Jeito mais simples: salve a foto nova como `foto.jpg` e substitua o arquivo em `public/assets/beatriz/`. Não precisa mexer em código.

Se o nome ou a proporção forem diferentes, em `src/data/profile.js`:

Procure por:
```js
photo: {
  src: '/assets/beatriz/foto.jpg',
  alt: 'Retrato de Beatriz Rodrigues Martins',
  width: 1086,
  height: 1448,
  position: '50% 20%',
  grayscale: false,
},
```
Substitua por (exemplo):
```js
photo: {
  src: '/assets/beatriz/beatriz-2026.jpg',
  alt: 'Retrato de Beatriz Rodrigues Martins',
  width: 1600,
  height: 2000,
  position: '50% 30%',
  grayscale: true,
},
```
- `position`: enquadramento (horizontal vertical). Aumente o segundo valor para descer o recorte.
- `grayscale: true`: deixa a foto em preto e branco.
- Recomendado: retrato 4:5, até ~1600px de altura, JPG qualidade 80.

Atualize também o `<link rel="preload" … href="/assets/beatriz/foto.jpg">` em `index.html` se mudar o nome.

---

## ALTERAR TEXTO DA HOME

**Arquivo:** `src/data/profile.js` (o componente `src/sections/Hero.jsx` só lê esses dados)

| O que | Variável |
|---|---|
| "BEATRIZ" / "RODRIGUES" | `firstName`, `lastName` |
| "SOFTWARE DEVELOPER" | `heroRole: ['Software', 'Developer']` → troque por `['Backend', 'Developer']` |
| Frase curta | `heroTagline` |
| Java / Spring Boot / … | `heroStack` |
| Texto pequeno à direita | `heroBlurb` |
| Barra superior | `specialty`, `location`, `year` |

Textos da seção Sobre: `profile.about` (`lead`, `paragraphs`, `facts`) no mesmo arquivo.

Para mudar os botões do Hero (Ver projetos / GitHub / LinkedIn): `src/sections/Hero.jsx`, procure por `<ArrowLink href="#gestornf"`.

---

## ALTERAR SCREENSHOT DO GESTORNF

**Pasta:** `public/assets/gestornf/`
**Dados:** `src/data/gestornf.js` → `gestornf.cover` (imagem de abertura) e `showcase` (as 6 telas)

| Imagem | Bloco |
|---|---|
| `login.png` | abertura em largura total |
| `dashboard.png` | 01 Visão geral |
| `notas.png` | 02 Notas fiscais |
| `clientes.png` | 03 Clientes (tela de fundo) |
| `cliente-detalhes.png` | 03 Clientes (janela sobreposta) |
| `vendedores.png` | 04 Vendedores |
| `importacao.png` | 05 Importação |
| `configuracoes.png` | 06 Gestão / Configurações |

Substitua o arquivo mantendo o nome. Cada item em `showcase` tem um comentário `// SUBSTITUIR: …` indicando o arquivo.

Se mudar a proporção, atualize `width` e `height`. Opções de cada imagem:
- `fit: 'contain'` mostra a tela inteira; `fit: 'cover'` recorta (use `position: '0% 0%'` para focar no canto superior esquerdo).
- `background: '#808183'` preenche as sobras quando a imagem for menor que a moldura.

Para mudar o texto de uma tela: edite `title` e `text` do item.
Para adicionar uma 7ª tela: copie um objeto do array `showcase`, mude `id`, `number` e as imagens. O contador "0X / 0N" se ajusta sozinho.

---

## ALTERAR TECNOLOGIAS

**Arquivo:** `src/data/skills.js`

- Adicionar tecnologia: inclua o nome no array `items` do grupo. Ex.: `items: ['PostgreSQL', 'SQL', 'MongoDB', 'Redis']`
- Novo grupo: adicione um objeto em `skillGroups`:
  ```js
  { id: 'cloud', label: 'Cloud', layout: 'column', items: ['AWS'] },
  ```
  `layout: 'column'` consecutivos ficam lado a lado; `'list'` ocupa a linha inteira; `'hero'` é a palavra gigante.
- React e tecnologias de apoio: `supportSkills.text`.

Tecnologias do GestorNF (arquitetura): `src/data/gestornf.js` → `architecture`.
Tecnologias do Task Scheduler: `src/data/projects.js` → `microservicesProject.tech`.

---

## ALTERAR PROJETOS

**Arquivo:** `src/data/projects.js`

### Adicionar projeto
1. Coloque a imagem em `public/assets/projects/nome.png`.
2. No array `selectedWork`, copie o bloco de exemplo comentado, cole antes do `];` final e remova os `//`.
3. Preencha:
   ```js
   {
     id: 'api-pagamentos',
     variant: 'wide',              // 'split' | 'wide' | 'accent'
     name: ['API de', 'pagamentos'], // duas linhas do título
     category: 'Backend',
     description: 'Descrição curta.',
     problem: 'Problema que resolve.',
     tech: ['Java', 'Spring Boot', 'PostgreSQL'],
     github: 'https://github.com/beatxz/api-pagamentos',
     year: '2026',
     image: { src: '/assets/projects/api-pagamentos.png', alt: 'Tela da API', width: 1600, height: 1000 },
   },
   ```
   Alterne os `variant` para que os cards não fiquem iguais.

### Completar a Operadora de Cartão
No objeto `id: 'operadora-cartao'`, preencha `problem`, `tech`, `github`, `year` e `image`. Enquanto estiverem vazios, o site mostra "TODO: adicionar informação".

### Remover projeto
Apague o objeto inteiro (de `{` até `},`) em `selectedWork`.

### Remover o card "Próximo projeto"
`src/sections/SelectedWork.jsx`, procure por `Próximo projeto` e apague o `<div>` que o contém.

### Task Scheduler
`microservicesProject` no mesmo arquivo — troque `github` pelo link do repositório.

---

## ALTERAR LINKS

**Arquivo:** `src/data/profile.js` → objeto `links`

Procure por:
```js
export const links = {
  github: 'https://github.com/beatxz',
  linkedin: '',
  email: '',
  resume: '',
};
```
Substitua por:
```js
export const links = {
  github: 'https://github.com/beatxz',
  linkedin: 'https://www.linkedin.com/in/SEU-USUARIO',
  email: 'seu@email.com',
  resume: '/curriculo-beatriz-rodrigues.pdf',
};
```
Esses valores alimentam o Hero, o botão "ENTRAR EM CONTATO →" (abre o e-mail) e a lista de links do final.

---

## ALTERAR CORES

**Arquivo:** `tailwind.config.js` → `theme.extend.colors`

- `accent: '#F2541B'` → cor de destaque (CTAs, números, linhas, bloco Behind the Code).
- `accent-ink: '#C2410C'` → versão mais escura usada sobre o fundo claro da seção Stack.
- `ink` (fundo), `paper` (texto), `muted`/`dim` (textos secundários), `surface` (blocos alternados).

Também atualize:
- `src/styles/index.css`: `::selection`, `:focus-visible` e `.skip-link` usam `#F2541B`.
- `src/components/ScrollProgress.jsx` usa `bg-accent` (já segue o config).
- `index.html`: `theme-color`.
- `public/favicon.svg`: o quadrado laranja.

Mantenha contraste: o destaque precisa ser legível sobre `#0B0B0A`.

---

## ALTERAR CURRÍCULO

1. Coloque o PDF em `public/`, ex.: `public/curriculo-beatriz-rodrigues.pdf`.
2. Em `src/data/profile.js`, `links.resume: '/curriculo-beatriz-rodrigues.pdf'`.
3. Um item "Currículo" aparece automaticamente na lista de contatos (`src/sections/Contact.jsx`).

Formação e cursos: `src/data/education.js` (`education`, `courses`, `softSkills`).

---

## ALTERAR ANIMAÇÕES

**Arquivo principal:** `src/config/motion.js`

| Variável | Efeito |
|---|---|
| `reveal.duration` | duração dos textos que surgem |
| `reveal.distance` | quanto o texto sobe ao aparecer (px) |
| `reveal.sideDistance` | entrada lateral dos títulos |
| `PARALLAX_STRENGTH` | intensidade do parallax das imagens (0 desliga) |
| `TITLE_SHIFT` | quanto os títulos gigantes deslizam na horizontal |
| `MARQUEE_SHIFT` | velocidade da faixa de tecnologias |
| `EASE` | curva de aceleração global |

Por componente:
- `src/components/Reveal.jsx` → tipos `up`, `left`, `right`, `fade`, `line`, `vline`. Em qualquer seção, troque `type="left"` por `type="up"` etc. `delay={0.2}` atrasa.
- `src/components/ShiftTitle.jsx` → `direction={-1}` inverte o sentido; `amount={4}` deixa mais sutil.
- `src/sections/gestornf/Showcase.jsx` → `rootMargin: '-48% 0px -48% 0px'` controla quando a tela troca; `min-h-[78vh]` é a altura de cada passo (menor = troca mais rápida).

Desligar tudo: em `src/App.jsx`, troque `<MotionConfig reducedMotion="user">` por `<MotionConfig reducedMotion="always">`. Quem usa "reduzir movimento" no sistema já recebe a versão sem deslocamentos automaticamente.

---

## ALTERAR MENU

**Arquivo:** `src/data/navigation.js`. O `id` precisa ser igual ao `id` da seção. `cta: true` deixa o item com fundo laranja.

## ALTERAR SEO

**Arquivo:** `index.html` → `<title>`, `description`, tags `og:*`. Crie uma imagem 1200×630 em `public/assets/og-image.jpg` para compartilhamentos.
