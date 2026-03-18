import React from "react";
import "./ProductItem.css";
import { useSelector } from "react-redux";

function ProductItem() {
  const productname = useSelector((store) => store.addProduct.product) || [];
  return (
    <div className="main-container d-flex gap-3">
      <div className="card card-cont">
        <img
          src="https://images.pexels.com/photos/34092/pexels-photo.jpg"
          className="card-img-top card-img"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
      <div className="card card-cont">
        <img
          src="https://images.pexels.com/photos/34092/pexels-photo.jpg"
          className="card-img-top card-img"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;
