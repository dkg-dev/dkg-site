// ─────────────────────────────────────────────
// All hardcoded site content lives here.
// Import from this file — never inline copy in JSX.
// ─────────────────────────────────────────────

export type Project = {
  slug: string;
  /** Display badge: "Client project" | "Personal project" */
  label: string;
  name: string;
  description: string;
  /** What was built — bullet list for the full /work page */
  built: string[];
  tags: string[];
  /** Path inside /public/images/, or null while placeholder is shown */
  imagePath: string | null;
  liveUrl: string | null;
};

export type Package = {
  name: string;
  bestFor: string;
  /** Full feature list — used on /services page */
  features: string[];
};

export type ValueProp = {
  title: string;
  description: string;
};

// ─── Value props ──────────────────────────────

export const valueProps: ValueProp[] = [
  {
    title: 'Full process handled',
    description:
      "You don't need to manage a designer, developer, and host separately. I do it all.",
  },
  {
    title: 'Built for real businesses',
    description:
      'Websites that bring in customers, answer common questions, and work on every device.',
  },
  {
    title: 'Clear communication',
    description: 'Plain language throughout. No jargon, no surprises.',
  },
];

// ─── Portfolio projects ───────────────────────

export const projects: Project[] = [
  {
    slug: 'fleardam',
    label: 'Client project',
    name: 'fleaRdam',
    description:
      "Rotterdam's first urban flea market needed a complete web platform — from stall applications and ticket purchasing to event management and an admin workflow.",
    built: [
      'Event management and scheduling',
      'Stall applications workflow',
      'Ticket purchasing with Stripe',
      'Email notifications via Resend',
      'Admin dashboard via Sanity Studio',
    ],
    tags: ['Next.js', 'Sanity CMS', 'Stripe', 'Resend', 'Vercel'],
    imagePath: '/images/fleaRdam.png',
    liveUrl: 'https://fleardam-lyart.vercel.app/',
  },
  {
    slug: 'drunk-knight-games',
    label: 'Personal project',
    name: 'Drunk Knight Games',
    description:
      'An e-commerce platform for a tabletop and indie games store — built to practice full product browsing, cart logic, and checkout flow.',
    built: [
      'Product catalogue with filtering',
      'Cart and checkout flow',
      'Smooth, responsive shopping UI',
    ],
    tags: ['React', 'Tailwind CSS'],
    imagePath: '/images/drunkknightgames.png',
    liveUrl: 'https://drunkknightgames.netlify.app/',
  },
];

// ─── Service packages ─────────────────────────

export const packages: Package[] = [
  {
    name: 'Starter Site',
    bestFor: 'Sole traders, tradespeople, local services',
    features: [
      'Up to 4 pages',
      'Mobile-first responsive design',
      'Contact form with email notifications',
      'Basic on-page SEO',
      'Deployed and live on Vercel',
      '1 round of revisions',
    ],
  },
  {
    name: 'Business Site',
    bestFor: 'Small businesses who want to update their own content',
    features: [
      'Up to 8 pages',
      'Sanity CMS — update content without touching code',
      'Contact form, SEO, Google Analytics',
      'Deployed on Vercel',
      '2 rounds of revisions',
      'Optional: blog, booking, multilingual',
    ],
  },
  {
    name: 'Custom Build',
    bestFor: 'Businesses with specific requirements',
    features: [
      'Everything in Business Site',
      'Custom functionality: payments, bookings, user accounts, APIs',
      'Scoping call before any work begins',
      'Quoted per project',
    ],
  },
];

// ─── Add-ons ──────────────────────────────────

export type Addon = { name: string };

export const addons: Addon[] = [
  { name: 'Extra page' },
  { name: 'Blog / news section' },
  { name: 'Booking / calendar integration' },
  { name: 'Multilingual site (NL + EN)' },
  { name: 'Monthly maintenance' },
  { name: 'Domain & hosting setup' },
];

// ─── FAQ ──────────────────────────────────────

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: 'Do I need to provide the text and images?',
    answer:
      "Yes, but I'll guide you on what's needed. Copywriting support is available on request.",
  },
  {
    question: 'How do payments work?',
    answer:
      '50% deposit before work starts, 50% on delivery. All prices exclude VAT (btw).',
  },
  {
    question: 'Can you help after launch?',
    answer: 'Yes. Ongoing support is available at an hourly rate.',
  },
  {
    question: "I'm not based in Rotterdam — can you still help?",
    answer:
      'Absolutely. I work with clients across the Netherlands and internationally in English.',
  },
];

// ─── About page ───────────────────────────────

/** Three body paragraphs for the intro block, in order. */
export const aboutCopy: string[] = [
  "DKG is a web development studio based in Rotterdam. We build complete websites for small businesses — from the initial design through to a live, working site.",
  "We started DKG because we noticed a gap: a lot of small business owners need a proper website but don't have the time to manage a whole team of people, or the budget for a big agency. We handle the full process, communicate in plain language, and make sure you end up with something you're actually happy with.",
  "We take on a small number of projects at a time so every client gets proper attention. If you'd like to work with us, get in touch — we'll be straightforward about whether we can help.",
];

export type HowIWorkPoint = { title: string; description: string };

export const howIWork: HowIWorkPoint[] = [
  {
    title: 'Small client list',
    description: 'Every project gets our full attention.',
  },
  {
    title: 'Plain language',
    description: 'No confusing technical jargon.',
  },
  {
    title: 'Full process handled',
    description: 'We manage design, build, and deployment.',
  },
];

// ─── Tech stack (About page) ──────────────────

export type TechItem = {
  name: string;
  /** 1–2 char abbreviation used in the monogram tile */
  abbr: string;
};

export const techStack: TechItem[] = [
  { name: 'Next.js',      abbr: 'N'  },
  { name: 'React',        abbr: 'Re' },
  { name: 'Tailwind CSS', abbr: 'Tw' },
  { name: 'Sanity',       abbr: 'Sa' },
  { name: 'Supabase',     abbr: 'Su' },
  { name: 'Stripe',       abbr: 'St' },
  { name: 'Resend',       abbr: 'Rs' },
  { name: 'Vercel',       abbr: 'V'  },
];
