import Header from "@/components/layout/Header";
import React from "react";
import Hero from "./components/Hero";
import ShapingTheFuture from "./components/ShapingTheFuture";
import ExperienceTheUAAC from "./components/ExperienceTheUAAC";
import BePartOfAsia from "./components/BePartOfAsia";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full ">
        <div className="absolute top-0 left-0">
          <img
            src="/root/left-background.svg"
            className="max-md:w-35 md:w-35 lg-100 xl:w-[100%]"
            alt="left"
          />
        </div>
        <div className="absolute top-0 right-0">
          <img
            src="/root/right-background.svg"
            className="max-md:w-35 md:w-35 lg-100 xl:w-[100%]"
            alt="right"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 max-md:px-2">
        <Hero />
        <div className="max-md:mt-10 md:mt-15">
          <ShapingTheFuture />
        </div>
        <div className="max-md:mt-10 md:mt-15">
          <ExperienceTheUAAC />
        </div>
        <div className="max-md:mt-10 md:mt-15">
          <BePartOfAsia />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
