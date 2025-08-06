import React from "react";

const festivals = [
  {
    image: "/tourism/fiesta-image-04.svg",
    title: "Sinulog Festival",
    desc: "This fiesta is celebrated in Cebu every January to celebrate Sto. Niño de Cebu, a historic relic that was handed by Ferdinand Magellan to Raja Humabon in 1521.",
    button: "Learn More.",
  },
  {
    image: "/tourism/fiesta-image-02.svg",
    title: "Pahiyas Festival",
    desc: "Celebrated every May 15th in Lucban, Quezon, Pahiyas Festival is an offering of farmer's harvests to the Lord. Colorful decorations are displayed in every house, and free food are given to visitors.",
    button: "Learn More.",
  },
  {
    image: "/tourism/fiesta-image-01.svg",
    title: "Ati-Atihan Festival",
    desc: "January is the month of Aklanons celebrate the Ati-atihan festival in Aklan. It's a week-long celebration that honors Sto. Niño and Aetas. The festival features street parades, music and dancing.",
    button: "Learn More.",
  },
];

const FilipinoFiestas = () => {
  return (
    <section className="py-10 max-md:py-6 px-0 max-md:px-2 md:-mt-90">
      <div className="">
        <h2 className="text-2xl max-md:text-lg md:text-3xl font-bold text-white mb-2">Filipino Fiestas</h2>
        <p className="text-zinc-400 text-base max-md:text-sm md:text-lg mb-8 max-md:mb-4 max-w-2xl max-md:max-w-full">The Philippines has over 100 fiesta celebrations every year. Each fiesta is a celebration of every barangay's patron saints. Some major fiestas include the following</p>
        <div className="grid max-md:grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-4 md:gap-10">
          {festivals.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center h-full w-full">
              <div className="relative w-full rounded-[40px] max-md:rounded-2xl overflow-hidden aspect-[4/3] mb-6 max-md:mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-lg max-md:text-base md:text-xl text-[#222] mb-2 text-left w-full max-md:text-center">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm max-md:text-xs md:text-base mb-4 max-md:mb-2 text-left w-full max-md:text-center min-h-[64px] md:min-h-[72px] flex items-center">
                {item.desc}
              </p>
              <div className="w-full flex md:justify-end max-md:justify-center mt-auto">
                <button className="bg-[#0971B3] text-white rounded-full px-6 max-md:px-4 py-2 max-md:py-1 font-medium shadow hover:bg-[#085a8c] transition text-sm max-md:text-xs md:text-base">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilipinoFiestas;