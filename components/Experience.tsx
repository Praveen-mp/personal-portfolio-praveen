"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 py-24 md:py-32"
    >
      <SectionHeading kicker="03 · Experience" title="Where I've shipped" />

      <div className="relative border-l border-card-border ml-2 md:ml-4">
        {experience.map((job, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={`${job.company}-${job.role}`} delay={i * 0.06}>
              <div className="relative pl-8 md:pl-10 pb-12 last:pb-0">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_4px] shadow-accent/15" />

                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full text-left group"
                >
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
                    <div>
                      <h3 className="text-lg font-medium text-foreground group-hover:text-accent-2 transition-colors">
                        {job.role}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="font-mono text-xs text-muted">
                        {job.period}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-muted transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-sm text-muted leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
