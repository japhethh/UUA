import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="flex justify-center items-center max-md:px-2">
        <div className="flex flex-col justify-center items-center gap-4 mt-30 max-md:mt-8 max-md:gap-3 w-full">
          <h1 className="rounded-full py-2 px-5 border border-zinc-100 text-[#4B4B4B] bg-white w-fit flex flex-row gap-2 text-base max-md:text-sm">
            <span>
              <img
                src="/root/flag.svg"
                alt="Flag"
                className="w-5 h-5 max-md:w-4 max-md:h-4"
              />
            </span>
            <span>Philippines</span>
          </h1>
          <div className="max-md:w-full max-md:flex max-md:justify-center">
            <img
              src="/root/hero-title-text.svg"
              alt="Hero"
              className="max-md:w-full"
            />
          </div>
          <h1 className="text-center text-lg md:text-xl font-normal max-w-2xl max-md:text-base max-md:max-w-xs">
            Join Asia’s leading urology experts, innovators, and researchers as
            we shape the future of urological care from Taiwan 2025 to the
            Philippines in 2026.
          </h1>

          <div className="flex justify-center items-center gap-4 max-md:gap-2 max-md:flex-col w-full">
            <Link href={"/register"}>
              <button className="rounded-full cursor-pointer py-2 px-5 max-md:py-1 max-md:px-4 bg-[#0971B3] text-white text-base max-md:text-sm w-fit">
                Register Now
              </button>
            </Link>
            <button className="rounded-full py-2 px-5 max-md:py-1 max-md:px-4 bg-[#D92D40] text-white text-base max-md:text-sm w-fit">
              Learn More.
            </button>
          </div>
        </div>
      </div>
      <div className="mt-15 max-md:mt-8">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 max-md:gap-6">
          {/* Card 1 */}
          <div className="border-6 border-[#D92D40] rounded-[2.5rem] max-md:rounded-2xl p-7 px-5 max-md:p-4 max-md:px-3">
            <div>
              <h1 className="rounded-full py-2 px-5 text-[#4B4B4B] bg-[#F4F4F4] w-fit flex flex-row gap-2 text-base font-normal max-md:text-sm">
                <span>About the Congress</span>
              </h1>
            </div>
            <h1 className="text-3xl max-md:text-xl font-semibold mt-4 text-[#1E1E1E]">
              Advancing
              <br />
              Urology Across Asia
            </h1>
            <p className="text-zinc-600 text-xs max-md:text-sm mt-4">
              The UAAC is a premier annual event that gathers top-tier
              urologists, researchers, and medical innovators from across Asia.
              It serves as a platform to exchange insights, explore emerging
              technologies, and elevate standards in urological care.
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
              Two Years of
              <br />
              Innovation and Impact
            </h1>
            <p className="text-zinc-600 text-xs max-md:text-sm mt-4">
              The 22nd UAAC will be hosted in Taiwan this August 2025, promising
              world-class discussions and breakthroughs. The journey continues
              in 2026 as the Philippines proudly hosts the 23rd UAAC, further
              expanding the congress’ regional impact.
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
              Learn.
              <br />
              Collaborate. Lead.
            </h1>
            <p className="text-zinc-600 text-xs max-md:text-sm mt-4">
              Whether you’re an established professional or an emerging voice in
              the field, UAAC welcomes you to connect, contribute, and grow.
              Discover new perspectives, build lasting partnerships, and help
              shape the future of urology in Asia.
            </p>
          </div>
        </div>
        <div className="rounded-[2.5rem] max-md:rounded-2xl bg-gray-100 h-96 max-md:h-48 w-full mt-4"></div>
      </div>
    </div>
  );
};

export default Hero;
