import { motion } from 'framer-motion';
import { EASE, reveal } from '../config/motion.js';

const variants = {
  up: { hidden: { opacity: 0, y: reveal.distance }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: `-${reveal.sideDistance}` }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: reveal.sideDistance }, show: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  line: { hidden: { scaleX: 0 }, show: { scaleX: 1 } },
  vline: { hidden: { scaleY: 0 }, show: { scaleY: 1 } },
};

// <Reveal type="up|left|right|fade|line|vline" delay={0.1} as="p">...</Reveal>
export default function Reveal({ as = 'div', type = 'up', delay = 0, className = '', style, children, ...rest }) {
  const Comp = motion[as] || motion.div;
  const origin = type === 'line' ? { originX: 0 } : type === 'vline' ? { originY: 0 } : {};
  return (
    <Comp
      className={className}
      style={{ ...origin, ...style }}
      variants={variants[type]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: reveal.viewportMargin }}
      transition={{ duration: reveal.duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
