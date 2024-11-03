import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  const cardsData = [
    {
      message: "Happy Birthday my lovely sister.... 🎉",
      image: "../11.jpg" // Replace with your image URL
    },
    {
      message: "You are such a blessing, and I hope you know that on your birthday... 🎂",
      image: "../12.jpg" // Replace with your image URL
    },
    {
      message: "On this wonderful day, take time to reflect on all the blessings you’ve received...! 🎈",
      image: "../13.jpg" // Replace with your image URL
    },
    {
     
      message: "I’m so grateful to have you by my side,and blessed to call you my sister. 🌟",
      image: "../14.jpg" // Replace with your image URL
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
