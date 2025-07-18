import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payments = ({ closeModal, price, product }) => {
  
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg text-center">
            Enter Your Payment Details
          </h3>
          {/* element of stripe payments */}
          <Elements stripe={stripePromise}>
            <PaymentForm closeModal={closeModal} price={price} product={product} ></PaymentForm>
          </Elements>
          {/* submit buttons */}
          <div className="modal-action  absolute top-[-20px] right-3">
            {/* <button onClick={closeModal} className="btn bg-green-400 px-6">
              {" "}
              Pay ৳{price}
            </button> */}
            <form method="dialog" className="">
              <button className="text-xl cursor-pointer ">X</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Payments;
