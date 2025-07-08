import React from "react";
import BannerImage from "../../assets/bannerImage.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-green-100 md:px-20 py-10">
      <div className="flex items-center justify-between lg:flex-row flex-col-reverse">
        <div className="space-y-7 text-black md:text-start text-center">
          <p className="text-sm">🥦 Know Today’s Market Price Before You Shop!</p>
          <h1 className="text-5xl font-bold">
            Make healthy life with <br />{" "}
            <span className="text-yellow-500">fresh grocery</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            dolore <br /> nemo blanditiis? Corporis, distinctio voluptate?
            Nesciunt odit natus <br /> obcaecati similique!
          </p>
          <div className="flex gap-6 items-center">
            <button className="px-4 py-2 flex items-center gap-1 rounded-full h-full bg-primary">
              READ MORE <FaArrowRightLong />
            </button>
            <button className="px-4 py-2 flex items-center gap-1 rounded-full h-full bg-white">
              VIEW ALL <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div>
          <img src={BannerImage} alt="banner" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
