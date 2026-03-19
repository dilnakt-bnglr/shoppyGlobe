import React from "react";
import useFetch from "../utils/useFetch";
import ProductItem from "./ProductItem";

function ProductList() {
  const { products = [], error } = useFetch("https://dummyjson.com/products");
  return (
    <div className="container" id="product-list">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {products &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
