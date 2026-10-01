import { Fragment } from 'react';
import Reveal from '../components/Reveal.jsx';
import { skillGroups, supportSkills } from '../data/skills.js';

const Label = ({ n, children }) => (
  <p className="label m-0">
    <span className="text-accent-ink">{String(n).padStart(2, '0')}</span>&nbsp;&nbsp;{children}
  </p>
);

const Slashed = ({ items }) =>
  items.map((it, i) => (
    <Fragment key={it}>
      {i > 0 && <span className="text-accent-ink"> / </span>}
      {it}
    </Fragment>
  ));

export default function Stack() {
  // agrupa colunas consecutivas numa mesma linha
  const rows = [];
  skillGroups.forEach((g, index) => {
    const item = { ...g, n: index + 1 };
    const last = rows[rows.length - 1];
    if (g.layout === 'column' && last?.type === 'columns') last.groups.push(item);
    else rows.push(g.layout === 'column' ? { type: 'columns', groups: [item] } : { type: 'single', group: item });
  });

  return (
    <section id="stack" aria-label="Tech Stack" className="px-gutter overflow-hidden bg-paper py-[clamp(96px,11vw,180px)] text-ink">
      <div className="mt-[clamp(56px,7vw,112px)] border-b border-ink">
        {rows.map((row, ri) =>
          row.type === 'columns' ? (
            <div key={ri} className="flex flex-wrap border-t border-ink">
              {row.groups.map((g, gi) => (
                <div key={g.id} className="flex flex-[1_1_280px] flex-col gap-4 py-7 pr-8">
                  <Label n={g.n}>{g.label}</Label>
                  <Reveal as="p" delay={gi * 0.08} className="font-display-md text-[clamp(26px,2.6vw,40px)]">
                    {g.items.map((it) => (
                      <span key={it} className="block">{it}</span>
                    ))}
                  </Reveal>
                </div>
              ))}
            </div>
          ) : (
            <div key={row.group.id} className="flex flex-wrap gap-x-8 gap-y-4 border-t border-ink py-7">
              <div className="flex flex-[0_0_220px] flex-col items-start gap-3">
                <Label n={row.group.n}>{row.group.label}</Label>
                {row.group.focus && <span className="bg-ink px-2 py-[5px] font-mono text-[10px] uppercase tracking-[0.12em] text-paper">Foco principal</span>}
              </div>
              {row.group.layout === 'hero' ? (
                <Reveal as="p" className="font-display-x flex-[1_1_320px] text-[clamp(96px,14vw,240px)] leading-[0.78]">
                  {row.group.items[0]}
                </Reveal>
              ) : (
                <Reveal
                  as="p"
                  className={`font-display-md text-pretty flex-[1_1_320px] ${row.group.small ? 'text-[clamp(24px,2.4vw,36px)] leading-[1.15] text-[#2A2825]' : 'text-[clamp(28px,3.4vw,52px)]'}`}
                >
                  <Slashed items={row.group.items} />
                </Reveal>
              )}
            </div>
          )
        )}
        <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-ink py-6">
          <p className="flex-[0_0_220px] font-mono text-[11px] uppercase tracking-[0.12em]">{supportSkills.label}</p>
          <p className="flex-[1_1_280px] text-[15px] leading-[1.55] text-[#4A4741]">{supportSkills.text}</p>
        </div>
      </div>
    </section>
  );
}
