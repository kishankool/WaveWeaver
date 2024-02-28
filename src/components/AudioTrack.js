// components/AudioTrack.js

import React from 'react';

const AudioTrack = ({ track }) => {
  return (
    <div className="audio-track">
      <div className="track-name">{track.name}</div>
      {/* Add audio waveform visualization here */}
      {/* Add playback controls here */}
      <style jsx>{`
        .audio-track {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }
        .track-name {
          flex: 1;
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
};

export default AudioTrack;
