import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>PESwiggy</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/track-order">Track Order</Link></li>
        <li><Link to="/Delivery">Delivery</Link></li>
        <li><Link to="/Printout">Printout</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
