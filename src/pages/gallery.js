import React from "react";
import "./gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h1>Jayadhwani Gallery</h1>

      <div className="gallery-items">
        {/* Pastor Image Card */}
        <div className="gallery-card">
          <img src={process.env.PUBLIC_URL + "/pastor.jpg"} alt="Our Pastor" /><p>Pastor John Peter</p>
        </div>

        {/* Songs PDF Card */}
        <div className="gallery-card">
          <p>Jayadhwani Songs PDF</p>
          <a href={process.env.PUBLIC_URL + "/songs.pdf"} target="_blank" rel="noopener noreferrer">
  Open PDF
</a>
        </div>

        {/* You can add more cards below */}
        {/* Example: Another image card */}
        {/*<div className="gallery-card">
          <img src="/Ministries-event.jpg" alt="Ministries Event" />
          <p>Ministries Event</p>
        </div>*/}
      </div>
    </div>
  );
}

export default Gallery;
