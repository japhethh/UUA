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
      <div className="max-w-7xl mx-auto px-4">
        <Hero />
        <ShapingTheFuture />
        <ExperienceTheUAAC />
        <BePartOfAsia />
        <Footer />
      </div>
    </div>
  );
};

export default page;
