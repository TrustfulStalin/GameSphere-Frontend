import React, { useState, useEffect } from 'react';
import './cards.css';
import Header from '../Components/Header';

const ActionCreate = () => {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:8081/actions');
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
      const response = await fetch(`http://localhost:8081/actions/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to delete data');
      }
      alert('Data deleted successfully!');
      fetchData(); // Refresh the action list after deletion
    } catch (error) {
      console.error('Error deleting data:', error.message);
      alert('Failed to delete data. Please try again.');
    }
  };

  return (
    <>
    <Header/>
      <h1 className='title'>Action Games List</h1>

      <div className="action-list">
        {actions.map(action => (
          <div key={action._id} className="card">
            <div className="card-body">
              <h3><a href={`/Action/${action._id}`}>{action.name}</a></h3>
              {action.image && <img src={action.image} alt={action.name} className='card-image' />}
              <button onClick={() => handleDelete(action._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActionCreate;