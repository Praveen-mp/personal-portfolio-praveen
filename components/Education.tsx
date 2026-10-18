import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { coursework, education } from "@/lib/data";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading kicker="05 · Education" title="Foundation" />

      <div className="grid sm:grid-cols-2 gap-5">
        <Reveal>
          <div className="h-full rounded-2xl border border-card-border bg-card p-7">
            <GraduationCap className="text-accent-2" size={22} />
            <h3 className="mt-4 text-lg font-medium">{education.degree}</h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <div className="mt-4 flex items-center justify-between text-sm font-mono text-muted">
              <span>{education.period}</span>
              <span className="text-foreground">{education.gpa}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="h-full rounded-2xl border border-card-border bg-card p-7">
            <BookOpen className="text-accent-2" size={22} />
            <h3 className="mt-4 text-lg font-medium">{coursework.title}</h3>
            <p className="mt-1 text-sm text-muted">{coursework.provider}</p>
            <p className="mt-4 text-sm text-muted leading-relaxed">
              {coursework.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
