// import React from "react";
// import marketImg1 from "../../assets/water-2-removebg-preview.png";
import logo1 from "../../assets/lo1.png";
import logo2 from "../../assets/lo2.png";
import logo3 from "../../assets/lo-3.png";
import logo4 from "../../assets/lo4.png";
import logo5 from "../../assets/lo5.png";
import logo6 from "../../assets/lo6.png";

// const MarketSection = () => {
//   return (
//    <section>
//     <h1 className="text-3xl text-center font-semibold">Hightest Quality</h1>
//      <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-items-center  px-8">
//       <section>
//         {/* se-1 */}
//         <div className="space-y-6">
//           <div >
//             <div className="flex items-center">
//               <img className="w-8  p-1 rounded-full bg-[#6dc7b8] " src={logo1} alt="" />
//               <h1>
//                 <span className="text-2xl font-semibold">
//                   100% Natural Fresh
//                 </span>{" "}
//               </h1>
//             </div>

//             <p>
//               Sweet, crunchy, and rich in <br /> beta-carotene.
//             </p>
//           </div>
//           <div>
//             <div className="flex items-center">
//               <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo2} alt="" />
//               <h1>
//                 <span className="text-2xl font-semibold">Organic Green</span>{" "}
//               </h1>
//             </div>
//             <p>
//               Nutrient-packed and great
//               <br /> for health.
//             </p>
//           </div>
//           <div>
//             <div className="flex items-center">
//               <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo3} alt="" />
//               <h1>
//                 <span className="text-2xl font-semibold">Fresh Hydrating</span>{" "}
//               </h1>
//             </div>
//             <p>
//               Cool, crisp, and great for <br /> detox.
//             </p>
//           </div>
//         </div>
//       </section>
//       {/* sec-2 */}
//       <section>
//         <img src='https://i.ibb.co.com/spr1rS5j/apple-removebg-preview.png' alt="fruit" />
//       </section>
//       {/* sec-3 */}
//       <section>
//         <div className="space-y-6">
//           <div>
//             <div>
//               <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo4} alt="" />
//               <h1>
//                 <span className="text-2xl font-semibold">Fresh Hydrating</span>{" "}
//               </h1>
//             </div>
//             <p>
//               Pungent, flavorful, and essential <br /> for cooking
//             </p>
//           </div>
//           <div>
//             <div className="flex items-center">
//               <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo5} alt="" />
//               <h1>
//                 logo{" "}
//                 <span className="text-2xl font-semibold">Always Fresh</span>{" "}
//               </h1>
//             </div>
//             <p>
//               Mild, soft, and low in <br /> calories.
//             </p>
//           </div>
//           <div>
//             <div className="flex items-center">
//               <img className="w-6  p-1 rounded-full bg-[#6dc7b8] " src={logo6} alt="" />
//               <h1>
//                 <span className="text-2xl font-semibold">Sustainable</span>{" "}
//               </h1>
//             </div>
//             <p>
//               Meaty texture, great for <br /> grilling.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//    </section>
//   );
// };

// export default MarketSection;

import { motion } from "framer-motion";

// Example animation variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const MarketSection = () => {
  const logos = [
    {
      src: logo1,
      title: "100% Natural Fresh",
      desc: "Sweet, crunchy, and rich in beta-carotene.",
    },
    {
      src: logo2,
      title: "Organic Green",
      desc: "Nutrient-packed and great for health.",
    },
    {
      src: logo3,
      title: "Fresh Hydrating",
      desc: "Cool, crisp, and great for detox.",
    },
    {
      src: logo4,
      title: "Fresh Hydrating",
      desc: "Pungent, flavorful, and essential for cooking.",
    },
    {
      src: logo5,
      title: "Always Fresh",
      desc: "Mild, soft, and low in calories.",
    },
    {
      src: logo6,
      title: "Sustainable",
      desc: "Meaty texture, great for grilling.",
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 md:px-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.h1
        className="text-3xl text-center font-semibold mb-12"
        variants={item}
      >
        Highest Quality
      </motion.h1>

      <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-items-center gap-12">
        {/* Left Column */}
        <motion.div className="space-y-6" variants={container}>
          {logos.slice(0, 3).map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start p-4 rounded-xl bg-white shadow-lg cursor-pointer"
              variants={item}
              whileHover="hover"
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  className="w-8 p-1 rounded-full bg-[#6dc7b8]"
                  src={logo.src}
                  alt={logo.title}
                />
                <h2 className="text-2xl font-semibold">{logo.title}</h2>
              </div>
              <p className="text-gray-600">{logo.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Middle Image */}
        <motion.div
          className="flex justify-center items-center"
          variants={item}
        >
          <motion.img
            src="https://i.ibb.co.com/spr1rS5j/apple-removebg-preview.png"
            alt="fruit"
            className=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </motion.div>

        {/* Right Column */}
        <motion.div className="space-y-6" variants={container}>
          {logos.slice(3, 6).map((logo, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start p-4 rounded-xl bg-white shadow-lg cursor-pointer"
              variants={item}
              whileHover="hover"
            >
              <div className="flex items-center gap-2 mb-2">
                <img
                  className="w-8 p-1 rounded-full bg-[#6dc7b8]"
                  src={logo.src}
                  alt={logo.title}
                />
                <h2 className="text-2xl font-semibold">{logo.title}</h2>
              </div>
              <p className="text-gray-600">{logo.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default MarketSection;
