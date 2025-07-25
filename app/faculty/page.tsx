import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";
import Speakers from "./components/Speakers";
import OrganizingCommittee from "./components/OrganizingCommitte";

const page = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <Speakers />
        <OrganizingCommittee />
      </div>
      <Footer />
    </div>
  );
};

export default page;
