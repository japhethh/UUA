import React from "react";

const FourImage = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-3 gap-3 mb-3">
        <img src="/about/about-image-01.svg" alt="Image" />
        <img src="/about/about-image-02.svg" alt="Image" />
        <img src="/about/about-image-03.svg" alt="Image" />
      </div>
      <img src="/about/about-image-04.svg" alt="Image" />
    </div>
  );
};

export default FourImage;
