import React from "react";
import ScientificProgram from "./components/ScientificProgram";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full ">
        <div className="absolute top-0 left-0">
          <img
            src="/program/left-background.svg"
            className="max-md:w-35 md:w-35 lg-80 xl:w-80"
            alt="left"
          />
        </div>
        <div className="absolute top-0 right-0">
          <img
            src="/program/right-background.svg"
            className="max-md:w-35 md:w-35 lg-80 xl:w-80"
            alt="right"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <ScientificProgram />
      </div>
      <Footer />
    </div>
  );
};

export default page;
