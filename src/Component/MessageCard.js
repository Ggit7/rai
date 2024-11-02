import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  const cardsData = [
    {
      message: "Happy Birthday! 🎉",
      image: "../1.jpg" // Replace with your image URL
    },
    {
      message: "Wishing you all the best! 🎂",
      image: "../2.jpg" // Replace with your image URL
    },
    {
      message: "Enjoy your special day! 🎈",
      image: "../3.jpg" // Replace with your image URL
    },
    {
     
      message: "Make a wish! 🌟",
      image: "../4.jpg" // Replace with your image URL
    },
    {
      message: "Make a wish! 🌟",
      image: "../5.jpg" // Replace with your image URL
    },
  ];

  // Create state for showContent for each card
  const [showContent, setShowContent] = useState(Array(cardsData.length).fill(false));

  const handleClick = (index) => {
    // Create a new state array with the clicked card toggled
    const updatedShowContent = [...showContent];
    updatedShowContent[index] = !updatedShowContent[index];
    setShowContent(updatedShowContent);
  };

  return (
    <div className="card-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index} onClick={() => handleClick(index)}>
          <h3>{card.title}</h3>
          {showContent[index] && (
            <div className="message-content">
              <img src={card.image} className="submitted-image" />
              <p>{card.message}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
