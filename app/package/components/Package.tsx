"use client";

import React, { useEffect, useState } from "react";
import PersonalDialog from "./PersonalDialog";
import { useLocale } from "@/app/i18n";

const Package = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedPackage, setSelectedPackage] = React.useState<string | null>(
    null
  );
  const [usdRate, setUsdRate] = useState<number | null>(null);
  const { locale } = useLocale();

  const handleRegister = (pkg: string) => {
    setSelectedPackage(pkg);
    setOpen(true);
  };

  const packagePricesPHP = {
    "Explorer Package": 9999,
    "Adventurer Package": 29999,
    "VIP Access: Premium Experience": 59999,
  };



useEffect(() => {
  async function fetchRate() {
    try {
      const res = await fetch(
        "https://api.frankfurter.app/latest?amount=1&from=PHP&to=USD"
      );
      const data = await res.json();
      if (data?.rates?.USD) {
        setUsdRate(data.rates.USD);
        console.log(`Fetched USD rate from Frankfurter: 1 PHP = $${data.rates.USD}`);
      } else {
        setUsdRate(null);
        console.warn('No USD rate found in Frankfurter API response:', data);
      }
    } catch (error) {
      setUsdRate(null);
    }
  }
  fetchRate();
}, []);

  const getUSD = (php: number) => {
    if (!usdRate) return "...";
    const usd = php * usdRate;
    return `$${usd.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  };

  const renderPrice = (packageName: keyof typeof packagePricesPHP) => {
    return locale === "ph"
      ? `₱${packagePricesPHP[packageName].toLocaleString()}`
      : getUSD(packagePricesPHP[packageName]);
  };

  const packageList = [
    {
      name: "Explorer Package",
      desc: "Ideal for students, residents, and early-career professionals",
      features: [
        "General admission to all main congress sessions",
        "Access to selected workshops and symposiums",
        "Conference welcome kit",
        "Daily lunch & refreshments",
        "Certificate of participation",
        "30% OFF – Early Bird Promo",
      ],
      button: "Register for Explorer",
    },
    {
      name: "Adventurer Package",
      desc: "For practicing urologists and medical professionals seeking deeper engagement",
      features: [
        "All-access pass to all plenary sessions, breakout sessions, and scientific symposia",
        "Admission to hands-on workshops & poster presentations",
        "Priority seating in main events",
        "Conference premium kit & materials",
        "Daily lunch, refreshments & networking cocktails",
        "Official certificate with CPD credits (if applicable)",
        "30% OFF – Early Bird Promo",
      ],
      button: "Register for Adventurer",
    },
    {
      name: "VIP Access: Premium Experience",
      desc: "Designed for keynote speakers, sponsors, partners, and senior-level professionals",
      features: [
        "All-access congress pass (plenary, symposiums, workshops, and closed sessions)",
        "VIP seating & exclusive lounge access",
        "Backstage meet-and-greet with speakers and faculty",
        "Access to closed-door executive forums",
        "Exclusive congress gift box",
        "Full-day meal catering + gala dinner invitation",
        "Reserved registration lane + concierge support",
        "30% OFF – Early Bird Promo",
      ],
      button: "Get VIP Access",
    },
  ];

  return (
    <>


      {/* Package cards */}
      <section className="w-full py-16 max-md:py-8 px-2 max-md:px-1">
        <div className="max-w-5xl mx-auto">
          <div className="mb-15 max-md:mb-8">
            <h2 className="text-center text-3xl max-md:text-xl font-semibold mb-5 max-md:mb-3">
              UAA 2026 Philippines <br /> Congress Experience Packages
            </h2>
            <p className="text-center text-gray-400 text-md max-md:text-sm mb-2 max-md:mb-1 w-3xl max-md:w-full mx-auto">
              Discover groundbreaking innovations, network with global experts,
              and help define the next era of urological care across Asia and
              beyond.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-md:gap-6 justify-center items-stretch">
            {packageList.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-4xl max-md:rounded-2xl border border-gray-200 flex-1 min-w-[260px] max-w-sm mx-auto flex flex-col p-8 max-md:p-4 relative"
              >
                <span className="text-[#CC0101] font-semibold text-sm max-md:text-xs mb-2">
                  {pkg.name}
                </span>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl max-md:text-lg font-bold text-[#1E1E1E]">
                    {renderPrice(pkg.name as keyof typeof packagePricesPHP)}
                  </span>
                  <span className="text-xs max-md:text-[10px] text-gray-400">
                    30% off
                  </span>
                </div>
                <span className="text-xs max-md:text-[10px] font-normal text-gray-500 mb-2">
                  One-time payment
                </span>
                <div className="font-normal text-sm max-md:text-xs mb-2 text-[#1E1E1E]">
                  {pkg.desc}
                </div>
                <ul className="text-sm max-md:text-xs text-[#1E1E1E] mb-6 space-y-2 border-t border-[#E8E8E8]">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 mt-2">
                      <img
                        src="/package/polygon.svg"
                        alt="red-diamond"
                        className="w-4 max-md:w-3 h-auto"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-[#CC0101] text-white rounded-full py-3 max-md:py-2 font-semibold text-sm max-md:text-xs w-full mt-auto hover:bg-red-700 transition-colors"
                  onClick={() => handleRegister(pkg.name)}
                >
                  {pkg.button}
                </button>
              </div>
            ))}
          </div>
        </div>
        <PersonalDialog
          open={open}
          setOpen={setOpen}
          selectedPackage={selectedPackage}
        />
      </section>
    </>
  );
};

export default Package;
