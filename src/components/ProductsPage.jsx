import React from "react";
import ProductList from "./ProductList";

function ProductsPage() {
  return (
    <div>
      <div className="d-flex justify-content-center m-4">
        <input
          type="text"
          className=" d-inline-block me-2 border rounded-pill"
          style={{ width: "50%" }}
        />
        <button className="btn btn-primary border border-0 bg-success">
          Search
        </button>
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default ProductsPage;
