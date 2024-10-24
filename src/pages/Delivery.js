import React from 'react';
import '../styles/Delivery.css';

function Delivery() {
  return (
    <div className="delivery">
      <h3>Order Food or Stationery</h3>
      <form>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" placeholder="Enter your location" />
        <label htmlFor="items">Items:</label>
        <textarea id="items" placeholder="Enter your order items"></textarea>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Delivery;
