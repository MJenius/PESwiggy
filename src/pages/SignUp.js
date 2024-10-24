import React from 'react';
import '../styles/SignUp.css';

function SignUp() {
  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <label htmlFor="srn">SRN:</label>
        <input type="text" id="srn" placeholder="Enter your SRN" />
        <label htmlFor="phone">Phone No:</label>
        <input type="text" id="phone" placeholder="Enter your phone number" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
