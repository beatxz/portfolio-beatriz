import { useRef, Fragment } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MARQUEE_SHIFT } from '../config/motion.js';

const words = ['Java', 'Spring Boot', 'APIs REST', 'Spring Security', 'JWT', 'PostgreSQL', 'MongoDB', 'Microsserviços', 'Docker'];

// Faixa de tecnologias que se desloca com o scroll (não é um loop infinito — só se move quando a pessoa rola).
export default function Marquee() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${MARQUEE_SHIFT}%`]);
  const list = [...words, ...words];

  return (
    <div ref={ref} aria-hidden="true" className="overflow-hidden border-y border-paper/10 py-[18px]">
      <motion.div style={{ x: reduce ? 0 : x }} className="font-display-md whitespace-nowrap text-[clamp(28px,3.2vw,48px)] leading-none text-[#3A3834]">
        {list.map((w, i) => (
          <Fragment key={i}>
            {w} <span className="text-accent">—</span>{' '}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
