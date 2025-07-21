import { useQuery } from "@tanstack/react-query";
import React from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";

const MyOrderList = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

  // ✅ Get my products
  const { data: myProducts = [] } = useQuery({
    queryKey: ["my-products", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myProducts?email=${user?.email}`);
      return res.data;
    },
  });

  return (
    <>
      <div className="p-6 md:block hidden">
        <h2 className="text-2xl font-bold mb-4"> My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>Product name</th>
                <th>Price</th>
                <th>Market</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {myProducts.map((product) => (
                <tr key={product._id}>
                  <td>{product.itemName}</td>
                  <td>{product.amount}</td>

                  <td>{product.marketName}</td>
                  <td>{product?.paid_at?.split("T")[0]}</td>

                  <td className="flex gap-2 justify-center">
                    {/* modal=========> */}
                    <div>
                      <Link to={`/productDetails/${product?.productId}`}>
                        <button className=" btn bg-teal-400">
                          view <span className="md:block hidden">product</span>
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {myProducts.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-400">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* responsive  */}
      <div className="p-6 md:hidden  block h-screen">
        <h2 className="text-2xl font-bold mb-4"> My Orders</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>Product name</th>
                <th>Price</th>
                {/* <th>Market</th> */}
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {myProducts.map((product) => (
                <tr key={product._id}>
                  <td>{product.itemName}</td>
                  <td>{product.amount}</td>

                  {/* <td>{product.marketName}</td> */}
                  <td>{product?.paid_at?.split("T")[0]}</td>

                  <td className="flex gap-2 justify-center">
                    {/* modal=========> */}
                    <div>
                      <Link to={`/productDetails/${product?.productId}`}>
                        <button className=" btn bg-teal-400">
                          view <span className="md:block hidden">product</span>
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
              {myProducts.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-gray-400">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyOrderList;
