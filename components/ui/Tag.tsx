type TagProps = {
  children: React.ReactNode;
  /** 'tech' — muted surface pill for stack labels; 'label' — teal-tinted for category badges */
  variant?: 'tech' | 'label';
  className?: string;
};

const variantClasses = {
  tech: 'bg-surface text-text-muted border border-border font-mono text-xs',
  label: 'bg-accent/10 text-accent border border-accent/20 text-xs font-medium',
} as const;

export default function Tag({
  children,
  variant = 'tech',
  className = '',
}: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-0.5 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
