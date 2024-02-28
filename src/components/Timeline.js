// components/Timeline.js

import React from 'react';
import AudioTrack from './AudioTrack';

const Timeline = ({ tracks }) => {
  return (
    <div className="timeline">
      {tracks.map((track, index) => (
        <AudioTrack key={index} track={track} />
      ))}
      <style jsx>{`
        .timeline {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Timeline;
