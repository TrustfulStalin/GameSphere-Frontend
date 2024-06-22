import React from 'react';
import './RatingStars.css'; // Optional: CSS for styling rating stars

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const maxStars = 5; // Maximum number of stars to display

    // Calculate the number of full stars based on the rating
    const numStars = Math.ceil(parseFloat(rating));

    // Render stars based on numStars
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < numStars) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Unicode star character
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); // Unicode empty star character
      }
    }

    return stars;
  };

  return (
    <div className="rating-stars">
      {renderStars()}
    </div>
  );
};

export default RatingStars;