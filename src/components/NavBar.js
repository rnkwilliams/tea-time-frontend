import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <NavLink className="navbar-brand js-scroll-trigger" href="#page-top" to="/">TeaTime</NavLink>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu <i className="fa fa-bars ml-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item"><NavLink to="/categories">Tea Library</NavLink></li>
              <li className="nav-item"><NavLink to="/teas/new">Add New Tea</NavLink></li>
              <li className="nav-item"><NavLink to="/teas">My Teas</NavLink></li>
              <li className="nav-item"><NavLink to="/timer">Timer</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
