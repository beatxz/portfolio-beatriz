import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ShiftTitle from '../../components/ShiftTitle.jsx';
import useMediaQuery from '../../hooks/useMediaQuery.js';
import { showcase } from '../../data/gestornf.js';
import { EASE } from '../../config/motion.js';

// Tela exibida dentro da moldura sticky (desktop)
function Shot({ step }) {
  const [main, second] = step.images;
  if (step.layout === 'overlay' && second) {
    return (
      <>
        <img src={main.src} alt={main.alt} width={main.width} height={main.height} decoding="async" className="absolute left-0 top-0 h-auto w-[78%]" />
        <img src={second.src} alt={second.alt} width={second.width} height={second.height} decoding="async" className="absolute bottom-[4%] right-[3%] h-auto w-[52%] shadow-[0_30px_60px_rgba(0,0,0,0.35)]" />
      </>
    );
  }
  return (
    <img
      src={main.src}
      alt={main.alt}
      width={main.width}
      height={main.height}
      decoding="async"
      className={`absolute inset-0 h-full w-full ${main.fit === 'cover' ? 'object-cover' : 'object-contain'}`}
      style={{ objectPosition: main.position || '50% 50%', background: main.background }}
    />
  );
}

export default function Showcase() {
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (!isDesktop) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(Number(e.target.dataset.index))),
      { rootMargin: '-48% 0px -48% 0px' }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [isDesktop]);

  const current = showcase[active];

  return (
    <div className="px-gutter pb-[clamp(80px,10vw,160px)]">
      <div className="mb-[clamp(40px,5vw,80px)] flex flex-wrap items-end justify-between gap-6">
        <ShiftTitle as="h3" className="font-display-x text-[clamp(64px,10vw,180px)]">
          O produto<span className="text-accent">.</span>
        </ShiftTitle>
        <p className="label text-muted">Case study — {showcase.length} telas</p>
      </div>

      <div className="flex flex-col items-start gap-[clamp(32px,4vw,72px)] desk:flex-row">
        {isDesktop && (
          <div className="sticky top-[14vh] min-w-0 flex-[1.4_1_0%] self-start">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F3F4F6]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={current.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  <Shot step={current} />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-4 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
              <span>GestorNF — telas reais do sistema</span>
              <span aria-live="polite">
                <span className="text-[14px] text-accent">{current.number}</span> / {String(showcase.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        )}

        <ol className="flex w-full min-w-0 flex-col desk:w-auto desk:flex-[1_1_0%]">
          {showcase.map((step, i) => (
            <li
              key={step.id}
              ref={(el) => (refs.current[i] = el)}
              data-index={i}
              className={`flex flex-col justify-center gap-[18px] border-t border-line py-8 transition-opacity duration-500 ${isDesktop ? 'min-h-[78vh]' : ''} ${isDesktop && active !== i ? 'opacity-30' : 'opacity-100'}`}
            >
              <span className="font-display-x text-[clamp(72px,7vw,120px)] text-accent">{step.number}</span>
              <h4 className="font-display-x text-[clamp(40px,4vw,64px)] leading-[0.9]">{step.title}</h4>
              <p className="text-pretty max-w-[440px] text-[17px] leading-[1.65] text-body">{step.text}</p>
              {!isDesktop &&
                step.images.map((img) => (
                  <img key={img.src} src={img.src} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" className="mt-2 block h-auto w-full" />
                ))}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
