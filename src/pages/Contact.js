import React from "react";
import "./Contact.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">📞 Contact Us</h1>

      <div className="contact-details">
        <p><strong>Email:</strong> jayadhwaniministres135@gmail.com</p>
        <p><strong>Phone:</strong> +91 91002 96162</p>
        <p>
          <strong>Address:</strong> Jaydhwani Ministries, Karempudi Road,
          Vinukonda, Palnadu, Andhra Pradesh, Pin: 522647
        </p>
      </div>

      <h2 className="follow-title">🌐 Follow Us</h2>
      <div className="social-links">
        <a
          href="https://www.facebook.com/share/16586X33oC/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="icon facebook" /> Facebook
        </a>
        <a
          href="https://www.instagram.com/jayadhwani3?igsh=MWRpYTcwOHJ4ZGZ1aw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon instagram" /> Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UCjoUH7HwRAl2r8mB22VvANQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icon youtube" /> YouTube
        </a>
      </div>

      <h2 className="map-title">📍 Find Us on the Map</h2>
      <div className="map-container">
        <iframe
          title="Jayadhwani Ministries Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30484.12345678!2d79.745331!3d16.056841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694067172000!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
