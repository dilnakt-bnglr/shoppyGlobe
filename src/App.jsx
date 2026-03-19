import React from "react";
import Layout from "./components/Layout";
import ProductItem from "./components/ProductItem";
import HomeBanner from "./components/HomeBanner";
import ProductList from "./components/ProductList";
import useFetch from "./utils/useFetch";

function App() {
  useFetch("https://dummyjson.com/products");
  return (
    <div>
      <HomeBanner />
      <ProductList />
    </div>
  );
}

export default App;
