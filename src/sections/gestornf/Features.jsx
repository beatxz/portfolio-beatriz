import Reveal from '../../components/Reveal.jsx';
import { features } from '../../data/gestornf.js';

export default function Features() {
  return (
    <div className="px-gutter py-[clamp(80px,10vw,160px)]">
      <div className="mb-[clamp(40px,5vw,72px)] flex flex-wrap items-end justify-between gap-6">
        <Reveal as="h3" type="left" className="font-display-x text-[clamp(64px,10vw,180px)]">
          Funcio
          <br />
          nalidades
        </Reveal>
        <p aria-hidden="true" className="font-display-x text-[clamp(64px,10vw,180px)] text-accent">
          {String(features.length).padStart(2, '0')}
        </p>
      </div>
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] border-t border-paper/20">
        {features.map((f, i) => (
          <Reveal
            as="li"
            key={f.name}
            delay={(i % 3) * 0.06}
            className={`font-display-md border-b border-paper/[0.12] py-[22px] pr-5 text-[24px] font-bold leading-[1.15] ${f.highlight ? 'text-accent' : ''}`}
          >
            {f.name}
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
