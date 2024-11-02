import React, { useEffect, useRef, useState } from 'react';
import message from '../Component/message.mp3'; // Adjust the path as necessary
const AudioMessageButton = () => {
  const audioRef = useRef(new Audio(message));
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch((error) => {
        console.log("Autoplay blocked. User interaction may be required.");
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Loop the audio indefinitely

    // Cleanup: pause and reset audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <button onClick={togglePlay} style={{color:'red', }}>
        {isPlaying ? 'Stop Message' : 'Play Birthday Message'}
      </button>
      <p>{isPlaying ? "I LOVE YOU DIVAI.!" : "Click to play MY WORD."}</p>
    </div>
  );
};

export default AudioMessageButton;
