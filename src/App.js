import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Aplication from './components/pages/Aplication';
import NotFound from './components/pages/NotFound';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AddNewUser from './components/users/AddNewUser';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';


function App() {
  return (

    <Router>
      <div className = 'App' >
        <Navbar />

        <Switch>
          <Route exact path = '/' component={Home}/>
          <Route exact path = '/about' component={About}/>
          <Route exact path = '/aplication' component={Aplication} />
          <Route exact path = '/users/addNewUser' component={AddNewUser} />
          <Route exact path = '/users/viewUser/:userId' component={ViewUser} />
          <Route exact path = '/users/editUser/:userId' component={EditUser} />
          <Route component={NotFound}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
