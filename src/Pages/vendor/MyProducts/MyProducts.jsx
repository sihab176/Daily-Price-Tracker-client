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
  const [selectedProduct, setSelectedProduct] = useState({});
  const [feedBack, setFeedBack] = useState(null);
  console.log(feedBack);

  // ✅ Get my products
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
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
  // ! open Modal ======>
  const openModal = (product) => {
    console.log({ product });
    setSelectedProduct({ ...product });
    document.getElementById("my_modal_4").showModal();
  };
  // ! close Modal ====>
  const closeModal = () => {
    setSelectedProduct({});
    refetch();
    document.getElementById("my_modal_4").close();
  };
  if (isLoading) return <LoadingComponent></LoadingComponent>;

  const handleFedback = (feedback) => {
    setFeedBack(feedback);
    document.getElementById("my_modal_1").showModal();
  };

  return (
    <>
      <div className="p-6 md:block hidden">
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
                    {/* rejected */}
                    {product.status === "rejected" && (
                      <button
                        onClick={() =>
                          handleFedback(product?.rejectionFeedback?.feedback)
                        }
                        className="btn btn-xs bg-red-400 ml-2"
                      >
                        View
                      </button>
                    )}
                    {/* =================modal================ */}
                  </td>
                  <td className="flex gap-2 justify-center">
                    {/* modal=========> */}
                    <div onClick={() => openModal(product)}>
                      <button className="btn btn-xs btn-outline">upDate</button>
                    </div>
                    {/* delete button ======> */}
                    <div className="flex flex-col ">
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-xs btn-error text-white px-1 py-1"
                      >
                        Delete
                      </button>
                    </div>
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
          <UpdateProduct
            selectedProduct={{ ...selectedProduct }}
            closeModal={closeModal}
          />
        </div>
        {/* ================ fedback modal ===================== */}
        <div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">rejection Feedback</h3>
              {feedBack && <p className="py-4"> {feedBack}</p>}
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => setFeedBack(null)}
                    className="btn  bg-red-300"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/*  responsive  */}
      <div className="p-6 md:hidden  block h-screen">
        <h2 className="text-2xl font-bold mb-4">📦 My Submitted Products</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-200">
              <tr>
                <th>Item</th>
                {/* <th>Price/Unit</th> */}
                {/* <th>Market</th> */}
                {/* <th>Date</th> */}
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.itemName}</td>
                  {/* <td>৳{product.pricePerUnit}</td> */}
                  {/* <td>{product.marketName}</td> */}
                  {/* <td>{product.date}</td> */}
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
                    {/* rejected */}
                    {product.status === "rejected" && (
                      <button
                        onClick={() =>
                          handleFedback(product?.rejectionFeedback?.feedback)
                        }
                        className="btn btn-xs bg-red-400 ml-2"
                      >
                        View
                      </button>
                    )}
                    {/* =================modal================ */}
                  </td>
                  <td className="flex gap-2 justify-center">
                    {/* modal=========> */}
                    <div onClick={() => openModal(product)}>
                      <button className="btn btn-xs btn-outline">upDate</button>
                    </div>
                    {/* delete button ======> */}
                    <div className="flex flex-col ">
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-xs btn-error text-white px-1 py-1"
                      >
                        Delete
                      </button>
                    </div>
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
          <UpdateProduct
            selectedProduct={{ ...selectedProduct }}
            closeModal={closeModal}
          />
        </div>
        {/* ================ fedback modal ===================== */}
        <div>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">rejection Feedback</h3>
              {feedBack && <p className="py-4"> {feedBack}</p>}
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    onClick={() => setFeedBack(null)}
                    className="btn  bg-red-300"
                  >
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
