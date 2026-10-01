import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { TITLE_SHIFT } from '../config/motion.js';

// Título gigante que desliza horizontalmente conforme o scroll.
// direction: 1 = da direita para a esquerda, -1 = da esquerda para a direita
export default function ShiftTitle({ as = 'h2', id, direction = 1, amount = TITLE_SHIFT, className = '', children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [`${amount * direction}%`, `${-amount * direction}%`]);
  const Comp = motion[as] || motion.h2;

  return (
    <div ref={ref} className="overflow-hidden">
      <Comp id={id} style={{ x: reduce ? 0 : x }} className={`whitespace-nowrap will-change-transform ${className}`}>
        {children}
      </Comp>
    </div>
  );
}
