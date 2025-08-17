import React from "react";
import { motion } from "framer-motion";
// import aboutImg from "../../assets/about.png"; // এখানে তোর ছবি path

const AboutUs = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center  p-6 gap-10">
      {/* Left Side Image */}

      {/* Right Side Text */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" backdrop-blur-lg  p-8 w-full text-center"
      >
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-4 text-green-900"
        >
          About <span className="">Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-400 text-lg leading-relaxed"
        >
          About Us (Text Content) Welcome to **Local Harvest**, your friendly
          neighborhood marketplace! We bring the **freshest, organic, and
          locally sourced fruits, vegetables, and produce** directly to your
          doorstep. Our mission is simple yet powerful: * To support hardworking
          **local farmers**. * To ensure that every family gets **healthy,
          chemical-free, and sustainable food choices**. * To build a bridge
          between communities and agriculture by making farm-fresh products
          easily accessible. At Local Harvest, we believe that food is not just
          about taste, but also about **trust and health**. Every product you
          see here is carefully selected from trusted local growers who care
          about nature as much as you do. We are committed to: * **Empowering
          farmers** by giving them a fair platform. * **Reducing food waste**
          through sustainable practices. * **Delivering freshness** with
          honesty, love, and care. By choosing Local Harvest, you are not just
          buying groceries – You are becoming a part of a **movement for a
          healthier lifestyle, a stronger community, and a greener future**.
          Together, let’s celebrate **freshness, sustainability, and community
          values** – one basket at a time!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-green-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-green-600"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutUs;
