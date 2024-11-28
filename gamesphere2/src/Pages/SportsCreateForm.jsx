import React, { useState } from 'react';
import './Actionform.css';
import Header from '../Components/Header';

const SportsCreate = () => {
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    rating: '',
    review: '',
    image: '',
    stars: '',
    average: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://backgame-c41e5170a8e2.herokuapp.com/sports', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      alert('Data submitted successfully!');
      // Optionally reset form fields after successful submission
      setFormData({
        _id: '',
        name: '',
        rating: '',
        review: '',
        image: '',
        stars: '',
        average: ''
      });
    } catch (error) {
      console.error('Error submitting data:', error.message);
      alert('Failed to submit data. Please try again.');
    }
  };

  return (
    <>
    <Header/>
      <h1 className='title'>Please add another sports game</h1>
      <div className="action-form">
        <h2>Add Sports Game</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input type="text" name="_id" value={formData._id} onChange={handleChange} />
          </div>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SportsCreate;