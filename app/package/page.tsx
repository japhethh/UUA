import React from "react";
import Package from "./components/Package";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BePartOfAsia from "./components/BePartOfAsia";

const page = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full ">
        <div className="absolute top-0 left-0">
          <img src="/package/left-background.svg" className="max-md:w-35 md:w-35 lg-100 xl:w-[100%]" alt="left" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Package />
        <BePartOfAsia />
      </div>
      <Footer />
    </div>
  );
};

export default page;
