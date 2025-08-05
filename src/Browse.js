import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Browse() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Browse Our Products</h1>
        <p>Choose a category below to explore our offerings.</p>
        <button
          className="order-button"
          onClick={() => navigate('/baked-goods')}
        >
          Baked Goods
        </button>
        <br />
        <button className="order-button" style={{ marginTop: '1rem' }}>
          Flowers
        </button>
      </header>
    </div>
  );
}

export default Browse;