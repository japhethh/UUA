import React from "react";
import Package from "./components/Package";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BePartOfAsia from "./components/BePartOfAsia";

const page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <Package />
        <BePartOfAsia />
      </div>
      <Footer />
    </div>
  );
};

export default page;
