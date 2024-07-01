import React, { useState, useEffect } from 'react';
import './cards.css';
import Header from '../Components/Header';
import Footer from '../Components/footer';

const ShootingGames = () => {
  const [shooters, setShooters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://capstone-back-78a0aa10b637.herokuapp.com/shooter');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setShooters(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/shooters/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      alert('Data deleted successfully!');
      fetchData(); // Refresh the shooters list after deletion
    } catch (error) {
      console.error('Error deleting data:', error.message);
      alert('Failed to delete data. Please try again.');
    }
  };

  return (
    <>
    <Header/>
      <h1 className='title'>Shooter Games List</h1>

      <div className="action-list-shoot">
        {shooters.map(shooter => (
          <div key={shooter._id} className="card">
            <div className="card-body-shoot">
              <h3><a href={`/Shooting/${shooter._id}`}>{shooter.name}</a></h3>
              {shooter.image && <img src={shooter.image} alt={shooter.name} className='card-image' />}
              <button onClick={() => handleDelete(shooter._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
};

export default ShootingGames;