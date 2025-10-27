import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'unicode.aarthasarokar',
    desc:
      'A Unicode converter and typing tool for Aarthasarokar, developed in collaboration with SAAS Technology Nepal. Built with modern web technologies for smooth Nepali text input and conversion.',
    role: 'Frontend & functionality integration',
    repo: 'unicode.aarthasarokar',
    tags: ['Unicode', 'Nepali', 'Frontend', 'Integration'],
  },
  {
    title: 'pre-made-code-kit-for-ecommerce-website',
    desc:
      'A modular, ready-to-use codebase designed to accelerate ecommerce website development. Features reusable UI components and optimized backend structure.',
    role: 'System design & reusable components',
    repo: 'pre-made-code-kit-for-ecommerce-website',
    tags: ['Ecommerce', 'UI Kit', 'Backend'],
  },
  {
    title: 'ideavim',
    desc:
      'A productivity and developer-focused project aimed at enhancing coding efficiency with Vim-style controls and automation.',
    role: 'Developer experience & automation',
    repo: 'ideavim',
    tags: ['Productivity', 'Vim', 'DevTools'],
  },
  {
    title: 'global-sports-live',
    desc:
      'A real-time sports update web app providing live scores, news, and analytics across multiple sports with integrated live APIs.',
    role: 'Real-time APIs & UI',
    repo: 'global-sports-live',
    tags: ['Real-time', 'APIs', 'Sports'],
  },
];

function ProjectCard({ title, desc, role, tags, repo }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur transition hover:border-white/20">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <a
            href={`https://github.com/roycrisses/${repo}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white/80 transition hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={`https://github.com/roycrisses/${repo}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white/80 transition hover:text-white"
            aria-label="Open"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="mb-3 text-sm text-slate-300">{desc}</p>
      {role && (
        <p className="mb-4 text-xs text-slate-400">
          <span className="font-medium text-slate-200">Role:</span> {role}
        </p>
      )}
      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 text-white">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <p className="text-slate-300">A selection of things I’ve built and shipped.</p>
        </div>
        <a
          href="https://github.com/roycrisses"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:border-white/20 hover:bg-white/10"
        >
          <Github className="h-4 w-4" /> Visit GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
