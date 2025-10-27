import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Links from './components/Links';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-white">
          <a href="#" className="text-sm font-semibold tracking-wide text-emerald-300">
            roycrisses
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#links" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Projects />
        <Education />
        <Links />
      </main>
    </div>
  );
}
