// components/PlaybackControls.js

import React, { useState, useEffect } from 'react';

const PlaybackControls = ({ waveSurfers }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Pause all WaveSurfer instances when unmounting
    return () => {
      waveSurfers.forEach(waveSurfer => {
        waveSurfer.pause();
      });
    };
  }, [waveSurfers]);

  const handlePlayPause = () => {
    waveSurfers.forEach(waveSurfer => {
      if (isPlaying) {
        waveSurfer.pause();
      } else {
        waveSurfer.play();
      }
    });
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    waveSurfers.forEach(waveSurfer => {
      waveSurfer.stop();
    });
    setIsPlaying(false);
  };

  return (
    <div className="playback-controls">
      <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button onClick={handleStop}>Stop</button>
      <style jsx>{`
        .playback-controls {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }
        .playback-controls button {
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PlaybackControls;
