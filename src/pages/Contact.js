import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"; // Import icons

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">📞 Contact Us</h1>
      <div className="contact-details">
        <p><strong>Email:</strong> jayadhwaniministres135@gmail.com</p>
        <p><strong>Phone:</strong> +91 95737 88854</p>
        <p><strong>Address:</strong> Jaydhwani Ministries, Karempudi Road, Vinukonda, Palnadu, Andhra Pradesh, Pin:522647</p>
      </div>

      <h2 className="follow-title">🌐 Follow Us</h2>
      <div className="social-links">
        <a href="https://www.facebook.com/share/16586X33oC/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon facebook" /> Facebook
        </a>
        <a href="https://www.instagram.com/jayadhwani3?igsh=MWRpYTcwOHJ4ZGZ1aw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon instagram" /> Instagram
        </a>
        <a href="https://www.youtube.com/channel/UCjoUH7HwRAl2r8mB22VvANQ" target="_blank" rel="noopener noreferrer">
          <FaYoutube className="icon youtube" /> YouTube
        </a>
      </div>
    </div>
  );
}

export default Contact;
