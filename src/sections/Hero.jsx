import Reveal from '../components/Reveal.jsx';
import ArrowLink from '../components/ArrowLink.jsx';
import Photo from '../components/Photo.jsx';
import { profile, links } from '../data/profile.js';

export default function Hero() {
  const { firstName, lastName, name, title, specialty, location, heroRole, heroTagline, heroStack, heroBlurb, year } = profile;

  return (
    <header id="top" className="px-gutter relative flex min-h-screen flex-col overflow-hidden pb-7 pt-[clamp(100px,12vh,136px)]">
      <Reveal type="fade" className="flex flex-wrap justify-between gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        <span>Portfólio — {year}</span>
        <span>{specialty}</span>
        <span>{location}</span>
      </Reveal>

      <h1 className="relative z-[3] mt-[clamp(12px,2.5vh,32px)]">
        <Reveal as="span" type="left" className="font-display-x block text-[clamp(84px,12.5vw,360px)]">
          {firstName}
        </Reveal>
        <span className="sr-only">{name.replace(firstName, '')} — {title}</span>
      </h1>

      <div className="relative z-[1] flex flex-1 flex-wrap items-start justify-between gap-[clamp(28px,3vw,48px)]">
        <div className="flex max-w-[380px] flex-[1_1_260px] flex-col gap-7 pt-[clamp(20px,4vw,72px)]">
          <Reveal as="p" delay={0.2} className="text-pretty text-[clamp(20px,1.7vw,26px)] leading-[1.3]">
            {heroTagline}
          </Reveal>
          <Reveal as="p" delay={0.3} className="flex flex-wrap gap-x-[10px] gap-y-[6px] font-mono text-[12px] uppercase tracking-[0.08em] text-muted">
            {heroStack.map((t, i) => (
              <span key={t} className="flex gap-[10px]">
                {i > 0 && <span className="text-accent" aria-hidden="true">/</span>}
                {t}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.4} className="flex flex-wrap gap-[10px]">
            <ArrowLink href="#gestornf" variant="solid">Ver projetos</ArrowLink>
            <ArrowLink href={links.github} arrow="↗">GitHub</ArrowLink>
            {/* LinkedIn: configure em src/data/profile.js -> links.linkedin */}
            <ArrowLink href={links.linkedin || '#contato'} arrow="↗">LinkedIn</ArrowLink>
          </Reveal>
        </div>

        {/* SUBSTITUIR PELA FOTO DA BEATRIZ -> ver src/components/Photo.jsx e src/data/profile.js */}
        <Photo className="min-w-[260px] flex-[0_1_440px] desk:-mb-[clamp(40px,7vw,130px)] desk:-mt-[clamp(40px,8vw,150px)]" />

        <div className="flex flex-[0.4_1_200px] flex-col items-end gap-5 text-right desk:pt-4">
          <Reveal as="p" type="right" delay={0.15} className="font-display-x text-[clamp(40px,4.4vw,76px)] font-extrabold leading-[0.86] text-dim">
            {heroRole[0]}
            <br />
            {heroRole[1]}
          </Reveal>
          <Reveal as="p" delay={0.35} className="max-w-[240px] text-[15px] leading-[1.55] text-muted">
            {heroBlurb}
          </Reveal>
        </div>
      </div>

      <Reveal
        aria-hidden="true"
        type="right"
        delay={0.1}
        className="font-display-x relative z-[3] text-right text-[clamp(84px,12.5vw,360px)] desk:-mt-[clamp(10px,2vw,30px)]"
      >
        {lastName}
      </Reveal>

      <a href="#sobre" className="mt-7 inline-flex items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.14em] text-muted no-underline hover:text-paper">
        Scroll to explore <span className="text-accent">↓</span>
      </a>
    </header>
  );
}
