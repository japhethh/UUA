import React from "react";

const InPartnershipWith = () => {
  return (
    <div className="mt-15 mb-15 max-md:mt-8 max-md:mb-8 px-0 max-md:px-2">
      <div className="text-center">
        <h1 className="text-2xl max-md:text-lg font-semibold mb-5 max-md:mb-3">In Partnership With</h1>
      </div>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-md:gap-4">
        <div className="flex gap-3 max-md:gap-2 justify-around items-center">
          <img src="/about/partnership-01.svg" alt="Partnership 1" className="w-32 max-md:w-20 h-auto object-contain" />
          <img src="/about/partnership-02.svg" alt="Partnership 2" className="w-32 max-md:w-20 h-auto object-contain" />
          <img src="/about/partnership-06.svg" alt="Partnership 6" className="w-32 max-md:w-20 h-auto object-contain" />
        </div>
        <div className="flex gap-3 max-md:gap-2 justify-around items-center">
          <img src="/about/partnership-07.svg" alt="Partnership 5" className="w-32 max-md:w-20 h-auto object-contain" />
          <img src="/about/partnership-03.svg" alt="Partnership 3" className="w-32 max-md:w-20 h-auto object-contain" />
          <img src="/about/partnership-04.svg" alt="Partnership 4" className="w-32 max-md:w-20 h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};

export default InPartnershipWith;
