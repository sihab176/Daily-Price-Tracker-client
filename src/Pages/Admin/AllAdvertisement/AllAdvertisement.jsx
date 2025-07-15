import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const AllAdvertisement = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  //!  ===================== GET ALL ADVERTISEMENT ==================>
  const { data: advertisement = [] } = useQuery({
    queryKey: ["vendor-advertisement"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/advertisement");
      return res.data;
    },
  });
  //!  UPDATE MUTATION
  const updateMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.patch(`/admin/advertisement/status/${id}`);
    },
    onSuccess: () => {
      toast.success("Advertisement updated successfully");
      queryClient.invalidateQueries(["vendor-advertisement"]);
    },
  });

  //!  DELETE MUTATION
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await axiosSecure.delete(`/admin/advertisement/${id}`);
    },
    onSuccess: () => {
      toast.success("Advertisement deleted successfully");
      queryClient.invalidateQueries(["vendor-advertisement"]);
    },
  });

  //!  handle delete ==============================>
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
      <h2 className="text-2xl font-bold mb-4">📦 My Submitted Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Vendor Email</th>
              <th>Name</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {advertisement.map((add) => (
              <tr key={add._id}>
                <td>{add.vendorEmail}</td>
                <td>{add.vendorName}</td>

                <td>
                  <p
                    className={`
                  ${add?.status === "pending" ? "text-red-500" : ""}
                  ${add?.status === "approved" ? "text-green-500" : ""}
                  
                  `}
                  >
                    {add.status}
                  </p>
                </td>

                <td className="flex gap-2 justify-center">
                  <button
                    onClick={() => updateMutation.mutate(add._id)}
                    className="btn btn-xs bg-primary"
                  >
                    Approved
                  </button>
                  <button
                    onClick={() => handleDelete(add._id)}
                    className="btn btn-xs bg-red-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {advertisement.length === 0 && (
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

export default AllAdvertisement;
