import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Delivery from './pages/Delivery';
import Printout from './pages/Printout';
import Cart from './pages/Cart';
import OrderTracking from './pages/OrderTracking';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/track-order" element={<OrderTracking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
