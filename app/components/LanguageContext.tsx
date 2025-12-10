'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('biye-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'he')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'he' : 'en';
    setLang(newLang);
    localStorage.setItem('biye-lang', newLang);
  };

  const setLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('biye-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
