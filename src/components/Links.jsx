import React from 'react';
import { Github, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Links() {
  return (
    <section id="links" className="mx-auto max-w-6xl px-6 py-16 text-white">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8"
      >
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Let’s build something great</h2>
          <p className="text-slate-300">
            Open to collaborations, freelance projects, and exciting opportunities. Previously collaborated
            with SAAS Technology Nepal on the unicode.aarthasarokar project.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/roycrisses"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-emerald-400"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/20 hover:bg-white/10"
          >
            <Globe className="h-4 w-4" /> Explore Projects
          </a>
        </div>
      </motion.div>
      <p className="mt-8 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Crafted with care — modern, playful, and interactive.
      </p>
    </section>
  );
}
