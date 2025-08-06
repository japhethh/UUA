import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import CulturalJourney from "./components/CulturalJourney";
import FilipinoFiestas from "./components/FilipinoFiestas";
import Hospitality from "./components/Hospitality";
import Theylooks from "./components/Theylooks";

const page = () => {
  return (
    <div>
      <Header />
      <CulturalJourney />
      <div className="max-w-7xl mx-auto px-4">
        <FilipinoFiestas />
        <Hospitality />
        <Theylooks />
      </div>
      <Footer />
    </div>
  );
};

export default page;
