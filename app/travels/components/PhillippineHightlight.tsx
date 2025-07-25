import React from "react";

const PhillippineHightlight = () => {
  return (
    <section className="py-10 max-md:py-6">
      <div className="mb-6 px-4 max-md:mb-4 max-md:px-2">
        <h2 className="text-xl max-md:text-lg md:text-2xl font-bold text-[#222] mb-1">Philippine<br className="max-md:hidden" /> Tour Highlights</h2>
      </div>
      <div className="grid max-md:grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-4 px-4 max-md:px-2 md:px-0">
        <div className="relative rounded-3xl max-md:rounded-lg overflow-hidden aspect-[16/10] md:aspect-[10/7] flex items-end group shadow-lg">
          <img
            src="/travels/hightlight-image-01.svg"
            alt="Let's Explore the Philippines Together!"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 p-8 max-md:p-4 md:p-10">
            <h3 className="text-white text-2xl max-md:text-lg md:text-3xl font-bold mb-6 max-md:mb-4 leading-tight max-w-xs">
              Let's Explore the Philippines Together!
            </h3>
            <button className="bg-white text-black rounded-full px-6 max-md:px-4 py-2 max-md:py-1 font-medium shadow hover:bg-white/70 transition text-sm max-md:text-xs md:text-base">
              Explore Now
            </button>
          </div>
        </div>
        <div className="relative w-full rounded-3xl max-md:rounded-lg overflow-hidden aspect-[16/10] md:aspect-[10/7] flex items-end group shadow-lg">
          <img
            src="/travels/hightlight-image-02.svg"
            alt="See What's Waiting for You"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 p-8 max-md:p-4 md:p-10">
            <h3 className="text-white text-2xl max-md:text-lg md:text-3xl font-bold mb-6 max-md:mb-4 leading-tight max-w-xs">
              See What's Waiting for You
            </h3>
            <button className="bg-[#0971B3] text-white rounded-full px-6 max-md:px-4 py-2 max-md:py-1 font-medium shadow hover:bg-[#085a8c] transition text-sm max-md:text-xs md:text-base">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhillippineHightlight;