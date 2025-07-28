"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getTranslations, useLocale, Locale } from "@/app/i18n";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "ph", label: "Filipino" },
  { code: "zh-TW", label: "中文 (繁體)" },
];
const Header = () => {
  const { locale, setLocale } = useLocale();
  const [t, setT] = useState<any>({});

  useEffect(() => {
    getTranslations(locale).then(setT);
  }, [locale]);

  const data = [
    { key: "home" },
    { key: "about" },
    // { key: "package" },
    { key: "faculty" },
    { key: "program" },
    { key: "travels" },
    { key: "tourism" },
    { key: "sponsor" },
    { key: "contact" },
  ];
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();
  return (
    <div className="border-b border-gray-100 bg-white sticky top-0 z-50 ">
      <div className="py-5 px-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="h-8 w-auto" />
        </div>
        {/* Desktop Nav */}
        <ul className="max-md:hidden">
          {data.map((item) => {
            const link = item.key === "home" ? "/" : `/${item.key}`;
            const isActive = pathname === link;
            return (
              <li key={item.key} className="inline-block mr-4">
                <Link
                  href={link}
                  className={`hover:underline text-[#4B4B4B] text-sm font-semibold uppercase transition-colors ${
                    isActive ? "text-[#CC0101] underline" : ""
                  }`}
                >
                  {item.key.charAt(0).toUpperCase() + item.key.slice(1)}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <div>
          <label htmlFor="lang-select">{t.language || "Language"}: </label>
          <select
            id="lang-select"
            value="en"
            disabled
          >
            <option value="en">English</option>
          </select>
        </div> */}
        {/* Desktop Button */}
        <div className="max-md:hidden">
          <Link href="/register">
            <button className="w-full py-3 px-6 bg-[#D92D40] text-white rounded-full cursor-pointer">
              Register Now
            </button>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-full border border-gray-200"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#4B4B4B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </svg>
        </button>
      </div>
      {/* Mobile Nav */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 px-8 pb-4 shadow-xl rounded-b-2xl transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        style={{
          transitionProperty: "max-height, opacity",
        }}
      >
        <ul className="flex flex-col gap-2 mt-2">
          {data.map((item, idx) => {
            const link = item.key === "home" ? "/" : `/${item.key}`;
            const isActive = pathname === link;
            return (
              <li
                key={item.key}
                className={`transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: menuOpen ? `${idx * 40}ms` : "0ms" }}
              >
                <Link
                  href={link}
                  className={`block py-2 px-2 text-sm text-[#4B4B4B] font-semibold rounded hover:bg-gray-50 transition-colors ${
                    isActive ? "text-[#CC0101] underline" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {t[item.key] || item.key}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/register">
          <button className="mt-4 w-full py-3 px-6 bg-[#D92D40] text-white rounded-full shadow transition-all duration-300">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
