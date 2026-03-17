import React from "react";

function CartItem() {
  return (
    <div>
      <hr />
      <div className="row">
        <div className="col-md-2">
          <img
            src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
            width={"80%"}
          />
        </div>
        <div className="col-md-10 d-flex justify-content-around">
          <div className="" style={{ width: "60%" }}>
            <h3>Essence Mascara Lash Princess</h3>
            <p>
              The Essence Mascara Lash Princess is a popular mascara known for
              its volumizing and lengthening effects. Achieve dramatic lashes
              with this long-lasting and cruelty-free formula.
            </p>
            <p>No return policy</p>
          </div>

          <div>
            <p>Price 9.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
