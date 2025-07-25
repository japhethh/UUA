import React from "react";

const Header = () => {
  const data = [
    "Home",
    "About",
    "Contact",
    "Faculty",
    "Program",
    "Travels & Tours",
    "Tourism",
    "Sponsor",
  ];
  return (
    <div className="border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="py-5 px-8 flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <ul>
          {data.map((item) => (
            <li key={item} className="inline-block mr-4 ">
              <a
                href={`/${item.toLowerCase()}`}
                className="hover:underline text-[#4B4B4B] font-semibold"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div>
          <button className="py-3 px-6 bg-yellow-500 text-white rounded-full">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
