import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-card-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <p>
          © 2026 {profile.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <p className="font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
