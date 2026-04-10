import Link from 'next/link';

const variantClasses = {
  primary:
    'bg-accent text-white hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  secondary:
    'border border-accent text-accent hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
  // Used on teal backgrounds (CTABanner)
  white:
    'bg-white text-accent hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
} as const;

const baseClasses =
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

type Variant = keyof typeof variantClasses;

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  onClick?: never;
};

type ButtonAsButton = {
  href?: never;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if ('href' in rest && rest.href) {
    const { href } = rest;
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
