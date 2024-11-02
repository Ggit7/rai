import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  const cardsData = [
    {
      message: "Happy Birthday my lovely divai.... 🎉",
      image: "../1.jpg" // Replace with your image URL
    },
    {
      message: "Wishing you all the best... 🎂",
      image: "../2.jpg" // Replace with your image URL
    },
    {
      message: "On this wonderful day, take time to reflect on all the blessings you’ve received divai.! 🎈",
      image: "../3.jpg" // Replace with your image URL
    },
    {
     
      message: " Divai! Your smile lights up my life, and I’m so grateful to have you by my side. Here’s to celebrating you today and always! 🌟",
      image: "../4.jpg" // Replace with your image URL
    },
    {
      message: "To my dearest Divai, on your birthday, I want you to know that my love for you grows stronger with each passing year.,...! 🌟",
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
