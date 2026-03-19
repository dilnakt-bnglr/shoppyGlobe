import React from "react";
import ProductList from "./ProductList";
import { useDispatch } from "react-redux";
import { searchProducts } from "../utils/productSlice";

function ProductsPage() {
  const dispatch = useDispatch();

  const handleSearchProduct = () => {};

  const handleInput = (searchText) => {
    dispatch(searchProducts(searchText));
  };

  return (
    <div>
      <div className="d-flex justify-content-center m-4">
        <input
          type="text"
          className=" d-inline-block me-2 border rounded-pill"
          style={{ width: "50%" }}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button
          className="btn btn-primary border border-0 bg-success"
          onClick={() => handleSearchProduct}
        >
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
