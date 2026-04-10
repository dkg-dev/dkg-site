type SectionHeaderProps = {
  heading: string;
  subheading?: string;
  centered?: boolean;
};

export default function SectionHeader({
  heading,
  subheading,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg text-text-muted max-w-2xl leading-relaxed mx-auto">
          {subheading}
        </p>
      )}
    </div>
  );
}
