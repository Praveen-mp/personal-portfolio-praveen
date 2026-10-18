import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="font-mono text-sm text-accent-2 mb-2">{kicker}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-accent to-accent-2" />
    </Reveal>
  );
}
