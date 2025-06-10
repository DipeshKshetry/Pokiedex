import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './src/Home';
import About from './src/About';
import Clothing from './src/Clothing';
import Toys from './src/Toys';
import Futsal from './src/Futsal';
import Printing from './src/Printing';

function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      style={{ marginTop: 20, padding: '8px 16px', cursor: 'pointer' }}
    >
      ← Back to Home
    </button>
  );
}

function App() {
  return (
    <Router>
      <div style={{ maxWidth: 900, margin: 'auto', padding: 20, fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/" style={{ marginRight: 15 }}>Home</Link>
          <Link to="/about" style={{ marginRight: 15 }}>About Us</Link>
          <Link to="/clothing" style={{ marginRight: 15 }}>Clothing</Link>
          <Link to="/toys" style={{ marginRight: 15 }}>Toys</Link>
          <Link to="/futsal" style={{ marginRight: 15 }}>Futsal</Link>
          <Link to="/printing">Printing</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<><About /><BackButton /></>} />
          <Route path="/clothing" element={<><Clothing /><BackButton /></>} />
          <Route path="/toys" element={<><Toys /><BackButton /></>} />
          <Route path="/futsal" element={<><Futsal /><BackButton /></>} />
          <Route path="/printing" element={<><Printing /><BackButton /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
