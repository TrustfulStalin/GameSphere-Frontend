import React, { useState, useEffect } from 'react';
import './cards.css';
import Header from '../Components/Header';
const SportsGames = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://capstone-back-78a0aa10b637.herokuapp.com/sport');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setSports(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/sports/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      alert('Data deleted successfully!');
      fetchData(); // Refresh the sports list after deletion
    } catch (error) {
      console.error('Error deleting data:', error.message);
      alert('Failed to delete data. Please try again.');
    }
  };

  return (
    <>
    <Header/>
      <h1 className='title'>Sports Games List</h1>

      <div className="action-list">
        {sports.map(sport => (
          <div key={sport._id} className="card">
            <div className="card-body">
              <h3><a href={`/Sport/${sport._id}`}>{sport.name}</a></h3>
              {sport.image && <img src={sport.image} alt={sport.name} className='card-image' />}
              <button onClick={() => handleDelete(sport._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SportsGames;