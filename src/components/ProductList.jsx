import React from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
  useFetch("https://dummyjson.com/products"); // Using custom hook to fetch productlist

  const productList = useSelector((state) => state.products.products); // Subscribe product list from productSlice
  return (
    <div className="container" id="product-list">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {productList &&
          productList.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
