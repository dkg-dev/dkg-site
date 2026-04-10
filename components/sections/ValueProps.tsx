import { valueProps } from '@/lib/content';

export default function ValueProps() {
  return (
    <section className="bg-surface border-y border-border">
      <div className="mx-auto max-w-[1100px] px-6 py-24">
        <dl className="grid gap-10 sm:grid-cols-3">
          {valueProps.map(({ title, description }) => (
            <div key={title}>
              <dt className="text-base font-semibold text-text">{title}</dt>
              <dd className="mt-2 text-base text-text-muted leading-relaxed">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
