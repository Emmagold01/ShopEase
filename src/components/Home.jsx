import ProductPage from './ProductPage';
import CartPage from './CartPage';
import { useState } from 'react';

export default function Home() {
  const [cartItem, setCartItem] = useState([]);

  const handleCartItem = (product) => {
    setCartItem([...cartItem, product]);

    // console.log(cartItem);
  };

  return (
    <div>
      <ProductPage handleCartItem={handleCartItem} />
      {/* 🛒 Display Cart Items */}
      <CartPage cartItem={cartItem} setCartItem={setCartItem} />
    </div>
  );
}
