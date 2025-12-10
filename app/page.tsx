'use client';

import { useState } from 'react';
import Image from 'next/image';

type Language = 'en' | 'he';

const content = {
  en: {
    header: {
      logo: 'BiYé',
      menu: {
        home: 'Home',
        contact: 'Contact',
        langToggle: 'HE',
      },
    },
    hero: {
      title: 'A Smart FemTech & IoT Solution for Women\'s Hygiene Accessibility — Anytime, Anywhere',
      subtitle: 'Enhancing women\'s wellbeing through discreet, reliable access in public spaces.',
      button: 'Contact Us',
    },
    about: {
      title: 'About BiYé',
      text: 'BiYé is a next-generation FemTech and IoT initiative redefining women\'s hygiene accessibility in public environments.\nOur mission is to ensure that essential hygiene products are available — discreetly, respectfully, and reliably — wherever women need them.',
    },
    problem: {
      title: 'The Problem',
      text: 'Women often find themselves without access to essential hygiene products while in public spaces such as malls, universities, workplaces, transportation hubs, parks, and events.\nThis results in discomfort, disrupted routines, and unnecessary stress.',
    },
    solution: {
      title: 'Our Solution',
      points: [
        'Smart IoT hygiene-access machines',
        'Strategic placement in public spaces',
        'Seamless, discreet user experience',
        'Full operational monitoring and management',
        'Female-friendly public infrastructure',
      ],
    },
    vision: {
      title: 'Our Vision',
      text: 'To ensure every woman can continue her day confidently — anytime, anywhere.\nBiYé is not just a product;\nit is a statement of dignity, inclusion, and modern public-space design.',
    },
    investors: {
      title: 'Investors & Partners',
      text: 'BiYé welcomes strategic partners and investors in FemTech, HealthTech, IoT innovation, and public-space accessibility.\nOur solution offers a scalable infrastructure opportunity with meaningful, measurable impact on women\'s wellbeing.',
    },
    media: {
      title: 'Media & Visuals',
      text: 'Below are example visuals representing the BiYé smart hygiene-access machine and its environment.\n(Replace with final product images.)',
    },
    contact: {
      title: 'Contact Us',
      fields: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      button: 'Send',
    },
  },
  he: {
    header: {
      logo: 'BiYé',
      menu: {
        home: 'בית',
        contact: 'צור קשר',
        langToggle: 'EN',
      },
    },
    hero: {
      title: 'פתרון FemTech ו-IoT חכם לנגישות היגיינה נשית — בכל זמן ובכל מקום',
      subtitle: 'חיזוק רווחת הנשים באמצעות גישה דיסקרטית ומהימנה במרחב הציבורי.',
      button: 'צור קשר',
    },
    about: {
      title: 'על BiYé',
      text: 'BiYé הוא מיזם FemTech ו-IoT המגדיר מחדש את הנגישות למוצרי היגיינה נשית במרחב הציבורי.\nהמטרה שלנו היא להבטיח שנשים יקבלו מוצרים חיוניים — באופן דיסקרטי, מכבד ומהימן — בכל מקום שבו הן צריכות אותם.',
    },
    problem: {
      title: 'הבעיה',
      text: 'נשים רבות מוצאות את עצמן ללא גישה למוצרי היגיינה בסיסיים במקומות ציבוריים כגון קניונים, אוניברסיטאות, מקומות עבודה, תחנות תחבורה, פארקים ואירועים.\nמצבים אלו מובילים למבוכה, לחץ ולעיתים עצירת הפעילות היומיומית.',
    },
    solution: {
      title: 'הפתרון',
      points: [
        'מכונות IoT חכמות',
        'מיקום אסטרטגי במרחבים ציבוריים',
        'חוויית משתמש דיסקרטית ומכבדת',
        'מערכת ניהול ובקרה מלאה',
        'תשתית מרחב ציבורי ידידותית לנשים',
      ],
    },
    vision: {
      title: 'החזון שלנו',
      text: 'להבטיח שכל אישה תוכל להמשיך את יומה בביטחון — בכל זמן ובכל מקום.\nBiYé אינה רק מכונה;\nהיא הצהרה של כבוד, הכלה ועיצוב מרחב ציבורי מודרני.',
    },
    investors: {
      title: 'משקיעים ושותפים',
      text: 'BiYé פונה למשקיעים ושותפים אסטרטגיים בתחומי FemTech, HealthTech ו-IoT.\nהפתרון שלנו מציע תשתית ברת־הרחבה עם השפעה ממשית ומדידה על איכות החיים של נשים.',
    },
    media: {
      title: 'מדיה',
      text: 'כאן יוצגו תמונות ודוגמאות של מכונת BiYé והטמעתה במרחב הציבורי.\n(יש להחליף בתמונות מוצר סופיות.)',
    },
    contact: {
      title: 'צור קשר',
      fields: {
        name: 'שם',
        email: 'אימייל',
        message: 'הודעה',
      },
      button: 'שלח',
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<Language>('en');
  const t = content[lang];
  const isRTL = lang === 'he';

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'he' : 'en');
  };

  return (
    <div className={`min-h-screen bg-lightBg ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="bg-white border-b border-primary/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-primary">{t.header.logo}</span>
          </div>
          <nav className="flex items-center space-x-8">
            <a href="#home" className="text-textMedium hover:text-primary transition-smooth font-medium">
              {t.header.menu.home}
            </a>
            <a href="#contact" className="text-textMedium hover:text-primary transition-smooth font-medium">
              {t.header.menu.contact}
            </a>
            <button
              onClick={toggleLanguage}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-darkPeach transition-smooth font-medium shadow-md"
            >
              {t.header.menu.langToggle}
            </button>
          </nav>
        </div>
      </header>

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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.about.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.about.text}
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-lightBg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.problem.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.problem.text}
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white">
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
      <section className="py-20 px-6 bg-gradient-to-br from-secondary/20 to-accent/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.vision.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.vision.text}
          </p>
        </div>
      </section>

      {/* Investors Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.investors.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center whitespace-pre-line">
            {t.investors.text}
          </p>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-6 bg-lightBg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-6 text-center">{t.media.title}</h2>
          <p className="text-lg text-textMedium leading-relaxed text-center mb-12 whitespace-pre-line">
            {t.media.text}
          </p>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-primary/20">
              <Image
                src="/biye-machine.svg"
                alt="BiYé Smart Hygiene Access Machine"
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-textDark mb-12 text-center">{t.contact.title}</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-textDark mb-2">
                {t.contact.fields.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-textDark mb-2">
                {t.contact.fields.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-textDark mb-2">
                {t.contact.fields.message}
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-darkPeach transition-smooth shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.contact.button}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12 px-6 border-t border-primary/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-3xl font-bold text-primary">{t.header.logo}</span>
          </div>
          <p className="text-textMedium text-sm">
            © 2024 BiYé. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
