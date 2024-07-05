import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ActSingle.css';
import Header from '../Components/Header';
import AudioPlayer from '../Components/Audioplayer';  // Adjust the path as necessary

const SportsUpandData = () => {
  const { _id } = useParams(); // Access the _id parameter from the URL
  const [sportsData, setSportsData] = useState(null);
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
        const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/sport/${_id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch sports data');
        }
        const data = await response.json();
        setSportsData(data);
        setFormData({
          name: data.name,
          rating: data.rating,
          review: data.review,
          image: data.image || '',
          average: data.average
        });
      } catch (error) {
        console.error('Error fetching sports data:', error.message);
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
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/sport/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to update sports data');
      }
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating sports data:', error.message);
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
    <Header/>
    <div className="sports-details">
      <h2 className="title">Sports Details for ID: {_id}</h2>
      {sportsData ? (
        <div className="sports-info">
          <p className="sports-info-item"><strong>Name:</strong> {sportsData.name}</p>
          <p className="sports-info-item"><strong>Image:</strong> {sportsData.image && <img src={sportsData.image} alt={sportsData.name} className="sports-image" />}</p>
          <div className="rating-stars-container">
            <p className="sports-info-item"><strong>Rating:</strong> {renderStars(sportsData.rating)}</p>
          </div>
          <p className="sports-info-item"><strong>Review:</strong> {sportsData.review}</p>
          <p className="sports-info-item"><strong>Stars:</strong> {sportsData.rating}</p>
          <p className="sports-info-item"><strong>Average:</strong> {sportsData.average}</p>

          {/* Update Form */}
          <form className="update-form" onSubmit={handleSubmit}>
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
              <label>Average:</label>
              <input type="number" name="average" value={formData.average} onChange={handleChange} />
            </div>
            <button type="submit">Update</button>
          </form>

          <main>
        <AudioPlayer url={'https://www.youtube.com/watch?v=PYRCDD7XXsc&list=RDPYRCDD7XXsc&start_radio=1&rv=wBSwSBsgQ8M'} autoplay={true}  />
      </main>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </>
  );
};

export default SportsUpandData;