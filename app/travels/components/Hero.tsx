import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[300px] max-md:h-[220px] md:h-[400px] flex items-center justify-center">
      <img
        src="/travels/hero-image.svg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-md:px-2 w-full">
        <h1 className="text-white text-2xl max-md:text-lg md:text-2xl font-semibold mb-4 max-md:mb-2 drop-shadow-lg">
          Explore the Beauty of the <br className="max-md:hidden" />
          Philippines While Attending UAA 2026
        </h1>
        <p className="text-zinc-200 text-sm max-md:text-xs md:text-base mb-6 max-md:mb-3 max-w-xl max-md:max-w-full mx-auto">
          We’ve curated travel packages and local experiences so you can make the most of your stay — from cultural city tours to island adventures.
        </p>
        <button className="bg-[#0971B3] text-white rounded-full px-6 max-md:px-4 py-2 max-md:py-1 font-medium text-sm max-md:text-xs shadow hover:bg-[#085a8c] transition">
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
