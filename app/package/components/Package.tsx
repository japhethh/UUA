import React from "react";

const Package = () => {
  return (
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
          {/* Explorer Package */}
          <div className="bg-white rounded-4xl max-md:rounded-2xl border border-gray-200 flex-1 min-w-[260px] max-w-sm mx-auto flex flex-col p-8 max-md:p-4 relative">
            <span className="text-[#CC0101] font-semibold text-sm max-md:text-xs mb-2">
              Explorer Package
            </span>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl max-md:text-lg font-bold text-[#1E1E1E]">₱9,999</span>
              <span className="text-xs max-md:text-[10px] text-gray-400">30% off</span>
            </div>
            <span className="text-xs max-md:text-[10px] font-normal text-gray-500 mb-2">
              One-time payment
            </span>
            <div className="font-normal text-sm max-md:text-xs mb-2 ">
              Ideal for students, residents, and early-career professionals
            </div>

            <ul className="text-sm max-md:text-xs text-[#1E1E1E] mb-6 space-y-2 border-t border-[#E8E8E8]">
              <li className="flex items-center gap-2 mt-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                General admission to all main congress sessions
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Access to selected workshops and symposiums
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Conference welcome kit
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Daily lunch & refreshments
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Certificate of participation
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                30% OFF – Early Bird Promo
              </li>
            </ul>
            <button className="bg-[#CC0101] text-white rounded-full py-3 max-md:py-2 font-semibold text-sm max-md:text-xs w-full mt-auto hover:bg-red-700 transition-colors">
              Register for Explorer
            </button>
          </div>
          {/* Adventurer Package */}
          <div className="bg-white rounded-4xl max-md:rounded-2xl border border-gray-200 flex-1 min-w-[260px] max-w-sm mx-auto flex flex-col p-8 max-md:p-4 relative">
            <span className="text-[#CC0101] font-semibold text-sm max-md:text-xs mb-2">
              Adventurer Package
            </span>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl max-md:text-lg font-bold text-[#1E1E1E]">₱29,999</span>
              <span className="text-xs max-md:text-[10px] text-gray-400">30% off</span>
            </div>
            <span className="text-xs max-md:text-[10px] font-normal text-gray-500 mb-2">
              One-time payment
            </span>
            <div className="font-normal text-[#1E1E1E] text-sm max-md:text-xs mb-2">
              For practicing urologists and medical professionals seeking deeper engagement
            </div>

            <ul className="text-sm max-md:text-xs text-[#1E1E1E] mb-6 space-y-2 border-t border-[#E8E8E8]">
              <li className="flex items-center gap-2 mt-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                All-access pass to all plenary sessions, breakout sessions, and scientific symposia
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Admission to hands-on workshops & poster presentations
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Priority seating in main events
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Conference premium kit & materials
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Daily lunch, refreshments & networking cocktails
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Official certificate with CPD credits (if applicable)
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                30% OFF – Early Bird Promo
              </li>
            </ul>
            <button className="bg-[#CC0101] text-white rounded-full py-3 max-md:py-2 font-semibold text-sm max-md:text-xs w-full mt-auto hover:bg-red-700 transition-colors">
              Register for Adventurer
            </button>
          </div>
          {/* VIP Access Package */}
          <div className="bg-white rounded-4xl max-md:rounded-2xl border border-gray-200 flex-1 min-w-[260px] max-w-sm mx-auto flex flex-col p-8 max-md:p-4 relative">
            <span className="text-[#CC0101] font-semibold text-sm max-md:text-xs mb-2">
              VIP Access: Premium Experience
            </span>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl max-md:text-lg font-bold text-[#1E1E1E]">₱59,999</span>
              <span className="text-xs max-md:text-[10px] text-gray-400">30% off</span>
            </div>
            <span className="text-xs max-md:text-[10px] font-normal text-gray-500 mb-2">
              One-time payment
            </span>
            <div className="font-normal text-sm max-md:text-xs mb-2">
              Designed for keynote speakers, sponsors, partners, and senior-level professionals
            </div>

            <ul className="text-sm max-md:text-xs text-[#1E1E1E] mb-6 space-y-2 border-t border-[#E8E8E8]">
              <li className="flex items-center gap-2 mt-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                All-access congress pass (plenary, symposiums, workshops, and closed sessions)
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                VIP seating & exclusive lounge access
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Backstage meet-and-greet with speakers and faculty
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Access to closed-door executive forums
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Exclusive congress gift box
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Full-day meal catering + gala dinner invitation
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                Reserved registration lane + concierge support
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src="/package/polygon.svg" alt="red-diamond" className="w-4 max-md:w-3 h-auto" />
                </span>
                30% OFF – Early Bird Promo
              </li>
            </ul>
            <button className="bg-[#CC0101] text-white rounded-full py-3 max-md:py-2 font-semibold text-sm max-md:text-xs w-full mt-auto hover:bg-red-700 transition-colors">
              Get VIP Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
