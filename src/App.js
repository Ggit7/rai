import React, { useState } from 'react';
import Greeting from './Component/Greeting';
import ConfettiEffect from './Component/ConfettiEffect';
// import MessageBoard from './Component/MessageBoard';
import MusicButton from './Component/MusicButton';
import './App.css';
import Card from './Component/MessageCard';

function App() {
  return (
    <div className="App">
      <ConfettiEffect />
      <Greeting />
      <MusicButton />
      <br/>
      <br/>
      {/* <MessageBoard /> */}
      <Card/>
    </div>
  );
}

export default App;
