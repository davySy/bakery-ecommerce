// import React from 'react';

// function Browse() {
//   return (
//     <div style={{ textAlign: 'center', padding: '2rem' }}>
//       <h1>Browse Our Products</h1>
//       <p>Here you will find a selection of baked goods and floral arrangements.</p>
//     </div>
//   );
// }

// export default Browse;

import React from 'react';
import './App.css'; // Reuse same styles

function Browse() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Browse Our Products</h1>
        <p>Choose a category below to explore our offerings.</p>
        <button className="order-button">Baked Goods</button>
        <br />
        <button className="order-button" style={{ marginTop: '1rem' }}>Flowers</button>
      </header>
    </div>
  );
}

export default Browse;