import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading kicker="02 · Skills" title="Tools I build production systems with" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-card-border bg-card p-6 hover:border-accent/40 transition-colors">
              <h3 className="font-mono text-sm text-accent-2 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-card-border bg-background/60 px-3 py-1 text-xs text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
