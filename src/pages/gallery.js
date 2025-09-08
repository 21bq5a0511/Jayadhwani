import React from "react";
import "./gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <h1>Jayadhwani Gallery</h1>

      <div className="gallery-items">
        {/* Pastor Image Card */}
        <div className="gallery-card">
          <img src="/pastor.jpg" alt="Our Pastor" />
          <p>Our Pastor</p>
        </div>

        {/* Songs PDF Card */}
        <div className="gallery-card">
          <p>Jayadhwani Songs PDF</p>
          <a href="/songs.pdf" target="_blank" rel="noopener noreferrer">
            Open PDF
          </a>
        </div>

        {/* You can add more cards below */}
        {/* Example: Another image card */}
        {/*<div className="gallery-card">
          <img src="/church-event.jpg" alt="Church Event" />
          <p>Church Event</p>
        </div>*/}
      </div>
    </div>
  );
}

export default Gallery;
