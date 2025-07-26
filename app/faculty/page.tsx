import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import Speakers from "./components/Speakers";
import OrganizingCommittee from "./components/OrganizingCommitte";

const page = () => {
  return (
    <div>
      <Header />
      <div className="relative w-full ">
        <div className="absolute top-0 left-0">
          <img src="/faculty/left-background.svg" className="max-md:w-35 md:w-35 lg-100 xl:w-[70%]" alt="left" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <Speakers />
        <OrganizingCommittee />
      </div>
      <Footer />
    </div>
  );
};

export default page;
