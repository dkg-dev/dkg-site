import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ValueProps from '@/components/sections/ValueProps';
import PortfolioTeaser from '@/components/sections/PortfolioTeaser';
import ServicesTeaser from '@/components/sections/ServicesTeaser';
import CTABanner from '@/components/ui/CTABanner';

export const metadata: Metadata = {
  title: 'DKG — Web Development for Small Businesses',
  description:
    'Professional websites for small businesses in Rotterdam and the Netherlands. From design to launch, handled for you.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <PortfolioTeaser />
      <ServicesTeaser />
      <CTABanner />
    </>
  );
}
