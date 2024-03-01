import React, { useState ,useEffect} from 'react';
import AudioTrack from '../components/AudioTrack';
import Timeline from '../components/Timeline';
import PlaybackControls from '../components/PlaybackControls';
import WaveSurfer from 'wavesurfer.js';


import audio1 from '../mockData/batman.mp3';
import audio2 from '../mockData/har.mp3';
import audio3 from '../mockData/kudiye.mp3';

const App = () => {
  const [tracks, setTracks] = useState([
    { name: 'Track 1', audioSrc: '/assets/audio/batman.mp3' },
    { name: 'Track 2', audioSrc: '/assets/audio/har.mp3' },
    { name: 'Track 3', audioSrc: '/assets/audio/kudiye.mp3' },
  ]);
  const [waveSurfers, setWaveSurfers] = useState([]);

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

  useEffect(() => {
    const wavesurfers = tracks.map((track) => {
      // Sanitize track name to remove spaces and special characters
      const sanitizedTrackName = track.name.replace(/\s+/g, '-').toLowerCase();
  
      const wavesurfer = WaveSurfer.create({
        container: `#wavesurfer-${sanitizedTrackName}`,
        waveColor: 'rgba(0, 0, 0, 0.2)',
        progressColor: 'rgba(0, 0, 0, 0.5)',
        cursorWidth: 0,
        height: 60,
      });
      wavesurfer.load(track.audioSrc);
      return wavesurfer;
    });
  
    setWaveSurfers(wavesurfers);
  
    return () => {
      wavesurfers.forEach(wavesurfer => {
        wavesurfer.destroy();
      });
    };
  }, [tracks]);
  

  return (
    <div>
      <Timeline tracks={tracks}>
        {tracks.map((track, index) => (
          <AudioTrack
            key={index}
            index={index}
            track={track}
            onMoveTrack={moveTrack}
          />
        ))}
      </Timeline>
      <PlaybackControls waveSurfers={waveSurfers} />
    </div>
  );

};

export default App;
