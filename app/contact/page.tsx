import React from "react";
import ContactUs from "./components/ContactUs";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default page;
