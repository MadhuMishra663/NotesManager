
import React from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar';

function AboutUs() {
  return (
    <>
    <Navbar/>
    <div className="about-us">
       
      <h2>About Us</h2>
    
      <h3>Information about the Note Manager and its features.</h3>
      <h3>
        Note Manager is a tool designed to help you manage and organize your notes efficiently. 
        Our features include note creation, editing, and storage with user-friendly interfaces and 
        robust functionality to keep your notes safe and accessible.
      </h3>
    </div>
    </>
  );
}

export default AboutUs;
