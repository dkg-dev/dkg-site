import Link from 'next/link';

const footerLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-[1100px] px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-text-muted">
            DKG — Web Development for Small Businesses
          </p>
          <nav className="flex flex-wrap gap-6">
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
        </div>
        <p className="mt-8 text-xs text-text-muted">
          © 2025 DKG. Based in Rotterdam, Netherlands.
        </p>
      </div>
    </footer>
  );
}
