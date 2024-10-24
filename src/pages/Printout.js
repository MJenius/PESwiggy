import React from 'react';
import '../styles/Printout.css';

function Printout() {
  return (
    <div className="printout">
      <h3>Printout Orders</h3>
      <form>
        <label htmlFor="details">Additional Instructions:</label>
        <textarea id="details" placeholder="Enter printout details"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Printout;
