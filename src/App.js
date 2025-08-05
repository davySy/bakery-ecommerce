// import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom'; // ⬅️ Import Router hooks
// import './App.css';
// import Browse from './Browse';  // ⬅️ Import the new Browse component

// function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Mimi's Bakery and Floral Shop</h1>
//         <p>Fresh baked goods and beautiful flowers</p>
//         <button className="order-button">Order Now</button>
//         <br />
//         <button
//           className="order-button"
//           onClick={() => navigate('/browse')}
//           style={{ marginTop: '1rem' }}
//         >
//           Browse
//         </button>
//       </header>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/browse" element={<Browse />} />
//     </Routes>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Browse from './Browse';
import BakedGoods from './BakedGoods'; // ⬅️ Import new page

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Mimi's Bakery and Floral Shop</h1>
        <p>Fresh baked goods and beautiful flowers</p>
        <button className="order-button">Order Now</button>
        <br />
        <button
          className="order-button"
          onClick={() => navigate('/browse')}
          style={{ marginTop: '1rem' }}
        >
          Browse
        </button>
      </header>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/baked-goods" element={<BakedGoods />} /> {/* ⬅️ New Route */}
    </Routes>
  );
}

export default App;