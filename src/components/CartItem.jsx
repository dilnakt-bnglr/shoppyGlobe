import React from "react";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../utils/cartSlice";

function CartItem({ cartItem }) {
  const dispatch = useDispatch();

  const handleRemovecartItem = (item) => {
    dispatch(removeCartItem(item));
  };

  return (
    <div>
      <hr />
      <div className="row">
        <div className="col-md-2">
          <img src={cartItem.images[0]} width={"80%"} />
        </div>
        <div className="col-md-10 d-flex justify-content-around">
          <div className="" style={{ width: "60%" }}>
            <h3>{cartItem.title}</h3>
            <p>{cartItem.description}</p>
            <button
              type="button"
              class="btn btn-link"
              onClick={() => handleRemovecartItem(cartItem)}
            >
              Remove
            </button>
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
