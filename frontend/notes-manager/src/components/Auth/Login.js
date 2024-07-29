// import React, { useState } from 'react';
// import { login } from '../../api'; 
// import { useNavigate } from 'react-router-dom';

// function Login({ setIsLoggedIn }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const user = await login(email);
//     if (user && user.password === password) {
//       setIsLoggedIn(true);
//       navigate('/dashboard');
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import { login } from '../../api';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

function Login({ setIsLoggedIn, setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email);
    if (user && user.password === password) {
      setIsLoggedIn(true);
      setUser(user);
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="auth-container">
      <h2>Login</h2>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
    </>
  );
}

export default Login;

