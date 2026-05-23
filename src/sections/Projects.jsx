import { ArrowUpRight, CircuitBoard } from 'lucide-react';
import Reveal from '../components/Reveal';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="border-y border-black/10 bg-zinc-50 py-24">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Practical builds for workflows, inventory, clubs, and internal tools."
          description="A focused project set showing systems thinking, support work, and automation concepts."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Card = project.url ? 'a' : 'article';
            const cardProps = project.url ? { href: project.url, target: '_blank', rel: 'noreferrer' } : {};

            return (
              <Reveal key={project.title} delay={index * 0.04}>
                <Card
                  {...cardProps}
                  className="group relative flex h-full min-h-[280px] flex-col overflow-hidden rounded border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-black/25 hover:shadow-glow"
                >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/35 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded border border-black/10 bg-zinc-50 text-zinc-900">
                    <CircuitBoard size={21} />
                  </span>
                  <span className="rounded border border-black/10 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-black">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-zinc-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-zinc-700 transition group-hover:text-black">
                  {project.url ? 'Open Project' : 'View Details'} <ArrowUpRight size={16} />
                </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
