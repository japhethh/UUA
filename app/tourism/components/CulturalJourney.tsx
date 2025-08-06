import React from "react";

const CulturalJourney = () => {
  return (
    <div className="w-full max-md:h-auto flex justify-center items-center px-0 max-md:px-2 py-0 max-md:py-8">
      <div className="md:hidden flex flex-col items-center text-center w-full">
        <h1 className="text-[#1E1E1E] text-3xl max-md:text-2xl leading-tight font-bold">
          More than just a congress <br /> — it’s a cultural journey.
        </h1>

        <p className="text-center text-zinc-500 mt-5 max-md:mt-2 w-2xl max-md:w-full text-lg max-md:text-sm mx-auto">
          Discover why the Philippines is one of Asia’s top travel gems. With
          over 7,000 islands, vibrant traditions, world-class hospitality, and
          breathtaking landscapes, there’s so much more waiting for you beyond
          the event.
        </p>
      </div>

      <div className="max-md:hidden w-full max-md:h-auto flex justify-center items-center px-0 max-md:px-2 py-0 max-md:py-8">
        <img src="/tourism/tourism-hero.svg" className="" alt="Image" />
      </div>
    </div>
  );
};

export default CulturalJourney;
