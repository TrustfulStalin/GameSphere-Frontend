import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ActSingle.css';
import Header from '../Components/Header';

const ShootingUpandData = () => {
  const { _id } = useParams(); 
  const [shooterData, setShooterData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    rating: '', 
    review: '',
    image: '',
    average: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/shooter/${_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch shooter data');
        }
        const data = await response.json();
        setShooterData(data);
        setFormData({
          name: data.name,
          rating: `${data.rating} / ${data.stars}`, 
          review: data.review,
          image: data.image || '',
          average: data.average
        });
      } catch (error) {
        console.error('Error fetching shooter data:', error.message);
      }
    };

    fetchData();
  }, [_id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const { rating } = formData;
      const [actualRating, stars] = rating.split(' / ');
      const updatedData = {
        ...formData,
        rating: parseFloat(actualRating), 
        stars: parseInt(stars, 10) 
      };

      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/shooter/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      if (!response.ok) {
        throw new Error('Failed to update shooter data');
      }
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating shooter data:', error.message);
      alert('Failed to update data. Please try again.');
    }
  };

  const renderStars = (rating) => {
    const [actualRating, stars] = rating.split(' / ');
    const starsArray = [];
    const numericStars = parseInt(stars, 10);
    for (let i = 1; i <= 5; i++) {
      if (i <= numericStars) {
        starsArray.push(<span key={i} className="star">&#9733;</span>);
      } else {
        starsArray.push(<span key={i} className="star">&#9734;</span>);
      }
    }
    return (
      <>
        {starsArray} ({actualRating})
      </>
    );
  };

  return (
    <>
    <Header/>
    <div className="shooter-details">
      <h2 className="title">Shooter Details for ID: {_id}</h2>
      {shooterData ? (
        <div className="shooter-info">
          <p className="shooter-info-item"><strong>Name:</strong> {shooterData.name}</p>
          <p className="shooter-info-item"><strong>Image:</strong> {shooterData.image && <img src={shooterData.image} alt={shooterData.name} className="shooter-image" />}</p>
          <div className="rating-stars-container">
            <p className="shooter-info-item"><strong>Rating:</strong> {renderStars(formData.rating)}</p>
          </div>
          <p className="shooter-info-item"><strong>Review:</strong> {shooterData.review}</p>
          <p className="shooter-info-item"><strong>Average:</strong> {shooterData.average}</p>

          {/* Update Form */}
          <form className="update-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <input type="text" name="rating" value={formData.rating} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Review:</label>
              <textarea name="review" value={formData.review} onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
              <label>Image URL:</label>
              <input type="text" name="image" value={formData.image} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Average:</label>
              <input type="text" name="average" value={formData.average} onChange={handleChange} />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default ShootingUpandData;