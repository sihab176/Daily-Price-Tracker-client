import React from "react";
import BannerImage from "../../assets/bg-1-removebg-preview (1).png";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
const Banner = () => {
  const line1 = "Make healthy life with";
  const line2 = "fresh grocery";
  return (
    <section className="bg-[#cbf3f0] md:px-20 py-10 bg-gradient-to-t from-white/80 to-transparent bg-cover ">
      <div className="flex items-center justify-between lg:flex-row flex-col-reverse md:py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-7 text-black md:text-start text-center"
        >
          <p className="text-sm">
            🥦 Know Today’s Market Price Before You Shop!
          </p>
          {/* First Line */}
          <h1 className="text-5xl font-bold flex justify-center flex-wrap">
            {Array.from(line1).map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  type: "spring",
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          {/* Second Line with yellow color */}
          <h1 className="text-5xl font-bold  flex-wrap mt-2 text-yellow-500">
            {Array.from(line2).map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: line1.length * 0.04 + index * 0.04, // second line starts after first
                  type: "spring",
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            dolore <br /> nemo blanditiis? Corporis, distinctio voluptate?
            Nesciunt odit natus <br /> obcaecati similique!
          </p>
          <div className="flex gap-6 items-center md:ml-0 ml-14">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-4 py-2 flex items-center gap-1 rounded-full h-full bg-primary"
            >
              READ MORE <FaArrowRightLong />
            </motion.button>
            <button className="px-4 py-2 flex items-center gap-1 rounded-full h-full bg-white">
              VIEW ALL <FaArrowRightLong />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img className="h-[360px] " src={BannerImage} alt="banner" />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
