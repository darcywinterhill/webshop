import { Link } from 'react-router-dom';

import "./styling/NavBar.css";

const NavBar = () => {
  return (
    <nav className="LinkContainer">
      <Link
        to="/Shop"
        className="NavLinkHorizontal">
          <h2>Shop</h2>
      </Link>
      <Link
        to="/About"
        className="NavLinkHorizontal">
          <h2>About</h2>
      </Link>
      <Link
        to="/Press"
        className="NavLinkHorizontal">
          <h2>Press</h2>
      </Link>
      <Link
        to="/Blog"
        className="NavLinkHorizontal">
          <h2>Blog</h2>
      </Link>
    </nav>
  )
}

export default NavBar;