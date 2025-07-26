import React from "react";

const BePartOfAsia = () => {
  return (
    <div className="mt-15 max-md:mt-8">
      <div className="w-full relative h-100 bg-[#FAFAFA] rounded-3xl p-10 max-md:p-4 flex max-md:flex-col max-md:gap-6 items-center">
        {/* Mobile: Image on top, Desktop: Image on right */}
        <div className="hidden max-md:flex w-full justify-center mb-4">
          <img src="/root/home-patient.svg" alt="Image" className="w-36 h-auto" />
        </div>
        <div className="flex h-full justify-start items-end max-md:justify-center max-md:items-start">
          <div className="flex flex-col gap-4 max-w-2xl max-md:max-w-full text-left max-md:text-center">
            <h1 className="leading-tight font-semibold text-3xl max-md:text-xl">
              Be Part of Asia’s <br className="max-md:hidden" /> Premier Urology Event
            </h1>
            <p className="text-lg max-md:text-sm text-zinc-500">
              Don’t miss the opportunity to connect, learn, and lead at UAAC
              2025 in Taiwan. Reserve your spot today and stay ahead in the
              field of urology.
            </p>
            <button className="py-2 px-4 max-md:py-1 max-md:px-3 w-fit bg-[#D92D40] text-sm max-md:text-xs text-white rounded-full mx-0 max-md:mx-auto">
              Play Now
            </button>
          </div>
        </div>
        <div className="flex md:ml-30 justify-center items-center max-md:hidden">
          <img src="/root/home-patient.svg" alt="Image" className="w-60 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default BePartOfAsia;
