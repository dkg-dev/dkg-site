@AGENTS.md

# CLAUDE.md — DKG Website Build Brief

This file is the single source of truth for building the DKG website. Read it fully before writing any code.

---

## Project Overview

**Business:** DKG — Freelance Web Development  
**Owner:** Louis McHugh  
**Location:** Rotterdam, Netherlands  
**Goal:** A professional marketing site for a solo web developer targeting small businesses. The primary job of the site is to get visitors to make contact or book a call.

**One-line brief:** Clean, agency-quality site that makes small business owners trust Louis immediately and reach out.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Content | Hardcoded — no CMS needed |
| Contact form | Resend (API route in Next.js) + React Email |
| Animations | Framer Motion — subtle, purposeful only |
| Hosting | Vercel |
| Language | TypeScript |

**No Sanity CMS.** Content is hardcoded for now. Keep it simple and shippable.

---

## Site Structure

Five pages. Every page has a single primary job.

```
/          → Home
/services  → Service packages
/work      → Portfolio
/about     → About Louis
/contact   → Contact form
```

---

## Design Direction

### Tone and Feel
Clean, professional, like a small agency — but with a real person behind it. Generous whitespace. Sharp typography. No stock photos. No gradients. No gimmicks.

### Colour Palette

```css
--color-bg:         #F8F8F6;   /* warm white — page background */
--color-surface:    #EEEEEA;   /* light grey — cards, section backgrounds */
--color-text:       #1A1A1A;   /* near black — body text */
--color-text-muted: #6B6B6B;   /* muted grey — secondary text, labels */
--color-accent:     #0D7377;   /* deep teal — primary CTA, links, highlights */
--color-accent-hover: #0A5D61; /* darker teal — hover state */
--color-border:     #E0E0DB;   /* subtle border */
--color-white:      #FFFFFF;
```

### Typography
- **Headings:** DM Sans (Google Fonts) — geometric, professional, friendly
- **Body:** DM Sans — same family, lighter weight (400). Keep it consistent.
- **Monospace (tech stack labels only):** JetBrains Mono

Font sizes should be generous. Small business owners aren't developers — readability matters more than density.

### Layout Principles
- Max content width: `1100px`, centered
- Generous section padding: `py-24` minimum
- Cards: soft shadow (`shadow-sm`) and `rounded-xl`, no heavy borders
- CTA buttons: solid teal background, white text, rounded, no sharp corners
- Secondary buttons: outlined, teal border and text

### What to Avoid
- Stock photography
- Gradient backgrounds
- Purple — any shade
- Busy layouts or cramped sections
- Technical jargon in any copy

---

## Pages — Full Specification

### `/` — Home

**Job:** Hook, establish credibility, push to contact.

**Sections, in order:**

1. **Nav**
   - Logo (text-based: "DKG" in DM Sans bold) left-aligned
   - Links right-aligned: Work, Services, About, Contact
   - "Get in touch" as a teal CTA button in the nav
   - Sticky, with a subtle border-bottom on scroll

2. **Hero**
   - Full-width, centred layout
   - H1: `"Websites that work for your business."`
   - Subheading: `"I build modern, professional websites for small businesses across Rotterdam and the Netherlands — from design to launch, handled for you."`
   - Two buttons: `"Get in touch"` (primary, teal) and `"See my work"` (secondary, outlined)
   - No hero image — clean typographic hero only

3. **Value Props** (3 columns)
   - `"Full process handled"` — You don't need to manage a designer, developer, and host separately. I do it all.
   - `"Built for real businesses"` — Websites that bring in customers, answer common questions, and work on every device.
   - `"Clear communication"` — Plain language throughout. No jargon, no surprises.

4. **Portfolio Teaser**
   - Section heading: `"Recent work"`
   - Show 2 project cards (fleaRdam + Drunk Knight Games)
   - Each card: project name, one-line description, tech tags, thumbnail/screenshot, link to `/work`
   - Link below cards: `"View all work →"`

5. **Services Teaser**
   - Section heading: `"How I can help"`
   - 3 cards, one per package: Starter Site, Business Site, Custom Build
   - Each card: package name, best-for line, 3-bullet summary of what's included, CTA link to `/services`

6. **Final CTA Banner**
   - Background: teal (`--color-accent`)
   - Heading: `"Ready to get started?"`
   - Subheading: `"Tell me about your project — I'll get back to you within one business day."`
   - Button: `"Get in touch"` (white, solid)

7. **Footer**
   - Left: "DKG — Web Development for Small Businesses"
   - Right: nav links
   - Bottom: `"© 2025 DKG. Based in Rotterdam, Netherlands."`

---

### `/services` — Services

**Job:** Explain what's on offer clearly. Push to contact.

**Sections:**

1. **Page Header**
   - H1: `"Services"`
   - Subheading: `"Every project is different — but here's how I typically work, and what I charge for."`

2. **Package Cards** (stacked, full-width — not 3 columns)
   Each card contains:
   - Package name + "Best for" badge
   - What's included (bullet list)
   - CTA: `"This sounds right — let's talk"` → links to `/contact`

   **Starter Site** — Best for: sole traders, tradespeople, local services
   - Up to 4 pages
   - Mobile-first responsive design
   - Contact form with email notifications
   - Basic on-page SEO
   - Deployed and live on Vercel
   - 1 round of revisions

   **Business Site** — Best for: small businesses who want to update their own content
   - Up to 8 pages
   - Sanity CMS — update content without touching code
   - Contact form, SEO, Google Analytics
   - Deployed on Vercel
   - 2 rounds of revisions
   - Optional: blog, booking, multilingual

   **Custom Build** — Best for: businesses with specific requirements
   - Everything in Business Site
   - Custom functionality: payments, bookings, user accounts, APIs
   - Scoping call before any work begins
   - Quoted per project

3. **Add-ons Table**
   | Add-on | |
   |---|---|
   | Extra page | On request |
   | Blog / news section | On request |
   | Booking / calendar integration | On request |
   | Multilingual site (NL + EN) | On request |
   | Monthly maintenance | On request |
   | Domain & hosting setup | On request |

   Note below table: "Get in touch for a quote — I'll scope the project and give you a clear price before anything starts."

4. **FAQ** (3–4 questions, accordion or static)
   - "Do I need to provide the text and images?" — Yes, but I'll guide you on what's needed. Copywriting support is available on request.
   - "How do payments work?" — 50% deposit before work starts, 50% on delivery. All prices exclude VAT (btw).
   - "Can you help after launch?" — Yes. Ongoing support is available at an hourly rate.
   - "I'm not based in Rotterdam — can you still help?" — Absolutely. I work with clients across the Netherlands and internationally in English.

5. **CTA Banner** — same as Home footer CTA

---

### `/work` — Portfolio

**Job:** Show polished work. Build trust. Let the projects speak.

**Sections:**

1. **Page Header**
   - H1: `"Work"`
   - Subheading: `"A selection of projects I've built — client work and personal builds."`

2. **Project: fleaRdam** *(Lead with this — client project)*
   - Label: `"Client project"`
   - Name: fleaRdam
   - Description: `"Rotterdam's first urban flea market needed a complete web platform — from stall applications and ticket purchasing to event management and an admin workflow."`
   - What was built: event management, stall applications, ticket purchasing (Stripe), email notifications (Resend), admin via Sanity Studio
   - Tech tags: Next.js, Sanity CMS, Stripe, Resend, Vercel
   - Screenshot(s) of the site
   - Live link if available

3. **Project: Drunk Knight Games** *(Personal project)*
   - Label: `"Personal project"`
   - Name: Drunk Knight Games
   - Description: `"An e-commerce platform for a tabletop and indie games store — built to practice full product browsing, cart logic, and checkout flow."`
   - What was built: product catalogue, cart, smooth shopping UI
   - Tech tags: React, Tailwind CSS
   - Screenshot(s)
   - Link if available

4. **"More on the way" note**
   - A small tasteful note: `"More projects coming soon."` — keeps the page from feeling sparse as the portfolio grows.

---

### `/about` — About

**Job:** Make Louis human and trustworthy. Push to contact.

**Sections:**

1. **Page Header**
   - H1: `"About"`

2. **Intro block**
   - Photo of Louis (left) + text (right) — or full-width text if no photo yet
   - Copy:
     > "I'm Louis, a web developer based in Rotterdam. I build complete websites for small businesses — from the initial design through to a live, working site."
     >
     > "I started DKG because I noticed a gap: a lot of small business owners need a proper website but don't have the time to manage a whole team of people, or the budget for a big agency. I handle the full process, communicate in plain language, and make sure you end up with something you're actually happy with."
     >
     > "I take on a small number of projects at a time so every client gets proper attention. If you'd like to work together, get in touch — I'll be straightforward about whether I can help."

3. **How I work** (3-point visual list)
   - "Small client list — every project gets real attention"
   - "Plain language — no confusing technical jargon"
   - "Full process handled — design, build, and deployment"

4. **Tech Stack** (icon grid with labels)
   - Next.js, React, Tailwind CSS, Sanity, Supabase, Stripe, Resend, Vercel

5. **CTA** — `"Want to work together? Get in touch →"` → `/contact`

---

### `/contact` — Contact

**Job:** Make it as easy as possible to reach out.

**Sections:**

1. **Page Header**
   - H1: `"Get in touch"`
   - Subheading: `"Tell me a bit about your project and I'll get back to you within one business day. Not sure what you need? Just say hello."`

2. **Contact Form**
   Fields:
   - Name (text input)
   - Email (email input)
   - Tell me about your project (textarea, ~5 rows)
   - Send message (teal submit button)

   On submit: show a simple success message — `"Thanks — I'll be in touch soon."`  
   On error: show a clear error message — `"Something went wrong. Please try again or email me directly."`

   Form submits via a Next.js API route using Resend. Louis's email: to be added in `.env.local` as `CONTACT_EMAIL`.

3. **Side note** (below or beside form)
   - "Based in Rotterdam, Netherlands"
   - Email address (once confirmed)
   - Response time: within 1 business day

---

## Components to Build

```
components/
  layout/
    Navbar.tsx         — sticky nav with CTA button
    Footer.tsx         — simple footer with links
  ui/
    Button.tsx         — primary + secondary variants
    Card.tsx           — reusable card with shadow/border
    SectionHeader.tsx  — H2 + optional subheading, centred
    Tag.tsx            — small tech/label badge
    CTABanner.tsx      — full-width teal CTA section (reused on Home + Services)
  sections/
    Hero.tsx
    ValueProps.tsx
    PortfolioTeaser.tsx
    ServicesTeaser.tsx
    ProjectCard.tsx
    PackageCard.tsx
    TechStack.tsx
```

---

## API Route

```
app/api/contact/route.ts
```

- Accepts POST with `{ name, email, message }`
- Validates all fields server-side
- Sends email via Resend to `process.env.CONTACT_EMAIL`
- Returns `{ success: true }` or `{ error: string }`

Use `react-email` for the email template — keep it simple, just the fields formatted cleanly.

---

## Environment Variables

```
RESEND_API_KEY=
CONTACT_EMAIL=
```

These go in `.env.local` and should be documented in a `.env.example` file.

---

## Content Rules

- Write all copy in plain English. No jargon, no buzzwords.
- Avoid "passionate", "dedicated", "cutting-edge", "solutions" — these are filler words.
- Every page ends with a path to contact. Never leave a visitor with nowhere to go.
- Prices are intentionally omitted from the site — copy should direct visitors to get in touch for a quote.

---

## SEO Basics

Each page should have a `<title>` and `<meta name="description">`:

| Page | Title | Description |
|---|---|---|
| Home | DKG — Web Development for Small Businesses | Professional websites for small businesses in Rotterdam and the Netherlands. From design to launch, handled for you. |
| Services | Services — DKG | Starter sites, business sites, and custom builds. Clear packages, fair pricing. |
| Work | Work — DKG | A selection of projects built by DKG — client work and personal builds. |
| About | About — DKG | Louis McHugh, web developer based in Rotterdam. Building websites for small businesses. |
| Contact | Get in touch — DKG | Tell me about your project. I'll get back to you within one business day. |

Use Next.js `metadata` exports in each `page.tsx`.

---

## Project File Structure

```
dkg-site/
  app/
    layout.tsx          — root layout, fonts, metadata
    page.tsx            — Home
    services/page.tsx
    work/page.tsx
    about/page.tsx
    contact/page.tsx
    api/
      contact/route.ts
  components/
    layout/
    ui/
    sections/
  lib/
    resend.ts           — Resend client setup
  emails/
    ContactEmail.tsx    — React Email template
  public/
    images/             — project screenshots, photo of Louis
  .env.local
  .env.example
```

---

## Build Order (Recommended)

1. Scaffold Next.js project with TypeScript and Tailwind
2. Set up fonts (DM Sans, JetBrains Mono via `next/font/google`)
3. Set up CSS variables in `globals.css`
4. Build `Navbar` and `Footer`
5. Build shared UI components (`Button`, `Card`, `SectionHeader`, `Tag`, `CTABanner`)
6. Build Home page section by section
7. Build Services page
8. Build Work page
9. Build About page
10. Build Contact page + API route + Resend integration
11. Add metadata to all pages
12. Final pass: spacing, responsiveness, accessibility (alt tags, focus states, aria labels)

---

## Notes for Claude Code

- Use the App Router throughout — no Pages Router
- All components should be React Server Components by default; use `'use client'` only where interactivity requires it (form, mobile nav)
- Tailwind only — no additional CSS-in-JS libraries
- Framer Motion for any animations — keep them subtle (fade in on scroll, gentle stagger)
- Do not install unnecessary packages
- All hardcoded content (project details, service packages, copy) should live in `/lib/content.ts` as typed constants — not scattered through JSX
- Images go in `/public/images/` — use `next/image` throughout
- The site must be fully responsive — mobile-first
