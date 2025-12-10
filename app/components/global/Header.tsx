'use client';

import Link from 'next/link';
import { Language, Translation } from '@/app/types';

interface HeaderProps {
  lang: Language;
  t: Translation;
  onLanguageToggle: () => void;
}

export default function Header({ lang, t, onLanguageToggle }: HeaderProps) {
  const isRTL = lang === 'he';

  return (
    <header className="bg-white border-b border-primary/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold text-primary hover:text-darkPeach transition-smooth">
              {t.header.logo}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <Link 
              href="/#home" 
              className="text-textMedium hover:text-primary transition-smooth font-medium"
            >
              {t.header.menu.home}
            </Link>
            <Link 
              href="/#about" 
              className="text-textMedium hover:text-primary transition-smooth font-medium"
            >
              {t.header.menu.about}
            </Link>
            <Link 
              href="/#solution" 
              className="text-textMedium hover:text-primary transition-smooth font-medium"
            >
              {t.header.menu.solution}
            </Link>
            <Link 
              href="/investors" 
              className="text-textMedium hover:text-primary transition-smooth font-medium"
            >
              {t.header.menu.investors}
            </Link>
            <Link 
              href="/contact" 
              className="text-textMedium hover:text-primary transition-smooth font-medium"
            >
              {t.header.menu.contact}
            </Link>
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-darkPeach transition-smooth font-medium shadow-md"
              aria-label="Toggle language"
            >
              {t.header.menu.langToggle}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:shadow-lg transition-smooth font-semibold"
            >
              {t.header.cta}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onLanguageToggle}
              className="bg-primary text-white px-3 py-2 rounded-full hover:bg-darkPeach transition-smooth font-medium text-sm"
            >
              {t.header.menu.langToggle}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex flex-col space-y-2 pb-2">
          <Link 
            href="/#home" 
            className="text-textMedium hover:text-primary transition-smooth font-medium py-2"
          >
            {t.header.menu.home}
          </Link>
          <Link 
            href="/#about" 
            className="text-textMedium hover:text-primary transition-smooth font-medium py-2"
          >
            {t.header.menu.about}
          </Link>
          <Link 
            href="/#solution" 
            className="text-textMedium hover:text-primary transition-smooth font-medium py-2"
          >
            {t.header.menu.solution}
          </Link>
          <Link 
            href="/investors" 
            className="text-textMedium hover:text-primary transition-smooth font-medium py-2"
          >
            {t.header.menu.investors}
          </Link>
          <Link 
            href="/contact" 
            className="text-textMedium hover:text-primary transition-smooth font-medium py-2"
          >
            {t.header.menu.contact}
          </Link>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:shadow-lg transition-smooth font-semibold text-center"
          >
            {t.header.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
