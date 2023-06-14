import React from 'react'
import './NavBar.css'
import CardWidget from './CardWidget'
import { Link} from "react-router-dom";



const NavBar = () => {
  return (
    <div className='nav_container'>     
      <nav>
        <span>logo</span>
          <ul>
             
            <Link className="li" to="/">Home</Link>
            <Link className="li" to="/about">About</Link>
            <Link className="li" to="/contact">Contact</Link>

          </ul>
        <span> <CardWidget/></span>
      </nav>
  
      </div>

  )
}

export default NavBar