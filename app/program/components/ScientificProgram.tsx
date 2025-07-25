import React from "react";
import Banner from "./Banner";

const schedule = [
  {
    day: "Day 1 – February 21, 2026 (Saturday)",
    image: "/program/scientific-image-01.svg",
    sessions: [
      {
        time: "08:30 AM – 10:00 AM",
        title: "Opening Ceremony & Plenary Keynote",
        subtitle: "Uniting Asia's Urology Experts",
        location: "Main Hall A",
      },
      {
        time: "10:30 AM – 12:00 PM",
        title: "Advances in Robotic Urologic Surgery",
        subtitle: "From Open Procedures to Precision Robotics",
        location: "Main Hall A",
      },
      {
        time: "1:30 PM – 03:00 PM",
        title: "Urology in the Digital Age",
        subtitle: "AI, Robotics, and Telemedicine",
        location: "Room B2",
      },
      {
        time: "1:30 PM – 03:00 PM",
        title: "Urology in the Digital Age",
        subtitle: "AI, Robotics, and Telemedicine",
        location: "Lounge Hall C",
      },
    ],
  },
  {
    day: "Day 2 – February 22, 2026 (Sunday)",
    image: "/program/scientific-image-01.svg",
    sessions: [
      {
        time: "08:30 AM – 10:00 AM",
        title: "Pediatric Urology Forum",
        subtitle: "Managing Congenital Anomalies",
        location: "Main Hall A",
      },
      {
        time: "10:30 AM – 12:00 PM",
        title: "Innovations in Urological Research",
        subtitle: "Emerging Technologies & Therapies",
        location: "Main Hall A",
      },
      {
        time: "1:30 PM – 03:00 PM",
        title: "Neuro-Urology and Functional Disorders",
        subtitle: "Bladder Control & Spinal Injuries",
        location: "Room B2",
      },
      {
        time: "03:30 PM – 05:00 PM",
        title: "Meet the Experts: Panel Discussion",
        subtitle: "Q&A with Keynote Speakers",
        location: "Lounge Hall C",
      },
    ],
  },
  {
    day: "Day 3 – February 23, 2026 (Monday)",
    image: "/program/scientific-image-01.svg",
        sessions: [
      {
        time: "08:30 AM – 10:00 AM",
        title: "Prostate Cancer Management",
        subtitle: "Guidelines, Technologies, & Global Perspectives",
        location: "Main Hall A",
      },
      {
        time: "10:30 AM – 12:00 PM",
        title: "Women in Urology Leadership Panel",
        subtitle: "Redefining Roles, Breaking Barriers",
        location: "Lounge Hall C",
      },
      {
        time: "1:30 PM – 03:00 PM",
        title: "Bladder Cancer Updates",
        subtitle: "Biomarkers, Imaging & Multimodal Treatments",
        location: "Room B1",
      },
      {
        time: "03:30 PM – 05:00 PM",
        title: "Resident Research Competition",
        subtitle: "Innovations by the Next Generation of Urologists",
        location: "Room B2",
      },
    ],
  },
];

const ScientificProgram = () => {
  return (
    <section className="py-8 max-md:py-4 px-0 max-md:px-2">
      <Banner />
      <div>
        {schedule.map((day, i) => (
          <div key={i} className="mb-16 max-md:mb-8">
            <div className="flex flex-col gap-2 mb-2">
              <div className="flex justify-between items-center text-sm max-md:text-xs font-medium">
                <span>{day.day}</span>
                <span className="max-md:hidden">Manila Marriott Hotel</span>
              </div>
              <div className="border-b-2 border-[#0971B3] mt-2" />
            </div>
            <div className="rounded-3xl max-md:rounded-xl overflow-hidden mb-8 max-md:mb-4 mt-5 max-md:mt-2">
              <img src={day.image} alt="Venue" className="w-full h-auto object-cover" />
            </div>
            <div className="bg-white ">
              {day.sessions.map((session, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 border-b border-[#E5E5E5] last:border-b-0 px-4 max-md:px-2 py-6 max-md:py-4"
                >
                  <div className="flex items-center gap-2 w-full md:w-1/5">
                    <img src="/program/time-icon.svg" alt="Time" className="w-4 max-md:w-3 h-auto" />
                    <span className="text-xs max-md:text-[10px] md:text-sm text-zinc-600 font-medium whitespace-nowrap">
                      {session.time}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-base max-md:text-sm md:text-lg text-[#222] mb-1">
                      {session.title}
                    </div>
                    <div className="text-zinc-500 text-xs max-md:text-[10px] md:text-sm">
                      {session.subtitle}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 w-full md:w-1/7 md:justify-start mt-2 md:mt-0">
                    <img src="/program/location-icon.svg" alt="Location" className="w-4 max-md:w-3 h-auto" />
                    <span className="text-xs max-md:text-[10px] md:text-sm text-zinc-600 font-medium whitespace-nowrap">
                      {session.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScientificProgram;