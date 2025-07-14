import { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Nodata from "../../assets/nodata-2.webp";

import { CiCalendarDate, CiShop } from "react-icons/ci";
import { FaHospitalUser } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

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
          const dateStr = selectedDate.toLocaleDateString("en-CA");
          console.log("dateStr", dateStr, selectedDate);
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
            onChange={(date) => {
              // Just use the date directly without time components
              if (date) {
                const newDate = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate()
                );
                setSelectedDate(newDate);
              }
            }}
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

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div className="card bg-base-200 w-[360px] shadow-sm">
            <figure className={`bg-sky-100 py-9`}>
              <img
                src={product?.image}
                alt="Shoes"
                className="w-full h-40 object-contain "
              />
            </figure>
            <div className=" py-3 px-4 space-y-2">
              <h3 className="text-lg font-bold mb-1">{product.itemName}</h3>
              <p className="flex items-center gap-1">
                <IoPricetagsOutline />
                <strong>Price:</strong> ৳{product.pricePerUnit}/kg
              </p>
              <p className="flex items-center gap-1">
                <CiCalendarDate />
                <strong>Date:</strong> {product.date}
              </p>
              <p className="flex items-center gap-1">
                <CiShop />
                <strong>Market:</strong> {product.marketName}
              </p>
              <p className="flex items-center gap-1">
                {" "}
                <FaHospitalUser />
                <strong> Vendor:</strong> {product.vendorName}
              </p>
              <div className="card-actions ">
                <Link to={`/productDetails/${product._id}`}>
                  <button className="px-7 py-1 rounded-full border-yellow-500 border hover:bg-yellow-400">
                    Details
                  </button>
                </Link>
              </div>
            </div>
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
