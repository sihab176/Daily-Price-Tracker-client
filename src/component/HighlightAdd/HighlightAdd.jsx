import React from "react";
import Offer from "../../assets/offer-removebg-preview.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import offer from "../../assets/offer-2-removebg-preview.png";

const HighlightAdd = () => {
  const axiosInstance = useAxios();

  const { data: advertisement = [] } = useQuery({
    queryKey: ["advertisement-admin"],
    queryFn: async () => {
      const res = await axiosInstance.get(
        "/advertisements/allProduct?status=approved"
      );
      return res.data;
    },
  });
  console.log(advertisement);

  return (
    <div>
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {advertisement?.map((add) => (
          <div className="bg-gradient-to-r from-[#68d8d6] via-[#9ceaef] to-white rounded-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            {/* Fruit Image */}
            <div className="flex-shrink-0 w-48 md:w-56 lg:w-64">
              <img
                src={add.image} // replace with your basket image
                alt="Fruit Basket"
                className="w-48 md:w-56 lg:w-64"
              />
            </div>
            <div className="w-[360px]">
              <img src={offer} alt="" />
            </div>
            {/* Text Content */}
            <div className="text-center md:text-left max-w-[360px]">
              <h3 className="text-lg md:text-xl font-medium text-gray-700 text-center">
                {add.title}
              </h3>
              {/* <div className="text-5xl md:text-6xl font-bold text-black mt-2 mb-1">
                10<span className="text-black text-5xl align-top">%</span>

              </div> */}
              <p className="text-lg text-green-800">{add.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HighlightAdd;
