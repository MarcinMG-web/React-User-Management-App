import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
    
    <nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className = "container">
                <NavLink className="navbar-brand" to="#">Single Page Aplication</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className = "collapse navbar-collapse" >
                        <ul className = "navbar-nav mr-auto" >
                            <li className = "nav-item" >
                                <NavLink className = "nav-link " exact to = "/">
                                    Home 
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink NavLink className = "nav-link" exact to = "/about" >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className = "nav-link" exact to = "/aplication" >
                                    Aplication
                                </NavLink>
                            </li>
                        </ul>
                        {/* <button className='btn btn-group-toggle btn-info'>Add user</button> */}
                    </div>
            </div>
    </nav>
)}

export default Navbar
