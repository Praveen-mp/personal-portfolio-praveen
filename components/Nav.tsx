"use client";

import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur border-b border-card-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          praveen<span className="text-gradient">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-foreground transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-foreground transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="text-muted hover:text-foreground transition-colors"
          >
            <Code2 size={18} />
          </a>
          <a
            href="#contact"
            className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-foreground hover:bg-accent/20 transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-card-border bg-background/95 backdrop-blur">
          <ul className="flex flex-col px-6 py-4 gap-4 text-sm text-muted">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
