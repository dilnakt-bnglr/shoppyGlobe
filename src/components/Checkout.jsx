import React from "react";
import Cart from "./Cart";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="container checkout-container">
      <div className="row">
        <div className="col-md-4 col-12 checkout-form form-content shadow-sm">
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
          <button className="btn btn-primary border border-0 bg-success p-2 my-2">
            Buy Now
          </button>
        </div>
        <div className="col-sm-8 col-12">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
