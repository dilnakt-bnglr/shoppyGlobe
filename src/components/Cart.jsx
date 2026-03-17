import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";

function Cart() {
  return (
    <div className="shop-cart">
      <div className="d-flex justify-content-between">
        <h2 className="cart-title fw-light">Shopping Cart</h2>
        <button className="proceed-btn">Proceed to Buy</button>
      </div>

      <CartItem />
      <CartItem />
    </div>
  );
}

export default Cart;
