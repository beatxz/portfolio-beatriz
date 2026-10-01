import Reveal from '../../components/Reveal.jsx';
import { role } from '../../data/gestornf.js';

export default function Role() {
  return (
    <div className="px-gutter pb-[clamp(80px,10vw,160px)]">
      <Reveal type="line" className="h-px bg-accent" />
      <div className="mt-10 flex flex-wrap gap-[clamp(40px,6vw,120px)]">
        <div className="flex max-w-[520px] flex-[1_1_340px] flex-col gap-6">
          <p className="label text-accent">Minha participação</p>
          <Reveal as="h3" className="font-display-x text-[clamp(56px,6.4vw,112px)] leading-[0.84]">
            {role.title[0]}
            <br />
            {role.title[1]}
          </Reveal>
          <Reveal as="p" delay={0.1} className="text-pretty text-[17px] leading-[1.65] text-body">{role.text}</Reveal>
          <Reveal as="p" delay={0.2} className="text-pretty border-t border-line pt-5 text-[15px] leading-[1.65] text-muted">
            {role.toolsNote}
          </Reveal>
        </div>

        <ol className="grid flex-[1_1_420px] grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-x-8">
          {role.responsibilities.map((r, i) => (
            <Reveal as="li" key={r} delay={(i % 4) * 0.05} className="flex items-baseline gap-4 border-b border-paper/[0.12] py-[14px] text-[17px]">
              <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</span>
              {r}
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}
