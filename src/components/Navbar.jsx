import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navItems } from '../data/navigation.js';
import { profile } from '../data/profile.js';
import useActiveSection from '../hooks/useActiveSection.js';
import useMediaQuery from '../hooks/useMediaQuery.js';
import { EASE } from '../config/motion.js';

export default function Navbar() {
  const active = useActiveSection(navItems.map((i) => i.id));
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  return (
    <>
      <nav
        aria-label="Navegação principal"
        className="px-gutter fixed inset-x-0 top-0 z-[60] flex items-center justify-between gap-6 border-b border-paper/[0.08] bg-ink/90 py-4"
      >
        <a href="#top" aria-label={`${profile.name} — início`} className="flex items-center gap-3 text-paper no-underline">
          <span className="font-display-x text-[26px] leading-none tracking-[0.02em]">BRM</span>
          <span className="h-[6px] w-[6px] bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">Beatriz R. Martins</span>
        </a>

        {isDesktop ? (
          <ul className="flex items-center gap-[clamp(18px,2.4vw,36px)]">
            {navItems.map((item) =>
              item.cta ? (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="label bg-accent px-[14px] py-[9px] text-ink no-underline transition-colors duration-300 hover:bg-paper hover:text-ink">
                    {item.label}
                  </a>
                </li>
              ) : (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`label relative py-[6px] no-underline transition-colors duration-300 hover:text-paper ${active === item.id ? 'text-paper' : 'text-muted'}`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-500 ease-editorial ${active === item.id ? 'scale-x-100' : 'scale-x-0'}`}
                    />
                  </a>
                </li>
              )
            )}
          </ul>
        ) : (
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className="flex h-12 w-12 flex-col items-end justify-center gap-[7px] border border-paper/20 px-3"
          >
            <span className={`block h-[2px] bg-paper transition-all duration-300 ${open ? 'w-[22px] translate-y-[4.5px] rotate-45' : 'w-[22px]'}`} />
            <span className={`block h-[2px] bg-accent transition-all duration-300 ${open ? 'w-[22px] -translate-y-[4.5px] -rotate-45' : 'w-[14px]'}`} />
          </button>
        )}
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="px-gutter fixed inset-0 z-[55] flex flex-col justify-between bg-ink pb-8 pt-[104px]"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.li key={item.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: EASE }}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`font-display-x flex items-baseline gap-4 text-[64px] leading-none no-underline ${item.cta || active === item.id ? 'text-accent' : 'text-paper'}`}
                  >
                    <span className="font-mono text-[12px] font-medium text-accent">{String(i + 1).padStart(2, '0')}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="label flex justify-between text-[11px] text-muted">
              <span>Contagem — MG</span>
              <span>{profile.year}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
