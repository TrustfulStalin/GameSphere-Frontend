import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Router,Routes } from 'react-router-dom';
import Action from './Pages/Action'
import ActCreate from './Pages/ActioncreateForm'
import ActionUp from './Pages/ActionUpandData';
import FightingGames from './Pages/FightingGames';
import FightGameCreateForm from './Pages/FightGameCreateForm';
import FightingUpandData from './Pages/FightingUpandData';
import ShootingGames from './Pages/ShootingGames';
import ShootingCreate from './Pages/ShootingCreateForm';
import ShootingUpandData from './Pages/ShootingUpandData';
import SportsGames from './Pages/SportsGames';
import SportsCreate from './Pages/SportsCreateForm';
import SportsUpandData from './Pages/SportsUpandData';
import HomePage from './Pages/Homepage'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
         
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/Action" element={<Action />} />
          <Route path="/Fighting" element={<FightingGames />} />
          <Route path="/Sport" element={<SportsGames />} />
          <Route path="/Shooting" element={<ShootingGames />} />
          <Route path="/Action/Create" element={<ActCreate />} />
          <Route path="/Fighting/Create" element={<FightGameCreateForm />} />
          <Route path="/Shooting/Create" element={<ShootingCreate />} />
          <Route path="/Sport/Create" element={<SportsCreate />} />
          <Route path="/Action/:_id" element={<ActionUp />} />
          <Route path="/Fighters/:_id" element={<FightingUpandData />} />
          <Route path="/Shooting/:_id" element={<ShootingUpandData />} />
          <Route path="/Sport/:_id" element={<SportsUpandData />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;