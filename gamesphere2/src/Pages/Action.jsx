import React, { useState, useEffect } from 'react';
import './cards.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer'; // Corrected import path (capital 'F' in Footer)

const ActionCreate = () => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/actions`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setActions(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/actions/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      alert('Data deleted successfully!');
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error.message);
      alert('Failed to delete data. Please try again.');
    }
  };

  const handleLike = async (id) => {
    try {
      const response = await fetch(`https://capstone-back-78a0aa10b637.herokuapp.com/actions/${id}/like`, {
        method: 'POST'
      });
      if (!response.ok) {
        throw new Error('Failed to like data');
      }
      alert('Liked successfully!');
      fetchData();
    } catch (error) {
      console.error('Error liking data:', error.message);
      alert('Failed to like data. Please try again.');
    }
  };

  return (
    <>
      <div className='actiondiv'>
        <Header />
        <h1 className='title'>Action Games List</h1>

        <div className="action-list">
          {actions.map(action => (
            <div key={action._id} className="card">
              <div className="card-body">
                <h3><a href={`/Action/${action._id}`}>{action.name}</a></h3>
                {action.image && <img src={action.image} alt={action.name} className='card-image' />}
                <div className="action-buttons">
                  <button onClick={() => handleDelete(action._id)}>Delete</button>
                  <button onClick={() => handleLike(action._id)}>Like</button>
                  <span>Likes: {action.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default ActionCreate;