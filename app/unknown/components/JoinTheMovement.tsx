import React from "react";

const JoinTheMovement = () => {
  return (
    <section className="mt-15 mb-15 max-md:mt-8 max-md:mb-8">
      <div className="flex flex-col items-center text-center mb-8 px-4 max-md:mb-6 max-md:px-2">
        <h1 className="text-[#222] text-2xl md:text-3xl font-bold leading-tight mb-2 max-md:text-lg">
          Join the Movement.<br />
          Shape the Future of Urology.
        </h1>
        <p className="text-zinc-500 text-base md:text-lg max-w-xl mx-auto max-md:text-sm">
          Be part of Asia’s most prestigious urology congress — happening in the Philippines, 2026.
        </p>
      </div>
      <div className="flex justify-center max-md:px-2">
        <div className="relative w-full aspect-[16/10] md:aspect-[16/7] rounded-[30px] md:rounded-[40px] overflow-hidden shadow-lg max-w-2xl md:max-w-4xl">
          <img
            src="/unknown/movement-image.svg"
            alt="UAA Event"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 max-md:px-2">
            <button className="mb-4 px-6 py-2 max-md:px-4 max-md:py-1 bg-zinc-800/80 text-white rounded-full font-medium shadow hover:bg-zinc-700 transition text-sm md:text-base">Play Now</button>
            <h2 className="text-white text-lg md:text-xl font-semibold mb-2 max-w-lg mx-auto max-md:text-base">
              Watch how UAA is changing lives, driving innovation, and uniting global urology experts.
            </h2>
            <div className="flex gap-6 justify-center text-zinc-300 text-xs md:text-sm mt-2">
              <span>506k views</span>
              <span>1 month ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTheMovement;
