'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-28 sm:py-36 text-center">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl"
      >
        Websites that work for your business.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        className="mt-6 text-lg text-text-muted max-w-2xl mx-auto leading-relaxed sm:text-xl"
      >
        I build modern, professional websites for small businesses across
        Rotterdam and the Netherlands — from design to launch, handled for you.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <Button href="/contact">Get in touch</Button>
        <Button href="/work" variant="secondary">
          See my work
        </Button>
      </motion.div>
    </section>
  );
}
