import React from 'react';
import './App.css'; // Reuse the same styles

function BakedGoods() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Baked Goods</h1>
        <img src="/images/fruitcake.jpg" alt="Fruit cake" width="300" />
        <p>Fruit cake</p>
      </header>
    </div>
  );
}

export default BakedGoods;