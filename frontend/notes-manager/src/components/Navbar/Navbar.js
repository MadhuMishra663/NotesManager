// src/components/Navbar/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-title">Note Manager</Link>
      </div>
      <div className="navbar-right">
        <Link to="/about" className="link-section">About Us</Link>
        <Link to="/contact" className="link-section">Contact Us</Link>
        {!isLoggedIn && (
          <>
            <Link to="/signup" className="navbar-button">Signup</Link>
            <Link to="/login" className="navbar-button">Login</Link>
          </>
        )}
        {isLoggedIn && (
          <button onClick={handleLogout} className="navbar-button">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
