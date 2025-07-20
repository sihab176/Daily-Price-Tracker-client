import React from "react";
import ForbiddenAnimation from "../../assets/forbidden403.json";
import Lottie from "lottie-react";

const Forbidden = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto md:my-20 max-w-[650px]  mt-40">
        <h className="text-4xl text-center font-bold flex justify-center">
          Forbidden access{" "}
        </h>
        <Lottie animationData={ForbiddenAnimation} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Forbidden;
