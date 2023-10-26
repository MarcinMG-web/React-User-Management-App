import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <NavLink className='navbar-brand' to='#'>
          Single Page Aplication
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarToggleExternalContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item activ'>
              <NavLink className='nav-link ' exact to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to='/about'>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
