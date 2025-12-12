'use client';

import Link from 'next/link';
import { Language, Translation } from '@/app/types';

interface FooterProps {
  lang: Language;
  t: Translation;
}

export default function Footer({ lang, t }: FooterProps) {
  const isRTL = lang === 'he';

  return (
    <footer className="bg-gradient-to-br from-primary/10 to-secondary/10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Company Section */}
          <div>
            <div className="mb-4">
              <span className="text-3xl font-bold text-primary inline-block transform hover:scale-105 active:scale-95 transition-smooth cursor-pointer">{t.header.logo}</span>
            </div>
            <p className="text-textMedium text-sm mb-4 leading-relaxed">
              {t.footer.company.about}
            </p>
            <div className="space-y-2">
              {t.footer.company.links.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className="text-textMedium hover:text-primary transition-smooth text-sm font-medium inline-block transform hover:translate-x-1 active:scale-95"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-bold text-textDark mb-4">{t.footer.legal.title}</h3>
            <div className="space-y-2">
              {t.footer.legal.links.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.href}
                    className="text-textMedium hover:text-primary transition-smooth text-sm font-medium inline-block transform hover:translate-x-1 active:scale-95"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-bold text-textDark mb-4">{t.footer.connect.title}</h3>
            <a
              href={`mailto:${t.footer.connect.email}`}
              className="text-primary hover:text-darkPeach transition-smooth text-sm font-medium inline-block transform hover:scale-105 active:scale-95"
            >
              {t.footer.connect.email}
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-darkPeach transition-smooth font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95"
              >
                {t.header.menu.contact}
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary/20 pt-6 text-center">
          <p className="text-textMedium text-sm">{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
