import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Nodata from "../../assets/nodata-2.webp";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "/allProducts?status=pending";

        if (sortOrder) {
          url += `&sort=${sortOrder}`; // 'asc' or 'desc'
        }

        if (selectedDate) {
          const dateStr = selectedDate.toISOString().split("T")[0];
          url += `&date=${dateStr}`;
        }

        const res = await axiosSecure.get(url);
        console.log("url", url);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [sortOrder, selectedDate, axiosSecure]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛍️ All Products</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        {/* Date Filter */}
        <div className="flex items-center gap-2">
          <label className="font-medium">📅 Filter by Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Select date"
            className="input input-bordered"
          />
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-2">
          <label className="font-medium">🧭 Sort by Price:</label>
          <select
            className="select select-bordered"
            onChange={(e) => setSortOrder(e.target.value)}
            value={sortOrder}
          >
            <option value="">Default</option>
            <option value="asc">🔼 Low to High</option>
            <option value="desc">🔽 High to Low</option>
          </select>
        </div>
      </div>

      {/* Products List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow hover:shadow-lg transition-all bg-white"
          >
            <img
              src={product.image}
              alt={product.itemName}
              className="w-full h-40 object-contain mb-3"
            />
            <h3 className="text-lg font-bold mb-1">🥕 {product.itemName}</h3>
            <p>💵 Price: ৳{product.pricePerUnit}/kg</p>
            <p>📅 Date: {product.date}</p>
            <p>🏪 Market: {product.marketName}</p>
            <p>👨‍🌾 Vendor: {product.vendorName}</p>

            <button
              className="btn btn-sm btn-primary mt-3"
              onClick={() => {
                if (!user) {
                  navigate("/login");
                } else {
                  navigate(`/products/${product._id}`);
                }
              }}
            >
              🔍 View Details
            </button>
          </div>
        ))}
       
      </div>
       {products.length === 0 && (
          <div className=" my-20 flex justify-center items-center text-center ">
            <div>
              <img className="" src={Nodata} alt="" />
            </div>
          </div>
        )}
    </div>
  );
};

export default AllProducts;
