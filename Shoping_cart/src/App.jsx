import React, { useState } from 'react';
import './styles/styles.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import { products } from './data/products';

const App = () => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (id) => {
    if (!cart.includes(id)) setCart([...cart, id]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((itemId) => itemId !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Hero />
      <ProductList
        products={products}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;
