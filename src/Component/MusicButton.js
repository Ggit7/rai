import React, { useEffect, useRef } from 'react';
import birthdaySong from '../Component/birthdaySong.mp3';

const MusicPlayer = () => {
  const audioRef = useRef(new Audio(birthdaySong));

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Set the audio to loop indefinitely

    // Play audio on component mount
    audio.play().catch((error) => {
      console.log("Autoplay blocked. User interaction may be required.");
    });

    // Cleanup: pause and reset audio when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null; // This component does not render any UI
};

export default MusicPlayer;
