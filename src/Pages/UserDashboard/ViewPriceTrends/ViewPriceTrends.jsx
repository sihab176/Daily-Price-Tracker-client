import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
} from "recharts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const ViewPriceTrends = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [watchlist, setWatchlist] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [trendData, setTrendData] = useState([]);
  const [trendChange, setTrendChange] = useState(null);

  //! use Effect =============================>
  useEffect(() => {
    // Fetch user watchlist
    const fetchWatchlist = async () => {
      const res = await axiosSecure.get(`/watchlist?email=${user?.email}`);
      setWatchlist(res.data);
    };
    fetchWatchlist();
  }, [user?.email, axiosSecure]);

  console.log("watchlist", watchlist);
  // ! handle ================================>
  const handleItemClick = async (item) => {
    console.log(item, "item");
    setSelectedItem(item);
  };
  console.log(selectedItem);

  return (
    <div className="grid md:grid-cols-4 gap-6 p-6">
      {/* Tracked Items Sidebar */}
      <div className="col-span-1">
        <h3 className="text-lg font-bold mb-2">🧅 Tracked Items</h3>
        <ul className="space-y-2">
          {watchlist.map((item, i) => (
            <li
              key={i}
              className={`cursor-pointer py-1 px-4 text-center rounded-md border border-purple-700 hover:bg-teal-600 ${
                selectedItem?.productId === item.productId ? "bg-teal-500" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item.productName}
            </li>
          ))}
        </ul>
      </div>

      {/* Trend Graph Section */}
      <div className="col-span-3">
        {
          <div>
            <h3 className="text-xl font-bold mb-2">
              {selectedItem?.productName}
            </h3>
            <p>🏪 {selectedItem?.market}</p>
            <p>👨‍🌾 Vendor: {selectedItem?.vendorName}</p>

            {selectedItem ? (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={selectedItem?.prices}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#10b981"
                    strokeWidth={2}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500 italic mt-4">
                No trend data available.
              </p>
            )}

            {/* {trendChange && (
              <p className="mt-2 text-green-600 font-medium">
                Trend: {trendChange > 0 ? "+" : ""}
                {trendChange}% last {trendData.length} days
              </p>
            )} */}
          </div>
        }
      </div>
    </div>
  );
};

export default ViewPriceTrends;
