// Link com seta que se desloca no hover.
// variant: 'solid' (fundo laranja) | 'outline' | 'underline'
const base =
  'group inline-flex items-center gap-[10px] font-mono text-[12px] uppercase tracking-[0.1em] no-underline transition-[gap,background-color,border-color,color] duration-300 ease-editorial hover:gap-[18px]';

const variants = {
  solid: 'min-h-[48px] bg-accent px-5 font-medium text-ink hover:bg-paper hover:text-ink',
  outline: 'min-h-[48px] border border-paper/30 px-[18px] text-paper hover:border-accent hover:text-paper',
  underline: 'border-b border-accent pb-[6px] text-paper hover:text-paper',
};

export default function ArrowLink({ href, children, variant = 'outline', arrow = '→', external = false, className = '', ...rest }) {
  const ext = external || /^https?:/.test(href || '');
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      <span aria-hidden="true">{arrow}</span>
      {ext && <span className="sr-only">(abre em nova aba)</span>}
    </a>
  );
}
