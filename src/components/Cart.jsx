import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="shop-cart">
      <h2 className="cart-title fw-light">Shopping Cart</h2>

      <CartItem />
      <CartItem />
    </div>
  );
}

export default Cart;
