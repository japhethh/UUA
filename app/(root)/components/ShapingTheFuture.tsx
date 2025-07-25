import React from "react";

const ShapingTheFuture = () => {
  const data = [
    {
      image: "/root/shaping-01.svg",
      title: "Abstract\nSubmission Opens",
      date: "April 30, 2025",
      buttonText: "Learn More.",
    },
    {
      image: "/root/shaping-02.svg",
      title: "Abstract\nSubmission Deadline",
      date: "April 30, 2025",
      buttonText: "Learn More.",
    },
    {
      image: "/root/shaping-03.svg",
      title: "Early Bird\nRegistration Starts",
      date: "April 30, 2025",
      buttonText: "Learn More.",
    },
    {
      image: "/root/shaping-04.svg",
      title: "Early Bird Registration",
      date: "April 30, 2025",
      buttonText: "Learn More.",
    },
    {
      image: "/root/shaping-05.svg",
      title: "Regular\nRegistration Closes",
      date: "April 30, 2025",
      buttonText: "Learn More.",
    },
    {
      image: "/root/shaping-06.svg",
      title: "Congress\nDates",
      date: "April 30, 2025",
      buttonText: "Learn More.",
    },
  ];
  return (
    <div className="mt-15 max-md:mt-8">
      <div className="flex flex-col gap-3 max-md:gap-2">
        <h1 className="text-4xl max-md:text-2xl font-semibold text-center ">
          Shaping the <br /> Future of Urology Together
        </h1>
        <p className="text-zinc-700 text-center max-md:text-sm">
          Discover the mission, milestones, and global community behind Asia’s
          most prestigious urology congress, from Taiwan 2025 to the Philippines
          2026.
        </p>
        <div className="flex justify-center items-center">
          <h1 className="rounded-full bg-[#FAFAFA] text-center py-1 px-5 max-md:py-0.5 max-md:px-3 border border-zinc-200 text-black w-fit flex flex-row gap-2 text-base max-md:text-sm">
            <span>Important Dates!</span>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-1 gap-3 max-md:gap-6 mt-5">
        {data.map((item, index) => (
          <div key={index} className="relative flex justify-center items-center w-full">
            <div className="relative rounded-2xl max-md:rounded-xl w-full">
              <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 w-full p-5 max-md:p-3 flex justify-center">
                <div className="backdrop-blur-[5px] border border-[#4B453C] rounded-xl max-md:rounded-lg p-4 max-md:p-2 w-full text-start">
                  <h1 className="text-white text-2xl max-md:text-lg font-semibold leading-tight mb-2">
                    {item.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < item.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h1>
                  <p className="text-white text-base max-md:text-sm mb-4">{item.date}</p>
                  <button className="rounded-full text-sm max-md:text-xs py-2 px-5 max-md:py-1 max-md:px-3 bg-[#D92D40] text-white font-medium">
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShapingTheFuture;
