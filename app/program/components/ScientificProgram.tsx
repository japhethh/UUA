"use client";
import React, { useState } from "react";
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
  const [selectedDay, setSelectedDay] = useState(0);
  return (
    <section className="py-8 max-md:py-4 px-0 max-md:px-2">
      <div className="text-center mb-8">
        <h2 className="font-bold text-2xl md:text-3xl mb-2">
          Official UAA 2026 Scientific Program
        </h2>
        <div className="text-zinc-500 text-base md:text-lg">
          4 Days of Innovation, Collaboration, and Medical Excellence in Urology
          <br />
          Join global experts, innovators.
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-[1200px] mx-auto">
        {/* Left: Day Navigation */}
        <div className="md:w-1/4 w-full flex md:block mb-4 md:mb-0 overflow-x-auto md:overflow-visible max-md:mb-6">
          <div className="flex md:flex-col gap-2 w-full border-r border-zinc-200 max-md:border-r-0 max-md:border-b">
            {schedule.map((day, i) => (
              <button
                key={i}
                className={`text-left px-4 py-3 md:px-6 md:py-4 cursor-pointer border-b border-zinc-200 transition-all duration-150 min-w-[180px] md:min-w-0 rounded-xl 
                  ${
                    selectedDay === i
                      ? "bg-[#0971B3] text-white font-semibold shadow-md"
                      : "bg-white hover:bg-zinc-100 text-zinc-900"
                  }`}
                onClick={() => setSelectedDay(i)}
              >
                <div className="text-xs sm:text-sm md:text-base font-medium">
                  {day.day}
                </div>
                <div
                  className={`text-[10px] sm:text-xs md:text-sm ${
                    selectedDay === i ? "text-blue-100" : "text-zinc-400"
                  }`}
                >
                  Manila Marriott Hotel
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Right: Main Content */}
        <div className="flex-1 w-full">
          <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-8">
            <img
              src={schedule[selectedDay].image}
              alt="Venue"
              className="w-full h-[180px] sm:h-[220px] md:h-[320px] object-cover object-center"
            />
          </div>
          <div className="bg-white rounded-xl md:rounded-2xl p-0">
            {schedule[selectedDay].sessions.map((session, idx) => (
              <div
                key={idx}
                className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0 border-b border-[#E5E5E5] last:border-b-0 px-2 sm:px-4 md:px-8 py-4 md:py-6"
              >
                <div className="flex items-center gap-2 w-full md:w-1/5 mb-2 md:mb-0">
                  <img
                    src="/program/time-icon.svg"
                    alt="Time"
                    className="w-5 sm:w-6 md:w-8 h-auto"
                  />
                  <span className="text-[10px] sm:text-xs md:text-sm text-zinc-600 font-medium whitespace-nowrap">
                    {session.time}
                  </span>
                </div>
                <div className="flex-1 flex items-center ml-15">
                  <div className="flex flex-col text-left w-full">
                    <div className="font-semibold text-xs sm:text-sm md:text-lg text-[#222] mb-1">
                      {session.title}
                    </div>
                    <div className="text-zinc-500 text-[10px] sm:text-xs md:text-sm">
                      {session.subtitle}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 w-full md:w-1/6 md:justify-start mt-2 md:mt-0">
                  <img
                    src="/program/location-icon.svg"
                    alt="Location"
                    className="w-5 sm:w-6 md:w-8 h-auto"
                  />
                  <span className="text-[10px] sm:text-xs md:text-sm text-zinc-600 font-medium whitespace-nowrap">
                    {session.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScientificProgram;
