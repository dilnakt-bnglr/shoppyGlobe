import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [productDetail, setProductDetail] = useState(null);
  // console.log(params);

  useEffect(() => {
    const productUrl = `https://dummyjson.com/products/${params.id}`;
    fetch(productUrl)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [params]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img width={"80%"} src={productDetail?.images[0]} />
        </div>
        <div className="col-md-6">
          <h1>{productDetail?.title}</h1>
          <p>{productDetail?.description}</p>
          <p>{productDetail?.rating}</p>
          <p>Price {productDetail?.price}</p>
        </div>
      </div>
      <div className="row m-2 border border-secondary p-2">
        <div className="col-md-6">
          <h3>Reviews</h3>
          {productDetail?.reviews?.map((review) => {
            return (
              <div>
                <h4 className="fw-light">{review.reviewerName}</h4>
                <p>{review.rating}</p>

                <p>{review.comment}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
