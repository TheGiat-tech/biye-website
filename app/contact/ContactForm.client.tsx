'use client';

import React, { useState, FormEvent } from 'react';

type Props = {
  lang: 'en' | 'he';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: any;
};

export default function ContactForm({ lang, t }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const body = {
      name: String(form.get('name') || ''),
      email: String(form.get('email') || ''),
      subject: String(form.get('subject') || ''),
      message: String(form.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(data?.error || (lang === 'en' ? 'An error occurred.' : 'אירעה שגיאה.'));
      }
    } catch {
      setError(lang === 'en' ? 'Network error.' : 'שגיאת רשת.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-textDark mb-2">
          {t.contact.fields.name}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          disabled={submitting}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-textDark mb-2">
          {t.contact.fields.email}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          disabled={submitting}
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-textDark mb-2">
          {t.contact.fields.subject ?? (lang === 'en' ? 'Subject' : 'נושא')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          disabled={submitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-textDark mb-2">
          {t.contact.fields.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
          disabled={submitting}
        />
      </div>

      {submitted && (
        <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg">
          {lang === 'en' ? 'Thank you! Your message has been sent.' : 'תודה! ההודעה שלך נשלחה.'}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-darkPeach transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={submitting}
      >
        {submitting ? (lang === 'en' ? 'Sending...' : 'שולח...') : t.contact.button}
      </button>
    </form>
  );
}
