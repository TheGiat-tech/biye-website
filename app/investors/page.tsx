'use client';

import { useLanguage } from '../components/LanguageContext';
import { translations } from '../utils/translations';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Link from 'next/link';

export default function InvestorsPage() {
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
            {t.investors.title}
          </h1>
          <p className="text-xl text-textMedium mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.investors.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-lg text-textMedium leading-relaxed text-center mb-12 whitespace-pre-line">
            {t.investors.text}
          </p>

          {/* Investment Reasons */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {t.investors.reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary text-3xl font-bold">{index + 1}</span>
                  <p className="text-textMedium font-medium leading-relaxed pt-1">{reason}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold text-textDark mb-4">
              {lang === 'en' ? 'Ready to Invest in the Future?' : 'מוכנים להשקיע בעתיד?'}
            </h2>
            <p className="text-textMedium mb-6">
              {lang === 'en' 
                ? 'Connect with us to discuss investment opportunities and partnerships.'
                : 'צרו איתנו קשר כדי לדון בהזדמנויות השקעה ושותפויות.'}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-darkPeach transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.investors.cta}
            </Link>
          </div>
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
