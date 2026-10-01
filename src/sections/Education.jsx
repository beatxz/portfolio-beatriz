import Reveal from '../components/Reveal.jsx';
import { education, courses, softSkills } from '../data/education.js';

export default function Education() {
  return (
    <section id="formacao" aria-labelledby="edu-title" className="px-gutter bg-surface py-[clamp(96px,11vw,170px)]">
      <p className="label text-accent">Education</p>
      <div className="mt-8 flex flex-wrap items-end justify-between gap-8">
        <Reveal as="h2" id="edu-title" type="left" className="font-display-x text-[clamp(88px,15vw,260px)]">
          {education.institution}
        </Reveal>
        <Reveal as="p" type="right" className="font-display-x text-[clamp(48px,6vw,104px)] leading-[0.86] text-dim">
          {education.period}
        </Reveal>
      </div>
      <Reveal type="line" className="mt-8 h-px bg-paper/30" />
      <div className="mt-5 flex flex-wrap justify-between gap-x-8 gap-y-3">
        <p className="text-[clamp(20px,1.8vw,26px)]">{education.course}</p>
        <p className="label self-center text-muted">{education.note}</p>
      </div>

      <div className="mt-[clamp(80px,9vw,140px)] flex flex-wrap gap-x-[clamp(40px,6vw,120px)] gap-y-14">
        <div className="flex-[1_1_420px]">
          <h3 className="label mb-5 font-medium text-muted">Continuous learning</h3>
          <ul className="border-t border-paper/[0.14]">
            {courses.map((c) => (
              <li key={c.name} className="flex justify-between gap-4 border-b border-paper/10 py-[14px] text-[16px]">
                <span>{c.name}</span>
                <span className="text-muted">{c.school}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-[1_1_300px]">
          <h3 className="label mb-5 font-medium text-muted">Soft skills</h3>
          <ul className="flex flex-wrap gap-2">
            {softSkills.map((s) => (
              <li key={s} className="border border-paper/20 px-[14px] py-2 text-[15px]">{s}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
