"use client";
import { useEffect } from "react";
import { useLocale } from "./i18n";

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return <>{children}</>;
}
