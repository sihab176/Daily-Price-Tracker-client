import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import { inView, motion } from "framer-motion";

// product card ============================================>
const ProductCard = ({ product, index }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  // console.log(product);

  // Filter today's price from price history
  const today = new Date().toISOString().split("T")[0];
  const todayPrice = product?.prices.find((p) => p.date === today);

  const handleViewDetails = () => {
    // if (!user) navigate("/login");
    // else navigate(`/productDetails/${product._id}`);
    navigate(`/productDetails/${product._id}`);
  };

  return (
    <>
      {/* <div className="w-11/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3, ease: "easeInOut" }, // smoother hover
          }}
          className="card bg-base-200 w-[360px] shadow-sm"
        >
          <figure className="bg-[#c4bc7b59] py-9">
            <img
              src={product?.image}
              alt="img"
              className="w-full h-40 object-contain "
            />
          </figure>
          <div className=" px-4 py-3">
            <h2 className="card-title text-[20px] mb-1">
              {product?.marketName}
            </h2>
            <p>
              <strong className="text-gray-500">Date :</strong> {product?.date}
            </p>
            <p className="text-base">
              <strong className="text-gray-500">Item Name :</strong>{" "}
              {product?.itemName.trim()} <br />
              <strong className="text-gray-500">Price :</strong> ৳
              {todayPrice ? todayPrice.price : product?.pricePerUnit}/kg
            </p>

            <div onClick={handleViewDetails} className="card-actions mt-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-7 py-1 rounded-full bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
              >
                Buy Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div> */}
      {/* new ======================================== */}
      <section className="w-11/12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3, ease: "easeInOut" }, // smoother hover
          }}
          className=" rounded-2xl shadow-2xl transition duration-300 bg-white relative"
        >
          <fieldset className="flex justify-center items-center">
            <img
              src={product?.image}
              alt="image"
              className="w-60 h-52 object-cover rounded-t-2xl"
            />
          </fieldset>
          <div className="p-4 text-center ">
            <h2 className="text-gray-800 font-semibold mb-2 text-2xl">
              {product?.marketName}
            </h2>
            <p className="text-black">
              <strong className=" text-green-900">
                {" "}
                {product?.itemName.trim()}
              </strong>{" "}
              <br />
              <strong className=""></strong> ৳
              {todayPrice ? todayPrice.price : product?.pricePerUnit}/kg
            </p>
            {/* button */}
            <div onClick={handleViewDetails} className=" mt-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mt-4 px-9 py-2 rounded-3xl  font-medium transition bg-teal-500 hover:bg-teal-600 cursor-pointer"
              >
                Buy Now
              </motion.button>
            </div>
          </div>
          <div className=" absolute top-0 right-0">
            <h1 className="text-sm flex justify-center bg-teal-600 px-4 py-1 w-10 rounded-tr-2xl ">
              New
            </h1>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ProductCard;
