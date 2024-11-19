import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, cart, addToCart, removeFromCart }) => (
  <div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isInCart={cart.includes(product.id)}
          onAdd={addToCart}
          onRemove={removeFromCart}
        />
      ))}
    </div>
  </div>
);

export default ProductList;
