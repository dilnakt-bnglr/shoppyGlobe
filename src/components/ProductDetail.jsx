import React from "react";

function ProductDetail() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            width={"80%"}
            src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
          />
        </div>
        <div className="col-md-6">
          {/* <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" /> */}
          <h1>Essence Mascara Lash Princess</h1>
          <p>
            The Essence Mascara Lash Princess is a popular mascara known for its
            volumizing and lengthening effects. Achieve dramatic lashes with
            this long-lasting and cruelty-free formula.
          </p>
          <p>2.56</p>
          <p>Price 9.99</p>
        </div>
      </div>
      <div className="row m-2 border border-secondary p-2">
        <div className="col-md-6">
          <h3>Reviews</h3>
          <p>Rating 3</p>
          <h4>Eleanor Collins</h4>
          <p>Would not recommend!</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
