import React from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

function ProductList() {
  const { data, error } = useFetch("https://dummyjson.com/products"); // Using custom hook to fetch productlist

  const productList = useSelector((state) => state.products.products); // Subscribe product list from productSlice

  // error handling
  if (error) {
    return <p className="text-center mt-4 fw-bold fs-4 text-danger">{error}</p>;
  }
  return (
    <div className="container" id="product-list">
      {productList?.length <= 0 ? (
        <p className="text-center fw-bold text-danger fs-4">
          No products found. Try a different title or category.
        </p>
      ) : (
        ""
      )}
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
