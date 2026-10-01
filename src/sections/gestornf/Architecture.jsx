import { Fragment } from 'react';
import Reveal from '../../components/Reveal.jsx';
import { architecture } from '../../data/gestornf.js';

export default function Architecture() {
  const { layers, connectors, aside } = architecture;

  return (
    <div className="px-gutter bg-surface py-[clamp(80px,10vw,160px)]">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <Reveal as="h3" type="left" className="font-display-x text-[clamp(64px,10vw,180px)]">
          Arqui
          <br />
          tetura
        </Reveal>
        <p className="label text-muted">GestorNF — fluxo da requisição</p>
      </div>

      <div className="mt-[clamp(48px,6vw,96px)] flex flex-wrap gap-x-[clamp(40px,6vw,96px)] gap-y-12">
        <div role="list" aria-label="Camadas da aplicação" className="flex flex-[1_1_520px] flex-col">
          {layers.map((layer, i) => (
            <Fragment key={layer.id}>
              <Reveal
                role="listitem"
                className={`flex flex-wrap items-baseline gap-x-8 gap-y-2 py-7 ${layer.highlight ? 'border-y border-accent' : i === 0 ? 'border-t border-paper/20' : 'border-b border-paper/20'}`}
              >
                <span className={`label flex-[0_0_140px] ${layer.highlight ? 'text-accent' : 'text-muted'}`}>{layer.label}</span>
                <span className="font-display-x flex-[1_1_300px] text-[clamp(44px,5vw,84px)] leading-[0.9]">
                  {layer.main.map((m, mi) => (
                    <Fragment key={m}>
                      {mi > 0 && <span className="text-[#5A5751]"> · </span>}
                      {m}
                    </Fragment>
                  ))}
                  {layer.sub && (
                    <>
                      <br />
                      <span className="text-[0.6em] text-dim">{layer.sub}</span>
                    </>
                  )}
                </span>
              </Reveal>
              {connectors[i] && (
                <div aria-hidden="true" className="flex h-[88px] items-center gap-[18px] pl-[clamp(0px,11vw,172px)]">
                  <Reveal type="vline" className="h-full w-[2px] bg-accent" />
                  <span className="label text-accent">{connectors[i]}</span>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="flex flex-[0_1_300px] flex-col gap-8">
          {aside.map((a) => (
            <div key={a.label}>
              <p className="label mb-3 text-[11px] text-muted">{a.label}</p>
              <Reveal as="p" className="font-display-md text-[30px] leading-[1.1]">
                {a.items.map((it) => (
                  <span key={it} className="block">{it}</span>
                ))}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
