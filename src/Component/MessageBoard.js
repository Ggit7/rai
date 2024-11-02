import React, { useState } from 'react';
import './MessageBoard.css';

const MessageBoard = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const addMessage = () => {
    if (input) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="message-board">
      <h2>Leave a Birthday Message</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Write your message here" 
      />
      <button onClick={addMessage}>Submit</button>
      <div className="messages">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;
