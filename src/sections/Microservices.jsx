import Reveal from '../components/Reveal.jsx';
import ArrowLink from '../components/ArrowLink.jsx';
import useMediaQuery from '../hooks/useMediaQuery.js';
import { microservicesProject as p } from '../data/projects.js';

export default function Microservices() {
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const diagramLabel = `Diagrama: o cliente se comunica com o ${p.gateway.name}, que se comunica via OpenFeign com ${p.services.map((s) => s.name.join(' ')).join(', ')}`;

  return (
    <article aria-labelledby="ms-title" className="px-gutter py-section overflow-hidden">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <h2 id="ms-title" className="flex items-start gap-[clamp(12px,2vw,32px)]">
          <span className="pt-[1.2vw] font-mono text-[clamp(14px,1.4vw,20px)] font-medium text-accent">{p.number}</span>
          <Reveal as="span" type="left" className="font-display-x text-[clamp(96px,17vw,300px)] leading-[0.78]">
            {p.title[0]}
            <br />
            {p.title[1]}
          </Reveal>
        </h2>
        <div className="flex flex-[0_1_380px] flex-col gap-4 pb-[1vw]">
          <p className="label text-muted">{p.kicker}</p>
          <Reveal as="p" className="text-pretty text-[19px] leading-[1.5]">{p.description}</Reveal>
          <ArrowLink href={p.github} variant="underline" arrow="↗" className="self-start">Ver no GitHub</ArrowLink>
        </div>
      </div>

      {/* Diagrama da arquitetura */}
      <div role="img" aria-label={diagramLabel} className="mt-[clamp(64px,8vw,128px)] flex flex-col items-center">
        <Reveal className="font-display-x border border-paper/30 px-8 py-4 text-[36px] leading-none">Client</Reveal>
        <Reveal type="vline" className="h-14 w-[2px] bg-paper/40" />
        <Reveal className="flex w-[min(100%,560px)] flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-2 border-accent px-7 py-6">
          <span className="font-display-x text-[clamp(48px,5vw,72px)] leading-[0.9]">{p.gateway.name}</span>
          <span className="flex-[1_1_220px] text-[15px] leading-[1.5] text-body">{p.gateway.text}</span>
        </Reveal>
        <Reveal type="vline" className="h-12 w-[2px] bg-accent" />
        {isDesktop && <Reveal type="line" className="h-[2px] w-[67%] bg-accent" style={{ originX: 0.5 }} />}
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {p.services.map((s, i) => (
            <div key={s.name.join()} className="flex flex-col items-center">
              <span className="h-10 w-[2px] bg-accent" />
              <span className="pb-[10px] pt-[6px] font-mono text-[10px] uppercase tracking-[0.12em] text-accent">{p.connectorLabel}</span>
              <Reveal delay={i * 0.1} className="flex min-h-[180px] w-full flex-col gap-3 border-t-2 border-paper bg-surface p-6">
                <span className="font-display-x text-[40px] leading-[0.9]">
                  {s.name[0]}
                  <br />
                  {s.name[1]}
                </span>
                <span className="text-[15px] leading-[1.5] text-body">{s.text}</span>
                <span className="mt-auto font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{s.tags}</span>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[clamp(64px,8vw,120px)] flex flex-wrap gap-x-[clamp(40px,6vw,120px)] gap-y-12">
        <div className="flex-[1_1_360px]">
          <p className="label mb-4 text-accent">Destaques</p>
          <ul className="border-t border-line">
            {p.highlights.map((h) => (
              <li key={h} className="border-b border-paper/[0.12] py-[14px] text-[17px]">{h}</li>
            ))}
          </ul>
        </div>
        <div className="flex-[1_1_360px]">
          <p className="label mb-4 text-accent">Tecnologias</p>
          <Reveal as="p" className="font-display-md text-pretty text-[clamp(26px,2.6vw,40px)] leading-[1.15]">
            {p.tech.map((t, i) => (
              <span key={t}>
                {i > 0 && <span className="text-accent"> / </span>}
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  );
}
