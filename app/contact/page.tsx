'use client';

import { useLanguage } from '../components/LanguageContext';
import { translations } from '../utils/translations';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const isRTL = lang === 'he';
  const [formState, setFormState] = useState({ submitting: false, submitted: false, error: false });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ submitting: true, submitted: false, error: false });

    const formElement = e.target as HTMLFormElement;
    const formData = {
      name: (formElement.elements.namedItem('name') as HTMLInputElement).value,
      email: (formElement.elements.namedItem('email') as HTMLInputElement).value,
      subject: (formElement.elements.namedItem('subject') as HTMLInputElement).value,
      message: (formElement.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormState({ submitting: false, submitted: true, error: false });
      formElement.reset();
    } catch (error) {
      // Only log generic error in production
      if (process.env.NODE_ENV === 'development') {
        console.error('Error submitting form:', error);
      }
      setFormState({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <div className={`min-h-screen bg-lightBg ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} t={t} onLanguageToggle={toggleLanguage} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary/30 via-accent/20 to-peachGradient/30 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-6 leading-tight">
            {t.contact.title}
          </h1>
          <p className="text-xl text-textMedium max-w-3xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-textDark mb-2">
                    {t.contact.fields.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    required
                    disabled={formState.submitting}
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
                    className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    required
                    disabled={formState.submitting}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-textDark mb-2">
                    {t.contact.fields.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    required
                    disabled={formState.submitting}
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
                    className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    required
                    disabled={formState.submitting}
                  ></textarea>
                </div>
                
                {formState.submitted && (
                  <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {lang === 'en' ? 'Thank you! Your message has been sent.' : 'תודה! ההודעה שלך נשלחה.'}
                  </div>
                )}
                
                {formState.error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    {lang === 'en' ? 'An error occurred. Please try again.' : 'אירעה שגיאה. אנא נסה שוב.'}
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-darkPeach transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={formState.submitting}
                >
                  {formState.submitting 
                    ? (lang === 'en' ? 'Sending...' : 'שולח...')
                    : t.contact.button
                  }
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl border-2 border-primary/20">
              <h2 className="text-2xl font-bold text-textDark mb-6">{t.contact.info.title}</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-textDark mb-2">
                    {lang === 'en' ? 'Email' : 'דוא"ל'}
                  </h3>
                  <a
                    href={`mailto:${t.contact.info.email}`}
                    className="text-primary hover:text-darkPeach transition-smooth font-medium"
                  >
                    {t.contact.info.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-textDark mb-2">
                    {lang === 'en' ? 'Location' : 'מיקום'}
                  </h3>
                  <p className="text-textMedium">{t.contact.info.address}</p>
                </div>
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-textMedium text-sm leading-relaxed">
                    {lang === 'en'
                      ? 'We typically respond to all inquiries within 24-48 hours. For urgent matters, please mention it in your subject line.'
                      : 'אנו בדרך כלל מגיבים לכל הפניות תוך 24-48 שעות. לעניינים דחופים, אנא ציין זאת בשורת הנושא.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
