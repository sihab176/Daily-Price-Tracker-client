import { useQuery } from "@tanstack/react-query";

import { toast } from "react-toastify";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router";
import ReviewSection from "./ReviewSection";

const ProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  // ✅ Fetch product data by ID
  const { data: product, isLoading } = useQuery({
    queryKey: ["product-details", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/${id}`);
      return res.data;
    },
  });

  // ✅ Add to Watchlist
  const handleWatchlist = async () => {
    try {
      const res = await axiosSecure.post("/watchlist", {
        productId: id,
        userEmail: user.email,
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

  // ✅ Go to payment
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
        <img src={product.image} alt="product" className="rounded-xl shadow" />
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
              className="btn btn-sm btn-outline"
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

      {/* ✅ Price History Chart */}
      <section className="mt-10">
        <h3 className="text-lg font-bold mb-2">📊 Price Trend Comparison</h3>
        {product.prices && product.prices.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={product.prices}>
              <XAxis dataKey="date" />
              <YAxis dataKey="price" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
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
