import React from "react";
import Offer from "../../assets/offer-removebg-preview.png";
import Boom from "../../assets/boom-2-removebg-preview.png";

const HighlightAdd = () => {
  return (
    <div>
      {/* test =============> */}
      <div className="bg-red-100">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="flex items-center md:flex-row flex-col">
              <img className="max-w-[200px]" src={Offer} alt="" />
              <h1 className="text-4xl font-bold text-green-700">
                20 % Discount Lorem ipsum, dolor sit
              </h1>
            </div>
            <p className="pb-6 pl-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              .
            </p>
          </div>
          <div
            className="bg-cover bg-center w-full flex justify-center flex-1 "
            style={{ backgroundImage: `url(${Boom})` }}
          >
            <div className="pt-18 ">
              <img
                className="max-w-[200px] "
                src="https://i.ibb.co/jvf8cDKv/veg-1-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightAdd;
