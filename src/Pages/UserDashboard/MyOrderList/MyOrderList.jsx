import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";

const MyOrderList = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  // ✅ Get my products
  const { data: myProducts = [] } = useQuery({
    queryKey: ["my-products", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myProducts?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(myProducts);
  // ✅ Delete Product Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/watchlist/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["my-products"]);
      toast.success("Remove successfully from watch List!");
    },
    onError: () => {
      toast.error("Failed to remove product.");
    },
  });

  // ✅ Handle delete with confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  return (
    <div className="p-6">
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
                <td>{product.paid_at.split("T")[0]}</td>

                <td className="flex gap-2 justify-center">
                  {/* modal=========> */}
                  <div>
                    <Link to={`/productDetails/${product?.productId}`}>
                      <button className="btn btn-xs bg-teal-400">
                        view product
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
  );
};

export default MyOrderList;
