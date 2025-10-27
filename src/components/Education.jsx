import React from 'react';
import { GraduationCap, School } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-16 text-white">
      <h2 className="mb-6 text-3xl font-semibold">Education</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="mb-2 flex items-center gap-2 text-emerald-300">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm">Bachelor in Information Technology (BIT)</span>
          </div>
          <h3 className="text-lg font-semibold">Far Western University</h3>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="mb-2 flex items-center gap-2 text-emerald-300">
            <School className="h-5 w-5" />
            <span className="text-sm">12th Grade</span>
          </div>
          <h3 className="text-lg font-semibold">Shree Kanchanjunga English Boarding School</h3>
        </div>
      </div>
    </section>
  );
}
