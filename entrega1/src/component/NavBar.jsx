import React from 'react'
import './NavBar.css'
import CardWidget from './CardWidget'



const NavBar = () => {
  return (
    
      <nav>
        <span>logo</span>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <span> <CardWidget/></span>
      </nav>
  
  )
}

export default NavBar