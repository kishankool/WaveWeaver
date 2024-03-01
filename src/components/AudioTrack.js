import React, { useRef, useState, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioTrack = ({ track }) => {
  const waveformRef = useRef(null);
  const [waveSurfer, setWaveSurfer] = useState(null);
  const containerId = `wavesurfer-${track.name.replace(/\s+/g, '-').toLowerCase()}`;

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: `#${containerId}`, // Use the generated container ID
      waveColor: 'rgba(0, 0, 0, 0.2)',
      progressColor: 'rgba(0, 0, 0, 0.5)',
      cursorWidth: 0,
      height: 60,
    });
    wavesurfer.load(track.audioSrc);
    setWaveSurfer(wavesurfer);

    return () => wavesurfer.destroy();
  }, [track.audioSrc, containerId]);

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
      <div ref={waveformRef} id={containerId} className="waveform" />
      <div className="controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
      </div>
      <style jsx>{`
        // Your styling here
      `}</style>
    </div>
  );
};

export default AudioTrack;
