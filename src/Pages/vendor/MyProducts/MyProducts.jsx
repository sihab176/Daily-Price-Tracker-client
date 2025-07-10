import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import LoadingComponent from "../../../component/Loading/LoadingComponent";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import { useState } from "react";

const MyProducts = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ✅ Get my products
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["my-products", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/vendor/${user.email}`);
      return res.data;
    },
  });

  // ✅ Delete Product Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/products/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["my-products"]);
      toast.success("Product deleted successfully!");
    },
    onError: () => {
      toast.error("Failed to delete product.");
    },
  });

  // ✅ Handle delete with confirmation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
      }
    });
  };

  const openModal = (product) => {
    setSelectedProduct(product);
    // document.getElementById("my_modal_3").showModal();
    document.getElementById("my_modal_4").showModal();
  };

  if (isLoading) return <LoadingComponent></LoadingComponent>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📦 My Submitted Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Item</th>
              <th>Price/Unit</th>
              <th>Market</th>
              <th>Date</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.itemName}</td>
                <td>৳{product.pricePerUnit}</td>
                <td>{product.marketName}</td>
                <td>{product.date}</td>
                <td>
                  <span
                    className={`badge ${
                      product.status === "approved"
                        ? "badge-success"
                        : product.status === "pending"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {product.status}
                  </span>
                  {product.status === "rejected" && product.feedback && (
                    <p className="text-sm text-red-500 italic">
                      ⛔ {product.feedback}
                    </p>
                  )}
                </td>
                <td className="flex gap-2 justify-center">
                  {/* modal=========> */}
                  <div onClick={() => openModal(product)}>
                    <button className="btn btn-xs btn-outline">upDate</button>
                  </div>
                  {/* delete button ======> */}
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-10 text-gray-400">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <UpdateProduct product={selectedProduct} />
      </div>
    </div>
  );
};

export default MyProducts;
