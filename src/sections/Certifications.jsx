import { Award } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { certifications } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="border-y border-black/10 bg-zinc-50 py-24">
      <div className="section-shell">
        <SectionHeader eyebrow="Certifications" title="Training across IT, networking, analytics, and production." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <Reveal key={certification} delay={index * 0.03}>
              <div className="flex h-full gap-3 rounded border border-black/10 bg-white p-4 transition hover:border-black/25 hover:bg-zinc-50">
                <Award size={18} className="mt-0.5 shrink-0 text-zinc-900" />
                <p className="text-sm leading-6 text-zinc-700">{certification}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
