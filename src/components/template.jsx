// import camera from "../images/camera.jpg";
import React, { useEffect, useState } from "react";
// import cameras from "../images/camera.jpg";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => {
  return (
    <>
      <div class="grid-container">
        {products.map((product) => (
          <div class="item" key={product.id}>
            <a href={`/product-details/${product.id}`}>
              <img className="image" src={product.image} alt={product.title} />
              <p className="product-name">{product.title}</p>
              <p className="price">${product.price}</p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
