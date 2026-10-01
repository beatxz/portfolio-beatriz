import { profile, links } from '../data/profile.js';

const TODO = 'TODO';

export default function Contact() {
  const mail = links.email ? `mailto:${links.email}` : '#contato';
  const items = [
    { label: 'GitHub', href: links.github, text: links.github ? links.github.replace('https://', '') : TODO },
    { label: 'LinkedIn', href: links.linkedin, text: links.linkedin || TODO },
    { label: 'E-mail', href: links.email ? mail : '', text: links.email || TODO },
    ...(links.whatsapp ? [{ label: 'WhatsApp', href: `https://wa.me/${links.whatsapp}`, text: '(31) 99401-8100' }] : []),
    ...(links.resume ? [{ label: 'Currículo', href: links.resume, text: 'PDF' }] : []),
  ];

  return (
    <section id="contato" aria-labelledby="ct-title" className="px-gutter overflow-hidden pb-10 pt-[clamp(96px,12vw,190px)]">

      <div className="mt-[clamp(56px,7vw,112px)] flex flex-wrap items-end justify-between gap-10">
        {/* CTA principal: usa links.email (src/data/profile.js) */}
        <a
          href={mail}
          className="font-display-md inline-flex min-h-[64px] items-center gap-4 bg-accent px-8 text-[clamp(24px,2.4vw,36px)] font-black text-ink no-underline transition-[gap,background-color] duration-500 ease-editorial hover:gap-8 hover:bg-paper hover:text-ink"
        >
          Entrar em contato <span aria-hidden="true">→</span>
        </a>
        <div className="min-w-[260px]">
        <h2 id="ct-title" className="label mb-8 text-accent">Contato</h2>
        <ul className="flex flex-col gap-1">
          {items.map((it) => (
            <li key={it.label}>
              <a
                href={it.href || '#contato'}
                {...(/^https?:/.test(it.href || '') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex justify-between gap-6 border-b border-line py-3 text-[18px] text-paper no-underline transition-[padding,color] duration-300 ease-editorial hover:pl-3 hover:text-accent"
              >
                {it.label}
                <span className="font-mono text-[12px] text-muted">{it.text} ↗</span>
              </a>
            </li>
          ))}
        </ul>
        </div>
      </div>

      <footer className="mt-[clamp(80px,10vw,160px)] flex flex-wrap justify-between gap-3 border-t border-line pt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
        <span className="text-paper">{profile.name}</span>
        <span>Software Developer</span>
        <span>Contagem — MG</span>
        <span>{profile.year}</span>
      </footer>
    </section>
  );
}
