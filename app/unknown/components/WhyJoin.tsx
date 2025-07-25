import React from "react";

const steps = [
  {
    icon: (
      <span>
        <img src="/travels/search-icon.svg" alt="Step 1" />
      </span>
    ),
    title: "Learn from the Best",
    desc: "Attend expert-led sessions, keynote talks, and live surgical demonstrations by world-renowned urologists.",
  },
  {
    icon: (
      <span>
        <img src="/travels/mouse-icon.svg" alt="Step 2" />
      </span>
    ),
    title: "Connect Globally",
    desc: "Network with thousands of professionals, researchers, and students from across Asia and beyond.",
  },
  {
    icon: (
      <span>
        <img src="/travels/check-icon.svg" alt="Step 1" />
      </span>
    ),
    title: "Experience Filipino Culture",
    desc: "Enjoy the warmth of Filipino hospitality through cultural showcases, local cuisine, and immersive side events.",
  },
];

const WhyJoin = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[#222]">
          Why Join UAA 2026?
        </h2>
        <p className="text-zinc-500 text-base md:text-lg">
          More than a congress — it’s a complete professional and cultural
          experience.
        </p>
      </div>
      <div className="grid mt-5 max-md:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-0 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col text-start px-6 py-4 bg-[#FAFAFA] rounded-3xl"
          >
            <div className="flex items-center justify-start ">

            {step.icon}
            </div>
            <div className="text-start">
              <h3 className="font-semibold text-lg md:text-xl text-[#222] mb-2 leading-tight mt-5">
                {step.title}
              </h3>
            </div>
            <p className="text-zinc-800 text-sm md:text-sm max-w-xs mx-auto">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoin;
