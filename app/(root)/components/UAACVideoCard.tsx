import React from "react";

const UAACVideoCard = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Experience the <br />
          <span className="text-blue-600">UAA Difference</span>
        </h1>
      </div>

      <p className="text-gray-600 mb-6">
        Watch our video to discover what makes the Urological Association of
        Asia Congress the premier event for urology professionals across the
        region.
      </p>


      <div
        className="mb-4 relative rounded-lg overflow-hidden min-h-[180px] flex flex-col justify-end bg-cover bg-center"
        style={{ backgroundImage: 'url(/root/image-bottom.svg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
        <div className="relative z-10 p-4">
          <h2 className="font-semibold text-white drop-shadow">
            UAA: Advancing Urological Excellence Across Asia
          </h2>
          <p className="text-sm text-gray-200 drop-shadow">500k views · 1 month ago</p>
        </div>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center">
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
        Play Now
      </button>
    </div>
  );
};

export default UAACVideoCard;
