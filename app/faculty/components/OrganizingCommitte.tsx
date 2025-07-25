import React from "react";

const speakers = [
  {
    name: "Dr. Ponco Birowo, SpU (K), PhD",
    title: "Chair – Scientific Program Committee Dean, Indian School of Urology, New Delhi",
    image: "/faculty/committe-01.svg",
  },
  {
    name: "Diosdado DC. Limjoco, M.D",
    title: "Urological Research Advisor Consultant Urologist, The Medical City – Manila",
    image: "/faculty/committe-02.svg",
  },
  {
    name: "Sec. Teodoro Javier Herbosa, M.D",
    title: "Head, Continuing Medical Education Consultant, Makati Medical Center",
    image: "/faculty/committe-03.svg",
  },
  {
    name: "Sec. Teodoro Javier Herbosa, M.D",
    title: "Education and Training Committee Lead Urology Department Chair, Singapore General Hospital",
    image: "/faculty/committe-04.svg",
  },
];

const OrganizingCommittee = () => {
  return (
    <section className="py-12 px-2">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">
          Organizing Committee
        </h2>
        <p className="text-center text-zinc-500 text-base mb-8 max-w-2xl mx-auto">
          The minds behind UAA 2026 — curating content, shaping sessions, and
          ensuring scientific excellence throughout the congress.
        </p>
        <div className="grid grid-cols-1 max-md:grid-cols-1 md:grid-cols-4 gap-2 max-md:gap-6">
          {speakers.map((speaker, idx) => (
            <div key={speaker.name} className="flex flex-col items-center w-full">
              <div className="relative rounded-3xl max-md:rounded-xl w-56 h-64 max-md:w-full max-md:h-56">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-start w-full">
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

export default OrganizingCommittee;
