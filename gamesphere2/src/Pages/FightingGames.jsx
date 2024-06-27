import React, { useState, useEffect } from 'react';
import './cards.css';
import Header from '../Components/Header';

const FightingGames = () => {
  const [fighters, setFighters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/fighter`,);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setFighters(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/fighters/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      alert('Fighter deleted successfully!');
      fetchData(); // Refresh the fighter list after deletion
    } catch (error) {
      console.error('Error deleting data:', error.message);
      alert('Failed to delete fighter. Please try again.');
    }
  };

  return (
    <>
    <Header/>
      <h1 className='title'>Fighter List</h1>

      <div className="action-list">
        {fighters.map(fighter => (
          <div key={fighter._id} className="card">
            <div className="card-body">
            <h3><a href={`/Fighters/${fighter._id}`}>{fighter.name}</a></h3>
              {fighter.image && <img src={fighter.image} alt={fighter.name} className='card-image' />}
              <button onClick={() => handleDelete(fighter._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FightingGames;