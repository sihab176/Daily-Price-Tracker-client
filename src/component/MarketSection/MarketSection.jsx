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
    // <div className="py-16 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-28 items-center">
    //   {/* Text Content */}
    //   <motion.div
    //     initial={{ opacity: 0, x: -50 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     viewport={{ once: true, amount: 0.2 }}
    //     transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
    //     className="space-y-4 lg:ml-10"
    //   >
    //     <h2 className="text-3xl font-semibold ">
    //       <span className="italic font-cursive">Welcome to</span>{" "}
    //       <span className="font-bold">BerryFarm</span>
    //     </h2>
    //     <p className="text-gray-600 text-base leading-relaxed">
    //       Seascape is an everbearing strawberry variety that was initially
    //       developed for the California strawberry industry as a variety
    //       resistant to viral diseases common there. However, it has proven to be
    //       tolerant to early heat, requires less chilling, and even grows well on
    //       the East Coast. It is a dependable choice.
    //     </p>
    //     <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
    //       Know More
    //     </button>
    //   </motion.div>

    //   {/* Images */}
    //   <motion.div
    //     initial={{ opacity: 0, x: 50 }}
    //     whileInView={{ opacity: 1, x: 0 }}
    //     viewport={{ once: true, amount: 0.2 }}
    //     transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
    //     className="relative w-full flex justify-center items-center"
    //   >
    //     <img
    //       src={marketImg1}
    //       alt="Blueberries Bowl"
    //       className="w-72 h-72 object-cover rounded-lg shadow-lg relative "
    //     />
    //     <img
    //       src={marketImg2}
    //       alt="Strawberries"
    //       className="w-72 h-72 object-cover rounded-lg shadow-xl absolute md:top-[-30px] top-[-40px] md:left-10  left-20"
    //     />
    //   </motion.div>
    // </div>

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
