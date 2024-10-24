import React from 'react';
import '../styles/SignIn.css';

function SignIn() {
  return (
    <div className="signin">
      <h3>Sign In</h3>
      <form>
        <label htmlFor="srn">SRN:</label>
        <input type="text" id="srn" placeholder="Enter your SRN" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
