import React from "react";
import marketImg1 from "../../assets/mar-1.jpg";
import marketImg2 from "../../assets/mar-2.jpg";

const MarketSection = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">
      {/* Text Content */}
      <div className="space-y-4 lg:ml-10">
        <h2 className="text-3xl font-semibold ">
          <span className="italic font-cursive">Welcome to</span>{" "}
          <span className="font-bold">BerryFarm</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Seascape is an everbearing strawberry variety that was initially
          developed for the California strawberry industry as a variety
          resistant to viral diseases common there. However, it has proven to be
          tolerant to early heat, requires less chilling, and even grows well on
          the East Coast. It is a dependable choice.
        </p>
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
          Know More
        </button>
      </div>

      {/* Images */}
      <div className="relative w-full flex justify-center items-center">
        <img
          src={marketImg1}
          alt="Blueberries Bowl"
          className="w-72 h-72 object-cover rounded-lg shadow-lg relative "
        />
        <img
          src={marketImg2}
          alt="Strawberries"
          className="w-72 h-72 object-cover rounded-lg shadow-xl absolute md:top-[-30px] top-[-40px] md:left-10  left-20"
        />
      </div>
    </div>
  );
};

export default MarketSection;
