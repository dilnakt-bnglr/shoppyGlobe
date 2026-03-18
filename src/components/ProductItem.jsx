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
    <div className="main-container g-5 col-md-4">
      <div className="card card-cont">
        <img
          src={product.images[0]}
          className="card-img-top card-img"
          alt="img"
          width={"30%"}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>
          <Link to={`/products/${product.id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
