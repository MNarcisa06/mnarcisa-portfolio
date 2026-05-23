import { CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { focusAreas, owner } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Practical systems support with an operations mindset."
          description={owner.objective}
        />
        <Reveal className="glass rounded p-6 sm:p-8">
          <p className="max-w-3xl leading-8 text-zinc-700">
            I am an IT support and systems-focused professional with hands-on experience in workflow support,
            networking, inventory systems, technical troubleshooting, and operational processes. I enjoy building
            practical solutions that improve efficiency and simplify repetitive tasks.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded border border-black/10 bg-zinc-50 p-4">
                <CheckCircle2 size={18} className="shrink-0 text-zinc-900" />
                <span className="text-sm font-medium text-zinc-800">{area}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
