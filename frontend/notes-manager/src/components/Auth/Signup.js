import React, { useState } from 'react';
import { signup } from '../../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = await signup({ email, password });
    if (newUser) {
      navigate('/login');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
    </>
  );
}

export default Signup;
