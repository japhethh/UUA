"use client"
import { useState, useEffect } from 'react';

export type Locale = 'en' | 'es' | 'ph' | 'zh';


const getDefaultLocale = (): Locale => {
  if (typeof window !== 'undefined') {
    // Prefer cookie if present
    const match = document.cookie.match(/(?:^|; )locale=([^;]*)/);
    if (match) return match[1] as Locale;
    // Fallback: try localStorage
    const stored = localStorage.getItem('locale');
    if (stored) return stored as Locale;
  }
  return 'en';
};

export function useLocale() {
  const [locale, setLocale] = useState<Locale>(getDefaultLocale());

  useEffect(() => {
    localStorage.setItem('locale', locale);
  }, [locale]);

  return { locale, setLocale };
}

export async function getTranslations(locale: Locale) {
  try {
    const res = await fetch(`/locales/${locale}/common.json`);
    if (!res.ok) throw new Error('Translation file not found');
    return await res.json();
  } catch (e) {
    return {};
  }
}
