import React from 'react';
import '../styles/Cart.css';

function Cart() {
  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <p>No items in your cart yet.</p>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
