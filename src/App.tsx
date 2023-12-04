import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/layout/Navbar';

import Login from './components/pages/authentication/Login';
import Registration from './components/pages/authentication/Registration';
import Home from './components/pages/Home';

import About from './components/pages/About';
import Application from './components/pages/Application';
import NotFound from './components/pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AddNewUser from './components/users/AddNewUser';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';

import ProtectedRoute from './components/pages/ProtectedRoute';
import Calendar from './components/pages/calander/Calendar';

export default function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Registration} />
          <Route exact path='/about' component={About} />

          <ProtectedRoute path='/application'>
            <Route exact path='/application' component={Application} />
          </ProtectedRoute>

          <Route exact path='/users/addNewUser' component={AddNewUser} />
          <Route exact path='/users/viewUser/:userId' component={ViewUser} />
          <Route exact path='/users/editUser/:userId' component={EditUser} />
          <Route exact path='/calendar' component={Calendar} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}
