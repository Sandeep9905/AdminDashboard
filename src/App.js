import React from 'react';
import Navbar from './Components/TopBar/NavBar';
import SideBar from './Components/SideBar/SideBar';
import HomePage from './Components/Pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <SideBar />
        <HomePage />
      </div>
    </Router>
  );
}

export default App;
