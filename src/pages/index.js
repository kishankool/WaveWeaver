import React, { useState } from 'react';
import AudioTrack from '../components/AudioTrack';
import Timeline from '../components/Timeline';
import PlaybackControls from '../components/PlaybackControls';

const App = () => {
  const [tracks, setTracks] = useState([]);

  const addTrack = (audioFile) => {
    // Add audioFile to tracks state
    setTracks([...tracks, audioFile]);
  };

  const moveTrack = (startIndex, endIndex) => {
    // Move track in tracks state from startIndex to endIndex
    const newTracks = [...tracks];
    const [movedTrack] = newTracks.splice(startIndex, 1);
    newTracks.splice(endIndex, 0, movedTrack);
    setTracks(newTracks);
  };

  return (
    <div>
      <Timeline>
        {tracks.map((track, index) => (
          <AudioTrack
            key={index}
            index={index}
            audioFile={track}
            onMoveTrack={moveTrack}
          />
        ))}
      </Timeline>
      <PlaybackControls />
    </div>
  );
};

export default App;
