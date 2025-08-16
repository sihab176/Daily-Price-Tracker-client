// import BgImage from "../../assets/banner-1.jpg";
// import Marquee from "react-fast-marquee";
// import Mar1 from "../../assets/fr-1-removebg-preview.png";
// import Mar2 from "../../assets/fr-2-removebg-preview.png";
// import Mar3 from "../../assets/fr-3-removebg-preview.png";
// import Mar4 from "../../assets/fr-4-removebg-preview.png";
// import { FaPlusCircle } from "react-icons/fa";
// import { MdFavorite } from "react-icons/md";

// const DynamicUsers = () => {
//   //   const [role, setRole] = useState(null);

//   //   useEffect(() => {
//   //     const fetchRole = async () => {
//   //       try {
//   //         const res = await axiosSecure.get(`/users/role?email=${user.email}`);
//   //         setRole(res.data.role);
//   //       } catch (error) {
//   //         console.error("Error fetching user role:", error);
//   //       }
//   //     };

//   //     if (user?.email) {
//   //       fetchRole();
//   //     }
//   //   }, [user, axiosSecure]);

//   //   const renderDashboardMessage = () => {
//   //     switch (role) {
//   //       case "admin":
//   //         return "Welcome Admin! You can manage products, vendors, and users.";
//   //       case "vendor":
//   //         return "Welcome Vendor! You can add, update, and manage your products and ads.";
//   //       case "user":
//   //         return "Welcome User! Explore local market prices, add items to watchlist, and make purchases.";
//   //       default:
//   //         return "Welcome! Your role is being verified.";
//   //     }
//   //   };

//   return (
//     // <div className="p-6 text-center">
//     //   <div
//     //     style={{ backgroundImage: `url(${BgImage})` }}
//     //     className=" bg-cover bg-no-repeat  h-[300px] "
//     //   >
//     //     <div className="bg-gradient-to-t from-black/80 to-transparent bg-cover h-[300px] text-white ">
//     //       <div className="space-y-3 pt-20">
//     //         <p className="text-sm text-yellow-400">FRUIT FRESH</p>
//     //         <h1 className="text-4xl font-bold">Vegetable 100% Organic</h1>
//     //         <p className="text-gray-300">Free Pickup and Delivery Available </p>
//     //         <button className="bg-[#7dc20f] px-6 py-2 hover:bg-[#6fa15a]">
//     //           SHOP NOW
//     //         </button>
//     //       </div>
//     //     </div>
//     //   </div>

//     //   {/* MARQUE SECTION */}
//     //   <div>
//     //     <Marquee speed={50} gradient={false}>
//     //       <div className="flex justify-between gp-24 my-8 cursor-pointer">
//     //         {/* card-1 */}
//     //         <div className="relative bg-base-200 mr-10  py-6 rounded shadow-2xl">
//     //           <p className="text-4xl absolute top-5 right-2">
//     //             <MdFavorite className="text-red-600" size={26} />
//     //           </p>
//     //           <div className="px-10">
//     //             <img className="w-[160px] h-[160px] " src={Mar1} alt="" />
//     //           </div>
//     //           <div className="text-center">
//     //             <h1 className="text-2xl font-semibold text-yellow-400">
//     //               papaya
//     //             </h1>
//     //             <p>orange flesh with a mild</p>
//     //           </div>
//     //           <p className="text-[#1cebad] flex justify-between px-4">
//     //             price : $ 390{" "}
//     //             <span>
//     //               {" "}
//     //               <FaPlusCircle size={20} />{" "}
//     //             </span>
//     //           </p>
//     //         </div>
//     //         {/* card-2 */}
//     //         <div className="relative bg-base-200 mr-10  py-6 rounded shadow-2xl">
//     //           <p className="text-4xl absolute top-5 right-2">
//     //             <MdFavorite className="text-red-600" size={26} />
//     //           </p>
//     //           <div className="px-10">
//     //             <img className="w-[160px] h-[160px] " src={Mar2} alt="" />
//     //           </div>
//     //           <div className="text-center">
//     //             <h1 className="text-2xl font-semibold text-yellow-400">
//     //               papaya
//     //             </h1>
//     //             <p>orange flesh with a mild</p>
//     //           </div>
//     //           <p className="text-[#1cebad] flex justify-between px-4">
//     //             price : $ 390{" "}
//     //             <span>
//     //               {" "}
//     //               <FaPlusCircle size={20} />{" "}
//     //             </span>
//     //           </p>
//     //         </div>
//     //         {/* card-3 */}
//     //         <div className="relative bg-base-200 mr-10  py-6 rounded shadow-2xl">
//     //           <p className="text-4xl absolute top-5 right-2">
//     //             <MdFavorite className="text-red-600" size={26} />
//     //           </p>
//     //           <div className="px-10">
//     //             <img className="w-[160px] h-[160px] " src={Mar3} alt="" />
//     //           </div>
//     //           <div className="text-center">
//     //             <h1 className="text-2xl font-semibold text-yellow-400">
//     //               papaya
//     //             </h1>
//     //             <p>orange flesh with a mild</p>
//     //           </div>
//     //           <p className="text-[#1cebad] flex justify-between px-4">
//     //             price : $ 390{" "}
//     //             <span>
//     //               {" "}
//     //               <FaPlusCircle size={20} />{" "}
//     //             </span>
//     //           </p>
//     //         </div>
//     //         {/* card-4 */}
//     //         <div className="relative bg-base-200 mr-10  py-6 rounded shadow-2xl">
//     //           <p className="text-4xl absolute top-5 right-2">
//     //             <MdFavorite className="text-red-600" size={26} />
//     //           </p>
//     //           <div className="px-10">
//     //             <img className="w-[160px] h-[160px] " src={Mar4} alt="" />
//     //           </div>
//     //           <div className="text-center">
//     //             <h1 className="text-2xl font-semibold text-yellow-400">
//     //               papaya
//     //             </h1>
//     //             <p>orange flesh with a mild</p>
//     //           </div>
//     //           <p className="text-[#1cebad] flex justify-between px-4">
//     //             price : $ 390{" "}
//     //             <span>
//     //               {" "}
//     //               <FaPlusCircle size={20} />{" "}
//     //             </span>
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </Marquee>
//     //   </div>
//     // </div>
//     <div>
//       Hello
//     </div>
//   );
// };

// export default DynamicUsers;

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
} from "recharts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";

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
  console.log(allProducts, "/all");

  return (
    <div className="p-6 space-y-6">
      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="shadow-lg rounded-2xl bg-gradient-to-r from-green-400 to-green-600 text-white">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Total Users</h2>
            <p className="text-3xl font-bold">{totalUser}</p>
          </div>
        </div>
        <div className="shadow-lg rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 text-white">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-3xl font-bold">{totalProduct}</p>
          </div>
        </div>
        <div className="shadow-lg rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
          <div className="p-6">
            <h2 className="text-lg font-semibold">Total Advertisements</h2>
            <p className="text-3xl font-bold">{advertisement}</p>
          </div>
        </div>
        <div className="shadow-lg rounded-2xl bg-gradient-to-r from-pink-400 to-pink-600 text-white">
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
            <h2 className="text-xl font-semibold mb-4">Sales Distribution</h2>
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
            <BarChart width={500} height={300} data={allProducts}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="itemName"
                tick={{ fontSize: 10 }}
                angle={0}
                textAnchor="end"
                interval={0} // সব label show করবে
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#4F46E5" radius={[10, 10, 0, 0]} />
            </BarChart>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="shadow-lg rounded-2xl">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Calendar</h2>
          <Calendar className="rounded-lg border" />
        </div>
      </div>
    </div>
  );
};

export default DynamicUsers;
