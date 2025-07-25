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
      <div className="max-w-7xl mx-auto px-4">
        <Banner />
        <TwoImages />
        <InPartnershipWith />
      </div>
      <Footer />
    </div>
  );
};

export default page;
