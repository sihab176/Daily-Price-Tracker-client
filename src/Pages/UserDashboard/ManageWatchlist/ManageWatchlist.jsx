import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import LoadingComponent from "../../../component/Loading/LoadingComponent";

const ManageWatchlist = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  // ✅ Get my products
  const { data: products = [] } = useQuery({
    queryKey: ["my-products", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/watchList/manage?email=${user?.email}`
      );
      return res.data;
    },
  });

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
  console.log(products, "watchlist");
  //   if (isLoading) return <LoadingComponent></LoadingComponent>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📦 My Submitted Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th> product name</th>
              <th>Market</th>
              <th>Date</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.productName}</td>

                <td>{product.market}</td>
                <td>{product.date}</td>

                <td className="flex gap-2 justify-center">
                  {/* modal=========> */}
                  <div>
                    <Link to="/allProduct">
                      <button className="btn btn-xs bg-teal-400">
                        Add More
                      </button>
                    </Link>
                  </div>
                  {/* delete button ======> */}
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-xs btn-error text-white"
                  >
                    Remove
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
      </div>
    </div>
  );
};

export default ManageWatchlist;
