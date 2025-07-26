import React from "react";
import Banner from "./components/Banner";
import Header from "@/components/layout/Header";
import TwoImages from "./components/TwoImages";
import InPartnershipWith from "./components/InPartnershipWith";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full ">
      
        <div className="absolute top-0 right-0 z-0  ">
          <img src="/about/right-background.svg" className="w-60" alt="right" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 z-30 relative">
        <Banner />
        <TwoImages />
        <InPartnershipWith />
      </div>
      <Footer />
    </div>
  );
};

export default page;
