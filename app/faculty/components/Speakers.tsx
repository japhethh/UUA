import React from "react";

const speakers = [
  {
    name: "Dr. Ponco Birowo, SpU (K), PhD",
    title: "Urology. Andrology Subspecialist.",
    image: "/faculty/speaker-03.svg",
  },
  {
    name: "Diosdado DC. Limjoco, M.D",
    title: "General Surgery Urology",
    image: "/faculty/speaker-01.svg",
  },
  {
    name: "Sec. Teodoro Javier Herbosa, M.D",
    title: "Secretary of Health (DOH)",
    image: "/faculty/speaker-02.svg",
  },
];

const Speakers = () => {
  return (
    <section className="py-12 px-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">
          Keynote & Plenary Speakers
        </h2>
        <p className="text-center text-zinc-500 text-base mb-8 max-w-2xl mx-auto">
          Global leaders in urology share insights, breakthroughs, and visions
          for the future of urologic healthcare in Asia and beyond.
        </p>
        <div className="grid grid-cols-1 max-md:grid-cols-1 md:grid-cols-3 gap-2 max-md:gap-6">
          {speakers.map((speaker, idx) => (
            <div key={speaker.name} className="flex flex-col items-center w-full">
              <div className="relative w-64 h-72 max-md:w-full max-md:h-56 md:w-72 md:h-80 rounded-3xl max-md:rounded-xl">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 max-md:text-center md:text-start w-full">
                <h3 className="font-semibold text-md max-md:text-sm md:text-lg text-[#222]">
                  {speaker.name}
                </h3>
                <p className="text-zinc-500 text-xs max-md:text-[10px] md:text-sm mt-1">
                  {speaker.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
