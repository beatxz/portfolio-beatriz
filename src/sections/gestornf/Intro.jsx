import Reveal from '../../components/Reveal.jsx';
import ParallaxImage from '../../components/ParallaxImage.jsx';
import { gestornf } from '../../data/gestornf.js';

export default function Intro() {
  const { number, kicker, badge, subtitle, statement, paragraphs, cover } = gestornf;

  return (
    <>
      <div className="px-gutter pb-[clamp(56px,6vw,96px)] pt-[clamp(96px,12vw,190px)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="label text-muted">{kicker}</p>
          <Reveal as="span" type="fade" className="inline-flex items-center gap-[10px] border border-accent px-[14px] py-2 font-mono text-[11px] uppercase tracking-[0.14em]">
            <span className="h-[7px] w-[7px] rounded-full bg-accent" />
            {badge}
          </Reveal>
        </div>
        <div className="mt-[clamp(32px,4vw,56px)] flex flex-wrap items-end gap-x-[clamp(32px,5vw,96px)] gap-y-6">
          <h2 id="gnf-title" className="flex items-start gap-[clamp(12px,2vw,32px)]">
            <span className="pt-[1.4vw] font-mono text-[clamp(14px,1.4vw,20px)] font-medium text-accent">{number}</span>
            <Reveal as="span" type="left" className="font-display-x text-[clamp(120px,27vw,500px)] leading-[0.76] tracking-[-0.015em]">
              Gestor
              <br />
              <span className="text-accent">NF</span>
            </Reveal>
          </h2>
          <Reveal as="p" delay={0.2} className="text-pretty mb-[1.2vw] max-w-[420px] flex-[1_1_280px] text-[clamp(22px,2vw,30px)] leading-[1.25]">
            {subtitle}
          </Reveal>
        </div>
      </div>

      {/* IMAGEM DE ABERTURA — public/assets/gestornf/login.png (configurada em src/data/gestornf.js -> gestornf.cover) */}
      <figure className="mx-gutter">
        <ParallaxImage
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          strength={5}
          className="bg-[#111827]"
          style={{ aspectRatio: `${cover.width} / ${cover.height}` }}
        />
        <figcaption className="mt-[14px] flex justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
          <span>{cover.caption[0]}</span>
          <span>{cover.caption[1]}</span>
        </figcaption>
      </figure>

      <div className="px-gutter flex flex-wrap gap-[clamp(40px,6vw,120px)] py-[clamp(80px,10vw,160px)]">
        <Reveal as="p" className="font-display-md text-balance flex-[1_1_360px] text-[clamp(36px,4.4vw,72px)] font-extrabold leading-[0.98]">
          {statement}
        </Reveal>
        <div className="flex max-w-[560px] flex-[1_1_360px] flex-col gap-[22px] pt-2">
          {paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={0.1 * (i + 1)} className="text-pretty text-[18px] leading-[1.65] text-body">
              {p}
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
