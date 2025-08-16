// import React from "react";
// import marketImg1 from "../../assets/water-2-removebg-preview.png";
import logo1 from "../../assets/lo1.png";
import logo2 from "../../assets/lo2.png";
import logo3 from "../../assets/lo-3.png";
import logo4 from "../../assets/lo4.png";
import logo5 from "../../assets/lo5.png";
import logo6 from "../../assets/lo6.png";

const MarketSection = () => {
  return (
   <section>
    <h1 className="text-3xl text-center font-semibold">Hightest Quality</h1>
     <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-items-center  px-8">
      <section>
        {/* se-1 */}
        <div className="space-y-6">
          <div >
            <div className="flex items-center">
              <img className="w-8  p-1 rounded-full bg-[#6dc7b8] " src={logo1} alt="" />
              <h1>
                <span className="text-2xl font-semibold">
                  100% Natural Fresh
                </span>{" "}
              </h1>
            </div>

            <p>
              Sweet, crunchy, and rich in <br /> beta-carotene.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo2} alt="" />
              <h1>
                <span className="text-2xl font-semibold">Organic Green</span>{" "}
              </h1>
            </div>
            <p>
              Nutrient-packed and great
              <br /> for health.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo3} alt="" />
              <h1>
                <span className="text-2xl font-semibold">Fresh Hydrating</span>{" "}
              </h1>
            </div>
            <p>
              Cool, crisp, and great for <br /> detox.
            </p>
          </div>
        </div>
      </section>
      {/* sec-2 */}
      <section>
        <img src='https://i.ibb.co.com/spr1rS5j/apple-removebg-preview.png' alt="fruit" />
      </section>
      {/* sec-3 */}
      <section>
        <div className="space-y-6">
          <div>
            <div>
              <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo4} alt="" />
              <h1>
                <span className="text-2xl font-semibold">Fresh Hydrating</span>{" "}
              </h1>
            </div>
            <p>
              Pungent, flavorful, and essential <br /> for cooking
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo5} alt="" />
              <h1>
                logo{" "}
                <span className="text-2xl font-semibold">Always Fresh</span>{" "}
              </h1>
            </div>
            <p>
              Mild, soft, and low in <br /> calories.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo6} alt="" />
              <h1>
                <span className="text-2xl font-semibold">Sustainable</span>{" "}
              </h1>
            </div>
            <p>
              Meaty texture, great for <br /> grilling.
            </p>
          </div>
        </div>
      </section>
    </div>
   </section>
  );
};

export default MarketSection;
