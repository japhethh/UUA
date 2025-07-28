"use client"
import React from "react";

const ExperienceTheUAAC = () => {
  const [showVideo, setShowVideo] = React.useState(false);
  return (
    <div className="mt-15 max-md:mt-8">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-4xl max-md:text-2xl font-semibold text-center leading-tight ">
          Experience the <br className="max-md:hidden" /> UAA Difference
        </h1>
        <p className="text-zinc-700 text-center max-md:text-sm">
          Watch our video to discover what makes the Urological Association of
          Asia Congress the premier event for urology professionals across the
          region.
        </p>
      </div>

      <div className="mt-5 max-md:mt-4">
        <div
          className="rounded-[3rem] max-md:rounded-2xl w-full aspect-video flex flex-col justify-start items-start relative shadow-sm overflow-hidden bg-cover bg-center"
          style={!showVideo ? { backgroundImage: 'url(/root/experience-image-01.svg)' } : {}}
        >
          {showVideo ? (
            <video src="/root/experience-image-01.svg" controls autoPlay className="absolute inset-0 w-full h-full object-cover rounded-[3rem] max-md:rounded-2xl" />
          ) : (
            <>
              <div className="pt-10 pl-10 max-md:pt-5 max-md:pl-4">
                <h2 className="text-lg max-md:text-base font-semibold text-white mb-1">UAA: Advancing Urological Excellence Across Asia</h2>
                <div className="flex gap-6 text-zinc-500 text-sm max-md:text-xs mb-2">
                  <span>506k views</span>
                  <span>1 month ago</span>
                </div>
              </div>
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F4F4F4] text-zinc-500 rounded-full px-8 py-3 max-md:px-4 max-md:py-2 shadow text-base max-md:text-sm font-medium"
                onClick={() => setShowVideo(true)}
              >
                Play Now
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTheUAAC;
