import React from "react";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { addCartItem } from "../utils/cartSlice.js";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addCartItem(product));
  };

  return (
    <div className="main-container g-5 ">
      <div className="card card-cont h-100 d-flex flex-column shadow-lg">
        <img
          src={product.images[0]}
          className="card-img-top card-img"
          alt="img"
          width={"30%"}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text flex-grow-1">{product.description}</p>
          <div className="d-flex justify-content-between ">
            <button
              className="btn btn-primary border border-0 bg-warning"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link to={`/products/${product.id}`}>
              <button className="btn btn-primary border border-0 bg-success">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
