import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { skillGroups } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="A balanced toolkit for support, automation, creative work, and operations."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <article className="glass h-full rounded p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded border border-black/10 bg-zinc-50 text-zinc-900">
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-black">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-black/10 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
