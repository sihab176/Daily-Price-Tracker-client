import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router";
import ReviewSection from "./ReviewSection";
import PriceComparisonSection from "./PriceComparisonSection";
import { useState } from "react";
import Payments from "../Payments/Payments";
import useUserRole from "../../hooks/useUserRole";
import { motion } from "framer-motion";
import LoadingComponent from "../../component/Loading/LoadingComponent";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { role } = useUserRole();
  const navigate = useNavigate("");

  const [rechartDate, setRechartDate] = useState(null);
  // console.log(rechartDate);
  // todo: ✅ Fetch product data by ID =============>
  const { data: product, isLoading } = useQuery({
    queryKey: ["product-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res.data;
    },
  });

  // !✅ Add to Watchlist ==========================>
  const handleWatchlist = async () => {
    try {
      const res = await axiosSecure.post("/watchList", {
        productId: id,
        userEmail: user?.email,
        userName: user?.displayName,
        productName: product.itemName,
        market: product.marketName,
        date: product.date,
        image: product.image,
        prices: product?.prices,
        vendorName: product?.vendorName,
      });
      toast.success("Added to watchlist!");
      navigate("/dashboard/manageWatchList");
    } catch (err) {
      toast.error("Failed to add to watchlist.");
      console.log(err);
    }
  };

  // !✅ Go to payment ==============================>
  const handleBuy = async () => {
    document.getElementById("my_modal_1").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_1").close();
  };

  if (isLoading) return <LoadingComponent />;
  if (!product) return <p>Product not found.</p>;

  const isVendorOrAdmin = role === "Vendor" || role === "Admin" || !user;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 ">
      <h2 className="text-2xl font-bold mb-4">{product.itemName}</h2>

      <div className="grid md:grid-cols-2 gap-6 ">
        <motion.img
          className="rounded-xl shadow bg-base-200"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
            ease: "easeInOut",
          }}
          src={product.image}
          alt="product"
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="space-y-6 mt-20"
        >
          <p>
            <strong>🏪 Market:</strong> {product.marketName}
          </p>
          <p>
            <strong>📅 Date:</strong> {product.date}
          </p>
          <p>
            <strong>👨‍🌾 Vendor:</strong> {product.vendorName} (
            {product.vendorEmail})
          </p>
          <p>
            <strong>💰 Price:</strong> ৳{product.pricePerUnit} per unit
          </p>

          {/*  Watchlist & Buy Buttons ====================> */}
          <div className="mt-4 flex gap-4">
            <button
              className={`  px-3 py-1 rounded text-black ${
                isVendorOrAdmin
                  ? "cursor-not-allowed  bg-pink-100"
                  : "cursor-pointer bg-pink-400"
              }`}
              disabled={isVendorOrAdmin}
              onClick={handleWatchlist}
            >
              ⭐ Add to Watchlist
            </button>
            <button
              disabled={isVendorOrAdmin}
              className={`  px-3 py-1 rounded text-black ${
                isVendorOrAdmin
                  ? "cursor-not-allowed  bg-teal-100"
                  : "cursor-pointer bg-primary"
              }`}
              onClick={handleBuy}
            >
              🛒 Buy Product
            </button>
          </div>
        </motion.div>
      </div>
      {/* payments */}
      <div>
        <Payments
          closeModal={closeModal}
          price={product?.pricePerUnit}
          product={product}
        ></Payments>
      </div>
      {/*  comparison section ==================> */}
      <div>
        <PriceComparisonSection
          productId={id}
          price={product?.prices}
          setRechartDate={setRechartDate}
        />
      </div>

      {/* ✅ Price History Chart ===============>*/}
      <section className="mt-10">
        <h3 className="text-lg font-bold mb-2">📊 Price Trend Comparison</h3>

        {rechartDate ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rechartDate}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#10b981" barSize={120} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 italic">No price history available.</p>
        )}
      </section>

      {/* ✅ Comments & Reviews */}
      <ReviewSection productId={id} user={user} />
    </div>
  );
};

export default ProductDetails;
