import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { aboutCopy, howIWork, techStack } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About — DKG',
  description:
    'DKG is a web development studio based in Rotterdam. We build professional websites for small businesses.',
};

// ── Inline SVG icons for "How I work" ─────────────────────────────────────────
// viewBox 0 0 24 24, stroke="currentColor", fill="none", strokeWidth="2"

function IconUsers() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
    </svg>
  );
}

function IconMessageSquare() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12-8.58 3.91a2 2 0 0 1-1.66 0L3 12" />
      <path d="m22 17-8.58 3.91a2 2 0 0 1-1.66 0L3 17" />
    </svg>
  );
}

const howIWorkIcons = [IconUsers, IconMessageSquare, IconLayers];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 pt-20 pb-14">
        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
          About DKG
        </h1>
      </section>

      {/* ── Intro block ───────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 pb-24">
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/logomark-wordmark.svg"
            alt="DKG"
            width={300}
            height={122}
            className="w-full max-w-[300px] h-auto"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-5 max-w-2xl">
          {aboutCopy.map((paragraph, i) => (
            <p
              key={i}
              className="text-base text-text-muted leading-relaxed sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ── How I work ────────────────────────────── */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-[1100px] px-6 py-24">
          <h2 className="text-2xl font-bold tracking-tight text-text mb-10">
            How we work
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {howIWork.map(({ title, description }, i) => {
              const Icon = howIWorkIcons[i];
              return (
                <div key={title} className="flex flex-col gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon />
                  </div>
                  <div>
                    <p className="font-semibold text-text">{title}</p>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tech stack ────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 py-24">
        <h2 className="text-2xl font-bold tracking-tight text-text mb-10">
          Tech stack
        </h2>
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-8">
          {techStack.map(({ name, abbr }) => (
            <div key={name} className="flex flex-col items-center gap-3">
              {/* Monogram tile */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-surface">
                <span className="font-mono text-sm font-bold text-text">
                  {abbr}
                </span>
              </div>
              {/* Label */}
              <span className="font-mono text-xs text-text-muted text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 pb-24">
        <div className="rounded-xl border border-border bg-surface px-8 py-10 text-center">
          <Link
            href="/contact"
            className="rounded text-lg font-medium text-accent hover:text-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Want to work with us? Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
