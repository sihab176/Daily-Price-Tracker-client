// import { useEffect, useState } from "react";
// import useAxiosSecure from "../../hooks/useAxiosSecure";
import BgImage from "../../assets/banner-1.jpg";
import Marquee from "react-fast-marquee";
import Mar1 from "../../assets/fr-1-removebg-preview.png";
import Mar2 from "../../assets/fr-2-removebg-preview.png";
import Mar3 from "../../assets/fr-3-removebg-preview.png";
import Mar4 from "../../assets/fr-4-removebg-preview.png";
import { FaPlusCircle } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const DynamicUsers = () => {
  //   const axiosSecure = useAxiosSecure();
  //   const [role, setRole] = useState(null);

  //   useEffect(() => {
  //     const fetchRole = async () => {
  //       try {
  //         const res = await axiosSecure.get(`/users/role?email=${user.email}`);
  //         setRole(res.data.role);
  //       } catch (error) {
  //         console.error("Error fetching user role:", error);
  //       }
  //     };

  //     if (user?.email) {
  //       fetchRole();
  //     }
  //   }, [user, axiosSecure]);

  //   const renderDashboardMessage = () => {
  //     switch (role) {
  //       case "admin":
  //         return "Welcome Admin! You can manage products, vendors, and users.";
  //       case "vendor":
  //         return "Welcome Vendor! You can add, update, and manage your products and ads.";
  //       case "user":
  //         return "Welcome User! Explore local market prices, add items to watchlist, and make purchases.";
  //       default:
  //         return "Welcome! Your role is being verified.";
  //     }
  //   };

  return (
    <div className="p-6 text-center">
      {/* <h2 className="text-2xl font-bold mb-4">
        👋 Hello, {user?.displayName || "User"}
      </h2>
      <p className="text-gray-700 text-lg">{renderDashboardMessage()}</p> */}
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        class=" bg-cover bg-no-repeat  h-[300px] "
      >
        <div class="bg-gradient-to-t from-black/80 to-transparent bg-cover h-[300px] text-white ">
          <div className="space-y-3 pt-20">
            <p className="text-sm text-yellow-400">FRUIT FRESH</p>
            <h1 className="text-4xl font-bold">Vegetable 100% Organic</h1>
            <p className="text-gray-300">Free Pickup and Delivery Available </p>
            <button className="bg-[#7dc20f] px-6 py-2 hover:bg-[#6fa15a]">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* MARQUE SECTION */}
      <div>
        <Marquee speed={50} gradient={false} >
          <div className="flex justify-between gp-24 mt-8 cursor-pointer">
            {/* card-1 */}
            <div className="relative bg-base-200 mr-10  py-6 rounded">
              <p className="text-4xl absolute top-5 right-2">
                <MdFavorite className="text-red-600" size={26} />
              </p>
              <div className="px-10">
                <img className="w-[160px] h-[160px] " src={Mar1} alt="" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-yellow-400">
                  papaya
                </h1>
                <p>orange flesh with a mild</p>
              </div>
              <p className="text-[#1cebad] flex justify-between px-4">
                price : $ 390{" "}
                <span>
                  {" "}
                  <FaPlusCircle size={20} />{" "}
                </span>
              </p>
            </div>
            {/* card-2 */}
            <div className="relative bg-base-200 mr-10  py-6 rounded">
              <p className="text-4xl absolute top-5 right-2">
                <MdFavorite className="text-red-600" size={26} />
              </p>
              <div className="px-10">
                <img className="w-[160px] h-[160px] " src={Mar2} alt="" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-yellow-400">
                  papaya
                </h1>
                <p>orange flesh with a mild</p>
              </div>
              <p className="text-[#1cebad] flex justify-between px-4">
                price : $ 390{" "}
                <span>
                  {" "}
                  <FaPlusCircle size={20} />{" "}
                </span>
              </p>
            </div>
            {/* card-3 */}
            <div className="relative bg-base-200 mr-10  py-6 rounded">
              <p className="text-4xl absolute top-5 right-2">
                <MdFavorite className="text-red-600" size={26} />
              </p>
              <div className="px-10">
                <img className="w-[160px] h-[160px] " src={Mar3} alt="" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-yellow-400">
                  papaya
                </h1>
                <p>orange flesh with a mild</p>
              </div>
              <p className="text-[#1cebad] flex justify-between px-4">
                price : $ 390{" "}
                <span>
                  {" "}
                  <FaPlusCircle size={20} />{" "}
                </span>
              </p>
            </div>
            {/* card-4 */}
            <div className="relative bg-base-200 mr-10  py-6 rounded">
              <p className="text-4xl absolute top-5 right-2">
                <MdFavorite className="text-red-600" size={26} />
              </p>
              <div className="px-10">
                <img className="w-[160px] h-[160px] " src={Mar4} alt="" />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-yellow-400">
                  papaya
                </h1>
                <p>orange flesh with a mild</p>
              </div>
              <p className="text-[#1cebad] flex justify-between px-4">
                price : $ 390{" "}
                <span>
                  {" "}
                  <FaPlusCircle size={20} />{" "}
                </span>
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default DynamicUsers;
