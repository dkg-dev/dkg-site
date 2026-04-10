'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputClasses =
  'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted ' +
  'focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setState('success');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-xl border border-accent/30 bg-accent/5 px-6 py-8 text-center">
        <p className="text-base font-medium text-accent">
          Thanks — I'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {state === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-text">
          Tell me about your project
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClasses} resize-y`}
          placeholder="What are you looking to build? Any details on timeline or budget are helpful, but not required."
        />
      </div>

      <Button
        type="submit"
        disabled={state === 'loading'}
        className="self-start"
      >
        {state === 'loading' ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  );
}
