import React, { useState, useEffect } from 'react';
import AudioTrack from '../components/AudioTrack';
import Timeline from '../components/Timeline';
import PlaybackControls from '../components/PlaybackControls';
import WaveSurfer from 'wavesurfer.js';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [waveSurfers, setWaveSurfers] = useState([]);

  const moveTrack = (startIndex, endIndex) => {
    const newTracks = [...tracks];
    const [movedTrack] = newTracks.splice(startIndex, 1);
    newTracks.splice(endIndex, 0, movedTrack);
    setTracks(newTracks);
  };

  useEffect(() => {
    const initializeWaveSurfers = async () => {
      const wavesurfers = await Promise.all(tracks.map(async (track) => {
        const sanitizedTrackName = track.name.replace(/\s+/g, '-').toLowerCase();
        const wavesurfer = WaveSurfer.create({
          container: `#wavesurfer-${sanitizedTrackName}`,
          waveColor: 'rgba(0, 0, 0, 0.2)',
          progressColor: 'rgba(0, 0, 0, 0.5)',
          cursorWidth: 0,
          height: 60,
        });
        await wavesurfer.load(track.audioSrc);
        return wavesurfer;
      }));

      setWaveSurfers(wavesurfers);
    };

    initializeWaveSurfers();

    return () => {
      waveSurfers.forEach(wavesurfer => {
        wavesurfer.destroy();
      });
    };
  }, [tracks, waveSurfers]);

  useEffect(() => {
    // Initialize tracks with audio files
    const track1 = { name: 'Track 1', audioSrc: '/assets/audio/batman.mp3' };
    const track2 = { name: 'Track 2', audioSrc: '/assets/audio/har.mp3' };
    const track3 = { name: 'Track 3', audioSrc: '/assets/audio/kudiye.mp3' };
    setTracks([track1, track2, track3]);
  }, []);

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
