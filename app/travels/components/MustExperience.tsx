"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const destinations = [
  {
    title: "Boracay Beach Getaway",
    subtitle: "₱12,499 / 3D2N",
    image: "/travels/travel-image-01.svg",
    label: "Boracay",
  },
  {
    title: "Palawan Explorer Package",
    subtitle: "₱14,999 / 4D3N",
    image: "/travels/travel-image-02.svg",
    label: "Palawan",
  },
  {
    title: "Baguio City Escape",
    subtitle: "₱5,999 / 2D1N (Land Travel)",
    image: "/travels/travel-image-03.svg",
    label: "Baguio",
  },
  {
    title: "Bohol Eco Discovery",
    subtitle: "₱3,999 / 3D2N",
    image: "/travels/travel-image-04.svg",
    label: "Bohol",
  },
  {
    title: "Cebu Ocean Adventure",
    subtitle: "₱1,999 / 3D2N",
    image: "/travels/travel-image-05.svg",
    label: "Cebu",
  },
];

const MustExperience = () => {
  return (
    <section className="py-8 max-md:py-4 px-0 max-md:px-2">
      <div className="mb-6 px-4 max-md:mb-4 max-md:px-2">
        <h2 className="text-xl max-md:text-lg md:text-2xl font-bold text-[#222] mb-1">
          Must-Experience
        </h2>
        <h3 className="text-lg max-md:text-base md:text-xl font-medium text-[#222]">
          Philippine Destinations
        </h3>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative w-full px-4 max-md:px-2"
      >
        {/* Navigation buttons */}
        <div className="absolute md:top-0 max-md:-top-2 md:right-15 max-md:right-10 z-10 flex gap-2 mt-2 ">
          <CarouselPrevious className="w-7 h-7 rounded-full bg-[#E5E5E5] text-[#222] shadow-md" />
          <CarouselNext className="w-7 h-7 rounded-full bg-[#E53939] text-white shadow-md" />
        </div>

        <CarouselContent className="-ml-4 mt-10 max-md:mt-6">
          {destinations.map((dest, idx) => (
            <CarouselItem
              key={idx}
              className="md:basis-1/2 lg:basis-1/3 pl-4 max-md:pl-0"
            >
              <div className="relative h-[260px] max-md:h-[180px] md:h-[280px] overflow-hidden rounded-2xl max-md:rounded-lg shadow-lg group flex flex-col justify-end">
                <Image
                  src={dest.image}
                  alt={dest.label}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 z-20 max-md:top-2 max-md:right-2">
                  <Image
                    src="/travels/arrow-bottom-down.svg"
                    alt="arrow"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="relative z-10 p-4 max-md:p-2 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white text-lg max-md:text-base md:text-xl font-semibold mb-1">
                    {dest.label}
                  </div>
                  <div className="text-white text-base max-md:text-sm md:text-lg font-medium mb-1">
                    {dest.title}
                  </div>
                  <div className="text-zinc-200 text-xs max-md:text-[10px] md:text-sm font-normal">
                    {dest.subtitle}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default MustExperience;
