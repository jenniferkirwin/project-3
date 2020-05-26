import React from 'react';
import './App.css';
import SearchAppBar from './components/Nav/AppBar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import LandingGrid from './components/LandingGrid/LandingGrid';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <LandingGrid />
    </div>
  );
}

export default App;
