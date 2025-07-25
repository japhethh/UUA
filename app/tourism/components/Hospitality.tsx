import React from "react";

const festivals = [
  {
    image: "/tourism/fiesta-image-05.svg",
    title: "Panagbenga Festival – Baguio City",
    desc: "Held every February, this 'Flower Festival' features colorful parades and floral floats. Locals warmly welcome guests, offering food, smiles, and stories about their mountain city.",
    button: "Learn More.",
  },
  {
    image: "/tourism/fiesta-image-06.svg",
    title: "Kadayawan Festival – Davao City",
    desc: "Celebrated every August, this harvest festival honors Davao’s indigenous roots and bountiful fruits. Visitors are treated to free fruits, cultural shows, and open-air feasts hosted by friendly locals.",
    button: "Learn More.",
  },
  {
    image: "/tourism/fiesta-image-07.svg",
    title: "Parada ng Lechon – Balayan, Batangas",
    desc: "Every June 24, roasted pigs are paraded in the streets — often dressed in costumes! Residents happily invite tourists to join in the eating, dancing, and water-drenching fun.",
    button: "Learn More.",
  },
];

const Hospitality = () => {
  return (
    <section className="py-10 max-md:py-6 px-0 max-md:px-2">
      <div>
        <h2 className="text-2xl max-md:text-lg md:text-3xl font-bold text-[#222] mb-2">
          A Celebration of Culture, <br />
          Warmth, and Filipino Hospitality
        </h2>
        <p className="text-zinc-500 text-base max-md:text-sm md:text-lg mb-8 max-md:mb-4 max-w-2xl max-md:max-w-full">
          In the Philippines, every festival is more than just a show — it’s an
          open invitation. From colorful parades to food-filled streets, locals
          proudly share their traditions and welcome guests like lifelong
          friends. Dive into these joyful celebrations where hospitality takes
          center stage.
        </p>

        <div className="grid max-md:grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-4 md:gap-10">
          {festivals.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center h-full w-full"
            >
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

export default Hospitality;
