import React from "react";

const BePartOfAsia = () => {
  return (
    <div className="mt-15">
      <div className="w-full relative h-100 bg-[#FAFAFA] rounded-3xl p-10 flex">
      
        <div className="flex h-full w-full justify-start items-end">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1 className="leading-tight font-semibold text-3xl">
              Be Part of Asia’s <br /> Premier Urology Event
            </h1>
            <p className="text-lg text-zinc-500">
              Don’t miss the opportunity to connect, learn, and lead at UAAC
              2025 in Taiwan. Reserve your spot today and stay ahead in the
              field of urology.
            </p>
            <button className="py-2 px-4 w-fit bg-[#D92D40] text-sm text-white rounded-full">
              Play Now
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img src="/root/home-patient.svg" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default BePartOfAsia;
