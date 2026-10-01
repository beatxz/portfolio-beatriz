import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { PARALLAX_STRENGTH, clipReveal } from '../config/motion.js';

// Imagem que se revela de baixo para cima e tem parallax sutil.
// O container define a proporção (aspect-ratio) para evitar layout shift.
export default function ParallaxImage({
  src, alt, width, height, className = '', imgClassName = '', position = '50% 50%',
  priority = false, strength = PARALLAX_STRENGTH, style,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={style}
      initial={reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: clipReveal.duration, ease: clipReveal.ease }}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchpriority={priority ? 'high' : 'auto'}
        decoding="async"
        style={{ y: reduce ? 0 : y, scale: 1.12, objectPosition: position }}
        className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
      />
    </motion.div>
  );
}
