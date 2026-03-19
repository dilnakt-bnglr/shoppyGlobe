import React from "react";
import ProductList from "./ProductList";
import { useDispatch } from "react-redux";
import { searchProducts } from "../utils/productSlice";
import "./ProductsPage.css";

function ProductsPage() {
  const dispatch = useDispatch();

  //To search products with title and category
  const handleInput = (searchText) => {
    dispatch(searchProducts(searchText));
  };

  return (
    <div>
      <div className="d-flex justify-content-center m-4">
        <input
          type="text"
          className="d-inline-block me-2 border rounded-pill p-2 search-input"
          style={{ width: "50%" }}
          placeholder="Search your products by title & category"
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
