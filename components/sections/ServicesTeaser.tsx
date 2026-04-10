import SectionHeader from '@/components/ui/SectionHeader';
import PackageCard from '@/components/sections/PackageCard';
import { packages } from '@/lib/content';

export default function ServicesTeaser() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-[1100px] px-6 py-24">
        <SectionHeader heading="How I can help" />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} variant="teaser" />
          ))}
        </div>
      </div>
    </section>
  );
}
