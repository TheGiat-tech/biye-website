'use client';

import { useLanguage } from '../components/LanguageContext';
import { translations } from '../utils/translations';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

export default function TermsOfUsePage() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const isRTL = lang === 'he';

  return (
    <div className={`min-h-screen bg-lightBg ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} t={t} onLanguageToggle={toggleLanguage} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 via-accent/20 to-peachGradient/30 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-textDark mb-4">
            {t.termsOfUse.title}
          </h1>
          <p className="text-textMedium">{t.termsOfUse.lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {t.termsOfUse.sections.map((section, index) => (
              <div key={index} className="pb-6 border-b border-primary/10 last:border-b-0">
                <h2 className="text-2xl font-bold text-textDark mb-4">{section.title}</h2>
                <p className="text-textMedium leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
