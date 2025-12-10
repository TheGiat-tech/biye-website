'use client';

import { useState } from 'react';
import Image from 'next/image';

type Language = 'en' | 'he';

const content = {
  en: {
    nav: {
      solutions: 'Solutions',
      technology: 'Technology',
      about: 'About',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    hero: {
      title: 'Revolutionizing Women\'s Health',
      subtitle: 'Through Innovation',
      description: 'BiYé is pioneering the future of FemTech with cutting-edge IoT accessibility devices. Join us in transforming healthcare for millions of women worldwide.',
      cta1: 'Join Our Mission',
      cta2: 'View Investment Deck'
    },
    features: {
      title: 'Why Invest in BiYé?',
      subtitle: 'We\'re building the future of women\'s healthcare with technology that matters',
      feature1: {
        title: 'Massive Market Opportunity',
        description: 'The global FemTech market is projected to reach $75B by 2025, with women\'s health being severely underserved by current solutions.'
      },
      feature2: {
        title: 'Proprietary Technology',
        description: 'Our patent-pending IoT platform combines AI-driven insights with medical-grade sensors for unprecedented accuracy and user experience.'
      },
      feature3: {
        title: 'Proven Traction',
        description: 'Over 10,000 beta users, partnerships with leading healthcare providers, and 95% user satisfaction rate demonstrate strong product-market fit.'
      }
    },
    impact: {
      title: 'Our Impact',
      stat1: { value: '10K+', label: 'Active Users' },
      stat2: { value: '95%', label: 'Satisfaction Rate' },
      stat3: { value: '$75B', label: 'Market Size' }
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Interested in learning more about investment opportunities or partnerships?',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      organization: 'Organization',
      message: 'Message',
      submit: 'Send Message',
      firstNamePlaceholder: 'John',
      lastNamePlaceholder: 'Doe',
      emailPlaceholder: 'john.doe@example.com',
      organizationPlaceholder: 'Company Name',
      messagePlaceholder: 'Tell us about your interest...'
    },
    footer: {
      tagline: 'Transforming women\'s health through innovation.',
      products: 'Products',
      company: 'Company',
      support: 'Support',
      copyright: '© 2024 BiYé. All rights reserved.'
    }
  },
  he: {
    nav: {
      solutions: 'פתרונות',
      technology: 'טכנולוגיה',
      about: 'אודות',
      contact: 'צור קשר',
      getStarted: 'התחל עכשיו'
    },
    hero: {
      title: 'מהפכה בבריאות הנשים',
      subtitle: 'באמצעות חדשנות',
      description: 'BiYé חלוצה בעתיד הפמטק עם מכשירי נגישות IoT מתקדמים. הצטרפו אלינו בשינוי הבריאות עבור מיליוני נשים ברחבי העולם.',
      cta1: 'הצטרפו למשימה שלנו',
      cta2: 'צפו במצגת השקעה'
    },
    features: {
      title: 'למה להשקיע ב-BiYé?',
      subtitle: 'אנחנו בונים את עתיד הבריאות של נשים עם טכנולוגיה שחשובה',
      feature1: {
        title: 'הזדמנות שוק עצומה',
        description: 'שוק הפמטק העולמי צפוי להגיע ל-75 מיליארד דולר עד 2025, כאשר בריאות הנשים מקבלת שירות לקוי מהפתרונות הנוכחיים.'
      },
      feature2: {
        title: 'טכנולוגיה קניינית',
        description: 'פלטפורמת ה-IoT שלנו המוגנת בפטנט משלבת תובנות מבוססות AI עם חיישנים ברמה רפואית לדיוק וחוויית משתמש חסרת תקדים.'
      },
      feature3: {
        title: 'משיכה מוכחת',
        description: 'למעלה מ-10,000 משתמשי בטא, שותפויות עם ספקי שירותי בריאות מובילים, ושיעור שביעות רצון של 95% מוכיחים התאמה חזקה למוצר-שוק.'
      }
    },
    impact: {
      title: 'ההשפעה שלנו',
      stat1: { value: '+10K', label: 'משתמשים פעילים' },
      stat2: { value: '95%', label: 'שביעות רצון' },
      stat3: { value: '$75B', label: 'גודל השוק' }
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'מעוניינים ללמוד עוד על הזדמנויות השקעה או שותפויות?',
      firstName: 'שם פרטי',
      lastName: 'שם משפחה',
      email: 'כתובת אימייל',
      organization: 'ארגון',
      message: 'הודעה',
      submit: 'שלח הודעה',
      firstNamePlaceholder: 'יוחנן',
      lastNamePlaceholder: 'כהן',
      emailPlaceholder: 'example@example.com',
      organizationPlaceholder: 'שם החברה',
      messagePlaceholder: 'ספר לנו על העניין שלך...'
    },
    footer: {
      tagline: 'שינוי בריאות הנשים באמצעות חדשנות.',
      products: 'מוצרים',
      company: 'חברה',
      support: 'תמיכה',
      copyright: '© 2024 BiYé. כל הזכויות שמורות.'
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = content[language];
  const isHebrew = language === 'he';

  return (
    <div className={`min-h-screen bg-peachBg ${isHebrew ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <header className="bg-white border-b border-lightGray shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.54-3.13 8.79-7.5 9.93-.31.08-.63.13-.96.15-.33-.02-.65-.07-.96-.15C6.13 25.29 3 21.04 3 16.5V7.78l8-3.6z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span className="text-2xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BiYé</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-mediumGray hover:text-primary transition-colors">{t.nav.solutions}</a>
            <a href="#technology" className="text-mediumGray hover:text-primary transition-colors">{t.nav.technology}</a>
            <a href="#about" className="text-mediumGray hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="#contact" className="text-mediumGray hover:text-primary transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
              className="px-4 py-2 rounded border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-medium"
              aria-label="Toggle language"
            >
              {language === 'en' ? 'עברית' : 'English'}
            </button>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded hover:shadow-lg transition-all">
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-peachBg via-white to-pink-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={isHebrew ? 'text-right' : ''}>
              <h1 className="text-5xl md:text-6xl font-bold text-darkSlate mb-4 leading-tight">
                {t.hero.title}
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {t.hero.subtitle}
                </span>
              </h1>
              <p className="text-xl text-mediumGray mb-8 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105">
                  {t.hero.cta1}
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition-all">
                  {t.hero.cta2}
                </button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-illustration.svg"
                alt="BiYé FemTech Innovation"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 ${isHebrew ? 'text-right' : ''}`}>
            <h2 className="text-4xl font-bold text-darkSlate mb-4">
              {t.features.title}
            </h2>
            <p className="text-lg text-mediumGray max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-peachBg p-8 rounded-xl border border-lightGray hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 mb-6 mx-auto">
                <Image
                  src="/images/growth-chart.svg"
                  alt="Market Growth"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <h3 className={`text-xl font-semibold text-darkSlate mb-3 ${isHebrew ? 'text-right' : ''}`}>
                {t.features.feature1.title}
              </h3>
              <p className={`text-mediumGray leading-relaxed ${isHebrew ? 'text-right' : ''}`}>
                {t.features.feature1.description}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-peachBg p-8 rounded-xl border border-lightGray hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 mb-6 mx-auto">
                <Image
                  src="/images/innovation-icon.svg"
                  alt="Innovation"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <h3 className={`text-xl font-semibold text-darkSlate mb-3 ${isHebrew ? 'text-right' : ''}`}>
                {t.features.feature2.title}
              </h3>
              <p className={`text-mediumGray leading-relaxed ${isHebrew ? 'text-right' : ''}`}>
                {t.features.feature2.description}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-peachBg p-8 rounded-xl border border-lightGray hover:shadow-xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 mb-6 mx-auto">
                <Image
                  src="/images/team-collaboration.svg"
                  alt="Team Growth"
                  width={200}
                  height={200}
                  className="w-full h-full"
                />
              </div>
              <h3 className={`text-xl font-semibold text-darkSlate mb-3 ${isHebrew ? 'text-right' : ''}`}>
                {t.features.feature3.title}
              </h3>
              <p className={`text-mediumGray leading-relaxed ${isHebrew ? 'text-right' : ''}`}>
                {t.features.feature3.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl font-bold text-white mb-12 text-center ${isHebrew ? 'text-right' : ''}`}>
            {t.impact.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{t.impact.stat1.value}</div>
              <div className="text-xl text-pink-100">{t.impact.stat1.label}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{t.impact.stat2.value}</div>
              <div className="text-xl text-pink-100">{t.impact.stat2.label}</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">{t.impact.stat3.value}</div>
              <div className="text-xl text-pink-100">{t.impact.stat3.label}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Form Section */}
      <section className="bg-peachBg py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`text-center mb-12 ${isHebrew ? 'text-right' : ''}`}>
            <h2 className="text-3xl font-bold text-darkSlate mb-4">
              {t.contact.title}
            </h2>
            <p className="text-mediumGray">
              {t.contact.subtitle}
            </p>
          </div>

          <form className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className={`block text-sm font-medium text-darkSlate mb-2 ${isHebrew ? 'text-right' : ''}`}>
                  {t.contact.firstName}
                </label>
                <input
                  type="text"
                  id="firstName"
                  className={`w-full px-4 py-3 border border-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${isHebrew ? 'text-right' : ''}`}
                  placeholder={t.contact.firstNamePlaceholder}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={`block text-sm font-medium text-darkSlate mb-2 ${isHebrew ? 'text-right' : ''}`}>
                  {t.contact.lastName}
                </label>
                <input
                  type="text"
                  id="lastName"
                  className={`w-full px-4 py-3 border border-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${isHebrew ? 'text-right' : ''}`}
                  placeholder={t.contact.lastNamePlaceholder}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={`block text-sm font-medium text-darkSlate mb-2 ${isHebrew ? 'text-right' : ''}`}>
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-3 border border-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${isHebrew ? 'text-right' : ''}`}
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="organization" className={`block text-sm font-medium text-darkSlate mb-2 ${isHebrew ? 'text-right' : ''}`}>
                {t.contact.organization}
              </label>
              <input
                type="text"
                id="organization"
                className={`w-full px-4 py-3 border border-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${isHebrew ? 'text-right' : ''}`}
                placeholder={t.contact.organizationPlaceholder}
              />
            </div>

            <div>
              <label htmlFor="message" className={`block text-sm font-medium text-darkSlate mb-2 ${isHebrew ? 'text-right' : ''}`}>
                {t.contact.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full px-4 py-3 border border-lightGray rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${isHebrew ? 'text-right' : ''}`}
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-lg text-lg font-medium hover:shadow-xl transition-all transform hover:scale-105"
            >
              {t.contact.submit}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-lightGray py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-4 gap-8 mb-8 ${isHebrew ? 'text-right' : ''}`}>
            <div>
              <div className={`flex items-center mb-4 ${isHebrew ? 'justify-end' : ''}`}>
                <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.54-3.13 8.79-7.5 9.93-.31.08-.63.13-.96.15-.33-.02-.65-.07-.96-.15C6.13 25.29 3 21.04 3 16.5V7.78l8-3.6z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">BiYé</span>
              </div>
              <p className="text-sm text-mediumGray">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-darkSlate mb-4">{t.footer.products}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-mediumGray hover:text-primary">FemTech Devices</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">IoT Solutions</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Software Platform</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-darkSlate mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-mediumGray hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Team</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Investors</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-darkSlate mb-4">{t.footer.support}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-mediumGray hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Contact</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-lightGray pt-8">
            <p className="text-center text-sm text-mediumGray">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
