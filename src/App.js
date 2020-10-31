import React from 'react';
// import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/loyout/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    // className = "bg-dark text-white"
    <Router>
      <div className = 'App' >
        <Navbar />

        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/about' component={About} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
