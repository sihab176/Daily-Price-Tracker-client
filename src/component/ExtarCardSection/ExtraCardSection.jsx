import React from "react";
import pic1 from "../../assets/ex-1.jpg";
import pic2 from "../../assets/ex-2.jpg";
import pic3 from "../../assets/ex-3.jpg";
import { inView, motion } from "framer-motion";

const ExtraCardSection = () => {
  const fruits = [
    {
      title: "Citrus Fruits",
      color: "bg-yellow-100",
      image: `${pic1}`, // replace with your citrus image
      description:
        "Amet facilisis magna etiam tempor orci eu lobortis elementum.",
    },
    {
      title: "Pits Fruits",
      color: "bg-green-900",
      image: `${pic2}`, // replace with your pits fruit image
      description:
        "Amet facilisis magna etiam tempor orci eu lobortis elementum.",
    },
    {
      title: "Berries",
      color: "bg-red-800",
      image: `${pic3}`, // replace with your berries image
      description:
        "Amet facilisis magna etiam tempor orci eu lobortis elementum.",
    },
  ];

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-2">Taste of Nature</h2>

      <div className="grid md:grid-cols-3  gap-28">
        {fruits.map((fruit, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.2, duration: 0.5, ease: "easeOut" }}
            key={idx}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div
              className={`w-full h-72 rounded-t-full ${fruit.color} flex items-center   justify-center`}
            >
              <img
                src={fruit.image}
                alt={fruit.title}
                className="lg:w-[220px] md:w-[160px] w-[190px] h-[190px] lg:h-[190px] rounded-t-full object-cover "
              />
            </div>
            <h3 className="text-xl font-medium">{fruit.title}</h3>
            <p className="text-gray-500 px-4">{fruit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExtraCardSection;
