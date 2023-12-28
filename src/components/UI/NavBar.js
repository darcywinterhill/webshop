import { Link } from 'react-router-dom';

import "./styling/NavBar.css";

const NavBar = () => {

  const scrollToTop =() => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <nav className="LinkContainer">
      <Link
        to="/Shop"
        className="NavLinkHorizontal"
        onClick={scrollToTop}
      >
        <h2>
          Shop
        </h2>
      </Link>
      <Link
        to="/About"
        className="NavLinkHorizontal"
        onClick={scrollToTop}
      >
        <h2>
          About
        </h2>
      </Link>
      <Link
        to="/Blog"
        className="NavLinkHorizontal"
        onClick={scrollToTop}
      >
        <h2>
          Blog
        </h2>
      </Link>
    </nav>
  )
}

export default NavBar;