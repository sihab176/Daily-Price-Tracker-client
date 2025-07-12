import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyAdvertisements = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  const [editingAd, setEditingAd] = useState(null);

  // !✅ Load my advertisements
  const { data: ads = [], isLoading } = useQuery({
    queryKey: ["my-ads", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/advertisements?vendor=${user?.email}`
      );
      return res.data;
    },
  });

  // !✅ Update ad mutation
  const updateAd = useMutation({
    mutationFn: async ({ id, data }) => {
      const res = await axiosSecure.put(`/advertisements/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["my-ads"]);
      toast.success("Advertisement updated!");
      setEditingAd(null);
    },
    onError: () => toast.error("Update failed"),
  });

  //! ✅ Delete ad mutation
  const deleteAd = useMutation({
    mutationFn: async (id) => {
      const res = await axiosSecure.delete(`/advertisements/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["my-ads"]);
      toast.success("Ad deleted");
    },
    onError: () => toast.error("Delete failed"),
  });

  // ! Handle Delete
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this ad?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteAd.mutate(id);
      }
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updated = {
      title: form.title.value,
      description: form.description.value,
      image: form.image.value,
    };
    updateAd.mutate({ id: editingAd._id, data: updated });
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📢 My Advertisements</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ads.map((ad) => (
              <tr key={ad._id}>
                <td>{ad.title}</td>
                <td>{ad.description}</td>
                <td>
                  <span
                    className={`badge ${
                      ad.status === "approved"
                        ? "badge-success"
                        : ad.status === "pending"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {ad.status}
                  </span>
                </td>
                <td className="flex gap-2 justify-center pt-6">
                  <button
                    onClick={() => setEditingAd(ad)}
                    className="btn btn-xs btn-outline"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(ad._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {ads.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-gray-400 py-10">
                  No ads submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Update Modal */}
      {editingAd && (
        <div className="fixed inset-0  bg-opacity-70 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <h3 className="text-lg font-bold mb-4">Update Advertisement</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                name="title"
                defaultValue={editingAd.title}
                className="input input-bordered w-full"
              />
              <textarea
                name="description"
                defaultValue={editingAd.description}
                className="textarea textarea-bordered w-full"
              ></textarea>
              <input
                name="image"
                defaultValue={editingAd.image}
                className="input input-bordered w-full"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setEditingAd(null)}
                  className="btn btn-sm btn-outline"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-sm btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MyAdvertisements;
