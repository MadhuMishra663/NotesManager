import React from 'react';
import './ContactUs.css';
import Navbar from '../Navbar/Navbar';

function ContactUs() {
  return (
    <>
     <Navbar/>
      <div className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further information, please reach out to us at:</p>
        <p>Email: support@notemanager.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </>
  );
}

export default ContactUs;
