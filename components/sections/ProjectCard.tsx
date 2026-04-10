import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/ui/Tag';
import type { Project } from '@/lib/content';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { label, name, description, tags, imagePath, liveUrl } = project;

  return (
    <article className="rounded-xl bg-surface border border-border overflow-hidden shadow-sm flex flex-col">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] bg-border">
        {imagePath ? (
          <Image
            src={imagePath}
            alt={`Screenshot of ${name}`}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-text-muted">Screenshot coming soon</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-text">{name}</h3>
          <Tag variant="label">{label}</Tag>
        </div>

        <p className="text-sm text-text-muted leading-relaxed">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2 border-t border-border text-sm font-medium">
          <Link
            href="/work"
            className="rounded text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View project →
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded text-text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Live site ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
