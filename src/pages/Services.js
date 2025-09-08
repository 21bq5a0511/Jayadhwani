import React, { useEffect, useState } from "react";
import "./Services.css";

function Services() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animations on mount
  }, []);

  return (
    <div className={`services-page ${animate ? "fade-in" : ""}`}>
      <h1 className={animate ? "slide-down" : ""}>Our Services</h1>
      
      <ul className={animate ? "fade-in-up" : ""}>
        <li><strong>Sunday Worship:</strong> 09:00 AM – 02:00 PM</li>
        <li><strong>Purification Prayers:</strong> Saturday 7:00 PM – 10:00 PM</li>
        <li><strong>Fasting Prayers:</strong> 15th of Every month 9:00 PM – 05:00 AM</li>
        <li><strong>Community Service:</strong> Monthly on the 1st Sunday</li>
      </ul>

      <p className={animate ? "fade-in-up" : ""}>
        We welcome everyone to participate and grow with us!
      </p>
    </div>
  );
}

export default Services;
