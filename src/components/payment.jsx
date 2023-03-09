import React, { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Context } from "../ContextApi";
import { serverTimestamp } from "@firebase/firestore";
//todo reFormate the order for cart order
/**
 * @param {import("../types").paymentProps} props
 */
const Pay = ({ email, first_name, last_name }) => {
  /**
   * @type {import('../types').ContextState}
   */
  const {
    // currency,
    cart,
    carttotal,
    modal,
    closeModal,
    clearCart,
    checkout,
    setModal,
  } = useContext(Context);
  //handel payment
  const checkout_order = () => {
    const order = {
      email: email,
      first_name,
      last_name,
      order_price: carttotal,
      created_at: serverTimestamp(),
      products: cart.map((c) => {
        return {
          product_id: c.id,
          quantity: c.count,
          serials: c.serials.splice(0, c.count),
          total_price: c.price * c.count,
        };
      }),
      status: "pending",
    };
    checkout(order).then((success) => {
      if (success) {
        setModal({
          ...modal,
          hidden: false,
          title: "Checkout Order",
          body: `\
            Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you. Log into your PayPal account to view transaction details.
          `,
          success: {
            text: "OK",
            onClick: (e) => {
              closeModal();
              clearCart();
            },
          },
        });
      }
    });
  };
  /**
   * @type {import("../types").PayPalPayment['createOrder']}
   */
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        // todo map the order
        {
          amount: {
            currency_code: "USD",
            value: carttotal.toString(),
          },
        },
      ],
    });
  };
  /**
   * @type {import("../types").PayPalPayment['ApprovedPurchase']}
   */
  const ApprovedPurchase = (data, actions) => {
    if (data.paymentID) {
      checkout_order();
    } else {
      setModal({
        ...modal,
        hidden: false,
        title: "Checkout Order",
        body: `\
          Something went wrong with the payment process, please try again later.
        `,
        success: {
          text: "OK",
          onClick: (e) => {
            closeModal();
          },
        },
      });
    }
  };

  return (
    <div className="pt-8">
      <PayPalScriptProvider
        options={{
          "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID2,
          // "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        }}
      >
        <PayPalButtons
          createOrder={createOrder}
          // onApprove={ApprovedPurchase}
          onApprove={(data, actions) => {
            return actions.order.capture().then(function (details) { alert('Transaction Success') })
          }}
          style={{ layout: "vertical" }}
        />
      </PayPalScriptProvider>
    </div>
  );
};
export default Pay;
