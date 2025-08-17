import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import ProfileSection from "./ProfileSection";
import useUserRole from "../../hooks/useUserRole";
import ProfileEditor from "../MainProfile/ProfileEditor";

const pieData = [
  { name: "Fruits", value: 400 },
  { name: "Vegetables", value: 300 },
  { name: "Grains", value: 200 },
  { name: "Others", value: 100 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
// const barData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
//   { name: "Apr", sales: 2780 },
//   { name: "May", sales: 3890 },
// ];

const DynamicUsers = () => {
  const { role, roleLoading } = useUserRole();
  const axiosInstant = useAxios();
  // Total Users
  const { data: totalUser = 0 } = useQuery({
    queryKey: ["totalUser"],
    queryFn: async () => {
      const res = await axiosInstant.get("/allUser");
      return res?.data?.totalUsers;
    },
  });

  // Total Products
  const { data: totalProduct = 0 } = useQuery({
    queryKey: ["totalProduct"],
    queryFn: async () => {
      const res = await axiosInstant.get("/productLength");
      return res?.data?.totalProduct;
    },
  });
  // Advertisement
  const { data: advertisement = 0 } = useQuery({
    queryKey: ["advertisement"],
    queryFn: async () => {
      const res = await axiosInstant.get("/advertisementLength");
      return res?.data?.advertisement;
    },
  });
  // reviews
  const { data: reviews = 0 } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosInstant.get("/reviewLength");
      return res?.data?.reviews;
    },
  });
  const { data: allProducts = [] } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const res = await axiosInstant.get("/allPayments");
      return res?.data;
    },
  });

  return (
    <>
      {!roleLoading && role === "Admin" && (
        <div className="p-6 space-y-6">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="shadow-lg rounded-2xl bg-[#84a98c] text-base-200">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Total Users</h2>
                <p className="text-3xl font-bold">{totalUser}</p>
              </div>
            </div>
            <div className="shadow-lg rounded-2xl bg-gradient-to-r from-[#003566] to-[#001d3d] text-base-200 ">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Total Products</h2>
                <p className="text-3xl font-bold">{totalProduct}</p>
              </div>
            </div>
            <div className="shadow-lg rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-base-200 ">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Total Advertisements</h2>
                <p className="text-3xl font-bold">{advertisement}</p>
              </div>
            </div>
            <div className="shadow-lg rounded-2xl bg-gradient-to-r from-[#ffcad4] to-[#f4acb7] text-base-200 ">
              <div className="p-6">
                <h2 className="text-lg font-semibold">Total Reviews</h2>
                <p className="text-3xl font-bold">{reviews}</p>
              </div>
            </div>
          </div>

          {/* Charts + Calendar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pie Chart */}
            <div className="shadow-lg rounded-2xl">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Sales Distribution
                </h2>
                <PieChart width={300} height={300}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="shadow-lg rounded-2xl md:col-span-2">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Product Sales</h2>

                <div className="w-full h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={allProducts}>
                      <CartesianGrid strokeDasharray="1 3" />
                      <XAxis
                        dataKey="itemName"
                        tick={{ fontSize: 10 }}
                        angle={-20} // একটু ঘুরিয়ে দিলে ছোট screen এ clash করবে না
                        textAnchor="end"
                        interval={0} // সব label show করবে
                      />
                      <YAxis />
                      <Tooltip />
                      <Bar
                        dataKey="amount"
                        fill="#00afb9"
                        radius={[10, 10, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <section className="flex md:flex-row flex-col">
            <div className="shadow-lg rounded-2xl">
              <div className="p-6   rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Calendar</h2>
                <Calendar className="rounded-lg border text-black [&_.react-calendar__tile]:text-white [&_.react-calendar__tile]:hover:bg-gray-800" />
              </div>
            </div>
            <ProfileSection />
          </section>
        </div>
      )}

      {!roleLoading && (role === "user" || role === "Vendor") && (
        <ProfileEditor />
      )}
    </>
  );
};

export default DynamicUsers;
