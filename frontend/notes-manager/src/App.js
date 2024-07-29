import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPAge';
import AboutUs from './components/Aboutus/AboutUs';
import ContactUs from './components/Contactus/ContactUs';
import './styles.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/dashboard"
          element={isLoggedIn && user ? <Dashboard userId={user.id} setIsLoggedIn={setIsLoggedIn} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
