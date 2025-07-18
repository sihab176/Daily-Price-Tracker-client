import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import "./stripe.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const PaymentForm = ({ closeModal, price, product }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const amount = product?.pricePerUnit || 0;
  const amountInCents = amount * 100;
  console.log(product);

  //TODO : ===================== HANDLE SUBMIT ==================>
  const handleSubmit = async (event) => {
    setProcessing(true);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    // ! step :1 validate the card =====>
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setProcessing(false);
      setCardError(null);
      closeModal();

      //! step :2 send the amount ======>
      const res = await axiosSecure.post("/create-payment-intent", {
        productId: product?._id,
        amountInCents,
      });

      const clientSecret = res.data.clientSecret;
      console.log(clientSecret);
      //! step :3 confirm the payment =====>
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user?.displayName,
            email: user?.email,
          },
        },
      });
      if (result.error) {
        setCardError(result.error.message);
      } else {
        setCardError(null);
        if (result.paymentIntent.status === "succeeded") {
          console.log("payment successfully", result);
          const transactionId = result.paymentIntent.id;
          const paymentData = {
            productId: product?._id,
            email: user?.email,
            amount,
            transactionId: transactionId,
            paymentMethod: result.paymentIntent.payment_method_types,
            marketName: product?.marketName,
            itemName: product?.itemName,
          };
          const paymentRes = await axiosSecure.post("/payments", paymentData);
          if (paymentRes.data.insertedId) {
            {
              console.log("paymentRes", paymentRes);
              // ✅ Show SweetAlert with transaction ID
              await Swal.fire({
                icon: "success",
                title: "Payment Successful!",
                html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                confirmButtonText: "Go to My Parcels",
              });

              // ✅ Redirect to /myParcels
              navigate("/dashboard/myOrderList");
            }
          }
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p className="text-red-500">{cardError}</p>
      <button
        // onClick={closeModal}
        type="submit"
        disabled={!stripe || processing}
        className=" bg-green-400 px-6 py-2 btn mt-10"
      >
        Pay ${price}
      </button>
    </form>
  );
};

export default PaymentForm;
