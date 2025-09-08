import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setAnimate(true);
  }, []);

  return (
    <div className={`about-page ${animate ? "fade-in" : ""}`}>
      <h1 className={animate ? "slide-down" : ""}>About Jayadhwani Ministries</h1>

      {/* Pastor Section */}
      <div className={`pastor-section ${animate ? "fade-in-up" : ""}`}>
        {/* Pastor Image */}
        <img src="/pastor.jpg" alt="Our Pastor" className="pastor-photo" />

        {/* Pastor Text */}
        <div className="pastor-text">
          <h2>Our Pastor: John Peter</h2>
          <p>
            Pastor John Peter has been guiding our community with love, faith, and dedication for over 12 years.
            His teachings inspire and strengthen the lives of all members.
          </p>
        </div>
      </div>

      {/* Ministry Info */}
      <div className={`ministry-info ${animate ? "fade-in" : ""}`}>
        <p>
          Jayadhwani Ministries has been spreading faith, love, and hope in our community for over 12 years.
          We are dedicated to serving everyone, from children to seniors, and creating a welcoming environment.
        </p>
        <p>
          Our mission is to nurture spiritual growth, encourage fellowship, and engage in community service.
          Join us to experience the warmth and love of our church family.
        </p>
      </div>
    </div>
  );
}

export default About;
