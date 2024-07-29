// src/components/LandingPage/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import Navbar from '../Navbar/Navbar';
import '../Navbar/Navbar.css'


function LandingPage() {
  return (
    <>
    <Navbar/>
    <div className="landing-page">
      
      <div className="content">
        <h1>Welcome to Note Manager</h1>
        <p>Your personal space to manage and organize notes efficiently.</p>
        <Link to="/signup" className="navbar-button">Signup</Link>
      </div>
     
    </div>
    </>
  );
}

export default LandingPage;
