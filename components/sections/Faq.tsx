'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { FaqItem } from '@/lib/content';

type FaqProps = {
  items: FaqItem[];
};

function FaqRow({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 rounded py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
      >
        <span className="text-base font-medium text-text">{question}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-accent transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
        >
          {/* Plus / close icon drawn with spans */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1v14M1 8h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 text-sm text-text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq({ items }: FaqProps) {
  return (
    <div className="divide-y-0 rounded-xl border border-border bg-surface px-6">
      {items.map((item) => (
        <FaqRow key={item.question} {...item} />
      ))}
    </div>
  );
}
