import React from "react";
import Layout from "./components/Layout";
import ProductItem from "./components/ProductItem";
import HomeBanner from "./components/HomeBanner";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <HomeBanner />
      <ProductList />
    </div>
  );
}

export default App;
