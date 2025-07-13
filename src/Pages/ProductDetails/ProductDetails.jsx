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
import { useParams } from "react-router";
import ReviewSection from "./ReviewSection";
import PriceComparisonSection from "./PriceComparisonSection";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [rechartDate, setRechartDate] = useState(null);

  // todo: ✅ Fetch product data by ID =============>
  const { data: product, isLoading } = useQuery({
    queryKey: ["product-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res.data;
    },
  });

  console.log(rechartDate);

  // console.log(product);
  // !✅ Add to Watchlist ==========================>
  const handleWatchlist = async () => {
    try {
      const res = await axiosSecure.post("/watchlist", {
        productId: id,
        userEmail: user?.email,
        userName: user?.displayName,
        productName: product.itemName,
        market: product.marketName,
        date: product.date,
        image: product.image,
      });
      toast.success("Added to watchlist!");
      console.log(res);
    } catch (err) {
      toast.error("Failed to add to watchlist.");
      console.log(err);
    }
  };

  // !✅ Go to payment ==============================>
  const handleBuy = async () => {
    try {
      const res = await axiosSecure.post("/create-payment", {
        productId: id,
        price: parseInt(product.pricePerUnit),
        userEmail: user.email,
      });
      window.location.href = res.data.url;
    } catch (err) {
      toast.error("Payment initiation failed.");
      console.log(err);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  const isVendorOrAdmin =
    user?.email === product.vendorEmail || user?.role === "admin";
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 ">
      <h2 className="text-2xl font-bold mb-4">{product.itemName}</h2>

      <div className="grid md:grid-cols-2 gap-6 ">
        <img
          src={product.image}
          alt="product"
          className="rounded-xl shadow bg-base-200"
        />
        <div className="space-y-6 mt-20">
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

          {/* ✅ Watchlist & Buy Buttons */}
          <div className="mt-4 flex gap-4">
            <button
              className="btn btn-sm bg-pink-400"
              disabled={isVendorOrAdmin}
              onClick={handleWatchlist}
            >
              ⭐ Add to Watchlist
            </button>
            <button className="btn btn-sm btn-primary" onClick={handleBuy}>
              🛒 Buy Product
            </button>
          </div>
        </div>
      </div>
      {/*  comparison section */}
      <div>
        <PriceComparisonSection
          productId={id}
          price={product?.prices}
          setRechartDate={setRechartDate}
        />
      </div>

      {/* ✅ Price History Chart */}

      <section className="mt-10">
        <h3 className="text-lg font-bold mb-2">📊 Price Trend Comparison</h3>

        {rechartDate ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={rechartDate}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#10b981" />
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
