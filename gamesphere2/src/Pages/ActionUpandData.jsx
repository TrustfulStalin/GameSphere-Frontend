import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ActSingle.css';
import RatingStars from '../Components/RatingStars'; 
import Header from '../Components/Header';
import AudioPlayer from '../Components/Audioplayer';


const ActionUp = () => {
  const { _id } = useParams(); 
  const [actionData, setActionData] = useState(null);
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
        const response = await fetch(`https://backgame-c41e5170a8e2.herokuapp.com/actions/${_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch action data');
        }
        const data = await response.json();
        setActionData(data);
    
        setFormData({
          name: data.name,
          rating: data.rating,
          review: data.review,
          image: data.image || '',
          average: data.average
        });
      } catch (error) {
        console.error('Error fetching action data:', error.message);
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
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/actions/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to update action data');
      }
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating action data:', error.message);
      alert('Failed to update data. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="action-details">
        <h2>Action Details for ID: {_id}</h2>
        {actionData ? (
          <div>
            <div className="action-info">
              <p><strong>Name:</strong> {actionData.name}</p>
              <p><strong>Image:</strong> {actionData.image && <img src={actionData.image} alt={actionData.name} />}</p>
              <div className="rating-stars-container">
                <p><strong>Rating:</strong> <RatingStars rating={formData.rating} /></p>
              </div>
              <p><strong>Review:</strong> {actionData.review}</p>
              <p><strong>Stars:</strong> {formData.rating}</p>
              <p><strong>Average:</strong> {actionData.average}</p>
            </div>
            <form className="action-update-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Rating/Stars:</label>
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
                <label>Average:</label>
                <input type="number" name="average" value={formData.average} onChange={handleChange} />
              </div>
              <button type="submit">Update</button>
            </form>
          </div>
        ) : (
          <p>Loading...</p>
        )}
           <main>
        <AudioPlayer url={'https://www.youtube.com/watch?v=CnQm2_cAZvo'} autoplay={true}  />
      </main>
      </div>
    </>
  );
};

export default ActionUp;