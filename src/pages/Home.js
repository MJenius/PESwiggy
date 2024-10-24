import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Convenient, reliable delivery for all your on-campus needs.</h2>
        <p>Food, stationery, and printouts delivered right to you.</p>
      </section>
      <section className="shops">
        <h3>Popular Shops</h3>
        <div className="shop-list">
          <div className="shop">Campus Mart</div>
          <div className="shop">Cafe Coffee Day</div>
          <div className="shop">Arabian Shawarma</div>
          <div className="shop">Burger Shop</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
