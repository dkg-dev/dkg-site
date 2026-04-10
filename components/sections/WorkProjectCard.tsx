import Image from 'next/image';
import Tag from '@/components/ui/Tag';
import type { Project } from '@/lib/content';

type WorkProjectCardProps = {
  project: Project;
  /**
   * featured — client project treatment: larger heading, surface background,
   *            teal label tag. Default false.
   */
  featured?: boolean;
};

export default function WorkProjectCard({
  project,
  featured = false,
}: WorkProjectCardProps) {
  const { label, name, description, built, tags, imagePath, liveUrl } = project;

  return (
    <article
      className={`rounded-xl overflow-hidden border border-border shadow-sm ${
        featured ? 'bg-surface' : 'bg-white'
      }`}
    >
      {/* ── Screenshot ────────────────────────── */}
      <div className="relative aspect-[16/9] w-full bg-border">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={`Screenshot of ${name}`}
            fill
            className="object-cover"
            sizes="(min-width: 1100px) 1100px, 100vw"
            priority={featured}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-text-muted">Screenshot coming soon</span>
          </div>
        )}
      </div>

      {/* ── Content ───────────────────────────── */}
      <div className="p-8 md:p-10">
        {/* Label + live link */}
        <div className="flex items-center justify-between gap-4">
          <Tag variant={featured ? 'label' : 'tech'}>{label}</Tag>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-sm font-medium text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Visit live site ↗
            </a>
          )}
        </div>

        {/* Name */}
        <h2
          className={`mt-4 font-bold tracking-tight text-text ${
            featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
          }`}
        >
          {name}
        </h2>

        {/* Description */}
        <p className="mt-4 text-base text-text-muted leading-relaxed max-w-2xl">
          {description}
        </p>

        {/* Built list + tech tags — side by side on md+ */}
        <div className="mt-8 grid gap-8 md:grid-cols-[3fr_2fr]">
          {/* What was built */}
          {built.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
                What was built
              </h3>
              <ul className="flex flex-col gap-2">
                {built.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-text"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-3">
              Tech used
            </h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
