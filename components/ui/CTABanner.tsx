import Button from './Button';

type CTABannerProps = {
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CTABanner({
  heading = 'Ready to get started?',
  subheading = "Tell me about your project — I'll get back to you within one business day.",
  buttonLabel = 'Get in touch',
  buttonHref = '/contact',
}: CTABannerProps) {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-[1100px] px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
          {subheading}
        </p>
        <div className="mt-8">
          <Button href={buttonHref} variant="white">
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
