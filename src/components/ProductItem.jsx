import React from "react";
import "./ProductItem.css";
import { useSelector } from "react-redux";

function ProductItem({ product }) {
  // debugger;
  // const productname = useSelector((store) => store.addProduct.product) || [];
  console.log(product);
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
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
