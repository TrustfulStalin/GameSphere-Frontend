

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../Pages/Audio.css'; 


const AudioPlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5); 

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="audio-player">
      <ReactPlayer
        url={url}
        playing={playing}
        volume={volume}
        controls={true} 
        width="100%"
        height="50px"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <div className="player-controls">
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={handleVolumeChange}
        
        />
        <label>Volume</label>
      </div>
    </div>
  );
};

export default AudioPlayer;