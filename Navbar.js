// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Pokiedex</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/clothing">Clothing</Link></li>
        <li><Link to="/toys">Toys</Link></li>
        <li><Link to="/futsal">Futsal</Link></li>
        <li><Link to="/printing">Printing</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
