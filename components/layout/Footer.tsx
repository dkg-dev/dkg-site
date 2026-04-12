import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1100px] px-6 py-8 flex flex-col items-center gap-6">
        <Image
          src="/images/logomark.svg"
          alt="DKG"
          width={40}
          height={40}
          className="h-10 w-auto"
          unoptimized
        />
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded text-sm text-text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {label}
            </Link>
          ))}
        </nav>
        <p className="text-xs text-text-muted">
          © 2025 DKG. Based in Rotterdam, Netherlands.
        </p>
      </div>
    </footer>
  );
}
