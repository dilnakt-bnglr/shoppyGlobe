import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function Cart() {
  const cartData = useSelector((store) => store.cart.cart);
  console.log("cart", cartData);
  return (
    <div className="shop-cart">
      <div className="d-flex justify-content-between">
        <h2 className="cart-title fw-light">Shopping Cart</h2>
        <button className="proceed-btn">Proceed to Buy</button>
      </div>
      {cartData.map((cartItem) => console.log(cartItem))}
    </div>
  );
}

export default Cart;
