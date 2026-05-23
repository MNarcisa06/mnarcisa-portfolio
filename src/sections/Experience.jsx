import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="border-y border-black/10 bg-zinc-50 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline across IT support, systems, and operations."
          description="Reverse chronological experience from current IT support work to earlier operational and service roles."
        />
        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-black via-black/20 to-transparent sm:block" />
          <div className="grid gap-5">
            {experiences.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={`${item.role}-${item.company}`} delay={index * 0.04}>
                  <article className="relative grid gap-4 rounded border border-black/10 bg-white p-5 shadow-glow transition hover:border-black/25 sm:ml-14 sm:p-6">
                    <div className="absolute -left-[54px] top-6 hidden h-10 w-10 items-center justify-center rounded border border-black/15 bg-white text-black sm:flex">
                      <Icon size={18} />
                    </div>
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <h3 className="font-display text-xl font-semibold text-black">{item.role}</h3>
                        <p className="mt-1 text-sm font-semibold text-zinc-800">{item.company}</p>
                      </div>
                      <span className="w-fit rounded border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                        {item.period}
                      </span>
                    </div>
                    <ul className="grid gap-2 text-sm leading-6 text-zinc-600">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
