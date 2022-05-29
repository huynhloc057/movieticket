import React, { useEffect, useRef } from "react";

export const Paypal = () => {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "cool looking table",
                payment_options: {
                  allowed_payment_method: "INSTANT_FUNDING_SOURCE",
                },
                amount: {
                  currency_code: "USD",
                  value: 650.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          alert("success");
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

<script src="https://www.paypal.com/sdk/js?client-id=ASzmICmik-QalvVn71yRfoX6Vfrc7MeW_nyt0xt1xT0xmQ2JrJoVqfzBtc3sQPDYCL7qIkIQNMy3L_hX&currency=USD"></script>;
