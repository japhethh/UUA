import React from "react";

const BePartOfAsia = () => {
  return (
    <div className="w-full bg-[#FAFAFA] rounded-3xl max-md:rounded-xl h-[500px] max-md:h-auto mb-15 max-md:mb-8 px-0 max-md:px-2 flex items-center justify-center">
      <div className="w-full h-full flex justify-center items-center py-0 max-md:py-8">
        <div className="flex flex-col gap-3 max-md:gap-2 w-full">
          <h1 className="font-semibold text-4xl max-md:text-xl text-center leading-tight">
            Be Part of Asia’s <br /> Premier Urology Event
          </h1>
          <p className="text-lg max-md:text-sm w-2xl max-md:w-full text-zinc-500 mt-4 max-md:mt-2 mx-auto text-center">
            Don’t miss the opportunity to connect, learn, and lead at UAAC 2025
            in Taiwan. Reserve your spot today and stay ahead in the field of
            urology.
          </p>
          <div className="flex justify-center items-center mt-4 max-md:mt-2">
            <button className="py-2 max-md:py-1 px-4 max-md:px-3 rounded-full bg-[#D92D40] text-white text-sm max-md:text-xs">
              Join Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BePartOfAsia;
