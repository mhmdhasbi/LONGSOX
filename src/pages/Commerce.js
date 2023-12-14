import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Tarik data keranjang dari local storage saat komponen dimuat
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Fungsi untuk menambah item ke keranjang
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2>Cart</h2>
      <a href='/'>kembali</a>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;