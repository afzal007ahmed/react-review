import React from "react";

export const Cart = ({ cart, setCart }) => {
  console.log(cart);
  return (
    <div>
      {cart &&
        cart.map((item) => (
          <div style={{border : "1px solid black" , padding : 10 }}>
            <p>{item.name} </p>
            <p>{item.variant.pricing.salePrice}</p>
          </div>
        ))}
         <button disabled={cart.length === 0 } onClick={() => setCart([])}>Checkout</button>
    </div>
  );
};
