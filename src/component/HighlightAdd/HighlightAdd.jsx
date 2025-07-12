import React from "react";
import Offer from "../../assets/offer-removebg-preview.png";
import Boom from "../../assets/boom-1-removebg-preview.png";

const HighlightAdd = () => {
  return (
    <div>
      {/* test =============> */}
      <div className="bg-yellow-200">
        <div className="flex justify-between">
          <div className="">
            <div className="flex items-center">
              <img className="max-w-[200px]" src={Offer} alt="" />
              <h1 className="text-4xl font-bold">20 % Discount </h1>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
              veniam qui similique consequuntur. Minus, eaque excepturi! Hic
              possimus temporibus quisquam.
            </p>
          </div>
          <div
            className="bg-cover bg-center w-full flex justify-center "
            style={{ backgroundImage: `url(${Boom})` }}
          >
            <img
              className="max-w-[300px] "
              src="https://i.ibb.co/jvf8cDKv/veg-1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightAdd;
