import { Link } from 'react-router-dom'

import "./styling/HamburgerMenu.css"

const HamburgerMenu = () => {
  return (
    // <nav className="navbar">
    <div className="NavContainer">
        <input 
          className="Checkbox" 
          type="checkbox" 
          name="" 
          id="" 
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
        >
          Shop
        </Link>
        </li>
        <li>
        <Link 
          to="/About" 
          className="NavLink"
        >
          About
        </Link>
        </li>
        <li>
        <Link 
          to="/Blog" 
          className="NavLink"
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