import Link from 'next/link';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import type { Package } from '@/lib/content';

type PackageCardProps = {
  pkg: Package;
  /**
   * teaser — home page variant: shows first 3 features, links to /services
   * full  — services page variant: shows all features, shows "let's talk" CTA
   */
  variant?: 'teaser' | 'full';
};

export default function PackageCard({
  pkg,
  variant = 'teaser',
}: PackageCardProps) {
  const { name, bestFor, features } = pkg;
  const visibleFeatures = variant === 'teaser' ? features.slice(0, 3) : features;

  return (
    <article className="rounded-xl bg-surface border border-border p-6 shadow-sm flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-text">{name}</h3>
        <Tag variant="label">Best for: {bestFor}</Tag>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2">
        {visibleFeatures.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-2">
        {variant === 'teaser' ? (
          <Link
            href="/services"
            className="rounded text-sm font-medium text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            See full details →
          </Link>
        ) : (
          <Button href="/contact" variant="secondary" className="w-full">
            This sounds right — let's talk
          </Button>
        )}
      </div>
    </article>
  );
}
