'use client';

import { useLanguage } from './components/LanguageContext';
import { translations } from './utils/translations';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import ContactForm from './contact/ContactForm.client';
import Image from 'next/image';

export default function Home() {
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang];
  const isRTL = lang === 'he';

  return (
    <div className={`min-h-screen bg-lightBg ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header lang={lang} t={t} onLanguageToggle={toggleLanguage} />

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-accent/20 to-peachGradient/30"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textDark mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-textMedium mb-10 max-w-4xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-darkPeach transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.hero.button}
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.about.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.about.text}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-6 bg-lightBg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.problem.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.problem.text}
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-12 text-center">{t.solution.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.solution.points.map((point, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-smooth hover:shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary text-2xl font-bold">•</span>
                  <p className="text-textMedium font-medium leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 px-6 bg-gradient-to-br from-secondary/20 to-accent/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.vision.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.vision.text}
          </p>
        </div>
      </section>

      {/* Investors Section */}
      <section id="investors" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.investors.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.investors.text}
          </p>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 px-6 bg-lightBg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.media.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center mb-12 whitespace-pre-line">
            {t.media.text}
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-primary/20">
              <Image
                src="/biye-media.png"
                alt="BiYé media illustration featuring the smart hygiene experience"
                width={1024}
                height={1024}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-12 text-center">{t.contact.title}</h2>
          <ContactForm lang={lang} t={t} />
        </div>
      </section>

      <Footer lang={lang} t={t} />
    </div>
  );
}
