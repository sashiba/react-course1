import React from "react";
import "./App.css";
import productsData from "./vschoolProducts";
import Product from "./components/Product";

function App() {
  const productComponents = productsData.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <div>{productComponents}</div>;
}

export default App;
