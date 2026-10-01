import Reveal from '../components/Reveal.jsx';
import ShiftTitle from '../components/ShiftTitle.jsx';
import { profile } from '../data/profile.js';

export default function About() {
  const { lead, paragraphs, facts } = profile.about;

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="px-gutter py-section overflow-hidden">
      <p className="label mb-6 text-accent">Sobre — About me</p>
      <ShiftTitle id="sobre-title" direction={-1} className="font-display-x text-[clamp(88px,22vw,400px)] leading-[0.78]">
        Quem sou<span className="text-accent">.</span>
      </ShiftTitle>

      <div className="mt-[clamp(56px,7vw,120px)] flex flex-wrap gap-[clamp(48px,6vw,120px)]">
        <div className="flex max-w-[640px] flex-[1_1_380px] flex-col gap-6">
          <Reveal as="p" className="text-pretty text-[clamp(22px,2.1vw,32px)] leading-[1.3]">{lead}</Reveal>
          {paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={0.1 * (i + 1)} className="text-pretty text-[17px] leading-[1.65] text-[#B9B5AD]">
              {p}
            </Reveal>
          ))}
        </div>

        <dl className="flex flex-[1_1_340px] flex-col gap-10">
          {facts.map((f) => (
            <div key={f.label}>
              <Reveal type="line" className="h-px bg-paper/30" />
              <dt className="label mt-[14px] text-[11px] text-accent">{f.label}</dt>
              <Reveal as="dd" className="font-display-x mt-[10px] text-[clamp(52px,6vw,96px)] leading-[0.86]">
                {f.title}
                <br />
                <span className="text-dim">{f.sub}</span>
              </Reveal>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
