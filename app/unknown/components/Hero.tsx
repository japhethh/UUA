import React from "react";

const Hero = () => {
  return (
    <section className=" relative w-full h-[260px] md:h-[320px] flex items-center justify-center overflow-hidden">
      <img
        src="/unknown/unknown-image-01.svg"
        alt="hero-background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w-full flex items-start translate-y-2 justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-semibold text-center drop-shadow-lg">
          Asia's Biggest Urology Event is Callings
        </h1>
      </div>
    </section>
  );
};

export default Hero;
