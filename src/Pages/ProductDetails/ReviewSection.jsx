import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

const ReviewSection = ({ productId, user }) => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(0);

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews/${productId}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      return await axiosSecure.post("/reviews", data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews", productId]);
      toast.success("Review submitted!");
      reset();
    },
    onError: () => toast.error("Failed to submit review."),
  });

  const onSubmit = (data) => {
    const reviewData = {
      ...data,
      productId,
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      userEmail: user?.email,
      date: new Date().toISOString().split("T")[0],
      rating: rating,
    };
    console.log("reviewData", reviewData);
    mutation.mutate(reviewData);
  };

  return (
    <div className="mt-12">
      <h3 className="text-lg font-bold mb-4">🗣️ Reviews & Comments</h3>

      {reviews.map((rev, idx) => (
        <div key={idx} className="border p-4 mb-3 rounded-md bg-base-200">
          <div className=" flex flex-col md:flex-row">
            <div className="">
              <img
                className="rounded-full w-10"
                src={rev.userPhoto}
                alt="Rating user"
              />
            </div>
            <div className="ml-6">
              <p>
                <strong>{rev.userName}</strong>
                <span className="text-sm text-gray-500 ml-2">{rev.date}</span>
              </p>
              {/* <p className="text-yellow-500">⭐ {rev.rating}/5</p> */}
              <Rating
                emptySymbol={<FaRegStar className="mx-1 cursor-pointer" />}
                fullSymbol={
                  <FaStar className="mx-1 cursor-pointer text-yellow-400" />
                }
                fractions={1}
                initialRating={rev.rating}
              />
              <p>{rev.comment}</p>
            </div>
          </div>
        </div>
      ))}

      {user && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-3">
          {/* rating ==================> */}
          <div className="text-2xl text-yellow-500">
            <Rating
              initialRating={rating}
              onChange={(value) => {
                setRating(value); // ⭐ ইউজার কত রেট দিলো সেটা স্টেট-এ সেট করো
              }}
              emptySymbol={<FaRegStar />}
              fullSymbol={<FaStar />}
              fractions={1}
            />
          </div>
          <textarea
            {...register("comment", { required: true })}
            placeholder="Write your opinion on current price..."
            className="textarea textarea-bordered w-full"
          ></textarea>
          <button className="btn btn-sm btn-success">Submit Review</button>
        </form>
      )}
    </div>
  );
};

export default ReviewSection;
