// components/AudioTrack.js

import React, { useRef, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioTrack = ({ track }) => {
  const waveformRef = useRef(null);
  const [waveSurfer, setWaveSurfer] = useState(null);

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: 'rgba(0, 0, 0, 0.2)',
      progressColor: 'rgba(0, 0, 0, 0.5)',
      cursorWidth: 0,
      height: 60,
    });
    wavesurfer.load(track.audioSrc);
    setWaveSurfer(wavesurfer);

    return () => wavesurfer.destroy();
  }, [track.audioSrc]);

  const handlePlay = () => {
    if (waveSurfer) {
      waveSurfer.playPause();
    }
  };

  const handleStop = () => {
    if (waveSurfer) {
      waveSurfer.stop();
    }
  };

  return (
    <div className="audio-track">
      <div className="track-name">{track.name}</div>
      <div ref={waveformRef} className="waveform" />
      <div className="controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <style jsx>{`
        .audio-track {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        .track-name {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .waveform {
          margin-bottom: 0.5rem;
        }
        .controls button {
          margin-right: 0.5rem;
          padding: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default AudioTrack;
