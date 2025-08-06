import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center max-md:px-2">
        <div className="flex flex-col justify-center items-center gap-4 mt-5 max-md:mt-8 max-md:gap-3 w-full">
          <div className="flex justify-center items-center">
            <img
              src="/root/uaa-icon.svg"
              alt="Hero"
              className="max-md:w-full"
            />
          </div>
          <div className="max-md:w-full max-md:flex max-md:justify-center">
            <h1 className="text-5xl font-bold text-center text-black">
              Celebrating Innovations <br /> of UrologyThe Filipino Way
            </h1>
          </div>

          <div>
            <h1 className="text-zinc-500 text-lg text-center max-w-3xl mx-auto">
              Step into the next era of urology in the Philippines - Asia’s
              rising hub for innovation, learning, and unity. UAA 2026 is more
              than a congress - it’s a celebration of progress.
            </h1>
          </div>

          <div className="flex justify-center items-center gap-4 max-md:gap-2 max-md:flex-col w-full">
            <Link href={"/register"}>
              <button className="rounded-full cursor-pointer py-2 px-5 max-md:py-1 max-md:px-4 bg-[#0971B3] text-white text-base max-md:text-sm w-fit">
                Register Now
              </button>
            </Link>
            <button className="rounded-full py-2 px-5 max-md:py-1 max-md:px-4 bg-yellow-500 text-white text-base max-md:text-sm w-fit">
              Learn More.
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className=" overflow-hidden flex items-center justify-center">
          <iframe
            width="50%"
            height="50%"
            src="https://www.youtube.com/embed/5vPx6fNQPZg?si=U3p1AA_6EiVRV92L"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="aspect-video min-w-4xl mx-auto bg-zinc-200 rounded-[2.5rem] "
          ></iframe>
        </div>
      </div>
      <div className="mt-15 max-md:mt-8">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-md:gap-6">
          {/* Card 1 */}
          <div className="border-6 border-[#D92D40] rounded-[2.5rem] max-md:rounded-2xl p-7 px-5 max-md:p-4 max-md:px-3">
            <div>
              <h1 className="rounded-full py-2 px-5 bg-[#D92D40] text-white w-fit flex flex-row gap-2 text-base font-normal max-md:text-sm">
                <span>About the Congress</span>
              </h1>
            </div>
            <h1 className="text-3xl max-md:text-xl font-semibold mt-4 text-[#1E1E1E]">
              Experience
              <br />
              Innovation.
            </h1>
            <p className="text-zinc-600 text-xs max-md:text-sm mt-4">
              Explore the cutting-edge of urology at UAA 2026. From advance
              technologies to game-changing surgical techniques, be part of a
              congress that’s shaping the future of urological care in Asia and
              beyond.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border-6 border-[#0971B3] rounded-[2.5rem] max-md:rounded-2xl p-7 px-5 max-md:p-4 max-md:px-3">
            <div>
              <h1 className="rounded-full py-2 px-5 text-[#4B4B4B] bg-[#F4F4F4] w-fit flex flex-row gap-2 text-base font-normal max-md:text-sm">
                <span>Taiwan 2025 → Philippines 2026</span>
              </h1>
            </div>
            <h1 className="text-3xl max-md:text-xl font-semibold mt-4 text-[#1E1E1E]">
              Experience
              <br />
              Collaboration.
            </h1>
            <p className="text-zinc-600 text-xs max-md:text-sm mt-4">
              Connect with the brightest minds in urology. UAA 2026 fosters
              global exchange. share learning, and meaningful partnerships
              across borders - because advancing urology is a team effort.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border-6 border-[#FFD600] rounded-[2.5rem] max-md:rounded-2xl p-7 px-5 max-md:p-4 max-md:px-3">
            <div>
              <h1 className="rounded-full py-2 px-5 text-[#4B4B4B] bg-[#F4F4F4] w-fit flex flex-row gap-2 text-base font-normal max-md:text-sm">
                <span>Join a Global Urology Community</span>
              </h1>
            </div>
            <h1 className="text-3xl max-md:text-xl font-semibold mt-4 text-[#1E1E1E]">
              Experience
              <br />
              Manila.
            </h1>
            <p className="text-zinc-600 text-xs max-md:text-sm mt-4">
              Beyond the lectures and scientific sessions, discover the warmth,
              color, and joy of Filipino culture. From world-famous hospitality
              to vibrant local festivals -UAA 2026 is not just a congress, it’s
              a celebration.
            </p>
          </div>
        </div>
        <div className="rounded-[2.5rem] max-md:rounded-2xl w-full mt-4">
          <img src="/root/root-image.svg" alt="root" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
