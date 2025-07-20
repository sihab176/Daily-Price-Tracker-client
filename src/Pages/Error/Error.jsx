import React from "react";
import ErrorAnimation from "../../assets/404 error page with cat.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto md:my-20 max-w-[650px]  mt-40">
        <Lottie animationData={ErrorAnimation} loop={true}></Lottie>
        <div className="text-center flex justify-center items-center">
          <Link to="/">
            <button className="btn bg-primary ">Back Home </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
