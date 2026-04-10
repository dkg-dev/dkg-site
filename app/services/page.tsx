import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import PackageCard from '@/components/sections/PackageCard';
import Faq from '@/components/sections/Faq';
import CTABanner from '@/components/ui/CTABanner';
import { packages, addons, faq } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services — DKG',
  description:
    'Starter sites, business sites, and custom builds. Clear packages, fair pricing.',
};

export default function ServicesPage() {
  return (
    <>
      {/* ── Page header ───────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 py-20">
        <SectionHeader
          heading="Services"
          subheading="Every project is different — but here's how I typically work, and what I charge for."
          centered={false}
        />
      </section>

      {/* ── Package cards ─────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 pb-24">
        <div className="flex flex-col gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} variant="full" />
          ))}
        </div>
      </section>

      {/* ── Add-ons ───────────────────────────────── */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-[1100px] px-6 py-24">
          <h2 className="text-2xl font-bold tracking-tight text-text">
            Add-ons
          </h2>

          <div className="mt-8 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-bg">
                  <th className="px-5 py-3 text-left font-medium text-text-muted">
                    Add-on
                  </th>
                  <th className="px-5 py-3 text-right font-medium text-text-muted">
                    Pricing
                  </th>
                </tr>
              </thead>
              <tbody>
                {addons.map(({ name }, i) => (
                  <tr
                    key={name}
                    className={`${i < addons.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <td className="px-5 py-4 text-text">{name}</td>
                    <td className="px-5 py-4 text-right text-text-muted">
                      On request
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm text-text-muted">
            Get in touch for a quote — I'll scope the project and give you a
            clear price before anything starts.
          </p>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────── */}
      <section className="mx-auto max-w-[1100px] px-6 py-24">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-text">
          Common questions
        </h2>
        <Faq items={faq} />
      </section>

      <CTABanner />
    </>
  );
}
