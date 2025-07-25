import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import UrologyEvent from "./components/UrologyEvent";

const page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <UrologyEvent />
      </div>
      <Footer />
    </div>
  );
};

export default page;
