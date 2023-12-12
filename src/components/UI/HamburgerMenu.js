import { Link } from 'react-router-dom'

import "./styling/HamburgerMenu.css"

const HamburgerMenu = () => {
  return (
    // <nav className="navbar">
    <div className="container nav-container">
        <input className="checkbox" type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>  
      <div className="menu-items">
        <li><Link to="/Shop" className="NavLink">Shop</Link></li>
        <li><Link to="/About" className="NavLink">About</Link></li>
        <li><Link to="/Press" className="NavLink">Press</Link></li>
        <li><Link to="/Blog" className="NavLink">Blog</Link></li>
      </div>
    </div>
  // </nav>
  )
}

export default HamburgerMenu;