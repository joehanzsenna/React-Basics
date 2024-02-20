import React from "react";
import { products } from "./PropertyDb";
import ProductCard from "./ProductCard";
import './product.css'

const Property = () => {
  return (
    <div className="product" >
      <div className="product-content">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            venue={product.venue}
            location={product.location}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Property;
