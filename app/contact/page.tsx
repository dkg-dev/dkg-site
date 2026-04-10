import type { Metadata } from 'next';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Get in touch — DKG',
  description:
    "Tell me about your project. I'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-24">
      {/* ── Page header ─────────────────────────── */}
      <div className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
          Get in touch
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-xl leading-relaxed">
          Tell me a bit about your project and I'll get back to you within one
          business day. Not sure what you need? Just say hello.
        </p>
      </div>

      {/* ── Two-column layout ───────────────────── */}
      <div className="grid gap-14 md:grid-cols-[3fr_2fr] md:items-start">
        {/* Form — wider column */}
        <ContactForm />

        {/* Side note */}
        <aside className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
              Location
            </p>
            <p className="text-sm text-text">Rotterdam, Netherlands</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
              Response time
            </p>
            <p className="text-sm text-text">Within 1 business day</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-1">
              Working hours
            </p>
            <p className="text-sm text-text">Mon – Fri, 9:00 – 18:00 CET</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
