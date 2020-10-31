import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Navbar from './components/loyout/Navbar'

import Home from './components/Home'
import About from './components/About'
import Aplication from './components/Aplication';
import NotFound from './components/NotFound'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (

    <Router>
      <div className = 'App' >
        <Navbar />

        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/about' component={About}/>
          <Route exact path = '/aplication' component={Aplication} />
          <Route component={NotFound}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
