import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; // custom styles

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            
          </motion.p>

          
        </div>
      </section>

      {/* Jayadhwani Ministries Section */}
      <motion.section
        className="ministries"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Welcome to Jayadhwani Ministries</h2>
        <p>
          At Jayadhwani Ministries, we are committed to serving God and people
          through worship, fellowship, teaching, and outreach. Our vision is to
          build a strong, Christ-centered community that impacts lives for the
          glory of God.
        </p>
        <motion.button
            className="hero-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Us
          </motion.button>
      </motion.section>
      

      {/* About & Services Side by Side */}
      <section className="info-section">
        <motion.div
          className="about-box"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About Our Church</h2>
          <p>
            For over 12 years, Jayadhwani Church has been a place of love,
            fellowship, and community service. We welcome everyone, from children
            to seniors, and strive to create a nurturing spiritual environment.
          </p>
          <a href="/about" className="link-btn">
            Learn More
          </a>
        </motion.div>

        <motion.div
          className="services-box"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Our Services</h2>
          <ul>
            <li>Sunday Worship & Fellowship</li>
            <li>Children & Youth Programs</li>
            <li>Community Outreach</li>
            <li>Prayer Meetings</li>
          </ul>
          <a href="/services" className="link-btn">
            Explore Services
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
