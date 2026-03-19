import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addCartItem } from "../utils/cartSlice.js";

function ProductDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState(null); // To store the product details

  useEffect(() => {
    // To fetch the product details using id
    const productUrl = `https://dummyjson.com/products/${params.id}`;
    fetch(productUrl)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [params]);

  // To add product to cart
  const handleAddToCart = (productDetail) => {
    dispatch(addCartItem(productDetail));
  };

  return (
    <div className="container shadow-sm mt-5">
      <div className="row">
        <div className="col-md-6">
          <img width={"80%"} src={productDetail?.images[0]} />
        </div>
        <div className="col-md-6 m-auto">
          <h1 className="fs-1 fw-bold">{productDetail?.title}</h1>
          <p className="fs-5 fw-normal">{productDetail?.description}</p>
          <p className="fst-italic text-warning fw-semibold">
            Rating : {productDetail?.rating}
          </p>
          <p className="text-success">{productDetail?.availabilityStatus}</p>
          <p className="text-primary">{productDetail?.shippingInformation}</p>
          <hr />
          <p className="fs-3 fw-bold">
            <span className="text-danger fw-light fs-4">
              -{productDetail?.discountPercentage}%
            </span>{" "}
            <sup>
              <LiaRupeeSignSolid />
            </sup>
            {productDetail?.price}
          </p>
          <button
            className="btn btn-primary border border-0 bg-warning text-black fw-bold mb-2"
            onClick={() => handleAddToCart(productDetail)}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <hr />
      <div className="row m-2 border border-0 p-5">
        <div className="col-md">
          <h3 className="text-center mb-4">Customer Reviews</h3>
          {productDetail?.reviews?.map((review) => {
            return (
              <div>
                <h4 className="fw-semibold fs-6">
                  <span className="me-2 fs-2">
                    <IoPersonCircleOutline />
                  </span>
                  {review.reviewerName}
                </h4>
                <p className="text-warning fw-semibold">
                  Rating : {review.rating}
                </p>

                <p className="fst-italic">{review.comment}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
