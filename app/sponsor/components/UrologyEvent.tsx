import React from "react";

const UrologyEvent = () => {
  return (
    <div className="w-full flex justify-center items-center mb-15 max-md:mb-8 px-0 max-md:px-2">
      <div className="w-full">
        <div className="h-[40vh] max-md:h-auto flex justify-center items-center py-0 max-md:py-8">
          <div className="flex flex-col items-center text-center w-full">
            <h1 className="text-[#1E1E1E] text-3xl max-md:text-xl leading-tight font-bold">
              Be Part of Asia’s Premier Urology Event
            </h1>
            <p className="text-center text-zinc-500 mt-2 max-md:mt-2 w-2xl max-md:w-full text-lg max-md:text-sm mx-auto">
              Showcase your brand on an international stage, connect with global
              healthcare leaders, and support innovation in urology. As a
              sponsor, your impact goes beyond visibility — you help shape the
              future of medical collaboration and education.
            </p>
            <button className="w-fit rounded-full py-2 max-md:py-1 px-4 max-md:px-3 bg-[#096FAF] mt-5 max-md:mt-2 text-white text-base max-md:text-sm">
              Become a Sponsor
            </button>
          </div>
        </div>
        {/* Refactored sponsor image grid */}
        {(() => {
          const sponsorRows = [
            [
              "/sponsor/sponsor-image-01.svg",
              "/sponsor/sponsor-image-02.svg",
              "/sponsor/sponsor-image-03.svg",
              "/sponsor/sponsor-image-04.svg",
            ],
            [
              "/sponsor/sponsor-image-05.svg",
              "/sponsor/sponsor-image-06.svg",
              "/sponsor/sponsor-image-07.svg",
              "/sponsor/sponsor-image-08.svg",
              "/sponsor/sponsor-image-13.svg",
            ],
            [
              "/sponsor/sponsor-image-09.svg",
              "/sponsor/sponsor-image-10.svg",
              "/sponsor/sponsor-image-11.svg",
              "/sponsor/sponsor-image-12.svg",
              "/sponsor/sponsor-image-15.svg",
            ],
          ];
          return (
            <div className="flex flex-col justify-center items-center gap-4 mt-8 max-w-4xl mx-auto">
              {sponsorRows.map((row, i) => (
                <div
                  key={i}
                  className="flex justify-between max-md:justify-center items-center gap-3 max-md:gap-2 w-full"
                >
                  {row.map((src, idx) => (
                    <img
                      key={src}
                      src={src}
                      alt="Sponsor Logo"
                      className="w-32 max-md:w-16 h-auto object-contain"
                    />
                  ))}
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default UrologyEvent;
