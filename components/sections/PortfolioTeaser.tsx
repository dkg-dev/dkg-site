import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/lib/content';

export default function PortfolioTeaser() {
  // Home page shows both projects
  const featured = projects.slice(0, 2);

  return (
    <section className="mx-auto max-w-[1100px] px-6 py-24">
      <SectionHeader heading="Recent work" />

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/work"
          className="rounded text-sm font-medium text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          View all work →
        </Link>
      </div>
    </section>
  );
}
