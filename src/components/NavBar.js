import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='NavBar'>
      <NavLink to="/">TeaTime</NavLink>
      <NavLink to="/categories">Tea Library</NavLink>
      <NavLink to="/teas/new">New Tea</NavLink>
      <NavLink to="/teas">My Teas</NavLink>
      <NavLink to="/timer">Timer</NavLink>
    </div>
  )
}

export default NavBar;
