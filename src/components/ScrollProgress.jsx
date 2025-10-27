import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1">
      <motion.div
        className="h-full origin-left bg-emerald-400"
        style={{ scaleX }}
      />
    </div>
  );
}
