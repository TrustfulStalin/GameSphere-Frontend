import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ActSingle.css';
import Header from '../Components/Header';

const FightingUpandData = () => {
  const { _id } = useParams(); // Access the _id parameter from the URL
  const [fighterData, setFighterData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    review: '',
    image: '',
    stars: '',
    average: '',
    reviewName: '',
    reviewText: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/fighter/${_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch fighter data');
        }
        const data = await response.json();
        setFighterData(data);
        setFormData({
          name: data.name,
          rating: data.rating,
          review: data.review,
          image: data.image || '',
          stars: data.stars,
          average: data.average,
          reviewName: '',
          reviewText: ''
        });
      } catch (error) {
        console.error('Error fetching fighter data:', error.message);
      }
    };

    fetchData();
  }, [_id]); // Fetch data whenever the _id parameter changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/fighter/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          rating: formData.rating,
          review: formData.review,
          image: formData.image,
          stars: formData.stars,
          average: formData.average,
          reviewName: formData.reviewName,
          reviewText: formData.reviewText
        })
      });
      if (!response.ok) {
        throw new Error('Failed to update fighter data');
      }
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating fighter data:', error.message);
      alert('Failed to update data. Please try again.');
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star">&#9733;</span>);
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>);
      }
    }
    return stars;
  };

  return (
    <>
      <Header />
      <div className="fighter-details">
        <h2 className="title">Fighter Details for ID: {_id}</h2>
        {fighterData ? (
          <div>
            <div className="fighter-info">
              <p><strong>Name:</strong> {fighterData.name}</p>
              <p className="fighter-image-container">
                <strong>Image:</strong> {fighterData.image && <img src={fighterData.image} alt={fighterData.name} className="fighter-image" />}
              </p>
              <div className="rating-stars-container">
                <p className="rating-label"><strong>Rating:</strong></p>
                <div className="stars">{renderStars(fighterData.rating)}</div>
              </div>
              <p className="review"><strong>Review:</strong> {fighterData.review}</p>
              <p><strong>Stars:</strong> {fighterData.stars}</p>
              <p><strong>Average:</strong> {fighterData.average}</p>
            </div>
            <form className="fighter-update-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Rating:</label>
                <input type="number" name="rating" value={formData.rating} onChange={handleChange} />
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
                <label>Stars:</label>
                <input type="number" name="stars" value={formData.stars} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Average:</label>
                <input type="number" name="average" value={formData.average} onChange={handleChange} />
              </div>
              {/* New fields for adding review */}
              <div className="form-group">
                <label>Review Name:</label>
                <input type="text" name="reviewName" value={formData.reviewName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Review Text:</label>
                <textarea name="reviewText" value={formData.reviewText} onChange={handleChange}></textarea>
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

export default FightingUpandData;