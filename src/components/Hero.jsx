import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Code } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 400], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.85]);

  return (
    <section className="relative w-full min-h-[78vh] overflow-hidden bg-slate-950 text-white">
      {/* Full-width Spline cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient veil to keep text legible without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />

      {/* Content with subtle parallax */}
      <motion.div style={{ y: translateY, opacity }} className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 md:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Rocket className="h-4 w-4 text-emerald-400" />
          <span className="text-xs uppercase tracking-widest text-emerald-300/90">Portfolio</span>
        </div>

        <h1 className="text-center text-4xl font-semibold leading-tight md:text-6xl">
          Passionate Developer crafting functional, user‑friendly, modern products
        </h1>
        <p className="max-w-2xl text-center text-slate-300">
          I enjoy turning ideas into live projects — from concept and design to code and deployment.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-emerald-400"
          >
            <Code className="h-4 w-4 transition-transform group-hover:rotate-6" />
            View Projects
          </a>
          <a
            href="#links"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
}
