"use client"
import React from "react";

const ExperienceTheUAAC = () => {
  const [showVideo, setShowVideo] = React.useState(false);
  return (
    <div className="mt-15">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-center leading-tight ">
          Experience the <br /> UAAC Difference
        </h1>
        <p className="text-zinc-700 text-center">
          Watch our video to discover what makes the Urological Association of
          Asia Congress the premier event for urology professionals across the
          region.
        </p>
      </div>

      <div className="mt-5">
        <div className="bg-[#FAFAFA] rounded-[3rem] w-full aspect-video flex flex-col justify-start items-start relative shadow-sm overflow-hidden">
          {showVideo ? (
            <video src="/root/experience-uaac.mp4" controls autoPlay className="absolute inset-0 w-full h-full object-cover rounded-[3rem]" />
          ) : (
            <>
              <div className="pt-10 pl-10">
                <h2 className="text-lg font-semibold text-black mb-1">UAA: Advancing Urological Excellence Across Asia</h2>
                <div className="flex gap-6 text-zinc-500 text-sm mb-2">
                  <span>506k views</span>
                  <span>1 month ago</span>
                </div>
              </div>
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F4F4F4] text-zinc-500 rounded-full px-8 py-3 shadow text-base font-medium"
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
