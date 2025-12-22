import React, { useState, useEffect, useRef } from "react";
// Import the audio file
// Note: Ensure the path matches exactly. If filename has spaces, import might need care or renaming.
// Webpack usually handles spaces in imports fine.
import soundFile from "../assets/Melodysheep - The Wandering Dream.m4a"; 

const Music = () => {
  const [playing, setPlaying] = useState(true);
  const audioRef = useRef(new Audio(soundFile));

  useEffect(() => {
    // Configure audio
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Cleanup on unmount
    return () => {
      audioRef.current.pause();
    };
  }, []);

  useEffect(() => {
    if (playing) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Autoplay started!
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            setPlaying(false);
          });
      }
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  const togglePlay = () => {
    setPlaying(!playing);
  };

  return (
    <button
      className={`music-btn ${playing ? "playing" : ""}`}
      onClick={togglePlay}
      aria-label={playing ? "Pause Music" : "Play Music"}
      title={playing ? "Pause Music" : "Play Music"}
    >
      {playing ? <i className="fas fa-volume-up"></i> : <i className="fas fa-volume-mute"></i>}
    </button>
  );
};

export default Music;
