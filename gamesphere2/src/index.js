import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
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
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />}> </Route>
        <Route path="/Action" element={<Action />}></Route>
        <Route path="/Fighting" element={<FightingGames />}></Route>
        <Route path="/Sport" element={<SportsGames />}></Route>
        <Route path="/Shooting" element={<ShootingGames />}></Route>
        <Route path="/Action/Create" element={<ActCreate />}></Route>
        <Route path="/Fighting/Create" element={<FightGameCreateForm />}></Route>
        <Route path="/Shooting/Create" element={<ShootingCreate />}></Route>
        <Route path="/Sport/Create" element={<SportsCreate />}></Route>
        <Route path="/Action/:_id" element={<ActionUp />} />
        <Route path="/Fighters/:_id" element={<FightingUpandData />} />
        <Route path="/Shooting/:_id" element={<ShootingUpandData />} />
        <Route path="/Sport/:_id" element={<SportsUpandData />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
