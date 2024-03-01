import React, { useState } from 'react';
import AudioTrack from '../components/AudioTrack';
import Timeline from '../components/Timeline';
import PlaybackControls from '../components/PlaybackControls';

import audio1 from '../mockData/batman.mp3';
import audio2 from '../mockData/har.mp3';
import audio3 from '../mockData/kudiye.mp3';

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

  // Initialize tracks with audio files
  useState(() => {
    const track1 = { name: 'Track 1', audioSrc: audio1 };
    const track2 = { name: 'Track 2', audioSrc: audio2 };
    const track3 = { name: 'Track 3', audioSrc: audio3 };
    setTracks([track1, track2, track3]);
  }, []);

  return (
    <div>
      <Timeline tracks={tracks}>
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
