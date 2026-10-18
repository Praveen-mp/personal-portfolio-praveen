import Reveal from "./Reveal";
import { profile } from "@/lib/data";
import { Mail, Code2, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <Reveal>
        <div className="relative rounded-3xl border border-card-border bg-card p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

          <p className="relative font-mono text-sm text-accent-2 mb-3">
            06 · Contact
          </p>
          <h2 className="relative text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
            Let&apos;s build something reliable together
          </h2>
          <p className="relative mt-5 text-muted max-w-xl mx-auto leading-relaxed">
            Open to backend, AI/LLM engineering, and platform roles. The
            fastest way to reach me is email — I usually reply within a day.
          </p>

          <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-6 py-3 text-sm font-medium hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>

          <div className="relative mt-8 flex items-center justify-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-foreground transition-colors"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
