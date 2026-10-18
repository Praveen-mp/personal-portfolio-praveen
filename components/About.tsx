import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { highlights, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading kicker="01 · About" title="Backend fundamentals, AI-native builds" />

      <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
        <Reveal delay={0.05}>
          <p className="text-lg text-muted leading-relaxed">
            {profile.summary}
          </p>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            {profile.summary2}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-card-border bg-card p-5"
              >
                <div className="text-2xl md:text-3xl font-semibold text-gradient">
                  {h.value}
                </div>
                <div className="mt-2 text-sm text-muted leading-snug">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
