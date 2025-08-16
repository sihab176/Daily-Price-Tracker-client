import React from "react";
import { motion } from "framer-motion";
import contact from "../../assets/contact-removebg-preview.png";
import { toast } from "react-toastify";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    from.reset();
    toast.success("successfully send massage");
  };
  return (
    <section className="min-h-screen   flex justify-between md:flex-row  flex-col ">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" backdrop-blur-lg rounded-2xl  p-10 w-full max-w-xl"
      >
        {/* Title */}
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center  mb-6"
        >
          Contact Us
        </motion.h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-white/80 border-teal-400 border focus:ring-2 focus:ring-teal-800"
          />

          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-white/80 border-teal-400 border focus:ring-2 focus:ring-teal-800"
          />

          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-white/80 border-teal-400 border focus:ring-2 focus:ring-teal-800"
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full bg-teal-500 text-black font-semibold py-3 rounded-xl shadow-lg hover:bg-teal-600"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center"
      >
        <motion.img
          src={contact}
          alt="Contact Illustration"
          className=""
          //   animate={{ y: [0, -10, 0] }} // up-down floating animation
          //   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default ContactUs;
