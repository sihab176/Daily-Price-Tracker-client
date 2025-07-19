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
    if (!user) navigate("/login");
    else navigate(`/productDetails/${product._id}`);
  };

  return (
    <div className="w-11/12 mx-auto">
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
            alt="Shoes"
            className="w-full h-40 object-contain "
          />
        </figure>
        <div className=" px-4 py-3">
          <h2 className="card-title text-[20px] mb-1">{product?.marketName}</h2>
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
    </div>
  );
};

export default ProductCard;
