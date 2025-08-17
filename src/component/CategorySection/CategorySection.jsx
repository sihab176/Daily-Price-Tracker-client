// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { motion } from "framer-motion";
// import {
//   FaAppleAlt,
//   FaCarrot,
//   FaFish,
//   FaBreadSlice,
//   FaSeedling,
// } from "react-icons/fa";

// const categories = [
//   {
//     id: 1,
//     name: "Fruits",
//     icon: <FaAppleAlt className="text-6xl text-teal-600" />,
//   },
//   {
//     id: 2,
//     name: "Vegetables",
//     icon: <FaCarrot className="text-6xl text-teal-600" />,
//   },
//   { id: 3, name: "Fish", icon: <FaFish className="text-6xl text-teal-600" /> },
//   {
//     id: 4,
//     name: "Bakery",
//     icon: <FaBreadSlice className="text-6xl text-teal-600" />,
//   },
//   {
//     id: 5,
//     name: "Organic",
//     icon: <FaSeedling className="text-6xl text-teal-600" />,
//   },
// ];

// export default function CategorySection() {
//   return (
//     <section className="grid grid-cols-5 gap-6">
//       <div className="bg-amber-300 flex flex-col items-center rounded-lg p-6">
//         <FaAppleAlt className="text-6xl text-teal-600" />
//         <h1 className="text-2xl">Fruits</h1>
//       </div>
//       <div className="bg-amber-300 flex flex-col items-center rounded-lg p-6">
//         <FaAppleAlt className="text-6xl text-teal-600" />
//         <h1 className="text-2xl">Fruits</h1>
//       </div>
//       <div className="bg-amber-300 flex flex-col items-center rounded-lg p-6">
//         <FaAppleAlt className="text-6xl text-teal-600" />
//         <h1 className="text-2xl">Fruits</h1>
//       </div>
//       <div className="bg-amber-300 flex flex-col items-center rounded-lg p-6">
//         <FaAppleAlt className="text-6xl text-teal-600" />
//         <h1 className="text-2xl">Fruits</h1>
//       </div>
//       <div className="bg-amber-300 flex flex-col items-center rounded-lg p-6">
//         <FaAppleAlt className="text-6xl text-teal-600" />
//         <h1 className="text-2xl">Fruits</h1>
//       </div>
//     </section>
//   );
// }
import {
  FaAppleAlt,
  FaCarrot,
  FaFish,
  FaBreadSlice,
  FaSeedling,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const categories = [
  {
    id: 1,
    name: "Fruits",
    icon: <FaAppleAlt className="text-6xl text-teal-600" />,
  },
  {
    id: 2,
    name: "Vegetables",
    icon: <FaCarrot className="text-6xl text-teal-600" />,
  },
  { id: 3, name: "Fish", icon: <FaFish className="text-6xl text-teal-600" /> },
  {
    id: 4,
    name: "Bakery",
    icon: <FaBreadSlice className="text-6xl text-teal-600" />,
  },
  {
    id: 5,
    name: "Organic",
    icon: <FaSeedling className="text-6xl text-teal-600" />,
  },
];

export default function CategorySection() {
  return (
    <section className="py-12 px-3">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Shop by Category
      </h2>

      {/* Marquee Section */}
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        <div className="grid grid-cols-5 gap-14 px-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className="flex flex-col items-center justify-center  bg-gradient-to-r from-teal-200 via-emerald-300 to-cyan-300  rounded-2xl shadow-lg p-6 w-48 cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {cat.icon}
              <h1 className="text-xl font-semibold mt-3 text-gray-700">
                {cat.name}
              </h1>
            </motion.div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
