import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import Hero from "./components/Hero";
import JoinTheMovement from "./components/JoinTheMovement";
import WhyJoin from "./components/WhyJoin";
import Package from "../package/components/Package";

const page = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="max-w-7xl mx-auto px-4">
          <Hero />
          <JoinTheMovement />
          <WhyJoin />
          <Package />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
