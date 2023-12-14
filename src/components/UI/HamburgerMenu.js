import { Link } from 'react-router-dom'
import { useState } from 'react'

import "./styling/HamburgerMenu.css"

const HamburgerMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo(0,0);
  };
  
  return (
    // <nav className="navbar">
    <div className="NavContainer">
        <input 
          className="Checkbox" 
          type="checkbox" 
          name="" 
          id="" 
          checked={menuOpen}
          onChange={handleToggleMenu}
        />
        <div className="HamburgerLines">
          <span className="Line Line1"></span>
          <span className="Line Line2"></span>
          <span className="Line Line3"></span>
        </div>  
      <div className="MenuItems">
        <li>
        <Link 
          to="/Shop" 
          className="NavLink"
          onClick={handleLinkClick}
        >
          Shop
        </Link>
        </li>
        <li>
        <Link 
          to="/About" 
          className="NavLink"
          onClick={handleLinkClick}
        >
          About
        </Link>
        </li>
        <li>
        <Link 
          to="/Blog" 
          className="NavLink"
          onClick={handleLinkClick}
        >
          Blog
        </Link>
        </li>
      </div>
    </div>
  // </nav>
  )
}

export default HamburgerMenu;