import React from "react";
import ProductList from "./ProductList";
import { useDispatch } from "react-redux";
import { searchProducts } from "../utils/productSlice";

function ProductsPage() {
  const dispatch = useDispatch();

  const handleInput = (searchText) => {
    dispatch(searchProducts(searchText));
  };

  return (
    <div>
      <div className="d-flex justify-content-center m-4">
        <input
          type="text"
          className=" d-inline-block me-2 border rounded-pill p-2"
          style={{ width: "50%" }}
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}

export default ProductsPage;
