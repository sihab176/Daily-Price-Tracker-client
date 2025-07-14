import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useFieldArray, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { toast, ToastContainer } from "react-toastify";

const UpdateProduct = ({ selectedProduct, closeModal }) => {
  console.log("selectedProduct========>", selectedProduct);
  const { _id, prices } = selectedProduct || {};

  const { register, handleSubmit, control, reset } = useForm();
  useEffect(() => {
    if (selectedProduct) {
      reset({
        ...selectedProduct,
        prices: selectedProduct.prices || [],
      });
    }
  }, [selectedProduct, reset]);

  const { user } = useAuth();
  const [date, setDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();

  // !   USE FIELD ================= >
  const { fields, append, remove } = useFieldArray({
    control,
    name: "prices",
  });

  //! ================================ ON SUBMIT ===========================================>
  const onSubmit = async (data) => {
    // console.log("data", data);
    const productData = {
      ...data,
      date: date.toISOString().slice(0, 10),
      status: "pending",
      vendorEmail: user?.email,
      vendorName: user?.displayName,
    };
    closeModal();

    console.log("post data ", productData);

    try {
      const res = await axiosSecure.put(`/vendors/${_id}`, productData);
      if (res.data.insertedId) {
        toast.success("Product updated  successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update product");
    }
  };

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          {/* update the from ========================> */}
          <div className="max-w-5xl mx-auto   p-6 rounded-xl ">
            <h2 className="text-2xl font-bold mb-4">📝 Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Read-only fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="input input-bordered w-full"
                  placeholder="Vendor Email"
                />
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="input input-bordered w-full"
                  placeholder="Vendor Name"
                />
              </div>

              {/* Market Info */}
              <input
                {...register("marketName")}
                type="text"
                placeholder="🏪 Market Name"
                // defaultValue={marketName}
                className="input input-bordered w-full"
              />

              {/* DATE */}
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                className="input input-bordered"
              />
              {/* DESCRIPTION */}
              <textarea
                {...register("marketDescription")}
                className="textarea textarea-bordered w-full"
                placeholder="📝 Market Description"
                // defaultValue={marketDescription}
              ></textarea>

              {/* Product Info */}
              <input
                {...register("itemName")}
                type="text"
                placeholder="🥦 Item Name"
                // defaultValue={itemName}
                className="input input-bordered w-full"
              />
              {/* PRICE */}
              <input
                {...register("pricePerUnit")}
                type="text"
                placeholder="💵 Price per Unit (e.g., ৳30/kg)"
                // defaultValue={pricePerUnit}
                className="input input-bordered w-full"
              />
              {/* IMAGE */}
              <input
                {...register("image")}
                type="text"
                placeholder="🖼️ Image URL"
                // defaultValue={image}
                className="input input-bordered w-full"
              />

              {/* Price History Array */}
              <div className="border p-4 rounded-lg">
                <label className="font-semibold block mb-2">
                  💵 Price History
                </label>
                {fields?.map((item, index) => (
                  <div key={item.id} className="grid grid-cols-2 gap-2 mb-2">
                    <input
                      type="date"
                      {...register(`prices.${index}.date`)}
                      className="input input-bordered"
                      // defaultValue={item.date}
                    />
                    <input
                      type="number"
                      {...register(`prices.${index}.price`)}
                      placeholder="৳"
                      className="input input-bordered"
                      // defaultValue={item.price}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="btn btn-error btn-xs col-span-2"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    append({
                      date: new Date().toISOString().slice(0, 10),
                      price: "",
                    })
                  }
                  className="btn bg-yellow-500 btn-sm mt-2"
                >
                  ➕ Add More
                </button>
              </div>

              {/* Item Description */}
              <textarea
                {...register("itemDescription")}
                placeholder="📝 Item Description (optional)"
                // defaultValue={itemDescription}
                className="textarea textarea-bordered w-full"
              ></textarea>

              {/* Submit */}
              <button type="submit" className="btn bg-primary w-full">
                Update Product
              </button>
            </form>
          </div>
          <div className=" mx-5">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn bg-red-400 w-full ">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;
