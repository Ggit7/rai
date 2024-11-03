import React, { useState } from 'react';
import Greeting from './Component/Greeting';
import ConfettiEffect from './Component/ConfettiEffect';
// import MessageBoard from './Component/MessageBoard';
import MusicButton from './Component/MusicButton';
import './App.css';
import Card from './Component/MessageCard';
import AudioMessageButton from './Component/MessageButton';

function App() {
  return (
    <div className="App">
      <ConfettiEffect />
      <Greeting />
      <MusicButton />
      <br/>
      <br/>
      {/* <MessageBoard /> */}
      <p>Click box bellow</p>
      <Card/>
      <br/>
      <br/>
      <AudioMessageButton/>
    </div>
  );
}

export default App;
