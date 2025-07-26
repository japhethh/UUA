"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const data = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "package", label: "Packages" },
    { key: "faculty", label: "Faculty" },
    { key: "program", label: "Program" },
    { key: "travels", label: "Travels & Tours" },
    { key: "tourism", label: "Tourism" },
    { key: "sponsor", label: "Sponsor" },
    { key: "contact", label: "Contact Us" },
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
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* Desktop Button */}
        <div className="max-md:hidden">
          <button className="w-full py-3 px-6 bg-[#D92D40] text-white rounded-full">
            Register Now
          </button>
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
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 pb-4">
          <ul className="flex flex-col gap-2 mt-2">
            {data.map((item) => {
              const link = item.key === "home" ? "/" : `/${item.key}`;
              const isActive = pathname === link;
              return (
                <li key={item.key}>
                  <Link
                    href={link}
                    className={`block py-2 px-2 text-sm text-[#4B4B4B] font-semibold rounded hover:bg-gray-50 transition-colors ${
                      isActive ? "text-[#CC0101] underline" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="mt-4 w-full py-3 px-6 bg-[#D92D40] text-white rounded-full">
            Register Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
