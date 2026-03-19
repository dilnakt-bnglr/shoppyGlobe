import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  incermentProductCount,
  decrementProductCount,
} from "../utils/cartSlice";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  // Remove a single cartitem from cart
  const handleRemovecartItem = (item) => {
    dispatch(removeCartItem(item));
  };

  // Increment the product count
  const handleIncrementProductCount = (item) => {
    dispatch(incermentProductCount(item));
  };

  // Decrement the product count
  const handleDecrementProductCount = (item) => {
    dispatch(decrementProductCount(item));
  };

  return (
    <div>
      <hr />
      <div className="row mb-3">
        <div className="col-md-2">
          <img src={cartItem.images[0]} width={"80%"} />
        </div>
        <div className="col-md-10 d-flex justify-content-around">
          <div className="" style={{ width: "60%" }}>
            <h3>{cartItem.title}</h3>
            <p>{cartItem.description}</p>
            <div className="d-flex">
              <div className="border border-2 rounded-pill border-warning fw-bold text-center ">
                <LuMinus
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleDecrementProductCount(cartItem)}
                />
                <span>{cartItem.productCount}</span>
                <GoPlus
                  className="mx-2"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleIncrementProductCount(cartItem)}
                />
              </div>
              <button
                type="button"
                className="btn btn-link p-0 mx-4"
                onClick={() => handleRemovecartItem(cartItem)}
              >
                Remove
              </button>
            </div>
          </div>

          <div>
            <span className="border border-danger text-bg-danger p-1">
              {cartItem.discountPercentage}%
            </span>
            <p className="fw-semibold">Price :{cartItem.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
