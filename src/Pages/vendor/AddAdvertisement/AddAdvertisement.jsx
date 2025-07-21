import { useForm } from "react-hook-form";

import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const AddAdvertisement = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const onSubmit = async (data) => {
    const adData = {
      title: data.title,
      description: data.description,
      image: data.image,
      status: "pending", // default
      vendorEmail: user?.email,
      vendorName: user?.displayName || "Unknown",
    };
    console.log("adData", adData);
    try {
      const res = await axiosSecure.post("/advertisements", adData);
      if (res.data.insertedId) {
        toast.success("Advertisement submitted successfully!");
        reset();
      } else {
        toast.error("Failed to submit ad.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="w-full mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">📢 Submit Advertisement</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5 bg-base-200 shadow-lg p-6 rounded-xl"
      >
        {/* Ad Title */}
        <div>
          <label className="font-medium">Ad Title</label>
          <input
            type="text"
            {...register("title", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Enter ad title"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-medium">Short Description</label>
          <textarea
            {...register("description", { required: true })}
            className="textarea textarea-bordered w-full mt-1"
            rows={3}
            placeholder="Write a short description..."
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="font-medium">Image URL</label>
          <input
            type="url"
            {...register("image", { required: true })}
            className="input input-bordered w-full mt-1"
            placeholder="Paste image URL (banner/promo)"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button className="btn btn-primary">Submit Advertisement</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddAdvertisement;
