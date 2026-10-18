import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "@/lib/data";
import { ExternalLink, Sparkles } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading kicker="04 · Projects" title="Things I've built on my own time" />

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <div className="relative rounded-2xl border border-card-border bg-card p-7 md:p-9 overflow-hidden hover:border-accent/40 transition-colors">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  {project.featured && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent-2">
                      <Sparkles size={12} />
                      Featured
                    </span>
                  )}
                  <span className="text-xs font-mono text-muted">
                    Personal Project
                  </span>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-accent-2 font-mono">
                  {project.tagline}
                </p>

                <p className="mt-5 text-muted leading-relaxed max-w-3xl">
                  {project.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {project.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm text-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-card-border bg-background/60 px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent-2 transition-colors"
                  >
                    View repository
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
