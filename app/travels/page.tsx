import React from "react";
import Hero from "./components/Hero";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MustExperience from "./components/MustExperience";
import HowItWork from "./components/HowItWork";
import PhillippineHightlight from "./components/PhillippineHightlight";

const page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <Hero />
        <MustExperience />
        <HowItWork />
        <PhillippineHightlight />
      </div>
      <Footer />
    </div>
  );
};

export default page;
