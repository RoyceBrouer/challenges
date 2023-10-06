import React from "react";
import Product from "./Product";

export default function Productlist({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
