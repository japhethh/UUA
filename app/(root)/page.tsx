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
