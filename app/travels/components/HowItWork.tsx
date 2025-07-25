import React from "react";

const steps = [
  {
    icon: (
      <span>
        <img src="/travels/search-icon.svg" alt="Step 1" />
      </span>
    ),
    title: "Browse Available Tour Packages",
    desc: "Check out our selection of exciting local destinations tailored for UAA 2026 attendees.",
  },
  {
    icon: (
      <span>
        <img src="/travels/mouse-icon.svg" alt="Step 2" />
      </span>
    ),
    title: "Click on a Package You Like",
    desc: "Each package has a 'Book Now' button; clicking it will take you to our official partner's booking site.",
  },
  {
    icon: (
        <span>
        <img src="/travels/check-icon.svg" alt="Step 1" />
      </span>
    ),
    title: "Complete Your Booking",
    desc: "Fill out the booking form, select your dates, and complete payment directly on our trusted partner's site.",
  },
];

const HowItWork = () => {
  return (
    <section className="py-12 max-md:py-6 px-0 max-md:px-2">
      <div className="text-center mb-10 px-4 max-md:mb-6 max-md:px-2">
        <h2 className="text-2xl max-md:text-lg md:text-3xl font-bold mb-2 text-[#222]">
          How It Works
        </h2>
        <p className="text-zinc-500 text-base max-md:text-sm md:text-lg">
          Booking your dream trip is just a few clicks away!
        </p>
      </div>
      <div className="grid mt-5 max-md:grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-4 md:gap-12 px-4 max-md:px-2 md:px-0 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center text-center w-full">
            {step.icon}
            <h3 className="font-semibold text-lg max-md:text-base md:text-xl text-[#222] mb-2 leading-tight mt-10 max-md:mt-6">
              {step.title}
            </h3>
            <p className="text-zinc-500 text-sm max-md:text-xs md:text-base max-w-xs mx-auto">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
