import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import WorkProjectCard from '@/components/sections/WorkProjectCard';
import { projects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work — DKG',
  description:
    'A selection of projects built by DKG — client work and personal builds.',
};

export default function WorkPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 py-20">
        <SectionHeader
          heading="Work"
          subheading="A selection of projects I've built — client work and personal builds."
          centered={false}
        />
      </section>

      {/* ── Projects ──────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 pb-24">
        <div className="flex flex-col gap-12">
          {projects.map((project) => (
            <WorkProjectCard
              key={project.slug}
              project={project}
              featured={project.slug === 'fleardam'}
            />
          ))}
        </div>

        {/* Closing line */}
        <p className="mt-16 text-center text-sm text-text-muted">
          More projects coming soon.
        </p>
      </section>
    </>
  );
}
