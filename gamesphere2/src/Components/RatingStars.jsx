import React from 'react';
import './RatingStars.css'; 

const RatingStars = ({ rating }) => {
  const renderStars = () => {
    const maxStars = 5; 

  
    const numStars = Math.ceil(parseFloat(rating));

    
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < numStars) {
        stars.push(<span key={i} className="star">&#9733;</span>); 
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); 
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