import React, { useState } from "react";
import "./Songs.css";

const Songs = ({ songs }) => {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="songs-page">
      <h1 className="songs-title">🎶 Jayadhwani Songs</h1>

      <div className="songs-grid">
        {songs.map((song, index) => (
          <div
            key={index}
            className="song-card"
            onClick={() => setSelectedSong(song)}
          >
            <h3>{song.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSong && (
        <div className="modal-overlay" onClick={() => setSelectedSong(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedSong.title}</h2>
            <pre className="lyrics">{selectedSong.lyrics}</pre>
            <button className="close-btn" onClick={() => setSelectedSong(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Songs;
