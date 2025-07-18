import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { useState } from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AllProductsAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [rejectModal, setRejectModal] = useState(null);
  const [deleteModal, setDeleteModal] = useState(null);
  const [feedback, setFeedback] = useState("");
  //! ============================ GET ALL PRODUCT DATA ==========================>
  const { data: products = [] } = useQuery({
    queryKey: ["all-products-admin"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/allProduct");
      return res.data;
    },
  });
  // ! APPROVE MUTATION
  const approveMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.patch(`/admin/product/approve/${id}`);
    },
    onSuccess: () => {
      toast.success("Product approved.");
      queryClient.invalidateQueries(["all-products-admin"]);
    },
  });
  // ! REJECT MUTATION
  const rejectMutation = useMutation({
    mutationFn: async ({ id, feedback }) => {
      console.log(feedback, id);
      setRejectModal(null);
      return await axiosSecure.patch(`/admin/products/reject/${id}`, {
        feedback,
      });
    },
    onSuccess: () => {
      toast.success("Product rejected.");
      queryClient.invalidateQueries(["all-products-admin"]);
      setRejectModal(null);
    },
  });
  // ! DELETE MUTATION
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.delete(`/admin/products/${id}`);
    },
    onSuccess: () => {
      toast.success("Product deleted.");
      queryClient.invalidateQueries(["all-products-admin"]);
      setDeleteModal(null);
    },
  });
  //! =============================== HANDLE DELETE ==============================>
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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🛍️ All Products (Admin)</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th className="md:inline hidden">Market</th>
              <th className="md:inline hidden">Date</th>
              <th>Status</th>
              <th>Vendor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.itemName}</td>
                <td className="md:inline hidden">{p.marketName}</td>
                <td className="md:inline hidden">{p.date}</td>
                <td
                  className={`
                  ${p.status === "pending" ? "text-yellow-500" : ""}
                  
                  ${p.status === "approved" ? "text-green-500" : ""}
                  ${p.status === "rejected" ? "text-red-500" : ""}
                  `}
                >
                  {p.status}
                </td>
                <td>{p.vendorName}</td>
                <td className="flex gap-2 flex-wrap">
                  {p.status === "pending" && (
                    <>
                      <button
                        className="btn btn-xs btn-success"
                        onClick={() => approveMutation.mutate(p._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="btn btn-xs btn-warning"
                        onClick={() => setRejectModal(p)}
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-xs btn-info"
                    onClick={() =>
                      navigate(`/dashboard/update-product/${p._id}`)
                    }
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-xs btn-error"
                    onClick={() => handleDelete(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Reject Modal */}
      {rejectModal && (
        <div className="fixed inset-0   bg-opacity-10 backdrop-blur flex items-center justify-center ">
          <div className="bg-white p-6 rounded shadow-2xl shadow-black max-w-md w-full ">
            <h3 className="font-bold mb-2">
              Reject Feedback for{" "}
              <span className="text-red-600"> {rejectModal.itemName}</span>
            </h3>
            <textarea
              //   value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="textarea textarea-bordered w-full mb-4"
              placeholder="Write reason for rejection..."
            ></textarea>
            <div className="flex justify-end gap-2">
              <button
                className="btn btn-sm btn-ghost"
                onClick={() => setRejectModal(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm btn-warning"
                onClick={() =>
                  rejectMutation.mutate({ id: rejectModal._id, feedback })
                }
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProductsAdmin;
