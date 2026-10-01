import Reveal from '../components/Reveal.jsx';
import ParallaxImage from '../components/ParallaxImage.jsx';
import { selectedWork } from '../data/projects.js';

const TODO = 'TODO: adicionar informação';

function Preview({ image, className = '' }) {
  if (!image) return null;
  return (
    <ParallaxImage
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={`min-h-[320px] transition-transform duration-700 ease-editorial group-hover:scale-[1.02] ${className}`}
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
    />
  );
}

function Meta({ project, dark = false }) {
  const tone = dark ? 'text-ink/70' : 'text-muted';
  const label = dark ? 'text-ink' : 'text-accent';
  return (
    <dl className={`grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5 border-t pt-5 ${dark ? 'border-ink/30' : 'border-line'}`}>
      <div>
        <dt className={`font-mono text-[10px] uppercase tracking-[0.12em] ${label}`}>Problema</dt>
        <dd className={`mt-[6px] text-[15px] ${project.problem ? (dark ? 'text-ink' : 'text-body') : tone}`}>{project.problem || TODO}</dd>
      </div>
      <div>
        <dt className={`font-mono text-[10px] uppercase tracking-[0.12em] ${label}`}>Tecnologias</dt>
        <dd className={`mt-[6px] text-[15px] ${project.tech?.length ? (dark ? 'text-ink' : 'text-body') : tone}`}>{project.tech?.length ? (Array.isArray(project.tech) ? project.tech.join(' · ') : project.tech) : TODO}</dd>
      </div>
    </dl>
  );
}

function ProjectCard({ project, index }) {
  const href = project.github || '#projetos';
  const ext = Boolean(project.github);
  const common = {
    href,
    ...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    'aria-label': `${project.name.join(' ')} — ${ext ? 'ver no GitHub' : 'link do GitHub pendente'}`,
  };
  const header = (dark) => (
    <div className={`flex justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.12em] ${dark ? 'text-ink' : 'text-muted'}`}>
      <span>{String(index + 1).padStart(2, '0')} — {project.category}</span>
      {project.year && <span>{project.year}</span>}
    </div>
  );
  const title = (
    <h3 className="font-display-x text-[clamp(56px,7vw,120px)] leading-[0.84]">
      {project.name[0]}
      <br />
      {project.name[1]}
    </h3>
  );
  const cta = (
    <span className="inline-flex items-center gap-[10px] font-mono text-[12px] uppercase tracking-[0.1em] transition-[gap] duration-300 ease-editorial group-hover:gap-[20px]">
      GitHub <span aria-hidden="true" className="text-accent group-hover:text-current">→</span>
    </span>
  );

  if (project.variant === 'accent') {
    return (
      <a {...common} className="group flex flex-col gap-7 bg-accent p-[clamp(24px,3vw,48px)] text-ink no-underline hover:text-ink">
        {header(true)}
        {title}
        <p className="max-w-[640px] text-[18px] leading-[1.55]">{project.description}</p>
        <Meta project={project} dark />
        {cta}
      </a>
    );
  }

  if (project.variant === 'wide') {
    return (
      <a {...common} className="group flex flex-col border border-line text-paper no-underline transition-colors duration-500 hover:border-accent hover:text-paper">
        <Preview image={project.image} />
        <div className="flex flex-wrap gap-x-12 gap-y-6 p-[clamp(24px,3vw,48px)]">
          <div className="flex flex-[1_1_360px] flex-col gap-6">
            {header(false)}
            {title}
          </div>
          <div className="flex flex-[1_1_320px] flex-col justify-end gap-6">
            <p className="text-[18px] leading-[1.55] text-body">{project.description}</p>
            <Meta project={project} />
            {cta}
          </div>
        </div>
      </a>
    );
  }

  // 'split' (padrão)
  return (
    <a {...common} className="group flex flex-wrap border border-line text-paper no-underline transition-colors duration-500 hover:border-accent hover:text-paper">
      <div className="flex flex-[1_1_420px] flex-col gap-7 p-[clamp(24px,3vw,48px)]">
        {header(false)}
        {title}
        <p className="text-[18px] leading-[1.55] text-body">{project.description}</p>
        <Meta project={project} />
        {cta}
      </div>
      <Preview image={project.image} className="flex-[1_1_360px]" />
    </a>
  );
}

export default function SelectedWork() {
  return (
    <div className="px-gutter pb-[clamp(96px,12vw,190px)]">
      <Reveal type="line" className="h-px bg-paper/30" />
      <h2 className="mt-[clamp(56px,7vw,112px)] flex items-start gap-[clamp(12px,2vw,32px)]">
        <span className="pt-[1.2vw] font-mono text-[clamp(14px,1.4vw,20px)] font-medium text-accent">03.</span>
        <Reveal as="span" type="left" className="font-display-x text-[clamp(96px,17vw,300px)] leading-[0.78]">
          Selected
          <br />
          Work
        </Reveal>
      </h2>

      <div className="mt-[clamp(56px,7vw,112px)] flex flex-col gap-6">
        {selectedWork.map((project, i) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
