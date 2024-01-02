import { Link } from 'react-router-dom';

import "./styling/NavBar.css";

import ScrollToTop from './ScrollToTop';

const NavBar = () => {
  return (
    <nav className="LinkContainer">
      <Link
        to="/Shop"
        className="NavLinkHorizontal"
        onClick={ScrollToTop}
      >
        <h2>
          Shop
        </h2>
      </Link>
      <Link
        to="/About"
        className="NavLinkHorizontal"
        onClick={ScrollToTop}
      >
        <h2>
          About
        </h2>
      </Link>
      <Link
        to="/Blog"
        className="NavLinkHorizontal"
        onClick={ScrollToTop}
      >
        <h2>
          Blog
        </h2>
      </Link>
    </nav>
  )
}

export default NavBar;