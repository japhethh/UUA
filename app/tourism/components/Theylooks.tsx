import React from "react";

const Theylooks = () => {
  return (
    <div className="pt-15 max-md:pt-8 pb-15 max-md:pb-8 px-0 max-md:px-2">
      <div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 max-md:gap-4">
          <div className="flex flex-col gap-2 max-md:gap-4">
            <img src="/tourism/theylook-image-05.svg" alt="Fiesta" className="w-full h-auto object-cover rounded-2xl" />
            <img src="/tourism/theylook-image-06.svg" alt="Fiesta" className="w-full h-auto object-cover rounded-2xl" />
          </div>
          <div className="flex flex-col gap-2 max-md:gap-4">
            <img src="/tourism/theylook-image-03.svg" alt="Fiesta" className="w-full h-auto object-cover rounded-2xl" />
            <img src="/tourism/theylook-image-02.svg" alt="Fiesta" className="w-full h-auto object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theylooks;
