'use client';

import Link from 'next/link';
import { Language, Translation } from '@/app/types';
import { useState } from 'react';

interface HeaderProps {
  lang: Language;
  t: Translation;
  onLanguageToggle: () => void;
}

export default function Header({ lang, t, onLanguageToggle }: HeaderProps) {
  const isRTL = lang === 'he';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-primary/20 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transform hover:scale-105 active:scale-95 transition-smooth">
            <span className="text-3xl font-bold text-primary hover:text-darkPeach transition-smooth">
              {t.header.logo}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            <a 
              href="#home" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.home}
            </a>
            <a 
              href="#about" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.about}
            </a>
            <a 
              href="#problem" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.problem}
            </a>
            <a 
              href="#solution" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.solution}
            </a>
            <a 
              href="#vision" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.vision}
            </a>
            <a 
              href="#investors" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.investors}
            </a>
            <a 
              href="#media" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.media}
            </a>
            <a 
              href="#contact" 
              className="text-textMedium hover:text-primary transition-smooth font-medium transform hover:scale-110 active:scale-95"
            >
              {t.header.menu.contact}
            </a>
            
            {/* Language Toggle */}
            <button
              onClick={onLanguageToggle}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-darkPeach transition-smooth font-medium shadow-md transform hover:scale-105 active:scale-95"
              aria-label="Toggle language"
            >
              {t.header.menu.langToggle}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onLanguageToggle}
              className="bg-primary text-white px-3 py-2 rounded-full hover:bg-darkPeach transition-smooth font-medium text-sm transform hover:scale-105 active:scale-95"
              aria-label="Toggle language"
            >
              {t.header.menu.langToggle}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-textMedium hover:text-primary p-2 transform hover:rotate-90 active:scale-95 transition-smooth"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-2 pb-2">
            <a 
              href="#home" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.home}
            </a>
            <a 
              href="#about" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.about}
            </a>
            <a 
              href="#problem" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.problem}
            </a>
            <a 
              href="#solution" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.solution}
            </a>
            <a 
              href="#vision" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.vision}
            </a>
            <a 
              href="#investors" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.investors}
            </a>
            <a 
              href="#media" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.media}
            </a>
            <a 
              href="#contact" 
              className="text-textMedium hover:text-primary transition-smooth font-medium py-2 transform hover:translate-x-2 active:scale-95"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.header.menu.contact}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
