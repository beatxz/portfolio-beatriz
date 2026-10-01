import Reveal from '../../components/Reveal.jsx';
import ShiftTitle from '../../components/ShiftTitle.jsx';
import { challenges } from '../../data/gestornf.js';

export default function BehindTheCode() {
  return (
    <div className="px-gutter bg-accent py-[clamp(80px,10vw,160px)] text-ink">
      <ShiftTitle as="h3" direction={-1} className="font-display-x text-[clamp(80px,16vw,280px)] leading-[0.78]">
        Behind the code
      </ShiftTitle>
      <p className="mt-6 max-w-[520px] text-[18px] leading-[1.55]">{challenges.intro}</p>
      <div className="mt-[clamp(48px,6vw,96px)] grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] border-t-2 border-ink">
        {challenges.items.map((c, i) => (
          <Reveal as="article" key={c.title} delay={(i % 3) * 0.08} className="flex flex-col gap-[14px] border-b border-ink/35 pb-10 pr-7 pt-7">
            <span className="font-mono text-[12px] font-medium">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="font-display-x text-[44px] leading-[0.9]">{c.title}</h4>
            <p className="text-[16px] leading-[1.55]">{c.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
