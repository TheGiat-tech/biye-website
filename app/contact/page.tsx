'use client';

import { useLanguage } from '../components/LanguageContext';
import { translations } from '../utils/translations';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import ContactForm from './ContactForm.client';

export default function ContactPage() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const isRTL = lang === 'he';

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
              <ContactForm lang={lang} t={t} />
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
