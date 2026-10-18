"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.3fr_1fr] gap-14 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-accent-2 mb-5 flex items-center gap-2"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px] shadow-emerald-400/60" />
            Open to new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.08]"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]} —
            <br />
            <span className="text-gradient">{profile.role}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base md:text-lg text-muted leading-relaxed"
          >
            I build production backend systems and AI-powered applications —
            from FastAPI microservices and Kubernetes infrastructure to LLM
            agent workflows with Azure OpenAI and AutoGen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail size={16} />
              Get in touch
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-5 py-2.5 text-sm font-medium text-foreground hover:border-accent/50 hover:bg-accent/5 transition-colors"
            >
              View projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-2 text-sm text-muted font-mono"
          >
            <span className="text-accent">$</span>
            <span>location --now</span>
            <span className="text-foreground">{profile.location}</span>
            <span className="cursor-blink text-accent">▍</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/40 to-accent-2/30 blur-2xl opacity-60" />
          <div className="relative h-64 w-64 sm:h-72 sm:w-72 rounded-[2rem] overflow-hidden glow border border-card-border">
            <Image
              src="/images/profile.webp"
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 256px, 288px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
