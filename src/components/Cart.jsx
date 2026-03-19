import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
  const cartData = useSelector((store) => store.cart.cart); //Subscribe the cart data from cartSlice
  const dispatch = useDispatch();

  // Clear all the cartItems
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="shop-cart">
      <div className="d-flex justify-content-between">
        <h2 className="cart-title fw-light">Shopping Cart</h2>
        <div>
          {cartData.length > 0 ? (
            <button className="proceed-btn" onClick={handleClearCart}>
              Clear Cart
            </button>
          ) : (
            ""
          )}
          {cartData.length > 0 ? (
            <Link to="/checkout">
              <button className="proceed-btn">Proceed to Buy</button>
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
      {cartData.length <= 0 ? (
        <p className="fw-semibold text-center">No Items in the Cart</p>
      ) : (
        ""
      )}
      {cartData.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
  );
}

export default Cart;
