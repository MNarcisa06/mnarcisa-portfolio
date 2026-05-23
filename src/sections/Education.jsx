import { GraduationCap } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Education" title="Academic foundation for technical and service work." />
        <div className="grid gap-4 md:grid-cols-3">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.06}>
              <article className="glass h-full rounded p-5 transition hover:border-black/25">
                <GraduationCap className="mb-5 text-zinc-900" size={24} />
                <h3 className="font-display text-lg font-semibold text-black">{item.school}</h3>
                <p className="mt-4 text-sm font-semibold text-zinc-800">{item.course}</p>
                <p className="mt-2 text-sm text-zinc-500">{item.detail}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-600">{item.year}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
