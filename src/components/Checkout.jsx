import React, { useState } from "react";
import Cart from "./Cart";
import "./Checkout.css";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

function Checkout() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false); // To check if the order is placed or not
  const dispatch = useDispatch();

  // To place the order
  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    dispatch(clearCart());
  };

  return (
    <div className="container checkout-container">
      <div className="row">
        <div className="col-md-4 col-12 checkout-form shadow-sm">
          <br />
          <input type="text" id="fname" name="fname" placeholder="Enter Name" />
          <br />
          <br />
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Mobile No."
          />
          <br />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="enter Email ID"
          />
          <br />
          <br />
          <textarea id="address" placeholder="Enter Address "></textarea>
          <br />
          <button
            className="btn btn-primary border border-0 bg-warning p-2 my-2"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
        <div className="col-sm-8 col-12 m-auto">
          {isOrderPlaced ? (
            <div className="text-center fs-1 fw-semibold text-success">
              Order Placed Successfully !
            </div>
          ) : (
            <Cart />
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
