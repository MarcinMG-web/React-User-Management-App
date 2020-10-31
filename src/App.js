import React from 'react';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/loyout/Navbar'

function App() {
  return (
    // className = "bg-dark text-white"
    <div className = 'App' >
      <Navbar />
        <Home />
        <About />

    </div>
    
  );
}

export default App;
